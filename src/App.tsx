import { useMemo, useState } from 'react'
import type { Edid } from './lib/edid/types.ts'
import type { DecodeIssue } from './lib/edid/decode.ts'
import { parseEdidFile } from './lib/edid/decode.ts'
import { blankEdid } from './lib/edid/defaults.ts'
import type { SimpleRequest } from './lib/build.ts'
import { buildEdid } from './lib/build.ts'
import { DEFAULT_SIGNAL } from './lib/link.ts'
import type { ColorFormat, SignalOptions } from './lib/link.ts'
import { displayName, primaryTiming, setDisplayName } from './lib/primary.ts'
import { timingLabel } from './lib/timing/types.ts'
import { SimpleMode } from './components/SimpleMode.tsx'
import { AdvancedMode } from './components/AdvancedMode.tsx'
import { LinkSummary } from './components/LinkSummary.tsx'
import { SupportMatrix } from './components/SupportMatrix.tsx'
import { HexView } from './components/HexView.tsx'
import { Check, Panel, Pick } from './components/ui.tsx'

const INITIAL: SimpleRequest = {
  name: 'UHD-2160p60',
  hActive: 3840,
  vActive: 2160,
  refreshHz: 60,
  standard: 'manual',
  interlaced: false,
  fractional: false,
  signal: { ...DEFAULT_SIGNAL },
}

/**
 * The signal controls are duplicated into advanced mode deliberately.
 *
 * In simple mode they are an INPUT — they change the EDID that gets built. In
 * advanced mode the EDID is already whatever you made it, and these describe
 * the signal you intend to push through it, which is what the support table
 * needs to answer the question. Same controls, two different jobs, so they are
 * labelled differently rather than shared silently.
 */
function SignalStrip({ signal, onChange }: { signal: SignalOptions; onChange: (s: SignalOptions) => void }) {
  const set = (p: Partial<SignalOptions>) => onChange({ ...signal, ...p })
  return (
    <Panel title="Signal you intend to send">
      <div className="grid c4">
        <Pick
          label="Colour format"
          value={signal.format}
          options={[
            { value: 'rgb444', label: 'RGB 4:4:4' },
            { value: 'ycbcr444', label: 'YCbCr 4:4:4' },
            { value: 'ycbcr422', label: 'YCbCr 4:2:2' },
            { value: 'ycbcr420', label: 'YCbCr 4:2:0' },
          ]}
          onChange={(format) => set({ format: format as ColorFormat })}
        />
        <Pick
          label="Bit depth"
          value={signal.bpc}
          options={[8, 10, 12, 16].map((b) => ({ value: b, label: `${b}-bit` }))}
          onChange={(bpc) => set({ bpc: bpc as 8 | 10 | 12 | 16 })}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'flex-end', paddingBottom: 4 }}>
          <Check label="DSC" checked={signal.dsc} onChange={(dsc) => set({ dsc })} />
          <Check label="Variable refresh" checked={signal.vrr} onChange={(vrr) => set({ vrr })} />
        </div>
        <div className="note" style={{ alignSelf: 'flex-end', paddingBottom: 6 }}>
          These do not change the EDID here — they describe what you will feed through it, which is what the support
          table is answering.
        </div>
      </div>
    </Panel>
  )
}

export default function App() {
  const [mode, setMode] = useState<'simple' | 'advanced'>('simple')
  const [req, setReq] = useState<SimpleRequest>(INITIAL)
  const [edid, setEdid] = useState<Edid>(() => buildEdid(INITIAL).edid)
  const [notes, setNotes] = useState<string[]>(() => buildEdid(INITIAL).notes)
  const [issues, setIssues] = useState<DecodeIssue[]>([])

  const primary = useMemo(() => primaryTiming(edid), [edid])
  const name = displayName(edid)

  const build = () => {
    const r = buildEdid(req)
    setEdid(r.edid)
    setNotes(r.notes)
    setIssues([])
  }

  const load = (data: Uint8Array | string) => {
    const r = parseEdidFile(data)
    setEdid(r.edid)
    setIssues(r.issues)
    setNotes([])
    setMode('advanced')
  }

  return (
    <div className="app">
      <header className="top">
        <h1>Otter EDID Editor</h1>
        <span className="tag">
          Build an EDID from a resolution, or edit every field — then see which processors will take it.
        </span>
        <span className="ver">{__APP_VERSION__}</span>
      </header>

      <div className="tabs">
        <button aria-selected={mode === 'simple'} onClick={() => setMode('simple')}>
          Simple
        </button>
        <button aria-selected={mode === 'advanced'} onClick={() => setMode('advanced')}>
          Advanced
        </button>
      </div>

      {issues.length ? (
        <div style={{ marginBottom: 14 }}>
          {issues.map((i, k) => (
            <div key={k} className={i.severity === 'error' ? 'banner bad' : 'banner'}>
              <strong>{i.where}:</strong> {i.message}
            </div>
          ))}
        </div>
      ) : null}

      <div className="cols">
        <div>
          {mode === 'simple' ? (
            <SimpleMode req={req} onChange={setReq} onBuild={build} notes={notes} />
          ) : (
            <>
              <Panel title="Name">
                <div className="grid c2">
                  <label className="field">
                    <span>
                      EDID name<span className="hint"> · descriptor text, 13 characters</span>
                    </span>
                    <input
                      type="text"
                      maxLength={13}
                      value={name}
                      placeholder={primary ? timingLabel(primary) : 'Display'}
                      onChange={(e) => setEdid(setDisplayName(edid, e.target.value))}
                    />
                  </label>
                </div>
              </Panel>
              <AdvancedMode edid={edid} onChange={setEdid} primary={primary} />
            </>
          )}
        </div>

        <div>
          {mode === 'advanced' ? (
            <SignalStrip signal={req.signal} onChange={(signal) => setReq({ ...req, signal })} />
          ) : null}

          {primary ? (
            <>
              <LinkSummary timing={primary} signal={req.signal} />
              <SupportMatrix timing={primary} signal={req.signal} />
            </>
          ) : (
            <Panel title="Signal cost and required interface">
              <div className="banner">
                This EDID carries no timing — no detailed timing descriptor, no CTA timing and no DisplayID timing —
                so there is nothing to cost or to check against hardware.
              </div>
            </Panel>
          )}

          <HexView edid={edid} name={name || 'edid'} onLoad={load} />

          <Panel title="About">
            <div className="note">
              Everything happens in this browser. No EDID is uploaded anywhere, and there is no backend to upload it
              to.
            </div>
            <div className="note" style={{ marginTop: 6 }}>
              The hardware table is built from vendor manuals and spec sheets, cited per claim. None of it has been
              tried against real hardware — treat it as a well-sourced starting point, not a guarantee.
            </div>
            <div className="row" style={{ marginTop: 10 }}>
              <button className="minor" onClick={() => { setEdid(blankEdid()); setNotes([]); setIssues([]) }}>
                Start from a blank EDID
              </button>
              <button className="minor" onClick={() => { setReq(INITIAL); const r = buildEdid(INITIAL); setEdid(r.edid); setNotes(r.notes); setIssues([]) }}>
                Reset
              </button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  )
}
