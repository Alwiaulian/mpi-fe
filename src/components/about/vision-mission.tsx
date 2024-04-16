import { Collapse, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";

export function VisionCard({
  title,
  className,
  desc,
}: {
  title: string;
  className: string;
  desc: string;
}) {
  const [hover, setHover] = useState(false);

  const onHoverHandler = (val: boolean) => setHover(val);

  return (
    <div
      onMouseEnter={() => onHoverHandler(true)}
      onMouseLeave={() => onHoverHandler(false)}
      className={`relative rounded-lg h-[200px] ${className} p-4 text-white flex flex-col items-center justify-center cursor-pointer hover:opacity-90`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg transition-opacity ease-in duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative">
        <Typography
          placeholder={title}
          className="text-md font-bold text-center"
        >
          {title}
        </Typography>

        <Collapse
          open={hover}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          <Typography
            placeholder={title}
            className={`text-sm text-center pt-5`}
          >
            {desc}
          </Typography>
        </Collapse>
      </div>
    </div>
  );
}

export function ValueOf() {
  return (
    <div className="flex flex-col py-16 items-center">
      <div className="max-w-xl mx-auto mb-14">
        <Typography
          placeholder="title"
          className="text-[#DE1B26] text-md font-bold text-center"
        >
          Our Value
        </Typography>
        <Image
          src="/images/about/value.webp"
          alt="Value"
          width={1200}
          height={600}
          className="h-auto w-full "
          priority
        />
      </div>
      <div className="max-w-3xl w-full flex flex-col gap-4">
        <div className="grid grid-cols-6 gap-4 mx-8">
          <div className="col-span-6 sm:col-span-3 md:col-span-2">
            <VisionCard
              title="Team Work"
              className="bg-[#E5202A]"
              desc="We collaborate for success with mutual dignity and respect, creating a
                  supportive environment for common goals."
            />
          </div>
          <div className="col-span-6 sm:col-span-3 md:col-span-2">
            <VisionCard
              title="Open Communication"
              className="bg-[#019FE0]"
              desc="We value effective communication, by listening, understanding, caring, and showing compassion."
            />
          </div>
          <div className="col-span-6 sm:col-span-3 md:col-span-2">
            <VisionCard
              title="Passion of Excellence"
              className="bg-[#EF483F]"
              desc="We love what we do about the success of our customers, community, and company."
            />
          </div>
          <div className="block md:hidden col-span-6 sm:col-span-3 md:col-span-2">
            <VisionCard
              title="Integrity & Honesty"
              className="bg-[#C6176D]"
              desc="We will not compromise on high professional ethical standards of honesty and transparency in all interactions."
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mx-8">
          <div className="md:block hidden col-span-6 sm:col-span-3">
            <VisionCard
              title="Integrity & Honesty"
              className="bg-[#C6176D]"
              desc="We will not compromise on high professional ethical standards of honesty and transparency in all interactions."
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <VisionCard
              title="Caring"
              className="bg-[#2B216A]"
              desc="We respect, support, and build each other up and ask for help when we need it."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function VisionMisson() {
  return (
    <section className="w-w-full container mx-auto my-20">
      <div className="flex flex-col gap-8">
        <div className="flex mx-auto">
          <Typography
            placeholder="title"
            className="text-[#DE1B26] text-md font-bold"
          >
            Vision & Mission
          </Typography>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-8 mx-8">
          <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col">
              <Typography
                placeholder="title"
                variant="h3"
                className="bg-gradient-to-r from-gray-600 to-black inline-block text-transparent bg-clip-text"
              >
                Our Vision
              </Typography>
              <Typography
                placeholder="description"
                variant="lead"
                className="my-2 w-full font-normal !text-gray-500"
              >
                Becoming the most efficient and effective distribution company
                in Indonesia by providing added value to principal customers.
              </Typography>
            </div>
            <div className="flex flex-col pt-4">
              <Typography
                placeholder="title"
                variant="h3"
                className="bg-gradient-to-r from-gray-600 to-black inline-block text-transparent bg-clip-text"
              >
                Our Mission
              </Typography>
              <Typography
                placeholder="description"
                variant="lead"
                className="my-2 w-full font-normal !text-gray-500"
              >
                Providing the best health maintenance products and services
                throughout the archipelago.
              </Typography>
            </div>
          </div>
          <Image
            src="/images/about/vision.webp"
            alt="Vision"
            width={1200}
            height={600}
            className="h-96 w-full rounded-lg object-cover"
            priority
          />
        </div>
        <ValueOf />
      </div>
    </section>
  );
}

export default VisionMisson;
