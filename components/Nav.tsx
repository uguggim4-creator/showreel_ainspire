"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ACCENT = "#F4E430";

const navItems = [
  { label: "WORKS", href: "/works" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
        style={{ height: "72px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        {/* 배경 그라데이션 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.5) 60%, transparent 100%)",
          }}
        />

        {/* 로고 */}
        <Link
          href="/"
          onClick={close}
          className="relative z-10 text-sm font-bold tracking-[0.25em] text-white hover:text-[#F4E430] transition-colors duration-300"
        >
          AINSPIRE
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="relative z-10 hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? "text-[#F4E430]" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="relative z-10 flex md:hidden flex-col justify-center items-center w-10 h-10 gap-[5px]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-[1.5px] bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-[1.5px] bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-[1.5px] bg-white origin-center"
          />
        </button>
      </motion.nav>

      {/* 모바일 풀스크린 오버레이 메뉴 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex flex-col md:hidden"
            style={{ background: "rgba(10,10,10,0.97)" }}
            onClick={close}
          >
            {/* 메뉴 아이템 — 수직 중앙 (클릭 전파 차단) */}
            <div className="flex flex-col justify-center flex-1 px-8 gap-2" onClick={(e) => e.stopPropagation()}>
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.3, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block py-4 border-b border-white/10"
                    >
                      <span
                        className="text-[11px] tracking-[0.35em] uppercase mb-1 block"
                        style={{ color: isActive ? ACCENT : "rgba(255,255,255,0.3)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-4xl font-black tracking-tighter transition-colors duration-200"
                        style={{ color: isActive ? ACCENT : "white" }}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* 하단 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="px-8 pb-12 flex items-center justify-between"
            >
              <p className="text-xs text-white/25 tracking-widest">fraverse.ai@gmail.com</p>
              <p className="text-xs text-white/25 tracking-widest">© 2026 AINSPIRE</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
