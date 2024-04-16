import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  var title = params.title.split("-").join(" ");

  return {
    title:
      "PT MPI | Career - " + title.charAt(0).toUpperCase() + title.slice(1),
  };
}

function CareerLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default CareerLayout;
