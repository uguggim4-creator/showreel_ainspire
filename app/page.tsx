import HeroCarousel from "@/components/HeroCarousel";
import GalleryScroll from "@/components/GalleryScroll";
import { MarqueeBand, StudentGallery, AboutPreview, SloganSection, Footer } from "@/components/HomeExtras";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <MarqueeBand />
      <GalleryScroll />
      <StudentGallery />
      <AboutPreview />
      <SloganSection />
      <Footer />
    </main>
  );
}
