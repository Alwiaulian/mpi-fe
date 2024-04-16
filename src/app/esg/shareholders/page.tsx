"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function ShareholdersPage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="container mx-auto px-8 flex flex-col gap-8">
        <Typography placeholder="title" className="text-lg text-gray-700">
          We value your contribution and trust as a shareholder, and strive to
          provide long-term value to the company and society.
        </Typography>
      </div>
      <Image
        width={980}
        height={600}
        src="/images/shareholder.webp"
        alt="Milestone"
        className="h-auto w-full rounded-lg object-fill"
        priority
      />
    </section>
  );
}

export default ShareholdersPage;
