"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const ACCENT = "#F4E430";

const marqueeItems = [
  "[Announcement] AInspire 4기 — Coming Soon",
  "[Recruiting] AI 크리에이티브 4기 곧 시작됩니다",
  "지원 시작 알림 받기 → @ainspire_kr",
  "3기 워크와 함께 보는 4기 프리뷰",
  "이미지·영상 생성, 실전 파이프라인까지 — 4기에서",
  "[Coming] AInspire Season 4",
];

// 마퀴 아이템 2배로 복제 (끊김 없는 루프)
const duplicated = [...marqueeItems, ...marqueeItems];

export function MarqueeBand() {
  return (
    <div
      className="w-full py-3 overflow-hidden flex items-center"
      style={{ background: ACCENT }}
    >
      <div className="marquee-track flex items-center gap-0 whitespace-nowrap">
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="text-[#0a0a0a] text-sm font-bold tracking-wide"
            style={{ paddingLeft: "3rem" }}
          >
            {item}
            <span className="ml-12 opacity-30">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// 클라이언트 로고 띠 — 가로 무한 스크롤
const clients = [
  "ACME Corp", "Nova Fashion", "TechFlow", "GreenEarth",
  "Lumina Media", "SOMA Records", "BrewMaster", "Stellar Events",
  "Indie Studio X", "BluePort", "Verge & Co.", "Atlas Mobility",
  "MIRO Beauty", "PUNCH Coffee", "Helio Labs",
];
const clientsLoop = [...clients, ...clients];

export function ClientsBand() {
  return (
    <section className="bg-[#0a0a0a] py-28 border-t border-white/5">
      <div
        className="mb-16"
        style={{
          paddingLeft: "clamp(24px, 5vw, 96px)",
          paddingRight: "clamp(24px, 5vw, 96px)",
        }}
      >
        <p className="text-[11px] tracking-[0.4em] uppercase mb-5" style={{ color: ACCENT }}>
          Trusted By
        </p>
        <h3 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-black tracking-tight text-white leading-[1.2] max-w-3xl">
          AINSPIRE와 함께한<br />
          <span style={{ color: ACCENT }}>40+ 브랜드</span>
        </h3>
      </div>
      {/* 가로 무한 스크롤 */}
      <div className="overflow-hidden relative">
        <div className="flex gap-px marquee-track-slow whitespace-nowrap">
          {clientsLoop.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-12 py-10 border-r border-white/5 flex items-center justify-center min-w-[260px]"
            >
              <span className="text-base md:text-lg tracking-wider text-white/35 hover:text-[#F4E430] transition-colors duration-300 font-medium">
                {c}
              </span>
            </div>
          ))}
        </div>
        {/* 좌우 페이드 */}
        <div className="absolute top-0 left-0 bottom-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to right, #0a0a0a 0%, transparent 100%)" }} />
        <div className="absolute top-0 right-0 bottom-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to left, #0a0a0a 0%, transparent 100%)" }} />
      </div>
    </section>
  );
}

export function SloganSection() {
  return (
    <section
      className="bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden border-t border-white/5"
      style={{ paddingTop: "50px", paddingBottom: "50px" }}
    >
      {/* 배경 워터마크 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.025]" aria-hidden>
        <span
          className="font-black tracking-tighter"
          style={{
            fontSize: "clamp(8rem, 22vw, 24rem)",
            color: ACCENT,
            lineHeight: 0.85,
            whiteSpace: "nowrap",
          }}
        >
          AINSPIRE
        </span>
      </div>
      <div
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{
          paddingLeft: "clamp(24px, 5vw, 96px)",
          paddingRight: "clamp(24px, 5vw, 96px)",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(1.4rem,3vw,3rem)] font-light text-white/85 leading-[1.6] mb-12"
        >
          {"\""}영상의 본질에{" "}
          <span style={{ color: ACCENT }}>AI를 더하다</span>
          {"\""}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs tracking-[0.4em] text-white/45 uppercase"
          style={{ marginBottom: "30px" }}
        >
          — AINSPIRE Studio
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="inline-block"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center w-44 h-44 md:w-52 md:h-52 rounded-full border-2 transition-all duration-500 hover:scale-105"
            style={{ borderColor: ACCENT }}
          >
            <span className="flex flex-col items-center gap-2">
              <span
                className="text-base md:text-lg font-bold tracking-[0.2em] uppercase transition-colors duration-300"
                style={{ color: ACCENT }}
              >
                Contact us
              </span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 14h18M16 7l7 7-7 7" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const studentWorks = [
  { id: "s-9", title: "CODE:42 [ RIA 리아 ] \"O.O\" Official M/V", author: "Aidol Company", youtubeId: "6K2QFZNBvEs" },
  { id: "s-1", title: "Miserere tui (미제레레 투이: 네게 자비를)", author: "OYR Film", youtubeId: "5IqDABPvH-0" },
  { id: "s-2", title: "YASI : The Night Market of Joseon", author: "OYR Film", youtubeId: "mwyK-JzGmQo" },
  { id: "s-3", title: "전통과 미래가 공존하는 곳, 대한민국 도시의 숨겨진 비주얼", author: "AI드라마", youtubeId: "lF2i-lcInXY" },
  { id: "s-5", title: "The Path of Ink, the Path of Australia", author: "AI MOTION LAB", youtubeId: "v_L2aWGk97Y" },
  { id: "s-6", title: "BLOOD RITE — BLOODPRINT Universe", author: "ecaia", youtubeId: "ePNUOOk-sUk" },
  { id: "s-7", title: "사라진 지붕을 찾아라! — 꼬마탐정 포포", author: "승희쌤", youtubeId: "UI-CtxawYQw" },
  { id: "s-8", title: "엠버 [Ember] EP.1 Among the Strays", author: "Node 8", youtubeId: "WoJRO_md8DU" },
  { id: "s-10", title: "시간을 고치는 사람 — 통합본", author: "AI드라마", youtubeId: "Z643PSR8KAY" },
  { id: "s-11", title: "[Knight Run Fan MV] BLUE ASH (Korean Ver.)", author: "sputlab", youtubeId: "VXXewv3_fU0" },
  { id: "s-4", title: "사이버펑크 2077 — 프라이빗 가이세키", author: "NPC의 뒷이야기", youtubeId: "I5uSkFdD-K0" },
];

export function StudentGallery() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    dragFree: true,
    loop: false,
    align: "start",
  });
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    setProgress(Math.max(0, Math.min(1, emblaApi.scrollProgress())));
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-[11px] tracking-[0.4em] mb-5 uppercase" style={{ color: ACCENT }}>
          Student Works
        </p>
        <h3 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-black tracking-tight text-white leading-[1.2]">
          AInspire 수강생 갤러리
        </h3>
      </motion.div>

      <div className="relative">
        <button
          onClick={scrollPrev}
          aria-label="Prev"
          className="hidden md:flex items-center justify-center w-11 h-11 border border-white/20 text-white/40 hover:border-white/60 hover:text-white transition-colors duration-300"
          style={{ position: "absolute", top: "50%", left: "-20px", transform: "translateY(-50%)", zIndex: 10, background: "rgba(10,10,10,0.8)", backdropFilter: "blur(4px)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next"
          className="hidden md:flex items-center justify-center w-11 h-11 border border-white/20 text-white/40 hover:border-white/60 hover:text-white transition-colors duration-300"
          style={{ position: "absolute", top: "50%", right: "-20px", transform: "translateY(-50%)", zIndex: 10, background: "rgba(10,10,10,0.8)", backdropFilter: "blur(4px)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <div className="embla-gallery" ref={emblaRef} style={{ overflow: "hidden", width: "100%" }}>
          <div className="embla-gallery__container" style={{ display: "flex", flexDirection: "row", alignItems: "stretch", flexWrap: "nowrap", touchAction: "pan-y pinch-zoom" }}>
            {studentWorks.map((work) => (
              <div
                key={work.id}
                className="embla-gallery__slide"
                style={{ flex: "0 0 auto", width: "clamp(300px, 30vw, 450px)", minWidth: 0, marginRight: "16px" }}
              >
                <div className="relative aspect-video overflow-hidden bg-[#111] group">
                  {playingId === work.id ? (
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
                      onClick={() => setPlayingId(work.id)}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                      aria-label={`${work.title} 재생`}
                    >
                      <Image
                        src={`https://i.ytimg.com/vi/${work.youtubeId}/maxresdefault.jpg`}
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
                    </button>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white">{work.title}</p>
                  <p className="text-xs text-white/40 mt-1">{work.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 진행바 */}
      <div className="mt-6">
        <div className="relative h-[1px] bg-white/10 w-full">
          <div className="absolute top-0 left-0 h-full transition-all duration-75" style={{ width: `${progress * 100}%`, background: ACCENT }} />
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section
      className="bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden"
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "clamp(24px, 5vw, 96px)",
        paddingRight: "clamp(24px, 5vw, 96px)",
      }}
    >
      {/* 배경 워터마크 */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-black tracking-tighter"
          style={{
            fontSize: "clamp(8rem, 22vw, 24rem)",
            color: "rgba(255,255,255,0.02)",
            lineHeight: 0.85,
            whiteSpace: "nowrap",
            transform: "translateX(10%)",
          }}
        >
          AINSPIRE
        </span>
      </div>

      <div className="relative z-10">
        {/* 메인 카피 */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(1.8rem,4vw,4.5rem)] font-black tracking-tight text-white leading-[1.05] max-w-3xl"
          style={{ marginBottom: "40px" }}
        >
          우리는 AI를 도구로,
          <br />
          <span style={{ color: ACCENT }}>크리에이티브</span>를 무기로
          <br />
          사용합니다.
        </motion.h2>

        {/* 슬로건 + Contact us — 가운데 정렬 */}
        <div className="text-center" style={{ marginTop: "80px" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(1.4rem,3vw,3rem)] font-light text-white/85 leading-[1.6] mb-12"
          >
            {"\u201C"}영상의 본질에{" "}
            <span style={{ color: ACCENT }}>AI를 더하다</span>
            {"\u201D"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs tracking-[0.4em] text-white/45 uppercase"
            style={{ marginBottom: "30px" }}
          >
            — AINSPIRE Studio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center w-44 h-44 md:w-52 md:h-52 rounded-full border-2 transition-all duration-500 hover:scale-105"
              style={{ borderColor: ACCENT }}
            >
              <span className="flex flex-col items-center gap-2">
                <span
                  className="text-base md:text-lg font-bold tracking-[0.2em] uppercase"
                  style={{ color: ACCENT }}
                >
                  Contact us
                </span>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 14h18M16 7l7 7-7 7" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-[#0a0a0a]"
      style={{
        paddingTop: "25px",
        paddingBottom: "0",
        paddingLeft: "clamp(24px, 5vw, 96px)",
        paddingRight: "clamp(24px, 5vw, 96px)",
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-12" style={{ marginBottom: "30px" }}>
        {/* Brand */}
        <div className="max-w-xs">
          <Image
            src="/images/logo-white.png"
            alt="AInspire"
            width={140}
            height={35}
            className="h-7 w-auto"
            style={{ marginBottom: "10px" }}
          />
          <p className="text-sm text-white/55 leading-relaxed">
            AI 영상 광고 크리에이티브 스튜디오.<br />
            AI와 크리에이티브의 경계를 허물다.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16 flex-wrap">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-5">Navigate</p>
            <div className="flex flex-col gap-4">
              {["Works", "About", "Contact"].map((l) => (
                <Link
                  key={l}
                  href={`/${l.toLowerCase()}`}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-5">Social</p>
            <div className="flex flex-col gap-4">
              {[
                { label: "Website", href: "https://www.ainspire.co.kr/" },
                { label: "YouTube", href: "https://www.youtube.com/@AInspire_kr" },
                { label: "Instagram", href: "https://www.instagram.com/ainspire_kr/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-5">Contact</p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:gun@ainspire.co.kr"
                className="text-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                gun@ainspire.co.kr
              </a>
              <p className="text-sm text-white/55">서울시 마포구 성지길 25-11 3층 A115호</p>
              <p className="text-sm text-white/55">02-6048-3032</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div
        className="flex flex-col md:flex-row md:justify-between gap-3 border-t border-white/10"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <p className="text-xs text-white/40 tracking-wider">
          © 2026 AINSPIRE. All rights reserved.
        </p>
        <p className="text-xs text-white/40 tracking-wider">
          AI Creative Studio — Seoul, Korea
        </p>
      </div>
    </footer>
  );
}
