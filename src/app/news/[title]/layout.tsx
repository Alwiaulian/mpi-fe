import BigHero from "@/components/hero/big_hero";
import { NEWS } from "@/data/news_props";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  var title = params.title.split("-").join(" ");

  return {
    title: "PT MPI | News - " + title.charAt(0).toUpperCase() + title.slice(1),
  };
}

function NewsDetail({
  params,
  children,
}: {
  params: { title: string };
  children: React.ReactNode;
}) {
  const getImage = NEWS.find((val) =>
    val.title
      .toLowerCase()
      .includes(params.title.replaceAll("-", " ").toLowerCase())
  );

  return (
    <section className="">
      <BigHero image={getImage?.img ?? "/images/about/hero.webp"} />
      <div className="w-full container mx-auto pb-24">{children}</div>
    </section>
  );
}

export default NewsDetail;
