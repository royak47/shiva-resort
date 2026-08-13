/**
 * Central reels / video data.
 * Place actual MP4 (or WebM) files in /public/videos/
 * and corresponding poster images in /public/images/
 *
 * To add a new reel: append an object below. No component changes needed.
 *
 * `theme` drives the animated background glow behind the reels feed —
 * it shifts as each reel becomes active while scrolling.
 */

export type Reel = {
  id: number;
  video: string; // path under /public
  poster: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  instagramUrl?: string; // optional source reference
  theme: string; // accent color for scroll-linked background
};

export const reels: Reel[] = [
  {
    id: 1,
    video: "/videos/reel-01.mp4",
    poster: "/images/reel-01.jpg",
    title: "A Stay Surrounded By Nature",
    description: "Wake up to greenery and calm at Shiva Resort.",
    ctaLabel: "Explore the Resort",
    ctaHref: "#about",
    theme: "#1a2e28",
  },
  {
    id: 2,
    video: "/videos/reel-02.mp4",
    poster: "/images/reel-02.jpg",
    title: "Dine • Relax • Celebrate",
    description: "Moments made for families, couples and gatherings.",
    ctaLabel: "View Dining",
    ctaHref: "#dining",
    theme: "#c4a574",
  },
  {
    id: 3,
    video: "/videos/reel-03.mp4",
    poster: "/images/reel-03.jpg",
    title: "Evening Ambience",
    description: "Soft lights, open air and memorable evenings.",
    ctaLabel: "Book Your Stay",
    ctaHref: "#booking",
    theme: "#0d1614",
  },
  {
    id: 4,
    video: "/videos/reel-04.mp4",
    poster: "/images/reel-04.jpg",
    title: "The Shiva Experience",
    description: "From quiet mornings to celebratory nights.",
    ctaLabel: "See Rooms",
    ctaHref: "#rooms",
    theme: "#3a2e1a",
  },
];

export default reels;
