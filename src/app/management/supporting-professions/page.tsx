"use client";

import React from "react";
import ManagementLayouts from "@/components/layouts/management_layout";
import { Typography } from "@material-tailwind/react";
import { SupportProps, Supports } from "@/data/support_props";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { DialogComponent } from "@/components/dialog";
import { CopyButtonComponent } from "@/components/copy_button";

function SupportingDetailComponent({
  title,
  pic,
  address,
  fax,
  phone,
}: SupportProps) {
  return (
    <div className="col-span-1 flex flex-col gap-2">
      <Typography placeholder="content" className="font-semibold capitalize">
        {title}
      </Typography>

      <Typography
        placeholder="content"
        variant="h3"
        className="font-normal mb-4 "
      >
        {pic}
      </Typography>

      {phone && (
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center">
          <div className="flex flex-row gap-2 items-center">
            <Typography
              placeholder="content"
              className="font-semibold capitalize"
            >
              Phone
            </Typography>
            <CopyButtonComponent text={phone} />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <PhoneIcon className="w-6 h-6" />
            <div className="w-full">{phone}</div>
          </div>
        </div>
      )}

      {fax && (
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center">
          <div className="flex flex-row gap-2 items-center">
            <Typography
              placeholder="content"
              className="font-semibold capitalize"
            >
              Fax
            </Typography>
            <CopyButtonComponent text={fax} />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <PhoneIcon className="w-6 h-6" />
            <div className="w-full">{fax}</div>
          </div>
        </div>
      )}

      <Typography placeholder="content" className="font-normal capitalize mt-4">
        {address?.toLowerCase()}
      </Typography>
    </div>
  );
}

function SupportingProfessionPage() {
  return (
    <ManagementLayouts>
      {Supports.map((val, index) => (
        <div key={index} className="col-span-1">
          <DialogComponent
            title="Detail Support"
            data={{ title: val.title, subTitle: val.pic }}
          >
            <SupportingDetailComponent {...val} />
          </DialogComponent>
        </div>
      ))}
    </ManagementLayouts>
  );
}

export default SupportingProfessionPage;
