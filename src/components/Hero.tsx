"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep/60 via-deep/30 to-deep/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,22,20,0.5)_100%)]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-[11px] font-medium tracking-[0.35em] uppercase text-gold-light/90"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.95] tracking-wide text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          SHIVA
          <br />
          RESORT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 max-w-md text-sm tracking-wide text-cream/70 md:text-base"
        >
          Jaspur, Uttarakhand · Dine · Relax · Celebrate
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#booking"
            className="group relative overflow-hidden rounded-full bg-gold px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-deep transition hover:bg-gold-light"
          >
            <span className="relative z-10">Book Your Stay</span>
          </a>
          <a
            href="#experience"
            className="rounded-full border border-cream/30 px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-cream/90 transition hover:border-cream/60 hover:bg-white/5"
          >
            Explore the Resort
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#experience"
          className="flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-cream/50 transition hover:text-cream/80"
        >
          <span>Scroll to explore</span>
          <span className="animate-bounce text-lg">↓</span>
        </a>
      </motion.div>
    </section>
  );
}
