import { Managements } from "@/data/managements_props";
import React from "react";
import ManagementLayouts from "@/components/layouts/management_layout";

function DirectorPage() {
  return (
    <ManagementLayouts items={Managements.filter((val) => val.role === 2)} />
  );
}

export default DirectorPage;
