"use client";

import Typography from "@material-tailwind/react/components/Typography";
import React, { Component } from "react";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";

export function HeroImage() {
  const parallax = useParallax<HTMLDivElement>({
    easing: [1, 0, 0.5, 0.1],
  });
  return (
    <section ref={parallax.ref}>
      <ParallaxBanner
        layers={[{ image: "/images/scope.webp", speed: -15 }]}
        className="h-96 w-full lg:rounded-lg object-cover lg:h-[21rem] z-20"
      />
    </section>
  );
}

export class Hero extends Component {
  render() {
    return (
      <header className="mt-5 lg:p-8 select-none w-full">
        <div className="w-full container mx-auto pt-12 pb-24">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-32">
            <div className="col-span-1 flex flex-col gap-2">
              <Typography
                placeholder="title"
                className="text-[#DE1B26] font-light text-2xl sm:text-3xl"
              >
                Our
              </Typography>
              <Typography
                placeholder="title"
                className=" font-bold text-2xl md:text-6xl"
              >
                Business
              </Typography>
              <Typography
                placeholder="company"
                className="text-md md:text-3xl mt-4 uppercase text-gray-500 tracking-wide"
              >
                Millenium Pharmacon International
              </Typography>
            </div>
            <div className="col-span-1">
              <div className="rtl-grid grid grid-cols-2 gap-4 gap-y-8">
                <div className="col-span-1 flex flex-col items-center lg:items-start">
                  <Typography
                    placeholder="title"
                    className=" font-bold text-2xl md:text-6xl"
                  >
                    20K
                  </Typography>
                  <Typography
                    placeholder="company"
                    className="text-md lg:text-3xl mt-4 uppercase text-gray-500 tracking-wide"
                  >
                    Outlet
                  </Typography>
                </div>
                <div className="col-span-1 flex flex-col items-center lg:items-start">
                  <Typography
                    placeholder="title"
                    className=" font-bold text-2xl md:text-6xl"
                  >
                    4K
                  </Typography>
                  <Typography
                    placeholder="company"
                    className="text-md lg:text-3xl mt-4 uppercase text-gray-500 tracking-wide"
                  >
                    Product
                  </Typography>
                </div>
                <div className="col-span-1 flex flex-col items-center lg:items-start">
                  <Typography
                    placeholder="title"
                    className=" font-bold text-2xl md:text-6xl"
                  >
                    33
                  </Typography>
                  <Typography
                    placeholder="company"
                    className="text-md lg:text-3xl mt-4 uppercase text-gray-500 tracking-wide"
                  >
                    Principal
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  lg:container lg:mx-auto lg:rounded-lg shadow-t-2xl">
          <HeroImage />
        </div>
      </header>
    );
  }
}

export default Hero;
