"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

export default function WorksPage() {
  // 데이터에서 카테고리 동적 추출 (중복 제거 + 정렬)
  const categories = useMemo(() => {
    const set = new Set(works.map((w) => w.category));
    return ["ALL", ...Array.from(set)];
  }, []);

  const [selected, setSelected] = useState<string>("ALL");

  const filteredWorks = useMemo(
    () => (selected === "ALL" ? works : works.filter((w) => w.category === selected)),
    [selected]
  );

  return (
    <main
      className="min-h-screen bg-[#0a0a0a] px-6 md:px-16 lg:px-20"
      style={{ paddingTop: "60px", paddingBottom: "50px" }}
    >
      {/* Title */}
      <div style={{ marginBottom: "0" }} className="overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(4rem,12vw,12rem)] font-black tracking-tighter text-white leading-none"
        >
          WORKS
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] w-full bg-white/10"
          style={{ originX: 0, marginTop: "30px" }}
        />
      </div>

      {/* Filter row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-6 flex-wrap items-center"
        style={{ marginTop: "10px", marginBottom: "50px" }}
      >
        {categories.map((cat) => {
          const isActive = selected === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`text-sm tracking-[0.2em] uppercase pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-[#F4E430] border-b border-[#F4E430]"
                  : "text-white/55 hover:text-white border-b border-transparent hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          );
        })}
        <span className="text-xs tracking-widest text-white/30 ml-auto font-mono">
          {String(filteredWorks.length).padStart(2, "0")} {filteredWorks.length === 1 ? "Work" : "Works"}
        </span>
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
        >
          {filteredWorks.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredWorks.length === 0 && (
        <div className="py-20 text-center text-white/40">
          해당 카테고리의 작업이 없습니다.
        </div>
      )}
    </main>
  );
}
