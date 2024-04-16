import { Typography } from "@material-tailwind/react";
import React from "react";

const STATS = [
  {
    title: "20.000",
    desc: "Customers",
  },
  {
    title: "4.000",
    desc: "Products",
  },
  {
    title: "33",
    desc: "Principles",
  },
];

function StatsBanner() {
  return (
    <section className="bg-[#5042A9] p-8 w-full border-y-2 border-black">
      <div className="flex flex-col sm:flex-row gap-8 justify-between mx-auto max-w-xl">
        {STATS.map((stat) => (
          <div key={stat.desc} className="flex flex-col items-center">
            <Typography
              placeholder="stats of"
              className="text-white font-bold text-4xl leading-6xl tracking-tight"
            >
              {stat.title}
            </Typography>
            <Typography
              placeholder={stat.desc}
              className="text-white/70 text-lg"
            >
              {stat.desc}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBanner;
