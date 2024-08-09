import React from "react";
import Image from "next/image";
import { DMSerif, TenorsSans } from "../../fonts/fonts";

type Properties = {
  data: any;
};

export default function AboutProperties({ data }: Properties) {
  console.log(data);

  const img =
    (data.img === undefined && `/${data.imgParter.toString()}.jpg`) ||
    (data.imgParter === undefined && `/${data.img.toString()}.jpg`);

  return (
    <div className="w-full md:h-[700px] h-auto flex justify-center items-center">
      <div className="lg:w-[1020px] w-[90vw] h-auto mx-auto md:h-[80%] flex flex-col md:flex-row">
        <div className=" md:w-[50%] w-full md:pr-[50px] py-[50px]">
          <div className={`${DMSerif.className} text-[42px] text-[#723C19]`}>{data.type}</div>
          <div className="mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ullam? Tempora
            assumenda mollitia velit hic totam, officiis repudiandae quo sint est eligendi aliquid
            natus, praesentium quidem optio voluptas, labore sit?
          </div>
          <div className="border-red-900 flex flex-wrap h-[270px] justify-between items-center mt-[30px]">
            <div className="flex w-full justify-center h-[70px]">
              <div className=" flex flex-col w-[50%]">
                <p className={`${TenorsSans.className} text-[16px] uppercase`}>Metraż</p>
                <p className={`${DMSerif.className} text-[40px] leading-[40px] text-[#e4c27e]`}>
                  {data.meters} m<sup>2</sup>
                </p>
              </div>
              <div className=" flex flex-col w-[50%]">
                <p className={`${TenorsSans.className} text-[16px] uppercase`}>Ilość pokoi</p>
                <p className={`${DMSerif.className} text-[40px] leading-[40px] text-[#e4c27e]`}>
                  {data.bedrooms}
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center md:h-[70px] h-[90px]">
              <div className=" flex flex-col w-[50%]">
                <p className={`${TenorsSans.className} text-[16px] uppercase h-[50px] md:h-auto`}>
                  {data.type === "Dom" ? "Garaż + Parking" : "Miejsce parkingowe"}
                </p>
                <p className={`${DMSerif.className} text-[40px] leading-[40px] text-[#e4c27e]`}>
                  Tak
                </p>
              </div>
              <div className=" flex flex-col w-[50%]">
                <p className={`${TenorsSans.className} text-[16px] uppercase h-[50px] md:h-auto`}>
                  {data.type === "Dom" ? "Balkon + Ogród" : "Balkon"}
                </p>
                <p className={`${DMSerif.className} text-[40px] leading-[40px] text-[#e4c27e]`}>
                  Tak
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center h-[70px]">
              <div className=" flex flex-col w-full">
                <p className={`${TenorsSans.className} text-[16px] uppercase`}>Cena</p>
                <p className={`${DMSerif.className} text-[50px] leading-[40px] text-[#e4c27e]`}>
                  {data.cena.toLocaleString()} zł
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-[50%] w-full md:h-full h-[400px] relative ">
          <Image
            src={img.toString()}
            fill
            objectFit="contain"
            alt="nieruchomosci_syców_mieszkanie_parter"
          ></Image>
        </div>
      </div>
    </div>
  );
}
