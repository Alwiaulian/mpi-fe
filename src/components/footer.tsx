"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { NAV_MENU } from "@/data/navbar_props";

function Footer() {
  return (
    <footer className="relative w-full sm:px-8 py-4">
      <div className="w-full px-8 mx-auto max-w-7xl">
        <div className="grid justify-between grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col mb-6 gap-4 justify-between">
            <div className="flex flex-col">
              <Link href="/" className="mr-auto">
                <Image
                  src="/images/logo.png"
                  alt="MPI Logo"
                  width={80}
                  height={0}
                  className="mr-2 rounded-sm pb-2 w-auto h-auto"
                />
              </Link>
              <Link href="/" className="mr-auto">
                <h5 className="=font-sans text-xs antialiased font-semibold leading-snug tracking-normal text-inherit">
                  PT. Millenium Pharmacon International, Tbk.
                </h5>
              </Link>
            </div>
            <p className="=font-sans md:hidden block text-xs antialiased leading-snug tracking-normal text-inherit !text-gray-500">
              Jl. Crown Bungur Arteri Lantai 2 - 4 Jl. Sultan Iskadar Muda No.
              18 / Jl. Bungur No. 1 Kel.Kebayoran Lama Selatan, Kec.Kebayoran
              Lama, Jakarta Selatan 12220
            </p>
            <div className="flex flex-col gap-2">
              <h3 className="=font-sans text-xs antialiased leading-snug tracking-normal text-inherit">
                Subsidiary of
              </h3>
              <Link href="https://pharmaniaga.com" className="mr-auto">
                <Image
                  src="/images/pharmaniaga-icon.png"
                  alt="Pharmaniaga Logo"
                  width={80}
                  height={0}
                  className="mr-2 rounded-sm w-auto h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="grid justify-between grid-cols-3 gap-4">
            <ul>
              <p className="block mb-3 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 opacity-40">
                Company
              </p>
              {NAV_MENU.map((val, index) => (
                <li key={index}>
                  <Link
                    href={val.href}
                    className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-600 antialiased transition-colors hover:text-blue-gray-900"
                  >
                    {val.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="col-span-2 ">
              <p className="block mb-3 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 opacity-40">
                Contact
              </p>
              <li>
                <a
                  href="mailto:investor.relation@mpi-pharmaniaga.co.id"
                  className="grid grid-cols-4 py-1.5 items-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900"
                >
                  <EnvelopeIcon className="w-5 h-5 mx-auto" />
                  <div className="col-span-3">
                    investor.relation@mpi-pharmaniaga.co.id
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+622127085961"
                  className="grid grid-cols-4 py-1.5 items-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900"
                >
                  <PhoneIcon className="w-5 h-5 mx-auto" />
                  <div className="col-span-3">+6221 27085961</div>
                </a>
              </li>
              <li className="hidden md:block">
                <div className="grid grid-cols-4 gap-2 py-1.5 items-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                  <MapPinIcon className="w-6 h-6 mx-auto" />
                  <div className="col-span-3">
                    Jl. Crown Bungur Arteri Lantai 2 - 4 Jl. Sultan Iskadar Muda
                    No. 18 / Jl. Bungur No. 1 Kel.Kebayoran Lama Selatan,
                    Kec.Kebayoran Lama, Jakarta Selatan 12220
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-blue-gray-50 md:flex-row md:justify-between">
          <p className="block mb-4 font-sans text-sm antialiased font-normal leading-normal text-center text-blue-gray-900 md:mb-0">
            © 2024{" "}
            <Link href="/">PT. Millenium Pharmacon International, Tbk.</Link>
          </p>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <a
              href="https://www.facebook.com/ptmpitbk"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ptmpitbk"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99999 5.19316C7.33984 5.19316 5.19296 7.34004 5.19296 10.0002C5.19296 12.6604 7.33984 14.8072 9.99999 14.8072C12.6602 14.8072 14.807 12.6604 14.807 10.0002C14.807 7.34004 12.6602 5.19316 9.99999 5.19316ZM9.99999 13.1244C8.27968 13.1244 6.87578 11.7205 6.87578 10.0002C6.87578 8.27988 8.27968 6.87598 9.99999 6.87598C11.7203 6.87598 13.1242 8.27988 13.1242 10.0002C13.1242 11.7205 11.7203 13.1244 9.99999 13.1244ZM15.0039 3.87598C14.3828 3.87598 13.8812 4.37754 13.8812 4.99863C13.8812 5.61973 14.3828 6.12129 15.0039 6.12129C15.625 6.12129 16.1266 5.62207 16.1266 4.99863C16.1242 4.3752 15.625 3.87598 15.0039 3.87598Z"
                  fill="#282828"
                />
                <path
                  d="M19.3703 10C19.3703 8.70626 19.382 7.42423 19.3094 6.13283C19.2367 4.63283 18.8945 3.30158 17.7976 2.2047C16.6984 1.10548 15.3695 0.765639 13.8695 0.692982C12.5758 0.620326 11.2937 0.632045 10.0023 0.632045C8.70858 0.632045 7.42655 0.620326 6.13515 0.692982C4.63515 0.765639 3.3039 1.10783 2.20702 2.2047C1.1078 3.30392 0.767958 4.63283 0.695302 6.13283C0.622645 7.42658 0.634364 8.70861 0.634364 10C0.634364 11.2914 0.622645 12.5758 0.695302 13.8672C0.767958 15.3672 1.11015 16.6985 2.20702 17.7953C3.30624 18.8945 4.63515 19.2344 6.13515 19.307C7.4289 19.3797 8.71093 19.368 10.0023 19.368C11.2961 19.368 12.5781 19.3797 13.8695 19.307C15.3695 19.2344 16.7008 18.8922 17.7976 17.7953C18.8969 16.6961 19.2367 15.3672 19.3094 13.8672C19.3844 12.5758 19.3703 11.2938 19.3703 10ZM17.3078 15.5266C17.1367 15.9531 16.9305 16.2719 16.6 16.6C16.2695 16.9305 15.9531 17.1367 15.5266 17.3078C14.2937 17.7977 11.3664 17.6875 9.99999 17.6875C8.63358 17.6875 5.7039 17.7977 4.47108 17.3102C4.04452 17.1391 3.72577 16.9328 3.39765 16.6024C3.06718 16.2719 2.86093 15.9555 2.68983 15.5289C2.20233 14.2938 2.31249 11.3664 2.31249 10C2.31249 8.63361 2.20233 5.70392 2.68983 4.47111C2.86093 4.04454 3.06718 3.72579 3.39765 3.39767C3.72811 3.06954 4.04452 2.86095 4.47108 2.68986C5.7039 2.20236 8.63358 2.31251 9.99999 2.31251C11.3664 2.31251 14.2961 2.20236 15.5289 2.68986C15.9555 2.86095 16.2742 3.0672 16.6023 3.39767C16.9328 3.72814 17.1391 4.04454 17.3101 4.47111C17.7976 5.70392 17.6875 8.63361 17.6875 10C17.6875 11.3664 17.7976 14.2938 17.3078 15.5266Z"
                  fill="#282828"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@millenniumpharmaconinterna1539"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8803 2.49842C22.6191 1.515 21.8496 0.740518 20.8725 0.477678C19.1015 0 11.9999 0 11.9999 0C11.9999 0 4.89844 0 3.12747 0.477678C2.15034 0.740518 1.38079 1.515 1.11969 2.49842C0.645111 4.28101 0.645111 8.00005 0.645111 8.00005C0.645111 8.00005 0.645111 11.7191 1.11969 13.5017C1.38079 14.4851 2.15034 15.2595 3.12747 15.5224C4.89844 16 11.9999 16 11.9999 16C11.9999 16 19.1015 16 20.8725 15.5224C21.8496 15.2595 22.6191 14.485 22.8803 13.5018C23.3549 11.719 23.3549 8.00005 23.3549 8.00005C23.3549 8.00005 23.3549 4.28101 22.8803 2.49842Z"
                  fill="#282828"
                />
                <path
                  d="M9.67737 11.3767L15.6129 8.00028L9.67737 4.62354V11.3767Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
