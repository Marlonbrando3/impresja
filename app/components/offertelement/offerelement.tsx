import React from "react";
import Image from "next/image";

export default function Offerelement() {
  return (
    <div className="w-[350px] h-[400px] border-gray-900 rounded-[7px] shadow-md overflow-hidden cursor-pointer hover:shadow-xl duration-200">
      <div className="relative h-[250px] w-full">
        <div className="bottom-0 left-0 absolute text-white font-bold z-20 text-[25px] bg-orange-500/[0.9] px-[10px]">
          199 000 zł
        </div>
        <Image src="/background_view.jpeg" fill objectFit="cover" alt="property" />
      </div>
      <div className="p-[15px]">
        <div className="text-gray-500 mb-[5px]">Namysłów, pow. Namysłowski</div>
        <div className="font-bold text-[18px]">Mieszkanie 2 pokojowe w centurm Namysłowa</div>
        <div>Powierzchnia 45 m2</div>
      </div>
    </div>
  );
}
