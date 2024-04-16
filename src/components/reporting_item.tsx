import { AttahcmentProps } from "@/data/esg_props";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { Typography } from "@material-tailwind/react";
import Moment from "moment";
import Link from "next/link";
import React from "react";

function ReportingItem({ src, title, createdAt, type }: AttahcmentProps) {
  return (
    <Link
      href={src}
      target="_blank"
      className="flex py-8 flex-row gap-4 w-full items-center p-4 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-300"
    >
      <div className="flex flex-col gap-2 w-full">
        <Typography
          placeholder="title"
          className="text-lg w-2/3 md:text-xl lg:text-3xl text-red font-bold"
        >
          {title}
        </Typography>

        {type && (
          <Typography placeholder="title" className="text-sm md:text-md ">
            {type}
          </Typography>
        )}

        {createdAt && (
          <Typography placeholder="title" className="text-md md:text-lg">
            {Moment(createdAt).format("MMM d, Y")}
          </Typography>
        )}
      </div>
      <Link
        href={src}
        className="hover:opacity-50 transition-opacity duration-50"
        target="_blank"
        download
      >
        <ArrowDownTrayIcon className="h-10 w-10 text-red hover:opacity-70 transition-colors duration-300" />
      </Link>
      <hr />
    </Link>
  );
}

export default ReportingItem;
