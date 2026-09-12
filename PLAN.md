# RoadShield — Website Product & Design Plan

> **Domain:** road-shield.com · **Parent:** A Division of CVS Motors
> **Tagline:** *Anticipate. Adapt. Arrive.*
> **Purpose:** Marketing + lead-gen site for a road-safety campaign / services company.
> **Status:** Planning (v1). Visual blueprint → `docs/design-blueprint.html` (published as an Artifact).

---

## 1. Positioning

RoadShield is **not** a brochure company — it's a safety partner fleets, riders and drivers
trust. The whole site tells one story, structured around the tagline:

| Chapter | Meaning | Services it maps to |
|---|---|---|
| **Anticipate** | Build skill & awareness before the road tests it | Defensive driving training, Communications, Annual Road Safety Map |
| **Adapt** | Measure, track, stay compliant | Vehicle Assessments, Fleet Database, D/L & insurance renewals, Policy Frameworks |
| **Arrive** | Be there when it counts | Accident Management, roadside first aid, counselling, Women Safety |

## 2. The Big Idea — "The Fork in the Road"

Every visitor is one of two people: **on two wheels** or **behind a wheel**.
The homepage opens with a literal fork — one confident choice routing each visitor
into a journey built for them. Shared programs run underneath both lanes.

- **Ride Smart** (2W) — "Stay Alert. Stay Safe." — red-forward, energetic, gear-heavy.
- **Drive Smart** (4W) — "Make Safety Your Destination." — navy-forward, composed, data-driven.

Works great on mobile (two big tap targets), organises the whole site, and is a concept
no template ships — which keeps it from feeling AI-generated.

## 3. Information Architecture

```
Home  (The Fork)
├── Ride Smart · 2W
│     Defensive Riding · Vehicle Assessments · Vehicle Database & Data
│     Communications · Pink Vehicle Check · Safety Gear (helmets, jackets, gloves, guards)
├── Drive Smart · 4W
│     Defensive Driving · Vehicle Assessments · Vehicle Database & Data
│     Communications · Pink Vehicle Check · Driver Assessment
└── Shared
      Programs (Annual Safety Map · Accident Management · Policy Frameworks · Video Bytes)
      Women Safety — Pink Vehicle Check  (signature spotlight page)
      About & Founders (+ CVS Motors)
      Contact & Book
```
Rule: never more than **two clicks** from home to a booking form.

## 4. Page-by-page

1. **Home — "The Fork"** — night-road hero + fork, A/A/A strip, programs teaser, Pink Check spotlight, impact counters, trust row, video bytes, final CTA.
2. **Ride Smart (2W)** — all rider services + gear showcase.
3. **Drive Smart (4W)** — all driver/fleet services + driver assessment + fleet CTA.
4. **Women Safety — Pink Vehicle Check** — signature page: change a wheel, tyre pressure/tread, oil, coolant, parking/driving hacks, women's safety tips, what to carry, book a workshop.
5. **Programs (shared)** — Annual Road Safety Map, Accident Management (roadside aid, tracking, investigation, RCA, action plan, counselling), Policy Frameworks, Video Bytes.
6. **About & Founders** — story, founder profiles, CVS Motors lineage, credentials. *(content needed)*
7. **Contact & Book** — context-aware form (pre-fills lane), WhatsApp/call/email, service area.

## 5. Brand system (derived from the logos)

| Token | Hex | Role |
|---|---|---|
| Signal Red | `#DA1F26` | Primary / alert / Ride Smart lean |
| Deep Navy | `#1B2A4A` | The "R" / trust / Drive Smart lean |
| Asphalt | `#1B1C20` | Dark ground & text |
| Concrete | `#EEF0F4` | Light ground (navy-biased neutral) |
| Lane Amber | `#F2B705` | Road-marking accent only |
| Pink Check | `#E5397F` | Reserved strictly for women-safety line |

**Type:** Oswald (display) · IBM Plex Sans (body) · IBM Plex Mono (data/labels) · Saira Stencil One (tagline motif only).
Starter tokens live in `brand/brand-tokens.css`.

## 6. Motion & "not-AI" craft
Ambient scrolling lane lines · odometer counters · fork lift-on-hover · reveal-on-scroll ·
spinning-tyre loaders · crisp road-sign micro-interactions. All respect `prefers-reduced-motion`.
Principles: **real over rendered** (real photography, no stock/AI images), **imperfect on purpose**
(asymmetry, human voice), **restraint** (one bold moment per screen).

## 7. Responsive
Thumb-first. Fork stacks on mobile; nav collapses to slide-in menu + fixed "Book" button;
≥44px touch targets; correct mobile keyboards on the form.

## 8. Tech recommendation
**Astro** (or Next.js) static/JAMstack → Vercel/Netlify on road-shield.com. Fast, SEO-strong,
cheap, easy to update. Form → email/CRM (TBD). Add analytics + accessibility pass before launch.

## 9. Build roadmap
1. **Foundation** — spelling/logo, tokens, nav/footer, home hero + fork.
2. **The two lanes** — Ride Smart & Drive Smart pages (core).
3. **Programs, Women Safety, About** — once bios/photos arrive.
4. **Contact, polish, launch** — wire form, real media, SEO/analytics, a11y, ship.

## 10. Open questions / content needed
- [ ] **Canonical spelling** — "RoadShield" vs logo's "Roadsheild" (assumed RoadShield). Logo files as SVG/PNG.
- [ ] **Founder content** — names, photos, bios, titles.
- [ ] **Real contact details** — phone, WhatsApp, email, service regions, socials.
- [ ] **Photography & video** — real trainings/gear/assessments + existing video bytes.
- [ ] **Proof** — client logos, testimonials, accreditations, real impact numbers.
- [ ] **Form destination** — inbox / Google Sheet / CRM.
