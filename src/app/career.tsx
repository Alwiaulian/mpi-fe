import { CAREERS } from "@/data/career_props";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CarrerHome() {
  return (
    <section className="flex w-full flex-col gap-8  my-15">
      <div className="w-full bg-[#3B3B7D] flex justify-center">
        <Image
          src="/images/scope.webp"
          alt="career"
          width={1920}
          height={720}
          className="object-cover h-36 md:h-48 lg:h-80 "
        />
      </div>
      <div className="container mx-auto px-8">
        <Typography placeholder="title" className="text-lg text-gray-700">
          Discover the best opportunities to develop your career with our
          inclusive and high-culture team.
        </Typography>
      </div>
      <div className="container mx-auto px-8">
        <div className="border border-gray-300 p-8 flex flex-col gap-8 rounded-md">
          <div className="w-full border-b pb-8">
            <Typography
              placeholder="title"
              variant="h3"
              className="text-2xl text-gray-800 text-center"
            >
              Apply for a Job
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CAREERS.map((career, index) => (
              <div
                key={index}
                className="col-span-1 rounded-md bg-white hover:bg-gray-100 transition-all duration-300"
              >
                <Link
                  href={`career/${career.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="p-2 flex flex-col gap-2"
                >
                  <Typography
                    placeholder="title"
                    className="text-lg text-gray-800"
                  >
                    {career.title}
                  </Typography>
                  <Typography
                    placeholder="description"
                    variant="lead"
                    className="text-md !text-gray-500"
                  >
                    {career.placement}
                  </Typography>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Button
          placeholder="view more"
          variant="text"
          size="lg"
          color="gray"
          className="flex mx-auto items-center gap-2 mt-12"
        >
          <ArrowDownIcon className="h-5 w-5 font-bold text-gray-900" />
          VIEW MORE
        </Button>
      </div>
    </section>
  );
}

export default CarrerHome;
