"use client";

import React from "react";
import Link from "next/link";
import { DMSerif, TenorsSans } from "../fonts/fonts";
import { useRef } from "react";

export default function NewProjektSycow() {
  const popUp: any = useRef();

  const handlingClosing = () => {
    popUp.current.style.display = "none";
  };

  setTimeout(() => {
    popUp.current.style.display = "block";
  }, 3000);

  return (
    <div
      ref={popUp}
      className="fixed md:w-[500px] w-[95vw] h-[500px] shadow-2xl z-40 top-0 bottom-0 my-auto mx-auto right-0 left-0 bg-red-900 bg-[url('/mieszkania-na-sprzedaz-sycow-2.jpg')] bg-cover p-[30px] rounded-md hidden"
    >
      <div
        onClick={handlingClosing}
        className="bg-white text-black absolute right-0 top-0 px-[5px] cursor-pointer"
      >
        Zamknij X
      </div>
      <span
        className={`${DMSerif.className} md:text-[20px] text-[30px]  text-white font-bold leading-[74px] bg-[#dcb15c] px-[20px]`}
      >
        Nowa inwestycja!
      </span>
      <div
        className={`${DMSerif.className} md:text-[70px] text-[50px] text-white font-bold leading-[74px]`}
      >
        Osiedle Leśne
      </div>

      <div className={`${DMSerif.className} leading-[0px] text-white text-[24px] h-[30px]`}>
        W Sycowie
      </div>
      <div className="flex items-center">
        <div className="bg-white h-[2px] w-[40px] mr-[20px]"></div>
        <div
          className={`${TenorsSans.className} text-white w-[290px] h-[32px] font-bold leading-[18px] uppercase`}
        >
          Mieszkania i domy w najlepszej lokalizacji w Sycowie
        </div>
      </div>
      <Link
        href="/nowe-mieszkania-sycow"
        className="bg-[#dcb15c] text-white mt-[55px] inline-block px-[10px] text-[24px] shadow-xl rounded-md border-2 border-white"
      >
        Sprawdź
      </Link>
    </div>
  );
}
