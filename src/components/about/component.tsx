"use client";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "./hero";
import PrincipleMarquee from "@/components/banner/principles-marquee";
import TopProduct from "@/components/banner/top-product";
import StatsBanner from "@/components/banner/stats-banner";
import VisionMisson from "./vision-mission";
import Strength from "./strenght";
import StructureOrganization from "./structure";

function AboutComponent() {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <main className="flex flex-col items-center gap-8">
        <Hero />

        <PrincipleMarquee />

        <TopProduct />

        <StatsBanner />

        <VisionMisson />

        <StructureOrganization />

        <Strength />
      </main>
    </ParallaxProvider>
  );
}

export default AboutComponent;
