import React from "react";
import { TenorsSans } from "../../fonts/fonts";
import Image from "next/image";

export default function Map() {
  return (
    <div>
      {" "}
      <div id="map" className="w-full lg:mb-[120px] mb-[40px]">
        <div className="py-[20px] lg:w-[1000px] w-[90vw] mx-auto">
          <div
            className={`${TenorsSans.className} lg:text-[32px] text-[28px] lg:w-[900px] w-full leading-[35px] text-[#723C19] mb-[10px]`}
          >
            <p className="inline lg:text-[42px] text-[28px]">Okolica</p>
            {/* <div className="h-[3px] w-[164px] bg-yellow-600 -ml-[60px]"></div> */}
          </div>
          <div className="text-[18px] w-full md:w-[600px] leading-[20px] text-yellow-800 mb-[30px]">
            Ubranizacja oraz dostępność obiektów z <strong>mieszkań w Sycowie</strong> w projekcie
            Osiedle Leśne. Zobacz gdzie będziesz miał blisko!
          </div>
          <div className="lg:w-full w-[90vw] md:h-[650px] h-[220px] relative">
            <Image
              src="/mieszkania-sycow-mapka.jpg"
              fill
              objectFit="contain"
              alt="nieruchomości-sycow-mieszkania-sycow"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
