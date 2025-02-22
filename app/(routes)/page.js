"use client";
import { useEffect, useState } from "react";
import Build from "../_components/home/Build";
import Connect from "../_components/home/Connect";
import FooterCTA from "../_components/home/FooterCTA";
import Hero from "../_components/home/Hero";
import Start from "../_components/home/Start";
import Works from "../_components/home/Works";
import Loading from "../_components/Loading";
import { useTheme } from "next-themes";
import { Particles } from "../_components/magicui/particles";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import StickyOverlay from "../_components/home/StickyOverlay";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <main className="w-full">
          <StickyOverlay />
          <Header />
          <Hero />
          <Start />
          <Works />
          <Build />
          <Connect />
          <FooterCTA />
          <Footer />
        </main>
      )}
    </>
  );
}
