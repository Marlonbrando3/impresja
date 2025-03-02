"use client";

import React from "react";
import Image from "next/image";
import Images from "../../../data/images.json";

type Images = {
  imagesRef: any;
};

export default function ImageEl({ imagesRef }: Images) {
  return (
    <div ref={imagesRef} className="w-[3300px] h-[200px] relative flex flex-nowrap duration-200">
      {Images.map((i) => (
        <div
          key={i.id}
          className="w-[550px] h-[370px] relative flex border-r-4 border-white transition-duration-200"
        >
          <Image
            src={`/mieszkanie-na-sprzedaz-sycow-slajd${i.id}.jpg`}
            alt={i.description}
            fill
            objectFit="cover"
          ></Image>
        </div>
      ))}
    </div>
  );
}
