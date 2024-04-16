"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function StructureOrganization() {
  return (
    <section className="w-w-full container mx-auto my-20">
      <div className="flex flex-col gap-8">
        <div className="flex mx-auto">
          <Typography
            placeholder="title"
            className="text-[#DE1B26] text-md font-bold"
          >
            Structure Organization
          </Typography>
        </div>
        <Image
          width={980}
          height={600}
          src="/images/structure.webp"
          alt="Milestone"
          className="h-auto w-full rounded-lg object-fill"
          priority
        />
      </div>

      {/* <div className="max-w-2xl w-full mx-auto">
      
    </div> */}
    </section>
  );
}

export default StructureOrganization;
