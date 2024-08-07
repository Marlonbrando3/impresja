import React from "react";
import { FaArrowLeft } from "react-icons/fa";

type Property = {
  property: any;
};

export default function OfferHeader({ property }: Property) {
  return (
    <div className="lg:w-[1020px] w-[90vw] mx-auto h-[100px] flex flex-wrap items-end pb-[10px] justify-between">
      <div className="flex justify-between items-center float-left w-[145px] cursor-pointer">
        <FaArrowLeft className="text-blue-500" />
        <p>Wróć do ołoszeń</p>
      </div>
      <p className="text-[22px]">{property[0].headerAdvertisement}</p>
    </div>
  );
}
