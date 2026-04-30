"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { works } from "@/data/works";

const ACCENT = "#F4E430";

export default function GalleryScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
      className="relative overflow-hidden border-t border-white/5"
      style={{
        background: "#0a0a0a",
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "clamp(24px, 5vw, 96px)",
        paddingRight: "clamp(24px, 5vw, 96px)",
      }}
    >
      {/* 헤더 */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-[11px] tracking-[0.4em] mb-4 uppercase" style={{ color: ACCENT }}>
            Portfolio
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black tracking-tighter leading-none text-white">
            See What<br />We Create
          </h2>
        </div>
        <Link
          href="/works"
          className="hidden md:flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors duration-300 mb-3"
        >
          All Works
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Embla 갤러리 */}
      <div className="relative">
        {/* 좌측 화살표 */}
        <button
          onClick={scrollPrev}
          aria-label="Prev"
          className="hidden md:flex items-center justify-center w-11 h-11 border border-white/20 text-white/40 hover:border-white/60 hover:text-white transition-colors duration-300"
          style={{
            position: "absolute",
            top: "50%",
            left: "16px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(15,15,26,0.7)",
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
            right: "16px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(15,15,26,0.7)",
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
            {works.map((work) => {
              const isHovered = hoveredId === work.id;
              return (
                <div
                  key={work.id}
                  className="embla-gallery__slide"
                  style={{
                    flex: "0 0 auto",
                    width: "clamp(260px, 26vw, 400px)",
                    minWidth: 0,
                    marginRight: "14px",
                  }}
                >
                  <Link
                    href={`/works/${work.id}`}
                    className="block group"
                    onMouseEnter={() => setHoveredId(work.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* 16:9 와이드 비율 */}
                    <div
                      className="relative overflow-hidden"
                      style={{
                        aspectRatio: "16/9",
                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                        boxShadow: isHovered
                          ? "0 28px 56px rgba(0,0,0,0.7)"
                          : "0 4px 20px rgba(0,0,0,0.4)",
                        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
                      }}
                    >
                      {/* 실제 이미지 */}
                      <Image
                        src={work.thumbnail}
                        alt={work.title}
                        fill
                        sizes="(max-width: 768px) 260px, (max-width: 1280px) 320px, 400px"
                        className="object-cover"
                        style={{
                          transition: "transform 0.5s ease",
                          transform: isHovered ? "scale(1.06)" : "scale(1)",
                        }}
                      />

                      {/* 상시 하단 그라데이션 */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                        }}
                      />

                      {/* 카테고리 배지 */}
                      <div className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-white/60 bg-black/40 px-2 py-1 backdrop-blur-sm">
                        {work.category}
                      </div>

                      {/* 호버 오버레이 — 제목 */}
                      <div
                        className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300"
                        style={{ opacity: isHovered ? 1 : 0 }}
                      >
                        <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">{work.client}</p>
                        <p className="text-base font-bold text-white leading-tight">{work.title}</p>
                        <p className="text-[11px] text-white/40 mt-1">{work.year} · {work.duration}</p>
                      </div>

                      {/* 평상시 클라이언트명 */}
                      <div
                        className="absolute bottom-0 left-0 right-0 px-5 py-4 transition-opacity duration-300"
                        style={{ opacity: isHovered ? 0 : 1 }}
                      >
                        <p className="text-[11px] tracking-wider text-white/60">{work.client}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
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
