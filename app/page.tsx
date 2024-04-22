"use client";
import HeroSection from "@/components/HeroSection";
import HireMe from "@/components/HireMe";
import Projects from "@/components/Projects";
import ThingsIDo from "@/components/ThingsIDo";
import ToogleTheme from "@/components/ToggleTheme";
import {webColors} from "@/libs/colors";
import useColor from "@/utils/useColor";
import {Toaster} from "react-hot-toast";

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
    useColor.setState({
      primary: webColors[Math.floor(Math.random() * webColors.length)],
    });
    console.log(webColors[Math.floor(Math.random() * webColors.length)]);
  }, []);

  return (
    <>
      <Toaster />
      <div className="px-4 md:px-24">
        <HeroSection />
        <ToogleTheme />
        <Skills />
        {/* <Services /> */}
        <Experience />
        <ThingsIDo />
        <Projects />
        <HireMe />
        <Footer />
      </div>
    </>
  );
}
