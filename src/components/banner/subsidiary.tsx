import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";

export function Subsidiary() {
  const parallax = useParallax<HTMLDivElement>({
    easing: [1, 0, 0.5, 0.1],
  });

  const component = () => {
    return (
      <div className="flex flex-col gap-2 m-4 lg:justify-end lg:items-end">
        <Typography
          placeholder="subsidiary of"
          className="text-gray-800 font-bold text-[14px] leading-[22px] tracking-tight"
        >
          Subsidiary of
        </Typography>
        <Image
          width={140}
          height={25}
          src="/images/pharmaniaga-icon.png"
          alt="pharmaniaga logo"
          className="object-cover w-full h-full"
          priority
        />
      </div>
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

export default Subsidiary;
