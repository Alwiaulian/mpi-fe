import { Metadata } from "next";
import React from "react";
import Hero from "@/components/management/hero";
import HeaderDetailUser from "@/components/management/header_user";

export async function generateMetadata({
  params,
}: {
  params: { user: string };
}): Promise<Metadata> {
  var name = params.user.split("-").join(" ");

  return {
    title:
      "PT MPI | Management - " + name.charAt(0).toUpperCase() + name.slice(1),
  };
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <Hero title="" />
      <section className="mx-auto max-w-6xl w-full flex flex-col gap-8">
        <HeaderDetailUser />
        {children}
      </section>
    </section>
  );
}

export default Layout;
