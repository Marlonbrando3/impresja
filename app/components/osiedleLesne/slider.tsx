"use client";

import React, { useRef, useState } from "react";
import ImageEl from "./sliderElements/imageEl";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { TenorsSans } from "../../fonts/fonts";
import ImagesData from "../../data/images.json";
import Dots from "./sliderElements/dots";

export default function Slider() {
  const images: any = useRef();

  const [margin, setMargin] = useState(0);
  const [actualImage, setActualImages] = useState(1);
  const MarginChange = 551;

  const imagesLength = ImagesData.length;

  console.log(imagesLength);

  const handleSlideRightButton = () => {
    const newMargin = margin - MarginChange;

    if (actualImage <= imagesLength - 1) {
      images.current.style.marginLeft = `${newMargin}px`;
      setMargin(newMargin);
      setActualImages(actualImage + 1);
    }
  };

  const handleSlideLeftButton = () => {
    const newMargin = margin + MarginChange;

    if (actualImage >= 2 && actualImage <= imagesLength) {
      images.current.style.marginLeft = `${newMargin}px`;
      setMargin(newMargin);
      setActualImages(actualImage - 1);
    }
  };

  return (
    <div id="gallery" className="w-full h-[500px] mb-[120px] ">
      <div className="lg:w-[1020px] w-[90vw] h-full  mx-auto flex justify-center items-center flex-col">
        <p
          className={`${TenorsSans.className} text-[28px] lg:text-[32px] lg:w-[900px] w-full leading-[35px] text-[#723C19] mb-[30px]`}
        >
          Galeria
        </p>
        <div className="lg:w-[900px] w-full h-[370px] overflow-hidden relative rounded-xl">
          {actualImage !== 1 && (
            <PiArrowCircleLeftThin
              onClick={handleSlideLeftButton}
              className="absolute w-[80px] h-[80px] left-4 text-white z-10 top-0 bottom-0 my-auto cursor-pointer"
            />
          )}
          <div className=" absolute h-full lg:w-[350px] md:w-[20vw] right-0 z-10 sm:bg-gradient-to-r from-white/[0.0] from-1% via-30% via-white/[0.8] to-white to-60% flex items-center justify-end">
            <PiArrowCircleRightThin
              className="w-[80px] h-[80px] sm:text-[#e4c27e] text-white cursor-pointer mr-[4px]"
              onClick={handleSlideRightButton}
            />
          </div>
          <ImageEl imagesRef={images} />
        </div>
        <div className="flex mt-[20px]">
          {ImagesData.map((i) => (
            <Dots key={i.id} actualImage={actualImage} mappedId={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
