import Hero from "@/components/management/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - Management Commissioners",
};

function CommissionerLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Hero
        subTitle="Commissioner"
        desc="The Board of Commissioners is tasked with supervising the management
          of the Company and providing advice to the Board of Directors if
          deemed necessary for the interests of the Company."
      />
      {children}
    </section>
  );
}

export default CommissionerLayout;
