"use client";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React from "react";

function HeaderDetailUser() {
  const router = useRouter();

  const handleBack = () => {
    router.replace("/management");
  };

  return (
    <div className="flex justify-between gap-8 items-center">
      <Typography variant="h2" placeholder="" className="text-2xl mx-8">
        Biography
      </Typography>
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
  );
}

export default HeaderDetailUser;
