"use client";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import ToogleTheme from "@/components/ToggleTheme";

export default function Home() {
  return (
    <div className="px-4 md:px-24">
      {/* <Header /> */}
      <HeroSection />
      <ToogleTheme />
      {/* <ProjectsScreenShots /> */}
      {/* <Skills /> */}
      <Services />
    </div>
  );
}
