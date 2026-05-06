"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { works } from "@/data/works";

const ACCENT = "#F4E430";

export default function GalleryScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    dragFree: true,
    loop: false,
    align: "start",
  });

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    setScrollProgress(Math.max(0, Math.min(1, emblaApi.scrollProgress())));
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    onScroll();
    return () => { emblaApi.off("scroll", onScroll); emblaApi.off("reInit", onScroll); };
  }, [emblaApi, onScroll]);

  return (
    <section
      className="bg-[#0a0a0a] border-t border-white/5"
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "clamp(24px, 5vw, 96px)",
        paddingRight: "clamp(24px, 5vw, 96px)",
      }}
    >
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-[11px] tracking-[0.4em] mb-5 uppercase" style={{ color: ACCENT }}>
          Portfolio
        </p>
        <h3 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-black tracking-tight text-white leading-[1.2]">
          See What We Create
        </h3>
      </motion.div>

      {/* Embla 슬라이드 갤러리 */}
      <div className="relative">
        {/* 좌측 화살표 */}
        <button
          onClick={scrollPrev}
          aria-label="Prev"
          className="hidden md:flex items-center justify-center w-11 h-11 border border-white/20 text-white/40 hover:border-white/60 hover:text-white transition-colors duration-300"
          style={{
            position: "absolute",
            top: "50%",
            left: "-20px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(10,10,10,0.8)",
            backdropFilter: "blur(4px)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {/* 우측 화살표 */}
        <button
          onClick={scrollNext}
          aria-label="Next"
          className="hidden md:flex items-center justify-center w-11 h-11 border border-white/20 text-white/40 hover:border-white/60 hover:text-white transition-colors duration-300"
          style={{
            position: "absolute",
            top: "50%",
            right: "-20px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(10,10,10,0.8)",
            backdropFilter: "blur(4px)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          className="embla-gallery"
          ref={emblaRef}
          style={{ overflow: "hidden", width: "100%" }}
        >
          <div
            className="embla-gallery__container"
            style={{ display: "flex", flexDirection: "row", alignItems: "stretch", flexWrap: "nowrap", touchAction: "pan-y pinch-zoom" }}
          >
            {works.map((work) => (
              <div
                key={work.id}
                className="embla-gallery__slide"
                style={{
                  flex: "0 0 auto",
                  width: "clamp(300px, 30vw, 450px)",
                  minWidth: 0,
                  marginRight: "16px",
                }}
              >
                <div className="relative aspect-video overflow-hidden bg-[#111] group">
                  {playingId === work.id && work.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0`}
                      title={work.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => work.youtubeId && setPlayingId(work.id)}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                      aria-label={`${work.title} 재생`}
                    >
                      <Image
                        src={work.thumbnail}
                        alt={work.title}
                        fill
                        sizes="(max-width: 768px) 300px, (max-width: 1280px) 380px, 450px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: "brightness(0.6)" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-sm bg-black/40 group-hover:border-[#F4E430] transition-all duration-300">
                          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                            <polygon points="8,4 18,11 8,18" fill="white" fillOpacity="0.95" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 text-[10px] tracking-widest uppercase text-white/60 bg-black/40 px-2 py-1 backdrop-blur-sm">
                        {work.category}
                      </div>
                    </button>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white">{work.title}</p>
                  <p className="text-xs text-white/40 mt-1">{work.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 진행바 */}
      <div className="mt-6">
        <div className="relative h-[1px] bg-white/10 w-full">
          <div
            className="absolute top-0 left-0 h-full transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%`, background: ACCENT }}
          />
        </div>
      </div>
    </section>
  );
}
