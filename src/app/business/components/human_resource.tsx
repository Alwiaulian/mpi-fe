import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const data = [
  {
    title: "Administration Staff & Field Force",
    total: 850,
  },
  {
    title: "Supervisors",
    total: 150,
  },
  {
    title: "Managers",
    total: 70,
  },
  {
    title: "The Board of Directors",
    total: 2,
  },
  {
    title: "The Board of Commissioners",
    total: 2,
  },
];

const ROTATION_RANGE = 12;
const HALF_ROTATION_RANGE = 6;

function HumanResourceComponent() {
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
      className="min-h-[50rem] w-full grid place-content-center select-none"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="text-center container gap-8 flex flex-col mx-auto"
      >
        <Typography
          placeholder=""
          variant="h2"
          className="text-3xl sm:text-3xl md:text-5xl text-gray-800 px-4"
        >
          Human Resource
        </Typography>
        <Typography
          placeholder=""
          variant="paragraph"
          className="text-md sm:text-xl text-gray-700 max-w-3xl mx-auto px-4"
        >
          {`The company's commitment to employee development through various
          training programs and career opportunities, including technical and
          soft skills training, as well as career advancement through promotions
          and new assignments`}
        </Typography>
        <div className="mt-6 md:mt-12">
          <div className="hidden sm:flex flex-col gap-8 space-y-2 sm:space-y-12">
            <div className="grid grid-cols-3 gap-8">
              {data.slice(0, 3).map((val, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col gap-2 items-center text-center"
                >
                  <Typography
                    placeholder=""
                    className="text-lg sm:text-xl md:text-4xl lg:text-6xl font-bold "
                  >
                    {val.total > 10 ? val.total + "+" : val.total}
                  </Typography>
                  <Typography
                    placeholder=""
                    className="text-md sm:text-lg md:text-xl text-gray-700"
                  >
                    {val.title}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {data.slice(3, 5).map((val, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col gap-2 items-center text-center"
                >
                  <Typography
                    placeholder=""
                    className="text-lg sm:text-xl md:text-4xl lg:text-6xl font-bold "
                  >
                    {val.total > 10 ? val.total + "+" : val.total}
                  </Typography>
                  <Typography
                    placeholder=""
                    className="text-md sm:text-lg md:text-xl text-gray-700"
                  >
                    {val.title}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <div className="flex sm:hidden flex-col gap-8 space-y-2 sm:space-y-12">
            {data.map((val, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col gap-2 items-center text-center"
              >
                <Typography
                  placeholder=""
                  className="text-lg sm:text-xl md:text-4xl lg:text-6xl font-bold "
                >
                  {val.total > 10 ? val.total + "+" : val.total}
                </Typography>
                <Typography
                  placeholder=""
                  className="text-md sm:text-lg md:text-xl text-gray-700"
                >
                  {val.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HumanResourceComponent;
