"use client";

import { motion } from "framer-motion";
import { rooms } from "@/data/rooms";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[11px] tracking-[0.3em] uppercase text-gold">
            Accommodation
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-wide text-cream md:text-5xl">
            Rooms & Suites
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-cream/60">
            Restful spaces designed for comfort after days of dining and
            celebration.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl glass card-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${room.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-cream">
                  {room.name}
                </h3>
                <p className="mt-2 text-sm text-cream/65">
                  {room.shortDescription}
                </p>
                {room.view && (
                  <p className="mt-3 text-xs tracking-wide text-gold/80">
                    View: {room.view}
                  </p>
                )}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {room.amenities.slice(0, 4).map((a) => (
                    <li
                      key={a}
                      className="rounded-full bg-white/5 px-3 py-1 text-[10px] tracking-wide text-cream/60"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a
                    href={room.ctaView}
                    className="text-xs tracking-[0.15em] uppercase text-cream/70 transition hover:text-gold"
                  >
                    View Room
                  </a>
                  <span className="text-cream/30">·</span>
                  <a
                    href={room.ctaBook}
                    className="text-xs tracking-[0.15em] uppercase text-gold transition hover:text-gold-light"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
