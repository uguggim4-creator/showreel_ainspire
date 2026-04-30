"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Work } from "@/data/works";
import LazyYouTube from "@/components/LazyYouTube";

interface Props {
  work: Work;
  nextWork: Work;
}

export default function WorkDetailClient({ work, nextWork }: Props) {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* 풀폭 이미지 히어로 */}
      <div className="relative w-full overflow-hidden" style={{ height: "80vh", maxHeight: "900px" }}>
        <Image
          src={work.thumbnail}
          alt={work.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* 좌우 그라데이션 오버레이 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.7) 100%)",
          }}
        />
        {/* 하단 텍스트 영역 */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 lg:px-20 pb-12 pt-32"
          style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)" }}
        >
          <div className="flex flex-wrap gap-4 mb-4 text-[11px] tracking-[0.3em] text-white/40 uppercase">
            <span>{work.category}</span>
            <span>·</span>
            <span>{work.client}</span>
            <span>·</span>
            <span>{work.year}</span>
            <span>·</span>
            <span className="font-mono">{work.duration}</span>
          </div>
          <h1
            className="font-black tracking-tighter text-white leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)" }}
          >
            {work.title}
          </h1>
        </div>
      </div>

      {/* 본문 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-6 md:px-16 lg:px-20 py-20"
      >
        {/* 영상 영역 — YouTube 임베드 (썸네일 → 클릭 시 재생) / videoUrl / placeholder */}
        <div className="relative aspect-video w-full overflow-hidden mb-16 bg-[#111]">
          {work.youtubeId ? (
            <LazyYouTube
              youtubeId={work.youtubeId}
              title={work.title}
              thumbnail={work.thumbnail}
            />
          ) : work.videoUrl ? (
            <video
              src={work.videoUrl}
              controls
              poster={work.thumbnail}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <>
              <Image
                src={work.thumbnail}
                alt={work.title + " preview"}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
                style={{ filter: "brightness(0.4)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm bg-black/20 hover:border-[#F4E430] transition-colors duration-300 cursor-pointer">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <polygon points="7,4 18,11 7,18" fill="white" fillOpacity="0.85" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.3em] uppercase text-white/40">
                Coming Soon
              </div>
            </>
          )}
        </div>

        {/* 메타 정보 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-white/10 mb-12">
          {[
            { label: "Client", value: work.client },
            { label: "Category", value: work.category },
            { label: "Year", value: String(work.year) },
            { label: "Duration", value: work.duration },
          ].map((item) => (
            <div key={item.label} className="px-5 py-6 border-r border-white/10 last:border-r-0">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-2">{item.label}</p>
              <p className="text-sm text-white/85 font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        {/* 설명 */}
        <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-20 max-w-3xl">
          {work.description}
        </p>

        <div className="h-[1px] w-full bg-white/10 mb-12" />

        {/* 다음 작업 */}
        <Link href={`/works/${nextWork.id}`} className="group flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-white/55 uppercase mb-2">다음 작업</p>
            <h3 className="text-2xl font-bold text-white group-hover:text-[#F4E430] transition-colors duration-300">
              {nextWork.title}
            </h3>
            <p className="text-sm text-white/55 mt-1">{nextWork.client} — {nextWork.category}</p>
          </div>
          <div
            className="w-12 h-12 flex items-center justify-center border text-white/40 transition-all duration-300 group-hover:text-[#F4E430] group-hover:border-[#F4E430]"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
      </motion.div>
    </main>
  );
}
