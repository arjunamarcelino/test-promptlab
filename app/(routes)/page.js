import Image from "next/image";
import Hero from "../_components/home/Hero";

export default function Home() {
  return (
    <>
      {/* <DonutCursor />
      <Loading isLoading={isLoading} />
      {!isLoading && (*/}
        <main className="w-full"> 
          <Hero />
          {/* <Unlock />
          <Decoration />
          <Video />
          <Powering />
          <Empower />
          <QuickStart />
          <Team />
          <Partner />
          <FooterCTA /> */}
        </main>
    </>
  );
}
