import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Management",
};

function Layout({ children }: { children: React.ReactNode }) {
  return <section className="bg-gray-50">{children}</section>;
}

export default Layout;
