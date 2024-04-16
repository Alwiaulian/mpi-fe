import Hero from "@/components/management/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - National and Remuneration Committee",
};

function NRCLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Hero
        subTitle="National and Remuneration Committee"
        desc="The Remuneration and Nomination Committee is a committee under the Board of Commissioners which assists the Board of Commissioners in carrying out its supervisory duties and functions, especially matters related to remuneration and nomination policies."
      />
      {children}
    </section>
  );
}

export default NRCLayout;
