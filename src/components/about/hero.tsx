"use client";

import Typography from "@material-tailwind/react/components/Typography";
import Image from "next/image";
import React, { Component } from "react";
import LazyYoutube from "./lazy-youtube";

export class Hero extends Component {
  render() {
    return (
      <header className="mt-5 p-8">
        <Image
          width={1200}
          height={600}
          src="/images/about/hero.webp"
          alt="Anniversary"
          className=" h-96 w-full rounded-lg object-cover"
          priority
        />

        <div className="w-full container mx-auto pt-12 pb-24 text-center">
          <Typography
            placeholder=""
            className="mx-auto w-full text-[24px] lg:text-[26px] leading-[36px] lg:leading-[45px] lg:max-w-2xl"
          >
            About Us
          </Typography>
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

          <LazyYoutube videoId="oyoG783-K8M" />

          <Typography
            placeholder=""
            variant="lead"
            className="mx-auto !text-justify mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
          >
            {`The company was founded in Jakarta on October 20, 1952 under the
            name N.V. Perseroan Dagang (NVPD) SOEDARPO CORPORATION. On February
            21, 1990, the company's name was changed to PT NVPD Soedarpo
            Corporation Tbk, and on June 9, 2000, it was changed again to PT
            Millennium Pharmacon International Tbk. On June 24, 2002, the
            company held an Extraordinary General Meeting of Shareholders
            (RUPSLB) where the Board of Directors' plan to conduct the Second
            Limited Public Offering (PUT II) by issuing Pre-emptive Rights
            (HMETD) for a total of 182,000,000 shares was approved.`}
          </Typography>
          <Typography
            placeholder=""
            variant="lead"
            className="mx-auto !text-justify mt-8 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
          >
            On June 8, 2004, Esteem acquired 55% of the total issued and paid-up
            capital of PT Millennium Pharmacon International Tbk. On September
            11, 2017, the company conducted the Third Limited Public Offering
            (PUT III) by issuing Pre-emptive Rights (HMETD) for a total of
            546,000,000 shares.
          </Typography>
        </div>
        <div className="max-w-2xl w-full mx-auto">
          <Image
            width={980}
            height={600}
            src="/images/about/milestone.webp"
            alt="Milestone"
            className="h-auto w-full rounded-lg object-fill"
            priority
          />
        </div>
      </header>
    );
  }
}

export default Hero;
