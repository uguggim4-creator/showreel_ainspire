"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  youtubeId: string;
  title: string;
  thumbnail?: string;
}

export default function LazyYouTube({ youtubeId, title, thumbnail }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    );
  }

  const thumbSrc = thumbnail || `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="absolute inset-0 w-full h-full group cursor-pointer"
      aria-label={`${title} 영상 재생`}
    >
      <Image
        src={thumbSrc}
        alt={title}
        fill
        sizes="(max-width: 896px) 100vw, 896px"
        className="object-cover"
        style={{ filter: "brightness(0.55)" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-sm bg-black/40 group-hover:border-[#F4E430] group-hover:bg-black/60 transition-all duration-300">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <polygon points="7,4 18,11 7,18" fill="white" fillOpacity="0.95" />
          </svg>
        </div>
      </div>
    </button>
  );
}
