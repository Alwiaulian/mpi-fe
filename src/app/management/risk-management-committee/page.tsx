import { Managements } from "@/data/managements_props";
import React from "react";
import ManagementLayouts from "@/components/layouts/management_layout";

function RiskManagementPage() {
  return (
    <ManagementLayouts items={Managements.filter((val) => val.role === 5)} />
  );
}

export default RiskManagementPage;
