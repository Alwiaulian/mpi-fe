import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function TopProduct() {
  return (
    <section className="max-w-5xl w-full mx-auto bg-white md:px-24 mb-24 select-none">
      <div className="border rounded-none md:rounded-lg p-6 sm:p-12 flex lg:flex-row flex-col sm:gap-8 gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <Typography placeholder="title" className="text-md text-gray-900">
            Top Product
          </Typography>
          <Typography
            placeholder="title"
            variant="h3"
            className="bg-gradient-to-r from-gray-600 to-gray-900 inline-block text-transparent bg-clip-text"
          >
            Antangin JRG
          </Typography>
          <Typography
            placeholder="description"
            variant="lead"
            className="my-2 w-full font-normal !text-gray-500"
          >
            Herbal cold syrup with the main ingredients of Ginger, Royal Jelly
            and Ginseng.
          </Typography>
          <Button
            placeholder="view more"
            variant="text"
            size="sm"
            color="gray"
            className="flex ml-auto items-center gap-2"
          >
            VIEW MORE
            <ArrowRightIcon className="h-5 w-5 font-bold text-gray-900" />
          </Button>
        </div>
        <div className="flex w-full p-4">
          <Image
            width={350}
            height={215}
            src="/images/top-product.webp"
            alt="top product"
            className=" w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default TopProduct;
