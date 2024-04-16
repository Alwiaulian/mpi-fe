"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { HeroProps } from "./hero_interface";

export default function BigHero({ title, image, placeholder }: HeroProps) {
  return (
    <div className="relative h-40 md:h-80 lg:h-96 container mx-auto">
      <Image
        width={1200}
        height={600}
        src={image}
        alt={title ?? "esg hero image"}
        className="h-40 md:h-80 lg:h-96 w-full object-cover rounded-lg absolute"
        priority
      />
      <div className={`${placeholder} absolute inset-0 rounded-lg`} />
      {title && (
        <div className="items-end flex relative flex-col justify-end w-full h-full p-8 lg:p-12">
          <Typography
            placeholder="title"
            className="text-lg w-1/2 sm:text-xl md:text-3xl lg:text-5xl text-right font-bold leading-[45px] lg:leading-[50px] text-white"
          >
            {title}
          </Typography>
        </div>
      )}
    </div>
  );
}
