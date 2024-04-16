"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";
import Link from "next/link";
import { CAREERS } from "@/data/career_props";

function CareerPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="container mx-auto p-8 flex flex-col gap-8">
        <Typography
          placeholder="title"
          className="text-xl sm:text-2xl md:text-4xl font-bold"
        >
          Careers at MPI
        </Typography>
        <Typography placeholder="title" className="text-lg text-gray-700">
          Discover the best opportunities to develop your career with our
          inclusive and high-culture team.
        </Typography>
      </div>
      <div className="container mx-auto px-8 mb-16">
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
      </div>
    </section>
  );
}

export default CareerPage;
