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
      className="bg-blue-500 p-[7px] w-[150px] text-white rounded-[5px] text-center shadow-sm cursor-pointer hover:bg-orange-500 duration-200 font-semibold"
    >
      Chcę dodać ofertę
    </div>
  );
}
