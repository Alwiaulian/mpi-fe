import { BranchProps, BranchesData } from "@/data/branches_props";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";

export function BranchItem({ data }: { data: BranchProps }) {
  const [showDetail, setShowDetail] = useState(false);

  const toggleShowDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      <div
        onClick={toggleShowDetail}
        className="p-2 flex flex-col gap-2 rounded-md bg-white hover:bg-gray-100 transition-all duration-300 cursor-pointer"
      >
        <Typography
          placeholder="title"
          className="text-lg text-gray-800 line-clamp-2"
        >
          {data.name}
        </Typography>
        <Typography
          placeholder="description"
          variant="lead"
          className="text-md !text-gray-500 line-clamp-2 capitalize"
        >
          {data.address}
        </Typography>
      </div>
      <Dialog placeholder="dialog" open={showDetail} handler={toggleShowDetail}>
        <DialogHeader placeholder="title">
          <Typography placeholder="title" variant="h5" color="blue-gray">
            Detail Branch
          </Typography>
        </DialogHeader>
        <DialogBody
          placeholder="body"
          divider
          className="flex flex-col items-start px-8 gap-4"
        >
          <Typography
            placeholder="content"
            variant="h3"
            className=" font-normal"
          >
            {data.name}
          </Typography>
          {data.email && (
            <div className="flex flex-row gap-4 items-center">
              <EnvelopeIcon className="w-6 h-6" />
              <div className="w-full">{data.email}</div>
            </div>
          )}

          {data.fax && (
            <div className="flex flex-row gap-4 items-center">
              <PhoneIcon className="w-6 h-6" />
              <div className="w-full">{data.fax}</div>
            </div>
          )}

          {data.pic && (
            <>
              {data.pic.map((pic, index) => (
                <div key={index} className="flex flex-row gap-4 items-center">
                  <PhoneIcon className="w-6 h-6" />
                  <div className="flex flex-col w-full">
                    <Typography
                      placeholder="content"
                      className="font-normal capitalize text-sm"
                    >
                      {pic.name}
                    </Typography>
                    <Typography
                      placeholder="content"
                      className="font-semibold capitalize"
                    >
                      {pic.phone}
                    </Typography>
                  </div>
                </div>
              ))}
            </>
          )}

          <Typography placeholder="content" className="font-normal capitalize">
            {data.address}
          </Typography>
        </DialogBody>
        <DialogFooter placeholder="footer modal" className="space-x-2">
          <Button
            placeholder="close button"
            variant="text"
            color="blue-gray"
            onClick={toggleShowDetail}
          >
            close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

function BranchComponents() {
  const [filter, setFilter] = useState("");
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const filteredBranches = BranchesData.filter((branch) => {
    return branch.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section className="flex w-full flex-col gap-8  my-15">
      <div className="container mx-auto px-8">
        <Typography placeholder="title" className="text-lg text-gray-700">
          We carry out distribution operations in accordance with CDOB and CDAKB
          principles through distribution channels in 33 branches spread across
          various cities & provinces throughout Indonesia.
        </Typography>
      </div>
      <div className="container mx-auto px-8">
        <div className="border border-gray-300 p-8 flex flex-col gap-8 rounded-md">
          <div className="w-full border-b pb-8 flex flex-col items-center gap-4">
            <Typography
              placeholder="title"
              variant="h3"
              className="text-2xl text-gray-800 text-center"
            >
              Explore Branch
            </Typography>
            <div className="relative max-w-3xl w-full mx-4">
              <input
                type=""
                id="default-search"
                className="block w-full p-2 px-4 pe-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search branches..."
                onChange={(e) => setFilter(e.target.value)}
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {filteredBranches.length === 0 ? (
            <Typography
              placeholder="title"
              variant="h3"
              className="text-xl text-gray-800 text-center"
            >
              No results found
            </Typography>
          ) : (
            <Accordion
              placeholder="expanded"
              open={showMore}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredBranches.slice(0, 8).map((data, index) => (
                <div key={index} className="col-span-1 ">
                  <BranchItem data={data} />
                </div>
              ))}

              {filteredBranches.length > 8 && (
                <>
                  {filteredBranches
                    .slice(8, filteredBranches.length)
                    .map((data, index) => (
                      <AccordionBody key={index} className="col-span-1 !py-0 ">
                        <BranchItem data={data} />
                      </AccordionBody>
                    ))}
                </>
              )}
            </Accordion>
          )}
        </div>

        {filteredBranches.length > 8 && (
          <Button
            placeholder="view more"
            variant="text"
            size="lg"
            color="gray"
            className="flex mx-auto items-center gap-2 mt-12"
            onClick={toggleShowMore}
          >
            {showMore ? (
              <ArrowUpIcon className="h-5 w-5 font-bold text-gray-900" />
            ) : (
              <ArrowDownIcon className="h-5 w-5 font-bold text-gray-900" />
            )}

            {showMore ? "VIEW LESS" : "VIEW MORE"}
          </Button>
        )}
      </div>
    </section>
  );
}

export default BranchComponents;
