import MiddleHero from "@/components/hero/middle_hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - Shareholders",
};

function ReportingLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-8">
      <MiddleHero
        placeholder="bg-[#3B3B7D80]"
        image="/images/esg.webp"
        title="Shareholders"
      />
      <div className="w-full container mx-auto pb-24">{children}</div>
    </section>
  );
}

export default ReportingLayout;
