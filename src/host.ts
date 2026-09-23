/**
 * What an application embedding the editor offers it.
 *
 * The standalone site has no host: an EDID leaves as a file. Embedded — in
 * LivePremier Plus, beside a switcher's EDID bank — the editor can also put it
 * straight into one of the host's slots, and open one of them to edit. The host
 * owns every question about the device (which slots there are, what is in them,
 * how a write is made); the editor only asks.
 */

export interface HostSlot {
  /** What the host calls the slot, and passes back to `save` / `read`. */
  id: string
  /** How the slot is shown: "ED7". */
  label: string
  /** What is in it now — its product name — or '' when it is empty. */
  name: string
  empty: boolean
  /** A slot the device will not let anybody overwrite. */
  locked: boolean
}

export interface EdidHost {
  /** Who the editor is saving to, for the panel's title: "AQL Cmax". */
  title: string
  /** The slots as they are now. Called on every render, so keep it cheap. */
  slots(): HostSlot[]
  /** Called with a function the host calls whenever `slots()` would answer differently. Returns an unsubscribe. */
  subscribe?(onChange: () => void): () => void
  /** Write these bytes into a slot. Rejects with a sentence the panel shows. */
  save(slotId: string, bytes: Uint8Array): Promise<void>
  /** What to open with — a slot's bytes, when the editor was opened from one. */
  initial?: { bytes: Uint8Array; slotId?: string }
}
