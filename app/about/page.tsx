"use client";

import { motion } from "framer-motion";

const team = [
  { name: "심보건", initials: "BK", role: "Creative Director", bio: "" },
  { name: "김욱종", initials: "WJ", role: "AI Visual Artist", bio: "" },
];

const values = [
  {
    number: "01",
    title: "영상의 본질",
    desc: "단순 튜토리얼이 아닌, 진짜 기획과 연출이 담긴 AI 영상 제작기를 나눕니다. 무엇을 어떻게 담아낼 것인가가 핵심입니다.",
  },
  {
    number: "02",
    title: "실전 크리에이티브",
    desc: "매주 업데이트되는 전문가 팟캐스트와 실전 AI 영상 제작 시리즈. 현업 영상 제작자의 노하우를 공유합니다.",
  },
  {
    number: "03",
    title: "AI 크리에이티브 허브",
    desc: "단순한 기능 설명을 넘어, AI를 활용한 실질적인 크리에이티브 솔루션을 제공하는 공간입니다.",
  },
];

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-[#0a0a0a]"
      style={{ paddingBottom: "50px" }} // 수정 시 SECTIONS.md 참조
      style={{
        paddingTop: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* Hero — ABOUT 타이틀 */}
      <section style={{ marginBottom: "10px" }}>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4rem,11vw,11rem)] font-black tracking-tighter text-white leading-none"
          >
            ABOUT
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0, marginTop: "30px" }}
            className="h-[1px] w-full bg-white/10"
          />
        </div>
      </section>

      {/* 소개 */}
      <section style={{ marginBottom: "20px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[11px] tracking-[0.4em] uppercase mb-5"
          style={{ color: "#F4E430" }}
        >
          Who We Are
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.2rem,2.4vw,2.4rem)] font-black tracking-tight text-white leading-[1.4]"
          >
            영상의 본질에 AI를 더하다
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/65 text-lg md:text-xl max-w-2xl leading-[1.9]"
          style={{ marginTop: "30px" }}
        >
          수많은 AI 툴이 쏟아지는 지금, 정말 중요한 것은
          &lsquo;무엇을 어떻게 담아낼 것인가&rsquo; 하는 영상의 본질입니다.
          AInspire는 단순한 기능 설명을 넘어, 현업 영상 제작자의 노하우를 바탕으로
          AI를 활용한 실질적인 크리에이티브 솔루션을 제공하는 AI 크리에이티브 허브입니다.
        </motion.p>
      </section>

      {/* Values */}
      <section style={{ marginBottom: "20px" }}>
        <div className="h-[1px] w-full bg-white/10" style={{ marginTop: "20px", marginBottom: "20px" }} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {values.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs tracking-widest text-[#F4E430] font-mono mb-6 block">
                {v.number}
              </span>
              <h3 className="text-2xl font-bold text-white mb-6">{v.title}</h3>
              <p className="text-white/65 text-base leading-[1.9]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission statement — 좌측 정렬 인용구 */}
      <section
        className="overflow-hidden relative border-t border-white/[0.06]"
        style={{ paddingTop: "20px", marginBottom: "20px" }}
      >
        {/* 우측 INSPIRE 워터마크 — 약하게 */}
        <div
          className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-black tracking-tighter"
            style={{
              fontSize: "clamp(6rem, 14vw, 16rem)",
              color: "rgba(255,255,255,0.025)",
              lineHeight: 0.85,
              whiteSpace: "nowrap",
              transform: "translateX(20%)",
            }}
          >
            INSPIRE
          </span>
        </div>

        <div className="relative z-10 max-w-5xl" style={{ paddingTop: "0", paddingBottom: "0" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.4em] uppercase font-semibold"
            style={{ color: "#F4E430", marginBottom: "15px" }}
          >
            Our Belief
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* 좌측 따옴표 마크 */}
            <span
              className="absolute -left-1 -top-6 md:-left-3 md:-top-10 font-black select-none pointer-events-none"
              style={{
                fontSize: "clamp(4rem, 7vw, 7rem)",
                color: "#F4E430",
                opacity: 0.35,
                lineHeight: 1,
              }}
              aria-hidden
            >
              &ldquo;
            </span>

            <p
              className="font-light text-white/90 leading-[1.4] pl-6 md:pl-10 whitespace-nowrap"
              style={{
                fontSize: "clamp(1.2rem, 2.4vw, 2.4rem)",
              }}
            >
              좋은 영상은 기술이 아니라,{" "}
              <em
                className="not-italic font-medium"
                style={{ color: "#F4E430" }}
              >
                시선
              </em>
              에서 나온다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 pl-6 md:pl-10"
            style={{ marginTop: "15px" }}
          >
            <span className="block w-10 h-[1px]" style={{ background: "#F4E430" }} />
            <span className="text-xs tracking-[0.35em] uppercase text-white/55 font-medium">
              AINSPIRE Studio
            </span>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
