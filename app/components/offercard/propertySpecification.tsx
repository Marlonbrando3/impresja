"use client";

import React from "react";
import SpecificationBarComponent from "./specificationBarComponent";

type Property = {
  property: any;
};

export default function PropertySpecification({ property }: Property) {
  const DataInSpecificationBar = [
    "Piętro",
    "Liczba pokoi",
    "Liczba łazienek",
    "Powierzchnia użytk.",
    "Rok budowy/oddania",
  ];

  // console.log(property);

  const DataForSpecificationBarComponent = DataInSpecificationBar.map((i) => {
    let param =
      (i === "Piętro" && property[0].floorNo) ||
      (i === "Liczba pokoi" && property[0].noOfRooms) ||
      (i === "Liczba łazienek" && property[0].noOfBathrooms) ||
      (i === "Powierzchnia użytk." && property[0].totalArea) ||
      (property[0].vacantFromDate !== null &&
        i === "Rok budowy/oddania" &&
        property[0].vacantFromDate.slice(0, 7));
    return <SpecificationBarComponent key={i} data={i} param={param} />;
  });

  return (
    <div className="w-[1020px] mx-auto bg-white rounded-[10px] mt-[20px]">
      <div className="border-gray-500 w-full h-auto px-[40px] py-[10px] ">
        <div className="text-[34px] leading-[25px] text-blue-400 flex justify-between items-end w-[450px] border-b py-[20px]">
          <p>{property[0].price.amount.toLocaleString().replaceAll(",", " ")} zł</p>
          <p>|</p>
          <p>{property[0].totalArea} m2</p>
          <p>|</p>
          <p className="text-[15px] text-black">{property[0].priceM2.amount} zł / m2</p>
        </div>
        <div className="h-[80px] w-full flex items-center">{DataForSpecificationBarComponent}</div>
      </div>
    </div>
  );
}
