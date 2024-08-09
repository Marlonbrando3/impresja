import React from "react";
import Image from "next/image";
import { TenorsSans } from "../../fonts/fonts";

export default function SecondView() {
  return (
    <div
      className={`${TenorsSans.className} w-full md:h-[900px] h-auto border-red-900 py-[50px] md:py-auto px-[10px]`}
    >
      <div className="md:w-[1020px] w-[90%] h-full  border-gray-600 mx-auto flex justify-between items-center flex-wrap">
        <div className=" flex flex-col md:w-[50%] h-[50%] w-[90vw] ">
          <p className="text-[32px] w-[360px] leading-[35px] text-[#723C19] mb-[30px]">
            Kameralna inwestycja blisko centrum i zieleni
          </p>
          <p className="text-[18px] leading-[24px]">
            Inwestycja powstająca w najlepszej lokalizacji w Sycowie. Wybierając Osiedle Leśne,
            wybieramy ciszę, kameralną zabudowę i wyjątkową dostępność do infrastruktury miasta.
            <br></br>
            <br></br>
            Bezpośrednio obok i w dystansie krórkiego spaceru mamy Park w Sycowie, centrum handlowe
            oraz popularne sklepy i markety tj. Lidl, Żabka, Netto, Martes itd. Dystans 1 km do
            drogi ekspresowej S8 zapewnia ciszę na osiedlu oraz dobrą komunikację z innymi miastami,
            głównie z Wrocławiem.
          </p>
        </div>
        <div className="border w-[40%] h-[50%] relative rounded-xl overflow-hidden hidden md:block">
          <Image
            src="/nieruchomosci_sycow_secondview_1.png"
            fill
            objectFit="cover"
            alt="nieruchomości_syców"
          ></Image>
        </div>
        <div className="md:w-[70%] w-full bg-yellow-400 h-[300px] relative mx-auto md:-mt-[140px] border-4 border-white rounded-xl overflow-hidden">
          {" "}
          <Image src="/slajd3.jpg" fill objectFit="cover" alt="nieruchomości-Syców"></Image>
        </div>
      </div>{" "}
    </div>
  );
}
