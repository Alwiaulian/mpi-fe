import { Typography } from "@material-tailwind/react";
import React from "react";

function AboutHome() {
  return (
    <div className="my-8 flex flex-col items-center text-center">
      <Typography
        placeholder=""
        variant="lead"
        className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
      >
        Founded in Jakarta on October 20 1952 by Mr. Soedarpo Sastrosatomo and
        Mrs. Minarsih Soedarpo Sastrosatomo Wiranatakusumah, the Company began
        with the name N.V. Trading Company (NVPD) SOEDARPO CORPORATION.
      </Typography>
      <Typography
        placeholder=""
        variant="lead"
        className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
      >
        The Deed of Establishment was revised with Deed of Amendment No. 14
        dated May 5 1953, and approved by the Minister of Justice of the
        Republic of Indonesia on May 27 1953.
      </Typography>
      <Typography
        placeholder=""
        variant="lead"
        className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
      >
        The Company was registered at the District Court Registrar&apos;s Office
        in Jakarta on June 5 1953, and announced in the State Gazette of the
        Republic of Indonesia No.56 dated July 14 1953, Supplement No.421.
      </Typography>
    </div>
  );
}

export default AboutHome;
