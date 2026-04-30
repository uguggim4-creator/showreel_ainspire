import HeroCarousel from "@/components/HeroCarousel";
import GalleryScroll from "@/components/GalleryScroll";
import { MarqueeBand, AboutPreview, SloganSection, Footer } from "@/components/HomeExtras";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <MarqueeBand />
      <GalleryScroll />
      <AboutPreview />
      <SloganSection />
      <Footer />
    </main>
  );
}
