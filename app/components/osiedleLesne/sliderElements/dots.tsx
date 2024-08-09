import React from "react";

type Images = {
  actualImage: any;
  mappedId: any;
};

export default function Dots({ actualImage, mappedId }: Images) {
  return (
    <div
      className={`${
        actualImage === mappedId && "bg-[#e4c27e]"
      } border-2 border-[#e4c27e] w-[15px] h-[15px] mx-[5px]`}
    ></div>
  );
}
