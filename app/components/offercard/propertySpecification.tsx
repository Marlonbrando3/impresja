"use client";

import React from "react";
import SpecificationBarComponent from "./specificationBarComponent";

type Property = {
  property: any;
};

export default function PropertySpecification({ property }: Property) {
  const DataInSpecificationBar = ["Piętro", "Liczba pokoi", "Balkon", "Rok budowy"];

  console.log(property);

  const DataForSpecificationBarComponent = DataInSpecificationBar.map((i) => {
    let param =
      (i === "Piętro" && property[0].floorNo) ||
      (i === "Liczba pokoi" && property[0].floorNo) ||
      (i === "Balkon" && property[0].floorNo) ||
      (i === "Rok budowy" && property[0].floorNo);
    return <SpecificationBarComponent data={i} param={param} />;
  });

  return (
    <div className="w-[1100px] mx-auto bg-white rounded-[10px] mt-[20px]">
      <div className="border-gray-500 w-full h-auto px-[40px] py-[10px] ">
        <div className="text-[34px] leading-[25px] text-orange-500 font-bold flex justify-between items-end w-[450px] border-b py-[20px]">
          <p>{property[0].price.amount.toLocaleString().replaceAll(",", " ")} zł</p>
          <p>|</p>
          <p>{property[0].totalArea} m2</p>
          <p>|</p>
          <p className="text-[15px] text-black">{property[0].priceM2.amount} zł / m2</p>
        </div>
        <div className="h-auto w-full flex">{DataForSpecificationBarComponent}</div>
      </div>
    </div>
  );
}
