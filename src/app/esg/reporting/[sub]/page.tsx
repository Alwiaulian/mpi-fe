"use client";
import ReportingItem from "@/components/reporting_item";
import {
  AnnualReporting,
  AttahcmentProps,
  DataOverviewReporting,
  FinancialReporting,
} from "@/data/esg_props";
import React, { useEffect, useState } from "react";

function ReportingSubPage({ params }: { params: { sub: string } }) {
  // const _items = params.sub === ''
  const [items, setItems] = useState<AttahcmentProps[]>([]);

  useEffect(() => {
    const _sub = params.sub;

    switch (_sub) {
      case "annual":
        setItems(AnnualReporting);
        break;
      case "financial-statements":
        setItems(FinancialReporting);
        break;
      case "financial-data-overview":
        setItems(DataOverviewReporting);
        break;
      default:
        setItems([]);
    }
  }, [params.sub]);

  return (
    <section className="flex flex-col w-full divide-y">
      {items.map((val, index) => (
        <ReportingItem {...val} key={index} />
      ))}
    </section>
  );
}

export default ReportingSubPage;
