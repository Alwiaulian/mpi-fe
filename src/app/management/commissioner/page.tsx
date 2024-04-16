import { Managements } from "@/data/managements_props";
import React from "react";
import ManagementLayouts from "@/components/layouts/management_layout";

function CommissionerPage() {
  return (
    <ManagementLayouts items={Managements.filter((val) => val.role === 1)} />
  );
}

export default CommissionerPage;
