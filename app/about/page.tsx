"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Kim Jae-won", initials: "CD", role: "Creative Director", bio: "10년 경력의 광고 감독. AI 도구를 활용한 새로운 비주얼 언어를 개척하고 있습니다." },
  { name: "Lee Su-bin", initials: "VA", role: "AI Visual Artist", bio: "Stable Diffusion, Midjourney 등 생성 AI를 활용한 개념 미술 및 광고 비주얼을 제작합니다." },
  { name: "Park Min-jun", initials: "MD", role: "Motion Designer", bio: "After Effects, Premiere Pro를 기반으로 AI 생성 콘텐츠를 영상으로 완성합니다." },
  { name: "Choi Ye-rin", initials: "PR", role: "Producer", bio: "기획부터 납품까지 프로젝트 전체 파이프라인을 관장합니다." },
];

const values = [
  {
    number: "01",
    title: "AI는 도구다",
    desc: "AI는 크리에이티브를 대체하지 않습니다. 우리는 AI를 붓처럼 사용해 더 빠르고 대담한 아이디어를 실현합니다.",
  },
  {
    number: "02",
    title: "이야기가 먼저다",
    desc: "기술보다 감동이 우선입니다. 어떤 도구를 쓰든 결국 사람의 마음을 움직이는 이야기가 목표입니다.",
  },
  {
    number: "03",
    title: "경계를 허물다",
    desc: "광고, 영화, 아트. 장르의 경계를 허물고 전혀 새로운 형식의 크리에이티브를 만듭니다.",
  },
];

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-[#0a0a0a] pb-40"
      style={{
        paddingTop: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* Hero statement */}
      <section style={{ marginBottom: "20px" }}>
        <div className="mb-20 overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4rem,11vw,11rem)] font-black tracking-tighter text-white leading-none"
          >
            ABOUT
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.2rem,2.4vw,2.4rem)] font-black tracking-tight text-white leading-[1.4] whitespace-nowrap"
          >
            우리는 AI를 도구로, 크리에이티브를 무기로 사용합니다.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/65 text-lg md:text-xl mt-16 max-w-2xl leading-[1.9]"
        >
          AINSPIRE는 AI와 크리에이티브 기술을 결합해 브랜드의 이야기를
          새로운 방식으로 전달하는 크리에이티브 스튜디오입니다.
          우리는 아이디어가 기술의 한계를 넘어설 수 있다고 믿습니다.
        </motion.p>
      </section>

      {/* Values */}
      <section style={{ marginBottom: "20px" }}>
        <div className="h-[1px] w-full bg-white/10 mb-20" />
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
        className="overflow-hidden relative pt-32 border-t border-white/[0.06]"
        style={{ marginBottom: "240px" }}
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

        <div className="relative z-10 py-20 md:py-28 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.4em] mb-10 uppercase font-semibold"
            style={{ color: "#F4E430" }}
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
              새로운 광고는 보는 것이 아니라{" "}
              <em
                className="not-italic font-medium"
                style={{ color: "#F4E430" }}
              >
                느끼는 것
              </em>
              이다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 flex items-center gap-4 pl-6 md:pl-10"
          >
            <span className="block w-10 h-[1px]" style={{ background: "#F4E430" }} />
            <span className="text-xs tracking-[0.35em] uppercase text-white/55 font-medium">
              AINSPIRE Studio
            </span>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="h-[1px] w-full bg-white/10 mb-20" />
        <p className="text-xs tracking-[0.4em] text-white/55 uppercase mb-16">Team</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              {/* Avatar placeholder */}
              <div className="aspect-square bg-white/[0.04] border border-white/10 mb-6 relative overflow-hidden group-hover:border-[#F4E430]/40 transition-colors duration-300">
                {/* 미세한 그라데이션 — 톤 통일 */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(244,228,48,0.06) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-black text-white/30 group-hover:text-[#F4E430]/80 transition-colors duration-300 tracking-tight">
                    {member.initials}
                  </span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-xs text-[#F4E430] tracking-wider mb-3">{member.role}</p>
              <p className="text-sm text-white/55 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
