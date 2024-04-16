"use client";

import Typography from "@material-tailwind/react/components/Typography";
import Image from "next/image";
import React from "react";

interface HeroProps {
  title?: string;
  subTitle?: string;
  desc?: string;
}

function Hero({ title, subTitle, desc }: HeroProps) {
  return (
    <header className="">
      <div className="relative h-40 md:h-80 lg:h-96 mb-12 ">
        <Image
          width={1200}
          height={600}
          src="/images/management/hero.webp"
          alt="mangements"
          className="h-40 md:h-80 lg:h-96 w-full object-cover absolute"
          priority
        />
        <div className="absolute inset-0 bg-[#3B3B7D99]" />
        <div className="max-w-3xl mx-auto flex relative flex-col justify-center w-full h-full p-8 lg:p-12">
          <Typography
            placeholder=""
            className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-center font-bold leading-[45px] lg:leading-[50px] text-white"
          >
            {title ?? "Management"}
          </Typography>
          {subTitle && (
            <Typography
              placeholder=""
              className="text-md  sm:text-lg md:text-xl lg:text-2xl text-center font-bold leading-[45px] lg:leading-[50px] text-white text-opacity-80 capitalize"
            >
              {subTitle}
            </Typography>
          )}
        </div>
      </div>

      {desc && (
        <div className="container mx-auto px-8 flex flex-col gap-8">
          <Typography placeholder="title" className="text-lg text-gray-700">
            {desc}
          </Typography>
        </div>
      )}
    </header>
  );
}

export default Hero;
