import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function OfferHeader() {
  return (
    <div className="w-[1100px] mx-auto h-[100px] flex items-end pb-[10px]">
      <div className="flex justify-between items-center float-left w-[145px] cursor-pointer">
        <FaArrowLeft className="text-blue-500" />
        <p>Wróć do ołoszeń</p>
      </div>
    </div>
  );
}
