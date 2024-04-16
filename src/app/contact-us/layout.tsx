import MiddleHero from "@/components/hero/middle_hero";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
};

function ContactUsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mt-5 p-8 min-h-screen">
      <MiddleHero
        title="Contact Us"
        placeholder="bg-[#3B3B7D80]"
        image="/images/contact-us.webp"
      />
      {children}
    </section>
  );
}

export default ContactUsLayout;
