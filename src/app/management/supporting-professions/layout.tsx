import Hero from "@/components/management/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - Supporting Professions Layout",
};

function SupportingProffessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Hero
        subTitle="Supporting Professions Layout"
        desc="Professionals and supporting institutions help the Company to ensure that activities in the capital market run well, are accountable and in accordance with applicable laws."
      />
      {children}
    </section>
  );
}

export default SupportingProffessionLayout;
