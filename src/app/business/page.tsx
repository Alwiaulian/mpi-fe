"use client";
import React from "react";
import Hero from "./components/hero";
import { ParallaxProvider } from "react-scroll-parallax";
import PrincipleMarquee from "@/components/banner/principles-marquee";
import BranchComponents from "./components/branches";
import Strength from "@/components/about/strenght";
import Products from "./components/products";
import HumanResourceComponent from "./components/human_resource";

function BusinessPage() {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Hero />

      <BranchComponents />

      <PrincipleMarquee />

      <Products />

      <HumanResourceComponent />

      <Strength />
    </ParallaxProvider>
  );
}

export default BusinessPage;
