import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const principles = [
  "/images/home/principles/errita-pharma.png",
  "/images/home/principles/meiji.png",
  "/images/home/principles/mepro.png",
  "/images/home/principles/nutrifood.png",
  "/images/home/principles/nutrindo.png",
];

function PrincipleMarquee() {
  return (
    <div className="container my-8">
      <Marquee gradient>
        {principles.map((val) => {
          return (
            <Image
              key={val}
              src={val}
              alt="principle"
              className="px-14 w-full h-full"
              width={180}
              height={25}
            />
          );
        })}
      </Marquee>
    </div>
  );
}

export default PrincipleMarquee;
