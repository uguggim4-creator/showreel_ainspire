"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Work } from "@/data/works";

interface WorkCardProps {
  work: Work;
  index: number;
}

export default function WorkCard({ work, index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
    >
      <Link href={`/works/${work.id}`} className="block group">
        {/* 썸네일 — 16:9 */}
        <div className="relative aspect-video overflow-hidden mb-4">
          {/* 실제 이미지 */}
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* 하단 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* 호버 오버레이 */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm tracking-[0.2em] font-medium border border-white/50 px-6 py-2">
              ▶ PLAY
            </span>
          </div>

          {/* duration 배지 */}
          <div className="absolute bottom-3 right-3 text-xs text-white/70 tracking-widest font-mono bg-black/50 px-2 py-0.5 backdrop-blur-sm">
            {work.duration}
          </div>

          {/* 카테고리 배지 */}
          <div className="absolute top-3 left-3 text-[10px] tracking-widest uppercase text-white/60 bg-black/40 px-2 py-1 backdrop-blur-sm">
            {work.category}
          </div>
        </div>

        {/* 정보 */}
        <div>
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-sm font-semibold tracking-wide text-white group-hover:text-[#F4E430] transition-colors duration-300">
              {work.title}
            </h3>
            <span className="text-[10px] tracking-widest text-white/30 uppercase ml-4 mt-0.5 whitespace-nowrap">
              {work.year}
            </span>
          </div>
          <p className="text-xs text-white/40 tracking-wider">
            {work.client}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
