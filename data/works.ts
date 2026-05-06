export interface Work {
  id: string;
  title: string;
  client: string;
  category: string;
  year: number;
  duration: string;
  description: string;
  thumbnail: string;
  thumbnailColor: string;
  videoUrl?: string;
  youtubeId?: string;
}

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const works: Work[] = [
  // ── 히어로 영상 (맨 앞) ──
  {
    id: "yellow-ep01",
    title: "Yellow Ep01",
    client: "AInspire Original Series",
    category: "AI Short Film",
    year: 2025,
    duration: "01:00",
    description:
      "AInspire 오리지널 시리즈 Yellow 첫 번째 에피소드. 평범한 직장인이 동료를 잡아먹는 충격적 설정을 AI 영상으로 풀어낸 실험적 숏필름.",
    youtubeId: "yMTES7fYTQo",
    thumbnail: yt("yMTES7fYTQo"),
    thumbnailColor: "from-yellow-900 via-amber-800 to-orange-900",
  },
  {
    id: "ikea-green-sanctuary",
    title: "IKEA — Green Sanctuary",
    client: "IKEA (Spec Ad)",
    category: "Spec Commercial",
    year: 2025,
    duration: "00:30",
    description:
      "이케아 AI 가상 광고 시리즈. 숲을 품은 내추럴 거실 — 자연 소재와 따뜻한 조명이 어우러진 공간을 4K AI 영상으로 완성했습니다.",
    youtubeId: "8-MPqdavaO4",
    thumbnail: yt("8-MPqdavaO4"),
    thumbnailColor: "from-green-900 via-emerald-800 to-teal-900",
  },
  {
    id: "ikea-vivid-kitsch",
    title: "IKEA — Vivid Kitsch",
    client: "IKEA (Spec Ad)",
    category: "Spec Commercial",
    year: 2025,
    duration: "00:30",
    description:
      "이케아 AI 가상 광고 시리즈. 도파민이 터지는 키치한 놀이터 — 대담한 색감과 팝아트 감성의 인테리어를 4K AI 영상으로 구현했습니다.",
    youtubeId: "IP2DcE_CJqg",
    thumbnail: yt("IP2DcE_CJqg"),
    thumbnailColor: "from-fuchsia-900 via-pink-800 to-rose-900",
  },
  {
    id: "kling-21-ai-ad",
    title: "Kling 2.1 AI 광고",
    client: "AInspire Original",
    category: "Spec Commercial",
    year: 2025,
    duration: "00:30",
    description:
      "Kling 2.1 성능 테스트. 클링 단일 모델만으로 AI 광고를 제작하면 어디까지 가능한지 실험한 워크.",
    youtubeId: "UrSZirS15yk",
    thumbnail: yt("UrSZirS15yk"),
    thumbnailColor: "from-cyan-900 via-blue-800 to-indigo-900",
  },
  // ── 기존 작품 ──
  {
    id: "hercules-vs-zeus",
    title: "헤라클레스 vs 제우스",
    client: "AInspire Original",
    category: "Cinematic Scene",
    year: 2025,
    duration: "00:45",
    description:
      "Seedance 2.0 기반 4K AI 시네마틱 시퀀스. 헤라클레스가 제우스를 꺾는 신화적 장면을 AI 영상으로 구현한 워크 — 신화 IP와 AI 비디오 모델의 결합 가능성을 탐구합니다.",
    youtubeId: "OL3uQbpAbpw",
    thumbnail: yt("OL3uQbpAbpw"),
    thumbnailColor: "from-cyan-900 via-teal-800 to-emerald-900",
  },
  {
    id: "versailles-korean-women",
    title: "베르사유의 세 한국 여인",
    client: "AInspire Original",
    category: "Concept Film",
    year: 2025,
    duration: "00:30",
    description:
      "18세기 베르사유 궁전에 한국 여인 셋을 데려다 놓으면 어떤 일이 벌어질까? 시대와 문화를 비틀어 AI로 재구성한 시각 실험 — 의상, 공간, 표정의 디테일을 AI로 정교하게 빚어낸 컨셉 필름.",
    youtubeId: "Ju4wFVfbtzY",
    thumbnail: yt("Ju4wFVfbtzY"),
    thumbnailColor: "from-green-900 via-emerald-800 to-teal-900",
  },
  {
    id: "ballerina-ai-shortfilm",
    title: "발레리나",
    client: "AInspire Original",
    category: "AI Short Film",
    year: 2025,
    duration: "01:00",
    description:
      "이미지 생성 없이 반자동화 파이프라인으로 만든 1분 AI 숏필름. 무용수의 동작과 감정을 AI 비디오 모델만으로 표현하는 실험적 작업이며, 제작 프롬프트와 워크플로우를 전면 공개해 AI 영상 제작 방법론을 공유합니다.",
    youtubeId: "bOesUv8ea9o",
    thumbnail: yt("bOesUv8ea9o"),
    thumbnailColor: "from-violet-900 via-purple-800 to-indigo-900",
  },
  {
    id: "cherry-blossom-last-train",
    title: "벚꽃 막차",
    client: "AInspire Original",
    category: "AI Short Film",
    year: 2025,
    duration: "01:00",
    description:
      "올해 벚꽃을 모니터 앞에서 보낸 사람들을 위한 감성 AI 숏필름. 봄의 기억, 놓친 순간, 그리고 다시 찾아온 계절의 감정을 AI 영상으로 재구성한 한 장의 시청각 엽서.",
    youtubeId: "gSSdj40AunE",
    thumbnail: yt("gSSdj40AunE"),
    thumbnailColor: "from-rose-900 via-pink-800 to-orange-900",
  },
  {
    id: "warmest-video-cold-ai",
    title: "차가운 AI로 만든 가장 따뜻한 영상",
    client: "AInspire",
    category: "Brand Film",
    year: 2025,
    duration: "00:30",
    description:
      "AInspire 연말 브랜드 필름 티저. \"차가운 기술로 가장 따뜻한 이야기를\"이라는 메시지로, AI라는 기술이 인간의 감정과 연결될 수 있음을 보여주는 한 해 마감 감사 영상.",
    youtubeId: "4yLFIKUCbUg",
    thumbnail: yt("4yLFIKUCbUg"),
    thumbnailColor: "from-amber-900 via-orange-800 to-red-900",
  },
  {
    id: "nano-banana-brand-film",
    title: "달콤한 영감의 순간",
    client: "Nano Banana Pro × AInspire",
    category: "Brand Film",
    year: 2025,
    duration: "01:30",
    description:
      "Nano Banana Pro와 함께한 AI 브랜드 필름의 비하인드 신. 제품의 세계관을 \"달콤한 영감\"이라는 키워드로 풀어낸 톤앤매너, 그리고 AI 기반 비주얼 빌드 과정을 공개합니다.",
    youtubeId: "UEwB32Ajkww",
    thumbnail: yt("UEwB32Ajkww"),
    thumbnailColor: "from-blue-900 via-indigo-800 to-purple-900",
  },
  {
    id: "honda-motorcycle-spec",
    title: "Honda Motorcycle — Spec Commercial",
    client: "Honda (Fan-made Spec)",
    category: "Spec Commercial",
    year: 2025,
    duration: "00:60",
    description:
      "Honda 모터사이클 가상 광고. 4K AI 패러디 숏필름 형식의 팬메이드 트리뷰트로, 실사 촬영 없이 AI만으로 모터사이클 광고 특유의 속도감, 거친 질감, 시네마틱 컬러를 구현했습니다.",
    youtubeId: "wO6YQaqZSAc",
    thumbnail: yt("wO6YQaqZSAc"),
    thumbnailColor: "from-yellow-900 via-amber-800 to-orange-900",
  },
  {
    id: "cosmetic-spec-ad",
    title: "가상 화장품 광고 공모전",
    client: "Spec Project",
    category: "Spec Commercial",
    year: 2025,
    duration: "00:45",
    description:
      "Veo3 / Kling 없이 LUMA · Higgsfield · Midjourney만으로 가상의 화장품 광고 공모전에 출품한다면? 한정된 AI 툴 조합으로 럭셔리 코스메틱 광고의 결을 완성한 실전 케이스 스터디.",
    youtubeId: "0pLx_2B3uyA",
    thumbnail: yt("0pLx_2B3uyA"),
    thumbnailColor: "from-fuchsia-900 via-pink-800 to-rose-900",
  },
  {
    id: "retro-music-video-ai",
    title: "AI Retro Music Video",
    client: "AInspire Original",
    category: "Music Video",
    year: 2025,
    duration: "03:00",
    description:
      "Midjourney v7 + Higgsfield + LUMA 조합으로 만든 레트로 뮤직비디오. 캐릭터 일관성을 어디까지 끌고 갈 수 있는지 한계를 시험한 워크로, AI 영상의 \"같은 사람 같은 장면\" 문제에 대한 실전 솔루션을 담았습니다.",
    youtubeId: "zmvhv-SHL_Q",
    thumbnail: yt("zmvhv-SHL_Q"),
    thumbnailColor: "from-slate-900 via-zinc-800 to-stone-900",
  },
  {
    id: "restaurant-ai-commercial",
    title: "AI Restaurant Commercial",
    client: "AInspire Original",
    category: "Spec Commercial",
    year: 2025,
    duration: "00:30",
    description:
      "21년 경력 전문가가 AI로 완성한 레스토랑 광고. Reve, LUMA, Gen4, Kling 등 멀티 AI 툴을 조합해 고급 레스토랑의 분위기와 요리를 시네마틱하게 담아냈습니다.",
    youtubeId: "cC8UYuRQt2c",
    thumbnail: yt("cC8UYuRQt2c"),
    thumbnailColor: "from-red-900 via-rose-800 to-pink-900",
  },
  {
    id: "summer-retro-ad-2025",
    title: "2025 Summer Retro Ad",
    client: "AInspire Original",
    category: "Spec Commercial",
    year: 2025,
    duration: "00:30",
    description:
      "Reve · Kling AI · Midjourney · Premiere Pro를 조합해 만든 레트로 감성 여름 광고. 빈티지 색감과 AI 비주얼의 만남으로 새로운 광고 미학을 실험합니다.",
    youtubeId: "zBcp3xItXC8",
    thumbnail: yt("zBcp3xItXC8"),
    thumbnailColor: "from-orange-900 via-yellow-800 to-amber-900",
  },
];

interface HeroSlide {
  id: number;
  headline: string;
  subline: string;
  description: string;
  videoSrc?: string;
  youtubeId?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    headline: "Yellow",
    subline: "AInspire Original Series — Ep01",
    description: "평범한 직장인이 동료를 잡아먹었습니다",
    videoSrc: "/videos/hero-yellow-web.mp4",
  },
  {
    id: 2,
    headline: "Green Sanctuary",
    subline: "IKEA AI Spec Ad — 숲을 품은 내추럴 거실",
    description: "AI가 그린 공간, 자연을 닮은 인테리어",
    videoSrc: "/videos/hero-green-sanctuary.mp4",
  },
  {
    id: 3,
    headline: "Vivid Kitsch",
    subline: "이케아 AI 가상 광고 — 도파민이 터지는 키치한 놀이터",
    description: "색감으로 말하는 AI 크리에이티브",
    videoSrc: "/videos/hero-vivid-kitsch.mp4",
  },
  {
    id: 4,
    headline: "Dior",
    subline: "AI Spec Commercial — Luxury Reimagined",
    description: "AI로 재해석한 럭셔리 브랜드의 세계관",
    videoSrc: "/videos/hero-dior.mp4",
  },
];
