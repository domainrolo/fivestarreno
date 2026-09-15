# fivestarreno.ca

Bilingual (English / Korean) marketing site for **Five Star Reno**, a general
contractor working in Toronto and the GTA.

Static site built with [Astro](https://astro.build), served on Railway by a
~40 line Node static server. No database, no CMS, no build-time API calls.

- **Phone:** 647-893-8134
- **Email:** fivestar62004@gmail.com

---

## Read this first: things to confirm before the site goes public

The site deliberately does **not** claim anything it cannot back up. Every fact
below lives in [`src/data/site.ts`](src/data/site.ts). Anything set to `null` is
hidden on the page; fill it in and the matching badge, stat or FAQ row appears
on its own with no other change.

| Field | Ships as | What happens when you set it |
|---|---|---|
| `warrantyYears` | `2` | Already **on**. A workmanship warranty is a promise you make, so it is yours to set. Change it or set `null` if two years is not your policy. |
| `wsibCovered` | `null` | Set `true` once your clearance certificate is current. Adds a "WSIB covered" badge. |
| `liabilityInsurance` | `null` | Set to e.g. `'$2M'`. Adds a liability insurance badge. |
| `yearsInBusiness` | `null` | Adds "X years in business" to the stats band. |
| `projectsCompleted` | `null` | Adds "X projects completed". |
| `googleRating` + `googleReviewCount` | `null` | Set **both** to add a star-rating badge and `AggregateRating` structured data. |
| `hstNumber` | `null` | Adds the HST number to the footer. |
| `testimonials` | `[]` | The testimonials section stays hidden until there are at least two. |

Two things worth knowing about the copy:

1. **Ontario does not license general contractors or renovators.** The site
   never says "licensed contractor", because the phrase means nothing here and
   informed homeowners know it. Instead the About and Why sections tell people
   to ask you for a certificate of insurance, the ESA licence number of your
   electrician, and two addresses they can drive past. Be ready for that.
2. **Do not invent reviews.** `testimonials` is empty on purpose. A made-up name
   attached to a made-up neighbourhood is the fastest way to lose a job.

### Photography

Every photo is a generic stock image from Unsplash, downloaded into
`public/images/`. Captions describe the *type* of work, never a specific job, so
no page claims a project that did not happen.

Replace them as real job photos come in: drop `public/images/<slug>-1280.jpg`
and `<slug>-640.jpg` over the existing files and nothing else needs to change.
Alt text lives in [`src/data/images.ts`](src/data/images.ts); update it to match.

Real photos of your own work are worth more than any other change you could make
to this site.

---

## Running it

```bash
npm install
npm run images     # downloads photos into public/images (only fetches what is missing)
npm run dev        # http://localhost:4321
```

| Script | What it does |
|---|---|
| `npm run dev` | Astro dev server |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Preview the build with Astro |
| `npm start` | Serve `dist/` with the production server (what Railway runs) |
| `npm run images` | Fetch missing photos. `-- --force` re-fetches everything |

---

## Editing content

All copy is in two files, one per language, with matching keys:

- [`src/i18n/en.ts`](src/i18n/en.ts)
- [`src/i18n/ko.ts`](src/i18n/ko.ts)

`ko.ts` is typed as `Dict` (derived from `en.ts`), so if you add a key to one and
forget the other, `npm run build` fails rather than shipping a gap. Business
facts and the service-area list are in [`src/data/site.ts`](src/data/site.ts).

Adding a service means adding an entry to `services.items` in **both** language
files with the same `slug`. Routes, footer links, and the cross-links at the
bottom of each service page pick it up automatically.

### Writing style

English copy follows [blader/humanizer](https://github.com/blader/humanizer): no
em dashes, no "not X but Y", no inflated significance, and none of the stock AI
vocabulary. Korean copy follows
[snflkd/fluent-korean](https://github.com/snflkd/fluent-korean): 합니다체
throughout, complete sentences ending in a predicate, no dropped particles, and
settled loanwords rather than invented ones. Keep to both if you edit.

---

## Structure

```
src/
  data/       site.ts (business facts), images.ts (photo manifest)
  i18n/       en.ts, ko.ts, index.ts (t(), href(), locale helpers)
  components/ Header, Footer, CallBar, Picture, Icon, Logo, PageHead
  sections/   Hero, TrustBar, Services, Gallery, Process, Why, Stats,
              Costs, Areas, Faq, Testimonials, ContactForm, CtaBand
  views/      One per page type, takes `lang` and renders sections
  pages/      Thin route files: English at /, Korean under /ko
```

English lives at the root (`/services`), Korean under `/ko` (`/ko/services`).
Both are generated from the same views, and every page emits `hreflang`
alternates for `en-CA`, `ko-CA` and `x-default`.

### The contact form

The form has no backend. It validates in the browser, then opens the visitor's
email client with everything filled in and addressed to `fivestar62004@gmail.com`.
There is also a "copy the details" button for anyone without a mail client set up.
Nothing is sent without the visitor pressing send.

That works everywhere and costs nothing, but it does lose people who have no
mail client configured. **The upgrade when you want it:** sign up for
[Resend](https://resend.com) or [Formspree](https://formspree.io), then change the
submit handler in [`src/sections/ContactForm.astro`](src/sections/ContactForm.astro)
to `POST` the same payload to their endpoint. The validation, honeypot and
payload builder are already there.

---

## Accessibility

- Skip link, landmark regions, and a visible focus ring everywhere
- All text meets WCAG AA contrast against its own background
- The mobile drawer traps focus, closes on `Escape`, and restores focus
- The lightbox is a native `<dialog>`: focus trap and `Escape` come free, plus
  arrow-key and swipe navigation
- FAQ items are native `<details>`, so they work with JS off
- Every image has alt text; decorative ones are `alt=""`
- `prefers-reduced-motion` disables the reveals, the hero pan and the marquee
- Form inputs are 16px so iOS does not zoom on focus; tap targets are ≥48px
- Stat values are in the HTML, not written by the counter, so they are correct
  with JS off

---

## Deployment

Railway builds with Nixpacks (`npm run build`) and starts `node server.mjs`,
which serves `dist/` and answers `/healthz`. Config is in
[`railway.json`](railway.json). Pushing to `main` triggers a deploy.

### Pointing fivestarreno.ca at it

1. Railway → the service → **Settings → Networking → Custom Domain** → add
   `fivestarreno.ca` and `www.fivestarreno.ca`.
2. Railway shows a `CNAME` target. At your registrar, point `www` at it with a
   `CNAME`, and the root at it with an `ALIAS`/`ANAME`/flattened `CNAME` (most
   registrars support one; Cloudflare calls it CNAME flattening).
3. TLS is issued automatically once DNS resolves.
