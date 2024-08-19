import React from "react";
import ElementAtute from "./elementAtute";
import { TenorsSans } from "../../fonts/fonts";

export default function Thirdview() {
  return (
    <div className={`${TenorsSans.className} w-full lg:h-[900px] h-auto my-[40px] `}>
      {/* <p className="w-[1020px] mx-auto text-[32px] leading-[35px] text-[#723C19] mb-[30px]">
        Główne atuty inwestycji
      </p> */}
      <div className="lg:w-[1020px] w-[90vw] h-full mx-auto flex flex-wrap justify-evenly items-center">
        <ElementAtute />
      </div>
    </div>
  );
}
