"use client";

import { NEWS } from "@/data/news_props";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function DetailNewsPage({ params }: { params: { title: string } }) {
  const data = NEWS.find((val) =>
    val.title
      .toLowerCase()
      .includes(params.title.replaceAll("-", " ").toLowerCase())
  );

  return (
    <section className="flex flex-col">
      <div className="border-b-2 p-8 flex flex-col gap-2">
        <Typography
          placeholder="title"
          className="text-lg md:text-2xl lg:text-4xl text-gray-700 font-bold"
        >
          {data?.title}
        </Typography>
        <Typography
          placeholder="title"
          className="text-md md:text-lg text-gray-700"
        >
          {data?.createdAt}
        </Typography>
      </div>
      <div
        className="flex flex-col gap-8 p-8 text-gray-600 text-lg"
        dangerouslySetInnerHTML={{ __html: data?.desc ?? "<div></div>" }}
      />
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {data?.attachments?.map((attachment, index) => (
          <div key={index} className="col-span-1">
            <Image
              width={768}
              height={768}
              src={attachment.url}
              alt={attachment.title}
              priority
              className="h-full w-full object-cover object-center transition-all duration-300 overflow-hidden hover:opacity-80 rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default DetailNewsPage;
