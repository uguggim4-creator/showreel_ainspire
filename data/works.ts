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
];

export const heroSlides = [
  {
    id: 1,
    headline: "AI × CREATIVE",
    subline: "우리는 새로운 광고를 만듭니다",
    description: "AI와 크리에이티브의 경계를 허물다",
    videoSrc: "/videos/hero-1.mp4",
  },
  {
    id: 2,
    headline: "발레리나",
    subline: "AInspire Original — AI Short Film",
    description: "이미지 생성 없이 만든 1분 AI 숏필름",
    videoSrc: "/videos/hero-2.mp4",
  },
  {
    id: 3,
    headline: "Honda Motorcycle",
    subline: "Spec Commercial — AI Parody",
    description: "AI만으로 완성한 4K 모터사이클 광고",
    videoSrc: "/videos/hero-3.mp4",
  },
];
