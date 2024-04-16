import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

function Products() {
  const ref = useRef<HTMLInputElement>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;

    const rect = ref?.current?.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="max-w-5xl w-full mx-auto bg-white md:px-24 select-none">
      <div className="border rounded-none md:rounded-lg p-6 sm:p-12 flex lg:flex-row flex-col sm:gap-8 gap-4 ">
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="flex flex-col gap-2 w-full"
        >
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
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX,
            rotateY,
          }}
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="flex w-full p-4"
          >
            <Image
              width={350}
              height={215}
              src="/images/top-product.webp"
              alt="top product"
              style={{
                transform: "translateZ(50px)",
              }}
              className=" w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* <section className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
        <TiltCard />
      </section> */}
    </section>
  );
}

export default Products;

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = 7.5;

const TiltCard = () => {
  const ref = useRef<HTMLInputElement>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;

    const rect = ref?.current?.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p>
      </div>
    </motion.div>
  );
};
