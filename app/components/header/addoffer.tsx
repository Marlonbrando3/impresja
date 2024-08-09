"use client";

import React from "react";

type Offer = {
  addYourOffer: any;
};

export default function Addoffer({ addYourOffer }: Offer) {
  const handleShowingWindow = () => {
    addYourOffer.current.style.display = "block";
  };
  return (
    <div
      onClick={handleShowingWindow}
      className="border text-white border-white bg-blue-500 p-[7px] w-[170px] rounded-[5px] text-center shadow-sm cursor-pointer hover:bg-orange-500 duration-200 font-semibold"
    >
      Chcę dodać ofertę
    </div>
  );
}
