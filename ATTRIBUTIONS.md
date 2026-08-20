# Attributions

## Standards

Implements VESA E-EDID, VESA DisplayID 2.0, VESA CVT, VESA GTF, VESA DMT and
CTA-861. This project is not affiliated with or endorsed by VESA or CTA, and
does not redistribute any part of those specifications.

## Reference implementations consulted

- **Linux kernel DRM** (GPL-2.0) — `drivers/gpu/drm/drm_displayid_internal.h`
  and `drm_mode_displayid_detailed()` in `drivers/gpu/drm/drm_edid.c` were read
  to confirm the DisplayID 2.0 section, block and Type VII descriptor layouts.
  No kernel code is copied or derived; only the byte layout of a published
  standard was confirmed against it.
- **edid-decode** — its published reading of the HDMI Forum vendor-specific
  data block informed the bit assignments in `src/lib/edid/cta861.ts`.

## Vendor documentation

Device capability data is quoted, with attribution and a read date, in
`src/lib/capability/devices.ts` and shown in the app. Sources include Analog
Way, Barco, PixelHue, Brompton Technology, NovaStar, disguise and Green Hippo
product documentation.

Product and company names are used nominatively, to state compatibility only.
This project is not affiliated with, authorised by or endorsed by any of them.

## Dependencies

React (MIT), Vite (MIT), TypeScript (Apache-2.0), Vitest (MIT).
