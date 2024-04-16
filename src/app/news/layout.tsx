import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "News",
};

function NewsLayout({ children }: { children: React.ReactNode }) {
  return <section className="mt-5 p-8">{children}</section>;
}

export default NewsLayout;
