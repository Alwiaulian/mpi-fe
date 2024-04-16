"use client";

import { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./nav_item";
import { usePathname } from "next/navigation";
import { NAV_MENU } from "@/data/navbar_props";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      placeholder=""
      shadow={false}
      fullWidth
      blurred={pathName.includes("management") ? false : true}
      className="border-0 sticky top-0 z-50 py-0"
    >
      <div className="container mx-auto flex items-center">
        <Link
          href="/"
          className="font-display flex items-center text-2xl mr-auto"
        >
          <Image
            src="/images/logo.png"
            alt="MPI Logo"
            width={80}
            height={0}
            className="mr-2 rounded-sm w-auto h-auto"
            priority
          />
        </Link>
        <ul className="ml-10 hidden items-center gap-2 lg:flex">
          {NAV_MENU.map((val, index) => (
            <NavItem key={index} {...val} />
          ))}
        </ul>

        <div className="flex items-center gap-2 lg:hidden">
          {/* <ThemeSwitcher /> */}
          <IconButton
            placeholder=""
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden my-2"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t-2 border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((val, index) => (
              <NavItem key={index} {...val} />
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
