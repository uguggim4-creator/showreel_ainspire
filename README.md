# AINSPIRE Portfolio

AI 영상 광고 크리에이티브 스튜디오 AINSPIRE 포트폴리오 사이트.

## 실행 방법

```bash
cd portfolio
npm install
npm run dev
```

http://localhost:3000 에서 확인.

## 콘텐츠 교체 방법

### 작품 데이터
`data/works.ts` 파일에서 works 배열을 수정합니다.
- `thumbnailColor`: Tailwind gradient 클래스 (placeholder)
- `videoUrl`: 실제 영상 경로 추가 시 `/videos/filename.mp4` 형식으로

### 영상/이미지 파일
- `public/videos/` 폴더에 mp4 파일을 추가
- `WorkDetailClient.tsx`와 `WorkCard.tsx`에서 `<video>` 태그로 교체

### 히어로 슬라이드
`data/works.ts`의 `heroSlides` 배열 수정.

## 페이지별 디자인 의도

| 페이지 | 의도 |
|--------|------|
| `/` | OVERMAN 스타일: 풀스크린 세로 캐러셀 + SVG 타이포 마스킹 |
| `/works` | 4IDEKICK 스타일: 3열 그리드, 호버 인터랙션 |
| `/works/[id]` | 풀폭 영상 영역 + 시네마틱 레이아웃 |
| `/about` | 큰 타이포 + belief + 팀 카드 |
| `/contact` | 미니멀 폼 + 연락처 |

## 기술 스택

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Embla Carousel (세로 슬라이드)
