"use client";
import { getPosition } from "@/app/helper/helper";
import { Managements } from "@/data/managements_props";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ManagementUserDetail({ params }: { params: { user: string } }) {
  const user = Managements.find(
    (user) =>
      user.name.toLowerCase() === params.user.replaceAll("-", " ").toLowerCase()
  );

  return (
    <section className="w-full flex flex-col md:flex-row gap-8">
      <Image
        width={320}
        height={450}
        src={user?.image ?? ""}
        alt="Anniversary"
        className="object-scale-down w-full h-[450px]"
        priority
      />
      <div className="w-full h-screen flex flex-col gap-8">
        <Typography
          placeholder="title"
          className="text-lg md:text-2xl lg:text-4xl text-gray-700 font-bold"
        >
          {user?.name}
        </Typography>
        <Typography
          placeholder="title"
          className="text-lg md:text-xl text-gray-600 font-semibold"
        >
          {getPosition(user?.position ?? [])}
        </Typography>
        <hr />
        <Typography placeholder="title" className="text-md text-gray-600">
          <div
            className="flex flex-col gap-8"
            dangerouslySetInnerHTML={{ __html: user?.bio ?? "<div></div>" }}
          />
        </Typography>
      </div>
    </section>
  );
}

export default ManagementUserDetail;

// export async function getStaticPaths() {
//   // Fetch dynamic paths at build time
//   // const users = await prisma.user.findMany();
//   const paths = users.map((user) => ({
//     params: { id: user.id.toString() },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: { params: { user: string } }) {
//   // Fetch data for a specific user based on the dynamic parameter
//   // const user = await prisma.user.findUnique({
//   //   where: { id: parseInt(params.id) },
//   // });
//   const user = Managements.find(
//     (user) =>
//       user.name.toLowerCase() === params.user.replaceAll("-", " ").toLowerCase()
//   );
//   return {
//     props: { user },
//   };
// }
