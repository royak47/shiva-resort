"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { reels } from "@/data/reels";
import ReelCard from "./ReelCard";

export default function ReelExperience() {
  const [activeId, setActiveId] = useState(reels[0]?.id ?? 1);

  const handleBecomeActive = useCallback((id: number) => {
    setActiveId(id);
  }, []);

  return (
    <section id="experience" className="relative bg-deep">
      {/* Section intro (desktop) */}
      <div className="mx-auto hidden max-w-7xl px-8 pt-24 pb-8 md:block">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mb-3 text-[11px] tracking-[0.3em] uppercase text-gold">
            Immersive Stories
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-wide text-cream md:text-5xl">
            The Shiva Experience
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-cream/60">
            Scroll through the atmosphere of the resort — nature, dining and
            celebrations captured in motion.
          </p>
        </motion.div>
      </div>

      {/* Mobile: full-height snap feed */}
      <div className="reels-snap h-[100svh] overflow-y-auto md:hidden">
        {reels.map((reel) => (
          <ReelCard
            key={reel.id}
            reel={reel}
            isActive={activeId === reel.id}
            onBecomeActive={handleBecomeActive}
          />
        ))}
      </div>

      {/* Desktop: horizontal-ish centered vertical cards with scroll */}
      <div className="hidden md:block">
        <div className="flex flex-col items-center gap-16 pb-24">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="w-full"
            >
              <ReelCard
                reel={reel}
                isActive={activeId === reel.id}
                onBecomeActive={handleBecomeActive}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
