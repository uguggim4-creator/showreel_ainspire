# AInspire Portfolio — 섹션 가이드

> 수정 요청 시 아래 **섹션 이름**으로 지칭하면 어디를 고쳐야 할지 바로 찾습니다.
> 각 섹션의 **파일 경로**와 **수정 가능한 항목**을 정리했습니다.

---

## 📄 페이지 단위

### 1. 메인 페이지 (`/`)
**파일**: [app/page.tsx](app/page.tsx) → 6개 섹션 조합

| 섹션 이름 | 파일 | 내용 |
|---|---|---|
| **Hero Carousel** | [components/HeroCarousel.tsx](components/HeroCarousel.tsx) | 첫 화면 풀스크린 영상 슬라이드 |
| **Marquee Band** | [components/HomeExtras.tsx](components/HomeExtras.tsx) `MarqueeBand` | 노란색 흐르는 텍스트 띠 |
| **Gallery Scroll** | [components/GalleryScroll.tsx](components/GalleryScroll.tsx) | Portfolio "See What We Create" 가로 스크롤 |
| **About Preview** | [components/HomeExtras.tsx](components/HomeExtras.tsx) `AboutPreview` | "도구로, 무기로" + 통계 (120+, 40+, 18+) |
| **Slogan Section** | [components/HomeExtras.tsx](components/HomeExtras.tsx) `SloganSection` | "크리에이티브가 멈추는 자리에서" + Contact us 버튼 |
| **Footer** | [components/HomeExtras.tsx](components/HomeExtras.tsx) `Footer` | 브랜드/링크/연락처/카피라이트 |

### 2. Works 리스트 (`/works`)
**파일**: [app/works/page.tsx](app/works/page.tsx)
- 큰 "WORKS" 타이틀
- 카테고리 필터 (ALL / AI Short Film / Brand Film 등)
- 카드 그리드 (3열)

### 3. Work 상세 (`/works/[id]`)
**파일**: [app/works/[id]/WorkDetailClient.tsx](app/works/[id]/WorkDetailClient.tsx)
- 풀폭 히어로 이미지 + 타이틀
- YouTube 임베드 영역 (썸네일 → 클릭 재생)
- 메타 정보 그리드 (Client / Category / Year / Duration)
- 설명 + 다음 작업 링크

### 4. About (`/about`)
**파일**: [app/about/page.tsx](app/about/page.tsx)
- 큰 "ABOUT" 타이틀
- Hero statement (한글 슬로건)
- Values (3개)
- Mission ("새로운 광고는 보는 것이 아니라 느끼는 것이다")
- Team (4명 카드)

### 5. Contact (`/contact`)
**파일**: [app/contact/page.tsx](app/contact/page.tsx)
- 큰 "CONTACT" 타이틀
- 좌: 연락처 정보 (Email / Tel / Location / Website / YouTube / Instagram)
- 우: 문의 폼

---

## 🧩 전역 컴포넌트

| 컴포넌트 | 파일 | 역할 |
|---|---|---|
| **Nav (헤더)** | [components/Nav.tsx](components/Nav.tsx) | 모든 페이지 상단 네비. 로고 + WORKS/ABOUT/CONTACT |
| **LazyYouTube** | [components/LazyYouTube.tsx](components/LazyYouTube.tsx) | 썸네일 → 클릭 시 iframe 재생 |
| **WorkCard** | [components/WorkCard.tsx](components/WorkCard.tsx) | Works 리스트 카드 (16:9) |

---

## 📊 데이터

### Works 데이터 (9개)
**파일**: [data/works.ts](data/works.ts)

| 필드 | 설명 |
|---|---|
| `id` | URL slug (예: `ballerina-ai-shortfilm`) |
| `title` | 작품 제목 |
| `client` | 클라이언트명 (또는 "AInspire Original") |
| `category` | AI Short Film / Brand Film / Spec Commercial / Music Video / Cinematic Scene / Concept Film |
| `year` | 연도 |
| `duration` | 영상 길이 (예: "01:00") |
| `description` | 설명 (Work 상세 페이지) |
| `youtubeId` | YouTube 영상 ID |
| `thumbnail` | 자동으로 YouTube 썸네일 사용 |

### Hero Carousel 슬라이드
**파일**: [data/works.ts](data/works.ts) `heroSlides` (3개)
- `headline`, `subline`, `description`, `videoSrc`

### Marquee 텍스트
**파일**: [components/HomeExtras.tsx](components/HomeExtras.tsx) 상단 `marqueeItems` 배열

### Clients/Brands 띠 (현재 비활성)
> 메인 페이지에서 ClientsBand는 제거됨. 필요 시 [components/HomeExtras.tsx](components/HomeExtras.tsx) `ClientsBand` 함수 + [app/page.tsx](app/page.tsx) import 복구.

---

## 🎨 공통 디자인 토큰

| 항목 | 값 |
|---|---|
| 메인 배경 | `#0a0a0a` |
| 액센트 컬러 | `#F4E430` (포인트 노랑) |
| 폰트 | Pretendard Variable, Inter |
| 섹션 좌우 패딩 | 메인 페이지: `clamp(24px, 5vw, 96px)` / about·works·contact: `clamp(24px, 5vw, 96px)` |
| 섹션 상하 패딩 | 메인 페이지 섹션 간 간격 = 50px씩 (총 100px) |
| Nav 높이 | 72px |
| 페이지 paddingTop | works/about/contact = 60px |

---

## ✏️ 수정 요청 예시

**좋은 예** (바로 어디인지 파악됨):
- "**Marquee Band**의 4번째 멘트 바꿔줘"
- "**Gallery Scroll** 카드 너비 더 크게"
- "**Footer**의 Contact 영역에서 전화번호 빼줘"
- "**About 페이지**의 Team 4명을 6명으로 늘려줘"
- "**Slogan Section** 인용구 폰트 더 크게"
- "**Hero Carousel** 첫 번째 슬라이드 영상 교체"
- "**Works 카드**의 호버 효과 다른 걸로"

**모호한 예** (다시 물어봄):
- "위에 있는 거 바꿔줘" → 어느 페이지의 어느 섹션?
- "노란 부분 색깔 바꿔" → Marquee Band? 아니면 액센트 전체?

---

## 🔧 자주 수정하는 것들 — 빠른 위치

| 무엇을 | 어디서 |
|---|---|
| 마퀴 멘트 | [HomeExtras.tsx](components/HomeExtras.tsx) `marqueeItems` |
| 9개 작품 데이터 | [works.ts](data/works.ts) |
| 카테고리 종류 | [works.ts](data/works.ts) 각 work의 `category` 필드 |
| 슬로건 ("크리에이티브가 멈추는...") | [HomeExtras.tsx](components/HomeExtras.tsx) `SloganSection` |
| About 페이지 Team 멤버 | [about/page.tsx](app/about/page.tsx) `team` 배열 |
| About 페이지 Values 3개 | [about/page.tsx](app/about/page.tsx) `values` 배열 |
| Contact 정보 | [contact/page.tsx](app/contact/page.tsx) `contactInfo` 배열 |
| 소셜 링크 (Footer) | [HomeExtras.tsx](components/HomeExtras.tsx) Footer 안 |
| Nav 메뉴 | [Nav.tsx](components/Nav.tsx) `navItems` |
| 색상 / 폰트 | [app/globals.css](app/globals.css) `:root` |
