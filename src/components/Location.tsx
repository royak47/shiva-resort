"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Location() {
  return (
    <section
      id="location"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-deep py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/images/location-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/50 to-deep/80" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-5 max-w-md rounded-2xl glass-strong p-8 md:p-10"
      >
        <p className="mb-2 text-[11px] tracking-[0.3em] uppercase text-gold">
          Find Us
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-cream md:text-4xl">
          Location
        </h2>
        <div className="mt-6 flex items-start gap-3 text-cream/80">
          <MapPin className="mt-0.5 shrink-0 text-gold" size={18} />
          <div className="text-sm leading-relaxed">
            <p className="font-medium text-cream">
              {siteConfig.location.plusCode} Shiva Resort
            </p>
            <p className="mt-1 text-cream/70">
              {siteConfig.location.line1}
              <br />
              {siteConfig.location.line2}
            </p>
          </div>
        </div>
        <a
          href={siteConfig.location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase text-deep transition hover:bg-gold-light"
        >
          <Navigation size={14} />
          Get Directions
        </a>
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center text-xs tracking-wide text-cream/50 hover:text-cream/80"
        >
          Follow {siteConfig.contact.instagramHandle}
        </a>
      </motion.div>
    </section>
  );
}
