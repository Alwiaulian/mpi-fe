"use client";

import Subsidiary from "@/components/banner/subsidiary";
import Typography from "@material-tailwind/react/components/Typography";
import Image from "next/image";
import React, { Component } from "react";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";

export function HeroImage() {
  const parallax = useParallax<HTMLDivElement>({
    easing: [1, 0, 0.5, 0.1],
  });
  return (
    <section ref={parallax.ref}>
      <ParallaxBanner
        layers={[{ image: "/images/hero.webp", speed: -15 }]}
        className="h-96 w-full rounded-lg object-cover lg:h-[21rem] z-20"
      />
    </section>
  );
}

export function HeroAnniversary() {
  const parallax = useParallax<HTMLDivElement>({
    easing: [1, 0, 0.5, 0.1],
  });

  const component = () => {
    return (
      <Image
        width={120}
        height={25}
        src="/images/anniversary.png"
        alt="Anniversary"
        className="object-cover w-full h-full"
        priority
      />
    );
  };

  return (
    <>
      <div className="lg:hidden block">{component()}</div>
      <section ref={parallax.ref} className="hidden lg:block">
        <Parallax speed={10}>{component()}</Parallax>
      </section>
    </>
  );
}

export class Hero extends Component {
  render() {
    return (
      <header className="mt-5 p-8">
        <div className="w-full container mx-auto pt-12 pb-24 text-center">
          <Typography
            placeholder=""
            className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
          >
            Millenium Pharmacon International
          </Typography>
          <Typography
            placeholder=""
            className="mx-auto w-full text-[24px] lg:text-[26px] font-bold leading-[36px] lg:leading-[45px] lg:max-w-2xl"
          >
            (Tbk)
          </Typography>
          <Typography
            placeholder=""
            variant="lead"
            className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
          >
            Pharmaceutical and medical device distribution across Indonesia with
            33 branch offices, a central warehouse and meeting international
            standards and CDOB/CDAKB requirements.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          <div className="hidden lg:flex flex-col justify-center">
            <Subsidiary />
          </div>

          <div className="w-full lg:col-span-4 col-span-6 lg:container lg:mx-auto rounded-lg shadow-t-2xl">
            <HeroImage />
          </div>

          <div className="hidden lg:flex">
            <div className="flex flex-col gap-2 m-4 justify-center">
              <HeroAnniversary />
            </div>
            {/* <div className="flex flex-col gap-2 m-4 justify-end items-end">
              <Image
                width={240}
                height={25}
                src="/images/anniversary.png"
                alt="credit cards"
                className="object-cover"
              />
            </div> */}
          </div>
        </div>

        <div className="lg:hidden flex justify-between">
          <Subsidiary />

          <div className="flex flex-col gap-2 m-4 justify-end items-end">
            <HeroAnniversary />
          </div>
        </div>
      </header>
    );
  }
}

export default Hero;
