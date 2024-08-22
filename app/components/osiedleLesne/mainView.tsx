import Head from "next/head";
import React from "react";
import Link from "next/link";
import { DMSerif } from "../../fonts/fonts";
import { TenorsSans } from "../../fonts/fonts";

export default function MainView() {
  return (
    <>
      <div
        className={`${DMSerif.className} w-full h-[780px] bg-[url('/nieruchomosci_syców_2.jpg')] -mt-[70px] bg-cover`}
      >
        <div className="lg:w-[1020px] w-[90%] mx-auto h-full flex- flex-col pt-[140px] pb-[120px] flex justify-between">
          <div className="flex flex-col justify-between h-[220px]">
            <div id="title" className="flex flex-col items-start md:w-[430px] h-[100px]">
              <div className="md:text-[70px] sm:text-[50px] text-[40px] text-white font-bold md:leading-[64px] leading-[34px]">
                Osiedle Leśne
              </div>
              <div className="leading-[20px] text-white text-[24px] h-[30px]">w Sycowie</div>
            </div>
            <div className="flex items-center">
              <div className="bg-white h-[2px] w-[40px] mr-[20px]"></div>
              <div
                className={`${TenorsSans.className} text-white w-[250px] min-h-[32px] font-bold leading-[18px]`}
              >
                INWESTYCJA W NAJLEPSZEJ LOKALIZACJI W SYCOWIE
              </div>
            </div>
            <div className="text-white w-[240px] h-[48px] mt-[20px] font-bold text-[24px] leading-[25px] ">
              Mieszkania 56 m<sup>2</sup> Domy 110 m<sup>2</sup>
            </div>
          </div>
          <Link
            href="/nieruchomosci_sycow_osiedle_lesne/#more-info"
            // scroll={false}
            className={`${TenorsSans.className} border font-bold border-white bg-[#dcb15c] w-[240px] rounded-xl text-center py-[10px] text-[18px] text-white cursor-pointer uppercase hover:bg-white duration-200 hover:text-[#dcb15c] mx-auto lg:mx-0`}
          >
            Więcej informacji
          </Link>
        </div>
      </div>
    </>
  );
}
