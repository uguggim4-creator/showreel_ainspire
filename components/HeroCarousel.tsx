"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/works";

const ACCENT = "#F4E430";

export default function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef(Autoplay({ delay: 5500, stopOnInteraction: false }));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, axis: "x", duration: 35 },
    [autoplayRef.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // 활성 슬라이드만 play, 나머지 pause+reset
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === selectedIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [selectedIndex]);

  const handleMouseEnter = () => autoplayRef.current.stop();
  const handleMouseLeave = () => autoplayRef.current.play();

  return (
    <div
      className="relative overflow-hidden bg-[#0a0a0a]"
      style={{ width: "100%", height: "100vh", minHeight: "100vh" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 상단 그라데이션 — 네비 영역 보호 */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, transparent 100%)", zIndex: 6 }}
      />
      {/* 하단 페이드 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 100%)", zIndex: 6 }}
      />
      {/* 그레인 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
          zIndex: 7,
        }}
      />

      {/* 워터마크 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex + "-wm"}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-end overflow-hidden select-none pointer-events-none"
          style={{ zIndex: 5 }}
        >
          <span
            className="font-black tracking-tighter"
            style={{
              fontSize: "clamp(7rem, 22vw, 24rem)",
              color: "rgba(244,228,48,0.018)",
              lineHeight: 0.82,
              whiteSpace: "nowrap",
              transform: "translateX(5%)",
            }}
          >
            {heroSlides[selectedIndex].headline}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Embla */}
      <div
        className="embla-hero"
        ref={emblaRef}
        style={{ position: "relative", zIndex: 8, width: "100%", height: "100%", overflow: "hidden" }}
      >
        <div
          className="embla-hero__container"
          style={{ display: "flex", flexDirection: "row", height: "100%" }}
        >
          {heroSlides.map((slide, i) => (
            <div
              key={slide.id}
              className="embla-hero__slide relative flex items-end"
              style={{ width: "100%", height: "100%", flex: "0 0 100%" }}
            >
              {/* 영상/이미지 배경 */}
              {slide.videoSrc ? (
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={slide.videoSrc}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    zIndex: 0,
                  }}
                />
              ) : slide.youtubeId ? (
                <Image
                  src={`https://i.ytimg.com/vi/${slide.youtubeId}/maxresdefault.jpg`}
                  alt={slide.headline}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    zIndex: 0,
                    transform: selectedIndex === i ? "scale(1.05)" : "scale(1)",
                    transition: "transform 5s ease-out",
                  }}
                />
              ) : null}
              {/* 좌측 어둠 오버레이 — 텍스트 가독성만 확보, 영상은 최대한 보이도록 */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.30) 40%, rgba(10,10,10,0.10) 100%)",
                  zIndex: 1,
                }}
              />

              {/* 콘텐츠 — 좌측 하단 시네마틱 정렬 */}
              <div
                className="relative w-full max-w-5xl"
                style={{ paddingLeft: "50px", paddingRight: "50px", paddingBottom: "160px", zIndex: 2 }}
              >
                <AnimatePresence mode="wait">
                  {selectedIndex === i && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="text-[14px] md:text-[16px] tracking-[0.25em] mb-6 uppercase font-semibold" style={{ color: ACCENT }}>
                        {slide.description}
                      </p>
                      <h1
                        className="font-black tracking-tighter text-white leading-[0.88] mb-10"
                        style={{ fontSize: "clamp(3.2rem, 8.5vw, 9.5rem)" }}
                      >
                        {slide.headline}
                      </h1>
                      <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide mb-12 max-w-2xl">
                        {slide.subline}
                      </p>
                      <Link
                        href="/works"
                        className="inline-flex items-center gap-4 text-[15px] md:text-[17px] tracking-[0.22em] uppercase font-semibold transition-all duration-300 hover:gap-6"
                        style={{ color: ACCENT }}
                      >
                        View Works
                        <span className="inline-block w-12 h-[2px]" style={{ background: ACCENT }} />
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 페이저 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-5" style={{ zIndex: 20 }}>
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} aria-label={`Slide ${i + 1}`} className="flex items-center gap-2 group">
            {selectedIndex === i ? (
              <span className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold" style={{ color: ACCENT }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block w-8 h-[2px]" style={{ background: ACCENT }} />
              </span>
            ) : (
              <span className="block w-2 h-2 rounded-full bg-white/30 group-hover:bg-white/60 transition-colors duration-300" />
            )}
          </button>
        ))}
      </div>

      {/* 좌/우 vertical-center 화살표 */}
      <button
        onClick={scrollPrev}
        aria-label="Prev"
        className="hidden md:flex items-center justify-center w-12 h-12 border border-white/20 text-white/50 hover:border-white/60 hover:text-white transition-colors duration-300"
        style={{
          position: "absolute",
          top: "50%",
          left: "24px",
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "rgba(10,10,10,0.55)",
          backdropFilter: "blur(6px)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next"
        className="hidden md:flex items-center justify-center w-12 h-12 border border-white/20 text-white/50 hover:border-white/60 hover:text-white transition-colors duration-300"
        style={{
          position: "absolute",
          top: "50%",
          right: "24px",
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "rgba(10,10,10,0.55)",
          backdropFilter: "blur(6px)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-10 left-8 md:left-16 flex items-center gap-3" style={{ zIndex: 20 }}>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="text-[10px] tracking-[0.4em] text-white/25 uppercase">Scroll</span>
      </div>
    </div>
  );
}
