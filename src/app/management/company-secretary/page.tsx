"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { ManagementProps, Managements } from "@/data/managements_props";
import { getPosition } from "@/app/helper/helper";
import { useRouter } from "next/navigation";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

function CompanySecretaryPage() {
  var user = Managements.filter((val) => val.role === 6)[0] ?? null;

  const router = useRouter();

  const handleBack = () => {
    router.replace("/management");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end items-center">
        <Button
          type="button"
          placeholder=""
          variant="text"
          title="Back"
          onClick={handleBack}
          className="text-lg text-black flex flex-row items-center gap-2 hover:bg-transparent hover:shadow-none hover:opacity-60"
        >
          <ChevronDoubleLeftIcon className="h-5 w-5" />
          <Typography placeholder="" className="font-bold">
            Back
          </Typography>
        </Button>
      </div>
      <section className="w-full flex flex-col md:flex-row gap-8 my-12 p-8">
        <Image
          width={320}
          height={450}
          src={user?.image ?? ""}
          alt="Anniversary"
          className="object-scale-down w-1/2 h-[450px] mx-auto md:mx-0"
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
    </div>
  );
}

export default CompanySecretaryPage;
