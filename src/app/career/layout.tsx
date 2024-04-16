import { Metadata } from "next";

import React from "react";
import HeroCareer from "./hero";
export const metadata: Metadata = {
  title: "Career",
};
function CareerLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex w-full flex-col gap-8">
      <HeroCareer />

      {children}
    </section>
  );
}

export default CareerLayout;
