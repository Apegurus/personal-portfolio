# apeguru.dev v2 — content & design spec

One page. No filler. Every line below is either a confirmed fact from Apeguru or
flagged [CONFIRM]. Placeholder text never ships again.

## Audience & job of the page
Partners/BD checking him out before a call, investors doing diligence,
potential collaborators, CT arriving from X/Telegram. The page must say in 10s:
"veteran DeFi operator, still shipping." In 60s: track record + one contact path.
Most traffic is mobile; the og:image unfurl is the real first impression.

## Meta
- title: Apeguru — DeFi operator & builder
- description: Co-founder of ApeSwap and ApeBond, CTO of Lynex, building
  Endure. Turning complex problems into simple, durable businesses.
- og:image: dark card, ape avatar, banana accent, wordmark (generate at build).
- favicon: logo.ico (kept).

## 1. Hero
- Eyebrow (mono): DEFI OPERATOR · BUILDER · SINCE 2021
- H1: Apeguru
- Sub: I turn complex problems into simple, beautiful, intuitive businesses.
  (his real line, kept — it's his voice)
- CTAs: Telegram (https://t.me/apegurus) · Email (hello@apeguru.dev)
- Avatar: assets/images/apeguru.png

## 2. Now strip (mono, dated — the one line he edits forever)
- 2026-09 — Co-founder & CTO, Endure (risk intelligence on Bittensor) · CTO,
  Lynex · advisor & angel across DeFi. [CONFIRM Endure naming is public]

## 3. Track record (vertical timeline, mono dates)
- 2021 — Co-founder, ApeSwap. AMM + DAO on BNB Chain; one of the largest DEX
  ecosystems of the cycle. [CONFIRM descriptor + any number he'll stand behind]
- 2022 — ApeBond (ex-ApeSwap DAO). Protocol-owned liquidity via bonds; led
  administration through the rebrand. [CONFIRM role wording]
- 2023 — Liquid Collectibles. NFT-Fi experiments; the seed of Lynex. [CONFIRM]
- 2024 — CTO, Lynex. ve(3,3) exchange on Linea: concentrated liquidity,
  gauges, routing. [CONFIRM claims]
- 2025 — Defizoo ecosystem. Multi-product DeFi org: DEX family, stability
  infrastructure, agent tooling. [CONFIRM how visible to make this]
- 2026 — Co-founder & CTO, Endure. Risk-intelligence subnet on Bittensor.
  [CONFIRM public status]
Rule: no numbers on the page until Apeguru confirms each one. Qualitative
receipts only in v1.

## 4. Ecosystem grid (logos kept in assets/images/)
ApeSwap (logo-horizontal-margins.webp) · ApeBond (apebond.svg) · Lynex
(lico.png — replace with current Lynex mark if desired) · Liquid Collectibles
(lico.png). Optional row if confirmed: VaultEdge ("stability protocol
infrastructure"), Felines ("DEX deployments across chains").

## 5. How I help (three blocks)
- Build — co-founder / CTO seats. Protocol design, team building, shipping.
- Advise — DEX deployments, incentive design, go-to-market for DeFi teams.
- Angel — early checks in teams building durable infrastructure.
  [CONFIRM: named portfolio or stay generic — default generic]

## 6. Principles (his real values, one-liners)
- Revenue over vanity.
- Durable systems over hype cycles.
- Lean, autonomous teams over headcount.
- Authenticity over image management.
- Own the hard moments.
- Ship, verify, own it.

## 7. Contact (big, terminal-style; no form)
Telegram @apegurus · hello@apeguru.dev · X @apeguru · GitHub Apegurus
[CONFIRM canonical X handle — repo history suggests it moved to "apeguru"]

## 8. Footer
"Technical business monkey." + © 2026. (Keep the monkey — it's authentic.)

## Design direction (A — terminal builder; C-influenced type)
- Near-black base (#0A0A0A), off-white text, ONE accent: banana yellow
  (~#FFD75E). No gradients-as-decoration.
- Type: grotesk headlines (Space Grotesk or Inter Tight), mono accents
  (JetBrains Mono) for eyebrow/dates/labels. Self-hosted woff2.
- Signature touches: blinking cursor after hero sub; timeline scroll-reveal;
  hover lift on ecosystem cards. Respect prefers-reduced-motion.
- Mobile-first; sticky bottom contact bar on small screens.
- Perf: no framework, no build step, single index.html + assets. Inline
  critical CSS if trivial. Target Lighthouse ~100, <150KB total.

## Explicitly out (v1)
Blog · resume/education · skills bars · testimonials · contact form · Twitter
embed · Flowise chatbot (dead in prod: mixed-content http:// IP host; also
leaks an internal IP). Optional v2: an OrangutAI widget, properly hosted over
HTTPS, as an on-brand flex.

## Build notes
- Deliver as PR from `redesign` into `master` (master is the deploy-watched
  branch — verified: live site serves master's old Twitter links, staging's
  2026 fixes never deployed). Delete `staging` after merge.
- This spec lives in-repo during build; fold final truth into the site and a
  short README, then delete the spec file to keep the repo lean.
