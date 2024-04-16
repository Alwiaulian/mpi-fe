import HeaderDetailUser from "@/components/management/header_user";
import Hero from "@/components/management/hero";
import { Typography } from "@material-tailwind/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - Company Secretary",
};

function CompanySecretaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Hero
        subTitle="Company Secretary"
        desc="The company secretary has an important role in bridging communication with both internal and external parties of the Company, such as communication with employees, regulators, shareholders, investors and other stakeholders."
      />
      <section className="mx-auto max-w-6xl w-full flex flex-col gap-8">
        {children}
      </section>
    </section>
  );
}

export default CompanySecretaryLayout;
