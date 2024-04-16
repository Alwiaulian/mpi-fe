import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

import "nprogress/nprogress.css";

const TopProgressBar = dynamic(() => import("@/components/progress-bar"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    template: "PT MPI | Official Website - %s",
    default: "PT MPI | Official Website",
  },
  description: "PT MPI Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-theme="system"
      suppressHydrationWarning
    >
      <body>
        <TopProgressBar />

        <Navbar />
        {/* <Suspense fallback="..."></Suspense> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
