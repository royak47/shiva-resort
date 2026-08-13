"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 text-deep md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[3/4]"
        >
          <div className="absolute inset-0 bg-forest/20" />
          {/* Placeholder visual — replace with real image/video */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/about.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="mb-3 text-[11px] tracking-[0.3em] uppercase text-gold">
            Our Story
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium leading-tight tracking-wide md:text-5xl">
            More Than a Stay
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-deep/75">
            <p>
              Shiva Resort is a place to pause — nestled in Jaspur, Uttarakhand,
              where open landscapes meet warm hospitality.
            </p>
            <p>
              Whether you come to dine, unwind, or celebrate, every detail is
              shaped around presence: good food, quiet evenings, and spaces that
              feel like they belong to the land.
            </p>
            <p>
              An experience worth remembering — simple, sincere, and rooted in
              nature.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-deep/10 pt-8">
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl text-deep">
                Nature
              </p>
              <p className="mt-1 text-xs tracking-wide text-deep/50">
                Surroundings
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl text-deep">
                Dine
              </p>
              <p className="mt-1 text-xs tracking-wide text-deep/50">
                & Celebrate
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl text-deep">
                Calm
              </p>
              <p className="mt-1 text-xs tracking-wide text-deep/50">
                Escapes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
