"use client";

import { motion } from "framer-motion";

export default function Dining() {
  return (
    <section id="dining" className="relative bg-deep py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-[11px] tracking-[0.3em] uppercase text-gold">
            Culinary
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-wide text-cream md:text-5xl">
            Dine With Us
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
            From everyday meals to celebratory tables — the restaurant at Shiva
            Resort is where flavours and gatherings come together. Come for the
            food, stay for the atmosphere.
          </p>
          <a
            href="#booking"
            className="mt-8 inline-block rounded-full border border-gold/40 px-6 py-3 text-xs tracking-[0.2em] uppercase text-gold-light transition hover:bg-gold/10"
          >
            Reserve a Table
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/dining.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-deep/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
