import {
  ClipboardDocumentCheckIcon,
  CubeTransparentIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React from "react";

const strenghts = [
  {
    icon: <GlobeAsiaAustraliaIcon />,
    title: "National Coverage",
    desc: "The company distributes pharmaceutical products, food supplements, and medical devices nationwide in Indonesia with 33 branch offices and a 13,000 m2 central warehouse.",
  },
  {
    icon: <ClipboardDocumentCheckIcon />,
    title: "Public Listed",
    desc: "In 1990, the company went public, selling 3,500,000 shares (38.46% of the capital), listed as PT NVPD Soedarpo Corporation Tbk with the ticker 'SDPC'. It currently has 1,274,000,000 outstanding shares.",
  },
  {
    icon: <CubeTransparentIcon />,
    title: "Independent Distributor",
    desc: "As an Independent Distributor, the company partners with 31 trusted Principals, distributing over 4,000 quality products to nearly 20,000 outlets in various healthcare segments. In 2022, it achieved a total Customer Satisfaction Index (CSI) of 98.8%.",
  },
];

function Strength() {
  return (
    <section className="w-full mb-20 bg-gradient-to-b from-gray-100 to-gray-50 border-y-2 border-gray-300">
      <div className=" py-20 p-15 flex flex-col mx-auto w-full ">
        <div className="max-w-3xl mx-auto px-8 mb-20">
          <Typography
            placeholder="title"
            variant="h2"
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r  from-gray-600 to-black inline-block text-transparent bg-clip-text text-center"
          >
            A powerful pharmaceutical and medical device distribution, trusted
            by many principals
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 p-8 max-w-4xl mx-auto">
          {strenghts.map(({ icon, title, desc }) => (
            <div key={title} className="col-span-1">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div className="rounded-full w-12 md:w-15 h-12 md:h-15 p-2 md:p-3 bg-white text-gray-700 border border-gray-300">
                  {icon}
                </div>
                <Typography
                  placeholder="title"
                  variant="h5"
                  className=" text-gray-800 "
                >
                  {title}
                </Typography>
                <Typography
                  placeholder="description"
                  variant="lead"
                  className="text-gray-500 text-sm text-center md:text-left"
                >
                  {desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Strength;
