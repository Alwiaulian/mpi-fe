"use client";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

interface DialogProps {
  title: string;
  children: React.ReactNode;
  data: DialogPropsData;
}

interface DialogPropsData {
  title: string;
  subTitle: string;
}

export function DialogComponent({ title, data, children }: DialogProps) {
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
          {data.title}
        </Typography>
        <Typography
          placeholder="description"
          variant="lead"
          className="text-md !text-gray-500 line-clamp-2"
        >
          {data.subTitle}
        </Typography>
      </div>

      <Dialog placeholder="dialog" open={showDetail} handler={toggleShowDetail}>
        <DialogHeader placeholder="title">
          <Typography placeholder="title" variant="h5" color="blue-gray">
            {title}
          </Typography>
        </DialogHeader>
        <DialogBody
          placeholder="body"
          divider
          className="flex flex-col items-start px-8 gap-4"
        >
          {children}
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
