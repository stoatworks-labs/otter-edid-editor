# Notes

Working notes for this repo: status, decisions, and the traps that have actually bitten.
Migrated out of Claude Code's memory on 2026-08-24, so they are written in the first
person and dated by when each thing was learned — that date is usually the useful part.

Cross-cutting notes that are not specific to this repo live in
[fleet-notes](https://github.com/stoatworks-labs/fleet-notes).

*Otter EDID Editor — browser EDID builder/editor with a cited per-model hardware support matrix; PUBLIC + LIVE as a beta, but no hardware has ever been fed one of its EDIDs*

**Otter EDID Editor** — `~/projects/video/otter-edid-editor`, React/TS/Vite static
SPA, MIT, v0.1.0, created 2026-08-20. Same shape as the browser-tool family
([blend calc](https://github.com/stoatworks-labs/blend-calc/blob/main/docs/NOTES.md) (`blend-calc`), [aspect calc](https://github.com/stoatworks-labs/aspect-calc/blob/main/docs/NOTES.md) (`aspect-calc`), [test card](https://github.com/stoatworks-labs/test-card/blob/main/docs/NOTES.md) (`test-card`)):
no backend, Cloudflare static-assets Worker, `otter.stoatworks-labs.com` in
`wrangler.toml`. **PUBLIC and LIVE since 2026-08-20**: `github.com/stoatworks-labs/otter-edid-editor`
(MIT, branch `main`) and **https://otter-edid.stoatworks-labs.com** — a
static-assets Worker with the custom domain declared in `wrangler.toml`, so a
fresh deploy cannot come up without the hostname. Listed on the website as a
**beta** on `/software/otter-edid-editor` and `/web-tools` (position 08, Video
group).

Named by Allan mid-build (was `edid-forge` for about an hour — any pre-rename
path is dead).

**Two modes + two answers.** Simple mode: resolution + rate + name → a whole
EDID 1.4. Advanced mode: every field, incl. CTA-861 and DisplayID 2.0. Right
column always shows (a) the minimum HDMI/DP/DVI version the mode needs and
(b) a per-model support matrix, 21 devices, Analog Way / Barco / PixelHue /
Brompton / NovaStar / disguise / Green Hippo.

**Containerised 2026-08-20**: `fleet.json` `static-build` + `unraid.json`
`hostPort` **8529**, public, in [stoatworks unraid](https://github.com/stoatworks-labs/stoatworks-unraid/blob/main/docs/NOTES.md) (`stoatworks-unraid`). Image
`ghcr.io/stoatworks-labs/otter-edid-editor` built green and verified
**anonymously pullable** (token + manifest GET — a green Actions run does not
prove it). linux/amd64, matching the rest of the fleet. CA template live at
`templates/otter-edid-editor.xml`. The generated Dockerfile runs `nginx -t`
during the build, which is the only syntax check these configs get
([no container runtime](https://github.com/stoatworks-labs/fleet-notes/blob/main/notes/reference_no_container_runtime.md)).

**Carries the shared support footer** ([support footer](https://github.com/stoatworks-labs/fleet-notes/blob/main/notes/reference_support_footer.md)) with
`data-repo` set, so it links its own GitHub source — which the five sibling
browser tools still do not.

**`scripts/serve-dist.py` was missing for the repo's first day.** package.json
referenced `npm run serve:dist` from the first commit because the script block
was copied from blend-calc, but the file was never brought across — so the one
way to check the CSP locally could not run. Copied in 2026-08-20. Worth checking
in any repo scaffolded the same way.

**Dependabot: all three toggles ON since 2026-08-20** — `vulnerability-alerts`,
`automated-security-fixes`, and `.github/dependabot.yml` copied verbatim from
blend-calc rather than reinvented. See [dependabot fleet config](https://github.com/stoatworks-labs/fleet-notes/blob/main/notes/reference_dependabot_fleet_config.md).

**"Beta" on this site is carried in the tool's NAME, not its status.**
`projects.json.statuses` has no `beta` tier, and an undeclared id falls through
to the raw lowercase string with no `.status-*` colour. So: `status: "building"`
plus `"name": "Otter EDID Editor (beta)"` / `"navLabel": "Otter EDID (beta)"` in
`webtools.json`, which is how the PLAY Flasher does it. ⚠️ **`burin` really does
carry `status: "beta"` and therefore renders unstyled** — a latent bug, not a
precedent to copy.

**The features Allan added mid-build, in order:** required HDMI/DP version
readout; DSC and VRR as toggles that feed BOTH the bandwidth maths and the
emitted EDID; the Aquilon DP 1.4 port-preemption warning
([aquilon dp14 port preemption](https://github.com/stoatworks-labs/fleet-notes/blob/main/notes/reference_aquilon_dp14_port_preemption.md)).

**Three things that cost real time and are pinned by tests:**

- **CVT standard blanking must use the ESTIMATED line period throughout.**
  Recomputing it against the settled vertical total is the obvious-looking
  improvement and moves the clock off every published DMT value (1680x1050@60
  came out 146.75 instead of 146.25). The estimate IS the definition.
- **A DTD's limits are NOT just the 655.35 MHz clock.** Active and blanking are
  12-bit fields, porches 10- and 6-bit. `8192x1080@60` has an unremarkable
  551 MHz clock and still cannot be a DTD — and Analog Way advertise exactly
  that format on the Aquilon input cards. `dtdLimit()` checks every field and
  routes such modes to DisplayID Type VII. Found by a test, not by inspection.
- **Device capacity-mode inheritance must be an explicit `inheritsFrom` id.**
  Matching on `family` handed the Barco EX chassis the E2 *Gen 1* dual-cable
  answer and stated it as fact; EX takes either generation. No modes + no
  pointer now reports `unknown`.

**DisplayID 2.0 Type VII layout was verified byte-for-byte against the Linux
kernel**, not written from spec prose: `drm_displayid_internal.h` (structs +
`DATA_BLOCK_2_*` tags; Type VII = 0x22, Interface Features = 0x26) and
`drm_mode_displayid_detailed()` in `drm_edid.c`. **Every count is stored
minus one** — an off-by-one there looks like a bad cable, not a bad EDID.
git.linuxtv.org and gitlab.freedesktop.org are both behind Anubis and refuse
WebFetch; raw.githubusercontent.com + `gh api` worked.

**The honest gap: no EDID this tool produces has ever been fed to hardware,**
and the whole capability table is vendor paperwork. `devices.ts` carries a
`Confidence` of documented / inferred / unverified plus mandatory citations
(a test fails the build if a `documented` row has none). PDS-902 is a deliberate
`unverified` placeholder with no citation. README and AGENTS.md say all of this
plainly; don't let a later pass quietly upgrade it.

Primary local sources: `~/Downloads/livecore-unit-user-manual-uk.pdf` and
`~/Downloads/user-manual-pulse2.pdf` (`pdftotext -layout`). LiveCore = 165 MHz
single-link / 330 MHz dual; **that cap applies to its HDMI plug too**, not the
340 MHz HDMI 1.4 allows — using the spec limit made the tool claim a NeXtage
takes 2560x1600.

**Two JSON files next door use OPPOSITE escaping conventions**, and a
`json.dumps` with the wrong one rewrites untouched lines: `scripts/shots.json`
stores `\u2014` escapes (`ensure_ascii=True`), `src/data/webtools.json` and
`src/data/projects.json` store literal UTF-8 (`ensure_ascii=False`). Check
before rewriting either, and confirm with `git diff --numstat` that the change
is insertions-only.

**`make_screens.py` also produced four heroes nobody had ever committed** —
abomerration, burin, tilter, vectrix each had a `shots.json` entry and no image,
so their pages had been falling back to the branded thumbnail. Committed
separately. Expect more of these; the run is the only thing that surfaces them.

**A brand-new asset 404s at the Worker origin for ~30 seconds after deploy.**
Both the new thumbnail and hero returned the 404 page immediately after
`wrangler deploy` and were 200 on a retry twenty seconds later. Do not go
hunting for a missing-file bug — retry first. (This is *not* the zone-cache
trap from [stoatworks website](https://github.com/stoatworks-labs/stoatworks-website/blob/main/docs/NOTES.md) (`stoatworks-website`); it happens on the workers.dev origin.)

Sibling: [openrcs](https://github.com/stoatworks-labs/openrcs/blob/main/docs/NOTES.md) (`openrcs`) has a device-side EDID *writer* (pushes EDID to AW
input plugs). Different thing; this is a standalone editor.
