import React from "react";
import atuts from "../../data/atuts.json";
//Communication id 1
import { TbMapBolt } from "react-icons/tb";
//Park in Syców id 2
import { PiFlowerTulipBold } from "react-icons/pi";
//Projekt id 3
import { GoProjectTemplate } from "react-icons/go";
//Shops id 4
import { LuShoppingBag } from "react-icons/lu";
//Shopping center id 5
import { TiShoppingCart } from "react-icons/ti";
//Lake id 6
import { BsWater } from "react-icons/bs";

export default function ElementAtute() {
  return atuts.map((i) => (
    <div className="lg:w-[30%] w-[50%] md:h-[440px] flex justify-between flex-col mt-[30px] md:mt-0">
      <div className="w-[50px] h-[50px] text-[#e4c27e]">
        {(i.id === 1 && <TbMapBolt className="w-full h-full" />) ||
          (i.id === 2 && <PiFlowerTulipBold className="w-full h-full" />) ||
          (i.id === 3 && <GoProjectTemplate className="w-full h-full" />) ||
          (i.id === 4 && <LuShoppingBag className="w-full h-full" />) ||
          (i.id === 5 && <TiShoppingCart className="w-full h-full" />) ||
          (i.id === 6 && <BsWater className="w-full h-full" />)}
      </div>
      <div className="md:w-[65%] h-[60px] font-bold md:text-[20px] text-[16px] text-left">
        {i.title.toUpperCase()}
      </div>
      <div className="lg:w-[80%] w-[90%] lg:h-[300px] h-[350px] text-left">{i.description}</div>
    </div>
  ));
}
