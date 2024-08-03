"use client";

import React from "react";
import Image from "next/image";
import PropertiesFromAsari from "../../../public/properties.json";

type Property = {
  property: any;
};

export default function Images({ property }: Property) {
  console.log(property);
  return (
    <div className="w-full">
      <div className=" border-gray-900 w-[1100px] h-[450px] mx-auto rounded-[10px] overflow-hidden flex">
        <div className="h-full w-[60%] relative">
          <Image
            src={`https://img.asariweb.pl/normal/${property[0].images[0].id}`}
            objectFit="cover"
            fill
            className="opacity-90 hover:opacity-100 duration-200 cursor-pointer"
            // width={100}
            // height={100}
            alt="property"
          />
        </div>
        <div className="h-full w-[40%] flex flex-col pl-[3px]">
          <div className="h-[60%] w-full relative">
            <Image
              src={`https://img.asariweb.pl/normal/${property[0].images[1].id}`}
              objectFit="cover"
              fill
              className="opacity-90 hover:opacity-100 duration-200 cursor-pointer"
              // width={100}
              // height={100}
              alt="property"
            />
          </div>
          <div className="h-[40%] w-full flex pt-[3px]">
            <div className="h-full w-[50%] relative">
              <Image
                src={`https://img.asariweb.pl/normal/${property[0].images[2].id}`}
                objectFit="cover"
                fill
                className="opacity-90 hover:opacity-100 duration-200 cursor-pointer"
                // width={100}
                // height={100}
                alt="property"
              />
            </div>
            <div className="h-full w-[50%] bg-blue-500 relative">
              <div className="absolute w-full h-full bg-gray-500/[0.5] z-10 flex justify-center items-center cursor-pointer hover:bg-blue-500/[0.8] duration-200">
                <p className="text-white font-bold text-[24px]">Więcej zdjęć</p>
              </div>
              <Image
                src={`https://img.asariweb.pl/normal/${property[0].images[3].id}`}
                objectFit="cover"
                fill
                // width={100}
                // height={100}
                alt="property"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
