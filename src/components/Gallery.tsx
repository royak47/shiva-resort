"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const activeItem = galleryItems.find((g) => g.id === active);

  return (
    <section id="gallery" className="bg-cream py-24 text-deep md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[11px] tracking-[0.3em] uppercase text-gold">
            Visual Stories
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-wide md:text-5xl">
            Gallery
          </h2>
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setActive(item.id)}
              className={cn(
                "mb-4 w-full break-inside-avoid overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-gold",
                item.aspect === "portrait" && "aspect-[3/4]",
                item.aspect === "landscape" && "aspect-[4/3]",
                item.aspect === "square" && "aspect-square"
              )}
            >
              {item.type === "image" ? (
                <div
                  className="h-full w-full bg-cover bg-center transition duration-500 hover:scale-105"
                  style={{ backgroundImage: `url(${item.src})` }}
                />
              ) : (
                <div className="relative h-full w-full">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.poster || item.src})`,
                    }}
                  />
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2 py-1 text-[10px] tracking-wide text-white">
                    VIDEO
                  </span>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-5 top-5 text-white/80 hover:text-white"
              onClick={() => setActive(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === "image" ? (
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className="max-h-[90vh] w-auto rounded-lg object-contain"
                />
              ) : (
                <video
                  src={activeItem.src}
                  poster={activeItem.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[90vh] w-auto rounded-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
