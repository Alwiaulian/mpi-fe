import { Managements } from "@/data/managements_props";
import React from "react";
import ManagementLayouts from "@/components/layouts/management_layout";

function NRCPage() {
  return (
    <ManagementLayouts items={Managements.filter((val) => val.role === 4)} />
  );
}

export default NRCPage;
