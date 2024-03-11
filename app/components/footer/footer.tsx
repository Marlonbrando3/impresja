import React from "react";
import Image from "next/image";
import Menufooter from "./menufooter";
import Contact from "./contact";
import Mobileoffice from "./mobileoffice";
import Copy from "./copy";
import Socials from "./socials";

export default function Footer() {
  return (
    <div className="border">
      <div className="lg:w-[1100px] w-[90vw] flex lg:flex-row flex-col mx-auto items-center py-[20px] justify-center">
        <div className="flex justify-center items-center">
          <div>
            <Image src="/logo_poziome_impresja.png" width={200} height={10} alt="logo" />
          </div>
          <Menufooter />
          <Socials />
        </div>
        <div className="flex lg:ml-[300px] lg:flex-row flex-col h-[200px] justify-between lg:justify-center lg:items-center">
          <Contact />
          <Mobileoffice />
        </div>
      </div>
      <Copy />
    </div>
  );
}
