# Buba Junction — Website

Production-ready website for Buba Junction, a bubble tea brand with two
outlets in Nashik. Built with Next.js 15 (App Router), TypeScript, and
Tailwind CSS v4.

## What's included

- Fully responsive site (mobile, tablet, desktop) with a sticky mobile
  order bar and a desktop nav.
- Animated signature hero illustration (SVG boba cup with settling pearls).
- Interactive, filterable menu (4 categories, 19 drinks) with bestseller /
  new / vegan tags.
- Two-outlet locations section with real addresses and one-tap
  "Get directions" links to Google Maps.
- Reviews section, FAQ accordion, Instagram callout strip.
- SEO: per-page metadata, Open Graph/Twitter cards, JSON-LD structured
  data (CafeOrCoffeeShop) for both outlets, dynamic sitemap.xml and
  robots.txt.
- Self-hosted fonts (Baloo 2 for display, Plus Jakarta Sans for body) via
  @fontsource — no runtime dependency on Google Fonts, so the build
  never breaks because of a network/font CDN issue.

## Project structure

```
src/
  app/            Routes, layout, metadata, sitemap, robots
  components/
    sections/     Page sections (Hero, Menu, Outlets, Reviews, Faq, ...)
    ui/           Reusable primitives (Button, Badge, SectionHeading, ...)
    icons/        Signature SVG illustration
  data/           Editable content: site.ts, menu.ts, outlets.ts, content.ts
  types/          Shared TypeScript types
public/
  images/logo.png Brand logo
```

## Editing content

Everything you'll want to change day-to-day lives in src/data/:

- menu.ts — add, remove, or reprice drinks. Each item has a category
  (milk-tea, fruit-tea, specials, ice-blends) and optional tags
  (bestseller, new, vegan).
- outlets.ts — addresses, hours, and the Google Maps search query per
  outlet.
- content.ts — testimonials and FAQ entries.
- site.ts — brand name, tagline, Instagram handle/URL, phone number,
  and the Google rating shown in the hero and reviews section.

No code changes are needed for routine content updates.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deploying

The site is a standard Next.js app and deploys cleanly to Vercel
(recommended — zero config, just connect the GitHub repo) or any Node
hosting that supports Next.js (Netlify, Render, a VPS with
`npm run build && npm run start` behind a reverse proxy).

Before going live:

1. Update SITE.url in src/data/site.ts to your real domain.
2. Update SITE.phone / SITE.phoneHref to your real contact number.
3. Refresh the Google rating count in site.ts and testimonials in
   content.ts periodically.
4. Point your domain's DNS at your hosting provider and add it in the
   Vercel/host dashboard.

## Notes

- Built and verified with npm run lint and npm run build — both pass
  cleanly with no errors or warnings.
- All interactivity (menu filter tabs, FAQ accordion, mobile nav) is
  implemented with plain React state — no external state library needed.
