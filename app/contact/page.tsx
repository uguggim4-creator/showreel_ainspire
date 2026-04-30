"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  { label: "Email", value: "hello@ainspire.kr", href: "mailto:hello@ainspire.kr" },
  { label: "Tel", value: "+82 10-0000-0000", href: "tel:+821000000000" },
  { label: "Location", value: "서울특별시 마포구 합정동", href: null },
  { label: "Website", value: "ainspire.co.kr", href: "https://www.ainspire.co.kr/" },
  { label: "YouTube", value: "@AInspire_kr", href: "https://www.youtube.com/@AInspire_kr" },
  { label: "Instagram", value: "@ainspire_kr", href: "https://www.instagram.com/ainspire_kr/" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", company: "", message: "" });
    setSubmitted(false);
  };

  return (
    <main
      className="min-h-screen bg-[#0a0a0a] pb-24"
      style={{
        paddingTop: "60px",
        paddingLeft: "clamp(24px, 5vw, 96px)",
        paddingRight: "clamp(24px, 5vw, 96px)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4rem,10vw,10rem)] font-black tracking-tighter text-white leading-none"
          >
            CONTACT
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-16 max-w-md">
              프로젝트 문의, 협업 제안, 또는 그냥 인사도 환영합니다.
              모든 메시지를 꼼꼼히 읽고 답변드립니다.
            </p>

            <div className="space-y-10">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-[11px] tracking-[0.3em] text-white/55 uppercase font-medium">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-[#F4E430] transition-colors duration-300 text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white/85 text-base">{item.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border border-[#F4E430]/40 bg-[#F4E430]/5 p-10 md:p-12 text-center"
              >
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="mx-auto mb-6">
                  <circle cx="22" cy="22" r="20" stroke="#F4E430" strokeWidth="1.5" />
                  <path d="M14 22l6 6 12-12" stroke="#F4E430" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-2xl md:text-3xl font-bold text-[#F4E430] mb-3 tracking-tight">
                  메시지가 전송되었습니다
                </p>
                <p className="text-white/65 text-base mb-8 leading-relaxed">
                  보내주신 내용을 꼼꼼히 검토하고<br />빠른 시일 내에 답변드리겠습니다.
                </p>
                <button
                  onClick={handleReset}
                  className="text-xs tracking-[0.3em] uppercase text-white/55 hover:text-[#F4E430] transition-colors duration-300 border-b border-white/20 hover:border-[#F4E430] pb-1"
                >
                  새 메시지 보내기
                </button>
              </motion.div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { name: "name", label: "이름 / Name", type: "text", placeholder: "홍길동" },
                { name: "email", label: "이메일 / Email", type: "email", placeholder: "you@example.com" },
                { name: "company", label: "회사 / Company (선택)", type: "text", placeholder: "ACME Corp" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-[11px] tracking-[0.3em] text-white/55 uppercase mb-3 font-medium">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-b border-white/25 py-4 text-white text-base placeholder-white/40 focus:outline-none focus:border-[#F4E430] transition-colors duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[11px] tracking-[0.3em] text-white/55 uppercase mb-3 font-medium">
                  프로젝트 유형 / Type
                </label>
                <select
                  name="type"
                  className="w-full bg-[#0a0a0a] border-b border-white/25 py-4 text-white/85 text-base focus:outline-none focus:border-[#F4E430] transition-colors duration-300"
                >
                  <option value="">선택해주세요</option>
                  <option value="brand-film">Brand Film</option>
                  <option value="campaign">Campaign</option>
                  <option value="commercial">Commercial</option>
                  <option value="music-video">Music Video</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.3em] text-white/55 uppercase mb-3 font-medium">
                  메시지 / Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="프로젝트에 대해 간략히 설명해주세요..."
                  className="w-full bg-transparent border-b border-white/25 py-4 text-white text-base placeholder-white/40 focus:outline-none focus:border-[#F4E430] transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full border border-white/25 py-5 text-sm md:text-base tracking-[0.2em] text-white hover:border-[#F4E430] hover:text-[#F4E430] transition-all duration-300 uppercase font-medium"
              >
                Send Message
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
