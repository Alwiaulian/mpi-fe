import Hero from "@/components/management/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - Management Director",
};

function DirectorLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Hero
        subTitle="Director"
        desc="The Board of Directors carries out their duties and makes decisions in accordance with their division of duties and authority."
      />
      {children}
    </section>
  );
}

export default DirectorLayout;
