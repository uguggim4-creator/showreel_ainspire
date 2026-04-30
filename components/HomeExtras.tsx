"use client";

import Link from "next/link";
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
          {"\""}크리에이티브가 멈추는 자리에서,
          <br />
          <span style={{ color: ACCENT }}>AI는 시작점이 됩니다.</span>
          {"\""}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs tracking-[0.4em] text-white/45 uppercase mb-16"
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

export function AboutPreview() {
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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(1.8rem,4vw,4.5rem)] font-black tracking-tight text-white leading-[1.05] max-w-3xl"
        >
          우리는 AI를 도구로,
          <br />
          <span style={{ color: ACCENT }}>크리에이티브</span>를 무기로
          <br />
          사용합니다.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase border border-white/20 px-8 py-4 text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
          >
            About more
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* 수치 행 */}
      <div className="mt-20 grid grid-cols-3 gap-px border border-white/10">
        {[
          { num: "120+", label: "Projects" },
          { num: "40+", label: "Clients" },
          { num: "18+", label: "Awards" },
        ].map((item) => (
          <div
            key={item.label}
            className="px-8 py-10 border-r border-white/10 last:border-r-0"
          >
            <p
              className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tighter leading-none mb-2"
              style={{ color: ACCENT }}
            >
              {item.num}
            </p>
            <p className="text-sm tracking-widest text-white/30 uppercase">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-[#0a0a0a] pb-10"
      style={{
        paddingTop: "50px",
        paddingLeft: "clamp(24px, 5vw, 96px)",
        paddingRight: "clamp(24px, 5vw, 96px)",
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-16">
        {/* Brand */}
        <div className="max-w-xs">
          <p className="text-xl font-black tracking-[0.2em] text-white mb-5">AINSPIRE</p>
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
                href="mailto:hello@ainspire.kr"
                className="text-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                hello@ainspire.kr
              </a>
              <p className="text-sm text-white/55">서울특별시 마포구</p>
              <p className="text-sm text-white/55">+82 10-0000-0000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row md:justify-between gap-3 pt-8 border-t border-white/10">
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
