"use client";

import Image from "next/image";
import React from "react";

function HeroCareer() {
  return (
    <div className="w-full bg-[#3B3B7D] flex justify-center">
      <Image
        src="/images/scope.webp"
        alt="career"
        width={1920}
        height={720}
        className="object-cover h-36 md:h-48 lg:h-80 "
      />
    </div>
  );
}

export default HeroCareer;
