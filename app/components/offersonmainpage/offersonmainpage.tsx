import React from "react";
import Offerelement from "../offertelement/offerelement";
import PropertiesFromAsari from "../../../public/properties.json";

export default function Offersonmainpage() {
  const Properties = PropertiesFromAsari.map((property, index) => {
    if (property.isSpecial === true) {
      return <Offerelement key={index} property={property} />;
    }
  });

  return (
    <div className="lg:w-[1100px] w-[90vw] mx-auto py-[40px]">
      <p className="text-[30px] leading-10 font-semibold">Wybrane oferty</p>
      <div className="w-[100px] h-[5px] bg-blue-400 my-[15px] mb-[60px]"></div>
      <div className="w-full flex justify-between flex-col lg:flex-row">{Properties}</div>
      <div className="cursor-pointer mt-[40px] text-center bg-orange-500 text-white h-[50px] rounded-[5px] hover:bg-blue-500 duration-200 text-[20px] w-[200px] mx-auto leading-[50px]">
        Przeglądaj oferty
      </div>
    </div>
  );
}
