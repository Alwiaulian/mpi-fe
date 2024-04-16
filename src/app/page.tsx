"use client";

import PrincipleMarquee from "@/components/banner/principles-marquee";
import { ParallaxProvider } from "react-scroll-parallax";
import AboutHome from "./about";
import BannerHome from "./banner";
import Hero from "./hero";
import NewsLayout from "@/components/layouts/news";
import TopProduct from "@/components/banner/top-product";
import CarrerHome from "./career";

export default function Home() {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <main className="flex flex-col items-center">
        <Hero />

        <PrincipleMarquee />

        <AboutHome />

        <TopProduct />

        <NewsLayout />

        <CarrerHome />

        <BannerHome />
      </main>
    </ParallaxProvider>
  );
}
