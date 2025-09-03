import { ParticleSystem } from "@/components/three/ParticleSystem";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { ScrollIndicator } from "@/components/layout/ScrollIndicator";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { ThoughtsSection } from "@/components/sections/ThoughtsSection";
import { VideoLearningSection } from "@/components/sections/VideoLearningSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ParticleSystem />
      <FloatingNav />
      <ScrollIndicator />
      
      <main>
        <HeroSection />
        <StatsSection />
        <ArticlesSection />
        <ThoughtsSection />
        <VideoLearningSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}
