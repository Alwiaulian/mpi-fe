import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Business",
};

function BusinessLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center gap-16">{children}</section>
  );
}

export default BusinessLayout;
