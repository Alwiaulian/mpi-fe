import { Typography } from "@material-tailwind/react";
import React from "react";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";

const henries = [
  "Coming together is a beginning.",
  "Keeping together is progress.",
  "Working together is success.",
];

export function HeroImage({ children }: { children: React.ReactNode }) {
  const parallax = useParallax<HTMLDivElement>({
    easing: [1, 0, 0.5, 0.1],
  });
  return (
    <section ref={parallax.ref}>
      <ParallaxBanner
        layers={[
          { image: "/images/home/hero-50.webp", speed: -10 },
          {
            speed: -5,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                {children}
              </div>
            ),
          },
        ]}
        className="h-80 w-full lg:h-[18rem] z-20 md:rounded-3xl"
      />
    </section>
  );
}

function BannerHome() {
  return (
    <section className="py-32 flex flex-col w-full mx-auto md:container md:px-4 lg:px-28">
      <HeroImage>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            {henries.map((e) => {
              return (
                <Typography
                  key={e}
                  placeholder={e}
                  variant="lead"
                  color="white"
                  className="mb-5 text-lg sm:text-xl lg:text-2xl font-normal "
                >
                  {e}
                </Typography>
              );
            })}
          </div>
          <Typography
            placeholder={""}
            variant="lead"
            color="white"
            className="m-5 text-md sm:text-lg lg:text-xl font-normal "
          >
            - Henry Ford -
          </Typography>
        </div>
      </HeroImage>
    </section>
  );
}

export default BannerHome;
