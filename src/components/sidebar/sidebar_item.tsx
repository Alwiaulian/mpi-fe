import Link from "next/link";
import React from "react";

function SideBarItem({ title, href }: { title: String; href: String }) {
  return (
    <Link href={`${href}`} className="p-2 rounded-md hover:bg-gray-100">
      {title}
    </Link>
  );
}

export default SideBarItem;
