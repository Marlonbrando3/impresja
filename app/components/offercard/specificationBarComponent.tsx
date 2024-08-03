import React from "react";
import Stairs from "../../../public/schody.png";
import Rooms from "../../../public/pokoje.png";
import Calendar from "../../../public/kalendarz.png";
import Balocny from "../../../public/balkon.png";
import Image from "next/image";
import { MdHeight } from "react-icons/md";

type Property = {
  param: any;
  data: any;
};

export default function SpecificationBarComponent({ data, param }: Property) {
  console.log(data);

  const icon =
    (data === "Piętro" && (
      <Image src={Stairs} width={50} height={50} objectFit="cover" alt="schody" />
    )) ||
    (data === "Liczba pokoi" && (
      <Image src={Rooms} width={50} height={50} objectFit="cover" alt="schody" />
    )) ||
    (data === "Rok budowy" && (
      <Image src={Calendar} width={50} height={50} objectFit="cover" alt="schody" />
    )) ||
    (data === "Balkon" && (
      <Image src={Balocny} width={50} height={50} objectFit="cover" alt="schody" />
    ));

  return (
    <div className="w-[200px] h-[80px]">
      <div className=" w-full h-[60px] relative flex items-center">
        {icon}
        <div className="ml-[5px] flex flex-col justify-center">
          <p className="font-bold leading-4">{data}:</p>
          <p className="text-[20px] leading-4">{param}</p>
        </div>
      </div>
    </div>
  );
}
