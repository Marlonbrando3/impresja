import React, { use, useState } from "react";
import Menubutton from "./menubuttons";
import Addoffer from "./addoffer";
import Image from "next/image";

export default function Header() {
  const menu = ["Strona główna", "Oferty Nieruchomości", "O nas", "Kontakt"];

  return (
    <div className="h-[70px] w-full">
      <div className="h-[70px] w-full shadow-md fixed bg-white z-30">
        <div className="w-[1100px] mx-auto flex justify-between items-center h-full">
          <div className="w-[220px] h-full border-red-900 p-[20px] relative">
            <Image
              src="/logo_poziome_impresja.png"
              alt="impresja nieruchomości"
              fill
              objectFit="contain"
            ></Image>
          </div>
          <div className="flex w-[600px] border-green-800 justify-between">
            {menu.map((el) => (
              <Menubutton key={el} element={el} />
            ))}
            <Addoffer />
          </div>
        </div>
      </div>
    </div>
  );
}
