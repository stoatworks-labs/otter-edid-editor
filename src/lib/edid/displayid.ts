import type { DisplayIdExtension, DisplayIdTiming } from './types.ts'
import { checksum } from './encode.ts'

/**
 * DisplayID 2.0 carried as an EDID extension block (tag 0x70).
 *
 * The reason it exists here: a DTD's pixel clock field tops out at 655.35 MHz,
 * so 3840x2160p120 (1188 MHz) and anything above simply CANNOT be stated in a
 * base block or a CTA extension. A DisplayID Type VII descriptor states the
 * clock in kHz across 24 bits, which reaches 16.7 GHz.
 *
 * Layout, verified byte-for-byte against the Linux kernel's parser
 * (drivers/gpu/drm/drm_edid.c drm_mode_displayid_detailed and
 * drm_displayid_internal.h) rather than written from the spec text:
 *
 *   ext[0]    0x70
 *   ext[1]    version/revision — 0x20 for DisplayID 2.0
 *   ext[2]    number of payload bytes (data blocks only; header and checksum excluded)
 *   ext[3]    primary use case
 *   ext[4]    extension count
 *   ext[5..]  data blocks, each: tag, revision, payload length, payload
 *   then      DisplayID checksum — bytes [1 .. n] sum to 0 mod 256
 *   then      pad to 126, EDID checksum at 127
 *
 * Type VII descriptor, 20 bytes, EVERY count stored as value-minus-one:
 *   0-2   pixel clock in kHz, minus 1, little-endian 24-bit
 *   3     bit 7 preferred, bits 6-4 aspect ratio, rest kept verbatim
 *   4-5   hActive-1        6-7   hBlank-1
 *   8-9   hFront-1, bit 15 = hsync positive
 *   10-11 hSyncWidth-1
 *   12-13 vActive-1       14-15  vBlank-1
 *   16-17 vFront-1, bit 15 = vsync positive
 *   18-19 vSyncWidth-1
 *
 * The minus-one is the trap: a naive encoder is off by one pixel on every
 * field, which shifts the image and changes the clock by a few kHz — enough to
 * look like a bad cable rather than a bad EDID.
 */

export const TAG_TYPE_7_TIMING = 0x22
export const TAG_DISPLAY_INTERFACE_FEATURES = 0x26

/** DisplayID's aspect ratio enum, bits 6-4 of the flags byte. */
export const DISPLAYID_ASPECTS = ['1:1', '5:4', '4:3', '15:9', '16:9', '16:10', '64:27', '256:135'] as const

const le16 = (v: number) => [v & 0xff, (v >> 8) & 0xff]

export function encodeType7Timing(t: DisplayIdTiming): number[] {
  const m = t.timing
  const clockKHz = Math.round(m.pixelClockHz / 1000)
  if (clockKHz < 1 || clockKHz > 0x1000000) {
    throw new Error(`DisplayID pixel clock ${clockKHz} kHz is out of range`)
  }
  const c = clockKHz - 1

  const hBlank = m.hFront + m.hSync + m.hBack
  const vBlank = m.vFront + m.vSync + m.vBack
  const aspectIdx = Math.max(0, (DISPLAYID_ASPECTS as readonly string[]).indexOf(t.aspect))

  return [
    c & 0xff,
    (c >> 8) & 0xff,
    (c >> 16) & 0xff,
    (t.preferred ? 0x80 : 0) | (aspectIdx << 4),
    ...le16(m.hActive - 1),
    ...le16(hBlank - 1),
    ...le16((m.hFront - 1) | (m.hSyncPositive ? 0x8000 : 0)),
    ...le16(m.hSync - 1),
    ...le16(m.vActive - 1),
    ...le16(vBlank - 1),
    ...le16((m.vFront - 1) | (m.vSyncPositive ? 0x8000 : 0)),
    ...le16(m.vSync - 1),
  ]
}

export function decodeType7Timing(b: number[]): DisplayIdTiming {
  const clockKHz = (b[0] | (b[1] << 8) | (b[2] << 16)) + 1
  const rd = (i: number) => b[i] | (b[i + 1] << 8)

  const hActive = rd(4) + 1
  const hBlank = rd(6) + 1
  const hFront = (rd(8) & 0x7fff) + 1
  const hSync = rd(10) + 1
  const vActive = rd(12) + 1
  const vBlank = rd(14) + 1
  const vFront = (rd(16) & 0x7fff) + 1
  const vSync = rd(18) + 1

  return {
    preferred: !!(b[3] & 0x80),
    aspect: DISPLAYID_ASPECTS[(b[3] >> 4) & 0x07],
    fractional: false,
    timing: {
      hActive,
      hFront,
      hSync,
      hBack: hBlank - hFront - hSync,
      vActive,
      vFront,
      vSync,
      vBack: vBlank - vFront - vSync,
      pixelClockHz: clockKHz * 1000,
      interlaced: false,
      hSyncPositive: !!(rd(8) & 0x8000),
      vSyncPositive: !!(rd(16) & 0x8000),
    },
  }
}

export function encodeDisplayId(ext: DisplayIdExtension): number[] {
  const blocks: number[] = []

  if (ext.type7Timings.length) {
    const payload = ext.type7Timings.flatMap(encodeType7Timing)
    if (payload.length > 255) {
      throw new Error(`${ext.type7Timings.length} DisplayID timings exceed one data block; split them across extensions`)
    }
    // Revision 1 with the payload-descriptor-size field left at zero (20 bytes).
    blocks.push(TAG_TYPE_7_TIMING, 0x01, payload.length, ...payload)
  }

  if (ext.interfaceFeatures) {
    const f = ext.interfaceFeatures
    const bpcMask = (set: number[]) =>
      (set.includes(6) ? 0x01 : 0) |
      (set.includes(8) ? 0x02 : 0) |
      (set.includes(10) ? 0x04 : 0) |
      (set.includes(12) ? 0x08 : 0) |
      (set.includes(14) ? 0x10 : 0) |
      (set.includes(16) ? 0x20 : 0)
    const payload = [
      Math.round(f.minPixelRateAudioMHz),
      bpcMask(f.bpc), // RGB
      bpcMask(f.bpc), // YCbCr 4:4:4
      bpcMask(f.bpc), // YCbCr 4:2:2
      bpcMask(f.bpc), // YCbCr 4:2:0
      0,
      0,
      f.dscPassthrough ? 0x01 : 0,
    ]
    blocks.push(TAG_DISPLAY_INTERFACE_FEATURES, 0x00, payload.length, ...payload)
  }

  for (const u of ext.unknownBlocks) blocks.push(...u)

  if (blocks.length > 251 - 4) {
    throw new Error(`DisplayID section is ${blocks.length} bytes; one extension block holds at most 247`)
  }

  // The section: header, blocks, then a checksum over exactly those bytes.
  const section = [ext.version, blocks.length, ext.primaryUseCase, ext.extensionCount ?? 0, ...blocks]
  const sum = section.reduce((a, b) => a + b, 0)
  section.push((256 - (sum % 256)) % 256)

  const out = [0x70, ...section]
  while (out.length < 127) out.push(0)
  out.push(checksum(out))
  return out
}

export function decodeDisplayId(bytes: number[]): DisplayIdExtension {
  const ext: DisplayIdExtension = {
    kind: 'displayid',
    version: bytes[1],
    primaryUseCase: bytes[3],
    extensionCount: bytes[4],
    type7Timings: [],
    unknownBlocks: [],
  }

  const payloadBytes = bytes[2]
  let i = 5
  const end = Math.min(5 + payloadBytes, 127)

  while (i + 3 <= end) {
    const tag = bytes[i]
    const len = bytes[i + 2]
    if (tag === 0 && len === 0) break
    const payload = bytes.slice(i + 3, i + 3 + len)

    if (tag === TAG_TYPE_7_TIMING) {
      for (let k = 0; k + 20 <= payload.length; k += 20) {
        ext.type7Timings.push(decodeType7Timing(payload.slice(k, k + 20)))
      }
    } else if (tag === TAG_DISPLAY_INTERFACE_FEATURES) {
      const bpc: number[] = []
      const m = payload[1] ?? 0
      ;[6, 8, 10, 12, 14, 16].forEach((d, bit) => {
        if (m & (1 << bit)) bpc.push(d)
      })
      ext.interfaceFeatures = {
        bpc,
        dscPassthrough: !!(payload[7] & 0x01),
        minPixelRateAudioMHz: payload[0] ?? 0,
      }
    } else {
      ext.unknownBlocks.push(bytes.slice(i, i + 3 + len))
    }
    i += 3 + len
  }

  return ext
}
