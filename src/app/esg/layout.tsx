import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ESG",
};

function EsgLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center gap-8 container mx-auto">
      <div className="p-8 mt-5 w-full">{children}</div>
    </main>
  );
}

export default EsgLayout;
