"use client";
import ReportingItem from "@/components/reporting_item";
import {
  AnnouncementGMS,
  AttahcmentProps,
  InvitationGMS,
  ResultGMS,
} from "@/data/esg_props";
import React, { useEffect, useState } from "react";

function ReportingSubPage({ params }: { params: { sub: string } }) {
  const [items, setItems] = useState<AttahcmentProps[]>([]);

  useEffect(() => {
    const _sub = params.sub;

    switch (_sub) {
      case "announcement":
        setItems(AnnouncementGMS);
        break;
      case "invitation":
        setItems(InvitationGMS);
        break;
      case "result":
        setItems(ResultGMS);
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
