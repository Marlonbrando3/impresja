import React from "react";
import { TenorsSans } from "../../fonts/fonts";
import Image from "next/image";

export default function Map() {
  return (
    <div>
      {" "}
      <div id="qanda" className="w-full h-auto lg:mb-[120px] mb-[40px]">
        <div className=" py-[20px] lg:w-[1000px] w-[90vw] h-full mx-auto">
          <p
            className={`${TenorsSans.className} lg:text-[32px] text-[28px] lg:w-[900px] w-full leading-[35px] text-[#723C19] mb-[30px]`}
          >
            <p className="inline lg:text-[32px] text-[28px]">Okolica</p>
          </p>
          <div className="lg:w-full w-[90vw] md:h-[650px] h-[350px] relative">
            <Image
              src="/mapka_gajowa.jpg"
              fill
              objectFit="contain"
              alt="Nieruchomości Syców"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
