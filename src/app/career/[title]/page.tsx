"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";
import { CAREERS } from "@/data/career_props";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

function CareerDetailPage({ params }: { params: { title: string } }) {
  const data = CAREERS.find(
    (val) =>
      val.title.toLowerCase() ===
      params.title.replaceAll("-", " ").toLowerCase()
  );

  const router = useRouter();

  const handleBack = () => {
    router.replace("/career");
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-row justify-end px-8 container mx-auto">
        <div className="flex flex-row gap-2 items-center">
          <Typography
            placeholder=""
            className="font-bold text-gray-600 capitalize"
          >
            {data?.title.toLowerCase()}
          </Typography>
          <Typography placeholder="" className="font-bold">
            /
          </Typography>

          <div
            title="Back"
            onClick={handleBack}
            className="text-lg text-black items-center hover:bg-transparent hover:shadow-none hover:opacity-60 cursor-pointer"
          >
            <Typography placeholder="" className="font-bold capitalize">
              Career
            </Typography>
          </div>
        </div>
      </div>
      <div className="container border-b-2 mx-auto p-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
          <Typography
            placeholder="title"
            className="text-xl sm:text-2xl md:text-4xl font-bold"
          >
            {data?.title}
          </Typography>
          <div className="flex flex-col gap-2 sm:items-end">
            <Typography placeholder="title" className="text-lg sm:text-2xl ">
              Level
            </Typography>
            <Typography
              placeholder="title"
              className="text-xl sm:text-2xl md:text-4xl font-bold"
            >
              {data?.level}
            </Typography>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto p-8 flex flex-col gap-16">
        <div className=" grid grid-cols-5 px-8 gap-8">
          <div className="col-span-5 lg:col-span-1">
            <Typography
              placeholder="title"
              className="text-md sm:text-xl font-bold"
            >
              Placement
            </Typography>
          </div>
          <div className="col-span-5 lg:col-span-4">
            <Typography placeholder="title" className="text-md sm:text-xl">
              {data?.placement}
            </Typography>
          </div>
        </div>

        <div className=" grid grid-cols-5 px-8 gap-8">
          <div className="col-span-5 lg:col-span-1">
            <Typography
              placeholder="title"
              className="text-md sm:text-xl font-bold"
            >
              Responsibility
            </Typography>
          </div>
          <div className="col-span-5 lg:col-span-3">
            <ul className="list-disc ml-4 lg:ml-8">
              {data?.responsibility.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" grid grid-cols-5 px-8 gap-8">
          <div className="col-span-5 lg:col-span-1">
            <Typography
              placeholder="title"
              className="text-md sm:text-xl font-bold"
            >
              Requirements
            </Typography>
          </div>
          <div className="col-span-5 lg:col-span-3">
            <ul className="list-disc ml-4 lg:ml-8">
              {data?.requirements.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-row justify-center mt-10 mb-24">
        <a
          href="mailto:recruitment.mpi@mpi-pharmaniaga.co.id"
          className="p-6 sm:p-8 rounded-md bg-gray-200 flex flex-row gap-8 items-center hover:bg-gray-300 transition-colors duration-300"
        >
          <EnvelopeIcon color="black" className="w-10 h-10 sm:w-18 sm:h-18" />
          <Typography
            placeholder="title"
            className="text-md sm:text-xl font-bold"
          >
            Drop your CV here
          </Typography>
        </a>
      </div>
    </section>
  );
}

export default CareerDetailPage;
