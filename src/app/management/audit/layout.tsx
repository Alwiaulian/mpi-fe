import Hero from "@/components/management/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - Audit Committee",
};

function CommitteeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Hero
        subTitle="Audit Committee"
        desc="The Audit Committee was formed with the aim of assisting the Board of Commissioners in carrying out their supervisory duties and responsibilities"
      />
      {children}
    </section>
  );
}

export default CommitteeLayout;
