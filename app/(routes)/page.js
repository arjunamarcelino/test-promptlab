import Build from "../_components/home/Build";
import Connect from "../_components/home/Connect";
import FooterCTA from "../_components/home/FooterCTA";
import Hero from "../_components/home/Hero";
import Start from "../_components/home/Start";
import Works from "../_components/home/Works";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />
        <Start />
        <Works />
        <Build />
        <Connect />
        <FooterCTA />
      </main>
    </>
  );
}
