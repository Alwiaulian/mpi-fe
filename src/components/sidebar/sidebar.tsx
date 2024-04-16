"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownCustom from "../dropdown";
import { NavigationProps } from "@/data/navbar_props";

interface SideBarProps {
  title: String;
  children: React.ReactNode;
  items: NavigationProps[];
}

function SideBar({ title, children, items }: SideBarProps) {
  const pathName = usePathname();

  const titleActive = pathName.split("/").slice(-1)[0].replaceAll("-", " ");

  return (
    <div className="container mx-auto px-8 grid grid-cols-8 gap-4 min-h-screen py-12">
      <div className="col-span-2 lg:block hidden">
        <div className="sticky top-20 p-4 flex flex-col gap-2 rounded-md bg-white shadow-lg">
          <Typography
            placeholder="title"
            className="text-xs lg:text-sm text-gray-600 mb-4 pr-8"
          >
            {title}
          </Typography>

          {items.map((val, index) => (
            <div className=" flex" key={index}>
              <Link
                href={`${val.href}`}
                className={`${
                  pathName === val.href
                    ? "bg-gray-200 border-l-4 rounded-r-md border-black"
                    : "rounded-md"
                } p-2 w-full hover:bg-gray-300 font-medium text-sm transition-all duration-200`}
              >
                {val.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-8 lg:col-span-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between lg:hidden">
            <Typography
              placeholder="title"
              variant="lead"
              className="text-2xl font-bold  text-black capitalize"
            >
              {titleActive}
            </Typography>
            <DropdownCustom items={items} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
