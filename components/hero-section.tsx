"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { getFeaturedArticles } from "@/lib/data/news-data";

export default function HeroSection() {
  const slides = getFeaturedArticles();

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => paginate(1), 6000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, paginate]);

  const handleManual = (dir: number) => {
    setIsAutoPlaying(false);
    paginate(dir);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goTo = (idx: number) => {
    if (idx === current) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 50) handleManual(delta < 0 ? 1 : -1);
    setIsDragging(false);
  };

  const slide = slides[current];
  if (!slide) return null;

  const imageVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 1.04 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0, scale: 0.98 }),
  };

  const textVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -30 : 30, opacity: 0 }),
  };

  return (
    <section
      className="relative min-h-screen bg-background flex items-center overflow-hidden px-4 pt-28 pb-16 sm:pt-32 lg:pt-36"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={() => setIsDragging(false)}
    >
      {/* ── BACKGROUND DECORATION ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: TEXT CONTENT ── */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">

            {/* Static HIMATIF header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selamat Datang di HIMATIF USB YPKP Bandung</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                  HIMATIF
                </span>{" "}
                USB YPKP
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
                Wadah mahasiswa Teknik Informatika untuk belajar, berkembang, dan berkolaborasi.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Kegiatan Terbaru</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Sliding text — fixed height so layout never shifts */}
            <div
              className="relative cursor-grab active:cursor-grabbing select-none"
              style={{ height: "180px" }}
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={`text-${slide.id}`}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.32, 0, 0.67, 0] }}
                  className="absolute inset-0 flex flex-col gap-3"
                >
                  {/* Title — max 2 lines */}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-snug line-clamp-2">
                    {slide.title}
                  </h2>

                  {/* Excerpt — max 3 lines */}
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md line-clamp-3">
                    {slide.excerpt}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA — always at the same position */}
            <Link href={`/news/${slide.id}`}>
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:scale-105 active:scale-95 overflow-hidden relative w-fit">
                <span className="relative z-10 flex items-center gap-2">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              {/* Progress bars */}
              <div className="flex gap-1.5 items-center">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    className="relative h-[3px] rounded-full overflow-hidden transition-all duration-500 focus:outline-none"
                    style={{
                      width: i === current ? 40 : 14,
                      background: i === current
                        ? "var(--color-primary)"
                        : "color-mix(in srgb, var(--color-primary) 25%, transparent)",
                    }}
                  >
                    {i === current && isAutoPlaying && (
                      <motion.div
                        key={`dot-${current}`}
                        className="absolute inset-y-0 left-0 rounded-full bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6, ease: "linear" }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2 ml-2">
                <button
                  onClick={() => handleManual(-1)}
                  className="group w-9 h-9 rounded-full border border-border hover:border-primary bg-background hover:bg-primary/10 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </button>
                <button
                  onClick={() => handleManual(1)}
                  className="group w-9 h-9 rounded-full border border-border hover:border-primary bg-background hover:bg-primary/10 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                  aria-label="Selanjutnya"
                >
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </button>
              </div>

              {/* See all */}
              <Link
                href="/news"
                className="ml-auto text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors duration-200"
              >
                Semua Kegiatan
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: IMAGE ── */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[90%] h-[90%] rounded-3xl border border-primary/10 bg-primary/5" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[95%] h-[95%] rounded-3xl border border-primary/5" />
            </div>

            {/* Image card */}
            <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 ring-1 ring-white/10">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={`img-${slide.id}`}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
                  className="absolute inset-0 will-change-transform"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile thumbnail strip */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20 lg:hidden">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`relative w-12 h-8 rounded-md overflow-hidden border-2 transition-all duration-300 focus:outline-none ${
                    i === current
                      ? "border-primary scale-110 shadow-md shadow-primary/40"
                      : "border-white/30 opacity-60 hover:opacity-90"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                >
                  <Image src={s.image} alt={s.title} fill sizes="48px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}