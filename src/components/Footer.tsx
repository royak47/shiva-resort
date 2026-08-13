import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-deep pb-24 pt-16 md:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center md:flex-row md:justify-between md:text-left md:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl tracking-[0.15em] text-cream">
            SHIVA RESORT
          </p>
          <p className="mt-2 text-xs text-cream/50">
            {siteConfig.location.line2}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-wide text-cream/50">
          <a href="#experience" className="hover:text-cream">
            Experience
          </a>
          <a href="#rooms" className="hover:text-cream">
            Rooms
          </a>
          <a href="#gallery" className="hover:text-cream">
            Gallery
          </a>
          <a href="#location" className="hover:text-cream">
            Location
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            Instagram
          </a>
        </div>
        <p className="text-[11px] text-cream/40">
          © {new Date().getFullYear()} Shiva Resort. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
