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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");

    return () => clearTimeout(timer);
  }, [resolvedTheme]);

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <main className="w-full">
          <Hero />
          <Start />
          <Works />
          <Build />
          <Connect />
          <FooterCTA />
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />
        </main>
      )}
    </>
  );
}
