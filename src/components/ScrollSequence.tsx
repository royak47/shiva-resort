"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 225;
const FRAME_PATH = (i: number) =>
  `/sequence/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const currentFrame = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload frames (progressive)
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let completed = 0;

    // Load in batches for better UX
    const loadBatch = (start: number, end: number) => {
      for (let i = start; i <= end; i++) {
        const img = new Image();
        img.src = FRAME_PATH(i);
        img.onload = () => {
          completed++;
          setLoaded(completed);
          if (completed === FRAME_COUNT) setReady(true);
        };
        img.onerror = () => {
          completed++;
          setLoaded(completed);
          if (completed === FRAME_COUNT) setReady(true);
        };
        images[i - 1] = img;
      }
    };

    // First 30 frames immediately, rest after
    loadBatch(1, 30);
    const t = setTimeout(() => loadBatch(31, FRAME_COUNT), 400);
    imagesRef.current = images;

    return () => clearTimeout(t);
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];
    if (!canvas || !ctx || !img || !img.complete) return;

    // Cover the canvas
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const x = (cw - iw * scale) / 2;
    const y = (ch - ih * scale) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, iw * scale, ih * scale);
  }, []);

  // Resize canvas to device pixel ratio
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      drawFrame(currentFrame.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame, ready]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const frame = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(v * (FRAME_COUNT - 1)))
    );
    if (frame !== currentFrame.current) {
      currentFrame.current = frame;
      drawFrame(frame);
    }
  });

  // Draw first frame when ready
  useEffect(() => {
    if (ready) drawFrame(0);
  }, [ready, drawFrame]);

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] bg-deep"
      id="cinematic"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Cinematic overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-deep/40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(13,22,20,0.45)_100%)]" />

        {/* Loading indicator */}
        {!ready && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-deep">
            <p className="mb-4 text-[11px] tracking-[0.3em] uppercase text-gold">
              Loading Experience
            </p>
            <div className="h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gold transition-all duration-300"
                style={{ width: `${(loaded / FRAME_COUNT) * 100}%` }}
              />
            </div>
            <p className="mt-3 text-xs text-cream/40">
              {Math.round((loaded / FRAME_COUNT) * 100)}%
            </p>
          </div>
        )}

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-12">
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
            className="max-w-lg"
          >
            <p className="mb-2 text-[11px] tracking-[0.3em] uppercase text-gold">
              Cinematic Journey
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-cream md:text-5xl">
              Step Into Shiva Resort
            </h2>
            <p className="mt-3 text-sm text-cream/60 md:text-base">
              Scroll to explore the atmosphere of the resort
            </p>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
          <motion.div
            className="h-full bg-gold origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  );
}
