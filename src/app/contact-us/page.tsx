"use client";

import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import React from "react";

function ContactUsPage() {
  return (
    <div className="max-w-6xl w-full mx-auto py-24 flex flex-col-reverse md:flex-row gap-8">
      <div className="w-full md:w-2/3 p-8 flex flex-col gap-8">
        <Typography
          placeholder="title"
          className="text-xl sm:text-2xl md:text-4xl font-bold mx-auto"
        >
          Get In Touch
        </Typography>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <Input
              placeholder="Username"
              crossOrigin={"anonymous"}
              label="Username"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Input
              placeholder="Email"
              crossOrigin={"anonymous"}
              label="Email"
            />
          </div>
        </div>
        <div className="w-full">
          <Input
            placeholder="Subject"
            crossOrigin={"anonymous"}
            label="Subject"
          />
        </div>
        <div className="w-full">
          <Textarea resize={true} rows={2} label="Message" />
        </div>
        <div className="flex flex-row justify-end">
          <Button placeholder="Send comment" size="sm" className="rounded-md">
            Post Comment
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-gray-200 p-8 flex flex-col gap-8 rounded-md border-2 border-gray-500 my-auto">
        <div className="flex flex-col gap-2">
          <Typography
            placeholder="title"
            className="text-md sm:text-xl font-bold"
          >
            Email
          </Typography>
          <a href={`mailto:investor.relation@mpi-pharmaniaga.co.id`}>
            <Typography placeholder="phone" className="text-sm sm:text-md">
              investor.relation@mpi-pharmaniaga.co.id
            </Typography>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <Typography
            placeholder="title"
            className="text-md sm:text-xl font-bold"
          >
            Phone
          </Typography>
          <Typography placeholder="phone" className="text-sm sm:text-md">
            021-2708 5961 /64 /65 /66
          </Typography>
        </div>

        <div className="flex flex-col gap-2">
          <Typography
            placeholder="title"
            className="text-md sm:text-xl font-bold"
          >
            Address
          </Typography>
          <Typography placeholder="address" className="text-sm sm:text-md">
            Jl. Crown Bungur Arteri Lantai 2 - 4 Jl. Sultan Iskadar Muda No. 18
            / Jl. Bungur No. 1 Kel.Kebayoran Lama Selatan, Kec.Kebayoran Lama,
            Jakarta Selatan 12220
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
