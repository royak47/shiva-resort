"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function Experiences() {
  return (
    <section className="bg-cream py-24 text-deep md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-xl"
        >
          <p className="mb-3 text-[11px] tracking-[0.3em] uppercase text-gold">
            Moments
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-wide md:text-5xl">
            What You’ll Experience
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${exp.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-cream">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm text-cream/70">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
