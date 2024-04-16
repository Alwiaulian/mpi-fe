"use client";
import { getPosition } from "@/app/helper/helper";
import { ManagementProps } from "@/data/managements_props";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardManagement({ val }: { val: ManagementProps }) {
  return (
    <div className="col-span-1">
      <Link
        href={`${val.name.toLowerCase().replaceAll(" ", "-")}`}
        className="flex flex-col text-black hover:bg-[#5042A920] rounded-md transition-colors duration-300 cursor-pointer"
      >
        <div className="relative">
          <div className="">
            <Image
              src={val.image}
              alt={val.name}
              width={1920}
              height={720}
              className=" relative overflow-hidden object-contain md:object-cover h-72 md:h-auto"
              priority
            />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="col-span 1">
            <Typography
              placeholder="name"
              variant="h3"
              className="text-lg md:text-3xl text-gray-800 p-4"
            >
              {val.name}
            </Typography>
            <Typography
              placeholder="position"
              variant="lead"
              className="text-sm md:text-lg text-gray-600 px-4 pb-4 capitalize"
            >
              {val.position.length > 1
                ? getPosition(val.position)
                : val.position}
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardManagement;
