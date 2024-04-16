import { ManagementProps } from "@/data/managements_props";
import React from "react";
import SideBar from "../sidebar/sidebar";
import { NAV_MANAGEMENT } from "@/data/navbar_props";
import CardManagement from "./card_management";

function ManagementLayouts({
  items,
  children,
}: {
  items?: ManagementProps[];
  children?: React.ReactNode;
}) {
  return (
    <SideBar items={NAV_MANAGEMENT} title="Management List">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {children}
        {items &&
          items.map((val, index) => <CardManagement key={index} val={val} />)}
      </section>
    </SideBar>
  );
}

export default ManagementLayouts;
