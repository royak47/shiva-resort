# Shiva Resort UK18 — Official Website

Premium, cinematic, mobile-first resort website built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

Heavily focused on a Reels-style video experience inspired by the resort’s Instagram: [@shiva_resort_uk18](https://www.instagram.com/shiva_resort_uk18/).

---

## Quick Start

```bash
cd shiva-resort
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Content Architecture (Easy Updates)

All important content lives in `/src/data/`:

| File | Purpose |
|------|---------|
| `siteConfig.ts` | Name, location, contact, SEO, booking links |
| `reels.ts` | Video feed for “The Shiva Experience” |
| `rooms.ts` | Room cards |
| `experiences.ts` | Experience tiles |
| `gallery.ts` | Photo + video gallery |

**To add a new reel:**

1. Drop `reel-06.mp4` into `/public/videos/`
2. Drop `reel-06.jpg` (poster) into `/public/images/`
3. Append an object to the `reels` array in `reels.ts`

No component changes required.

---

## Media Setup

Place assets here:

```
public/
  videos/
    hero.mp4
    reel-01.mp4
    reel-02.mp4
    ...
  images/
    hero-poster.jpg
    reel-01.jpg
    room-01.jpg
    about.jpg
    dining.jpg
    location-bg.jpg
    gallery-*.jpg
    og-cover.jpg
```

### Recommended video settings (mobile performance)

- Resolution: 1080×1920 (vertical reels) or 1920×1080 (hero)
- Codec: H.264
- Bitrate: 2–4 Mbps for reels, slightly higher for hero
- Duration: 15–45 s ideal
- Always provide a poster image

---

## Contact & Booking

In `siteConfig.ts`:

- Leave `phone` / `whatsapp` empty until you have verified numbers from the owner.
- The site falls back to Instagram DM / WhatsApp deep-link when numbers are present.
- Location string is taken from the public Instagram bio.

**Do not invent phone numbers, prices, or amenities.**

---

## Instagram Media Import (Manual Workflow)

Instagram does not allow reliable automatic download of Reels for third-party sites. Recommended one-time workflow:

1. On a phone/desktop logged into the resort Instagram (or with owner permission), open each Reel.
2. Use Instagram’s native “Download” (if available) or a trusted offline tool / screen recording at high quality.
3. Rename files to `reel-01.mp4`, `reel-02.mp4`, etc.
4. Extract a frame for the poster (`reel-01.jpg`) or use a still from the same shoot.
5. Place files in `/public/videos/` and `/public/images/`.
6. Update titles/descriptions in `reels.ts`.

The live website never scrapes Instagram at runtime.

---

## Design Notes

- Dark cinematic sections + clean cream sections
- Large display typography (Cormorant Garamond)
- Full-viewport Reels feed with IntersectionObserver autoplay / pause
- Scroll-snap on mobile
- Sticky bottom booking bar on mobile
- Glass / blur navbar on scroll
- Subtle film grain
- `prefers-reduced-motion` respected

---

## SEO

- Metadata + Open Graph + Twitter cards in `layout.tsx`
- `robots.txt` + `sitemap.ts`
- Semantic HTML
- LocalBusiness structured data can be added later once exact address, phone and geo coordinates are confirmed.

---

## Production

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node host. Point a custom domain when ready.

---

Built for the resort owner with permission to use Instagram Reels on this site.
