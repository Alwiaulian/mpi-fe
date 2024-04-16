import MiddleHero from "@/components/hero/middle_hero";
import SideBar from "@/components/sidebar/sidebar";
import { NavigationProps } from "@/data/navbar_props";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - Reporting",
};

const reportingNavs: NavigationProps[] = [
  {
    title: "Annual Report",
    href: "/esg/reporting/annual",
    // params: AnnualReporting,
  },
  {
    title: "Financial Statements",
    href: "/esg/reporting/financial-statements",
    // params: FinancialReporting,
  },
  {
    title: "Financial Data Overview",
    href: "/esg/reporting/financial-data-overview",
    // params: DataOverviewReporting,
  },
];

function ReportingLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <MiddleHero
        placeholder="bg-[#3B3B7D80]"
        image="/images/esg.webp"
        title="Reporting"
      />
      <div className="w-full container mx-auto pb-24">
        <SideBar items={reportingNavs} title="Reporting">
          {children}
        </SideBar>
      </div>
    </section>
  );
}

export default ReportingLayout;
