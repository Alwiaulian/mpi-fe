import Hero from "@/components/management/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - Risk Management Committee",
};

function RiskManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Hero
        subTitle="Risk Management Committee"
        desc="The Risk Management Committee is directly assisted by the Risk Management Department which adequately identifies risks that may be experienced by the Company. The Risk Management Committee holds meetings every 6 (six) months."
      />
      {children}
    </section>
  );
}

export default RiskManagementLayout;
