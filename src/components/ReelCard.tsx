"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import type { Reel } from "@/data/reels";
import { cn } from "@/lib/utils";

type Props = {
  reel: Reel;
  isActive: boolean;
  onBecomeActive: (id: number) => void;
  className?: string;
};

export default function ReelCard({ reel, isActive, onBecomeActive, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            onBecomeActive(reel.id);
          }
        });
      },
      { threshold: [0.4, 0.6, 0.8] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reel.id, onBecomeActive]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  }, [isActive]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };
    video.addEventListener("timeupdate", onTime);
    return () => video.removeEventListener("timeupdate", onTime);
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }, []);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[100svh] w-full flex-shrink-0 items-center justify-center bg-deep",
        className
      )}
    >
      <div className="relative h-full w-full max-w-md overflow-hidden md:h-[85vh] md:max-w-[380px] md:rounded-2xl md:shadow-2xl">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          loop
          muted={muted}
          playsInline
          preload="metadata"
          poster={reel.poster}
          src={reel.video}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

        <div className="absolute left-0 right-0 top-0 h-0.5 bg-white/20">
          <div
            className="h-full bg-gold transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="absolute right-4 top-4 flex flex-col gap-3">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="mb-1 text-[10px] tracking-[0.25em] uppercase text-gold-light/80">
            The Shiva Experience
          </p>
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium leading-tight text-cream md:text-3xl">
            {reel.title}
          </h3>
          {reel.description && (
            <p className="mt-2 text-sm text-cream/70">{reel.description}</p>
          )}
          {reel.ctaLabel && (
            <a
              href={reel.ctaHref || "#booking"}
              className="mt-5 inline-block rounded-full border border-cream/30 bg-white/5 px-5 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase text-cream backdrop-blur-sm transition hover:bg-white/15"
            >
              {reel.ctaLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
