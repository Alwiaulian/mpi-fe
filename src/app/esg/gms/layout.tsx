import MiddleHero from "@/components/hero/middle_hero";
import SideBar from "@/components/sidebar/sidebar";
import { NavigationProps } from "@/data/navbar_props";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PT MPI | Official Website - General Meeting of Shareholders",
};

const gmsNavs: NavigationProps[] = [
  {
    title: "Announcement",
    href: "/esg/gms/announcement",
  },
  {
    title: "Invitation",
    href: "/esg/gms/invitation",
  },
  {
    title: "Result",
    href: "/esg/gms/result",
  },
];

function GMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <MiddleHero
        placeholder="bg-[#3B3B7D80]"
        image="/images/esg.webp"
        title="General Meeting of Shareholders"
      />
      <div className="w-full container mx-auto pb-24">
        <SideBar items={gmsNavs} title="General Meeting of Shareholders">
          {children}
        </SideBar>
      </div>
    </section>
  );
}

export default GMSLayout;
