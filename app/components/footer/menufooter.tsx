import React from "react";
import Menubuttonfooter from "./menubuttonfooter";
import Addoffer from "../header/addoffer";

export default function Menufooter() {
  const menu = ["Strona główna", "Oferty Nieruchomości", "O nas", "Kontakt"];
  return (
    <div className="rounded-[7px] p-[7px] cursor-pointer duration-200 ml-[30px]">
      <div className="flex flex-col w-[150px] border-green-800 justify-between">
        {menu.map((el) => (
          <Menubuttonfooter key={el} element={el} />
        ))}
        <Addoffer />
      </div>
    </div>
  );
}
