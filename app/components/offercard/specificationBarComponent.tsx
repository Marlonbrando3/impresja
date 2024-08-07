import React from "react";
import Stairs from "../../../public/schody.png";
import Rooms from "../../../public/pokoje.png";
import Calendar from "../../../public/kalendarz.png";
import Balocny from "../../../public/balkon.png";
import Image from "next/image";
import { MdHeight } from "react-icons/md";
import { PiStairsThin } from "react-icons/pi";
import { PiBedThin } from "react-icons/pi";
import { PiUniteSquareThin } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { PiBathtubThin } from "react-icons/pi";

type Property = {
  param: any;
  data: any;
};

export default function SpecificationBarComponent({ data, param }: Property) {
  // console.log(data);

  const icon =
    (data === "Piętro" && <PiStairsThin className="w-[50px] h-[50px]" />) ||
    (data === "Liczba pokoi" && <PiBedThin className="w-[50px] h-[50px]" />) ||
    (data === "Liczba łazienek" && <PiBathtubThin className="w-[50px] h-[50px]" />) ||
    (data === "Rok budowy/oddania" && <CiCalendarDate className="w-[50px] h-[50px]" />) ||
    (data === "Powierzchnia użytk." && <PiUniteSquareThin className="w-[50px] h-[50px]" />);

  return (
    <div className="w-auto h-[80px] pr-[30px]">
      <div className=" w-full h-[80px] relative flex items-center">
        {icon}
        <div className="ml-[5px] flex flex-col justify-center">
          <p className="font-bold leading-4">{data}</p>
          <p className="text-[20px] leading-4 mt-[6px]">{param}</p>
        </div>
      </div>
    </div>
  );
}
