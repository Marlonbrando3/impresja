import React from "react";
import { QuicksandSans } from "../../fonts/fonts";

export default function SearchEngine() {
  return (
    <div
      className={`${QuicksandSans.className} w-[350px] mx-auto h-[500px] flex flex-col justify-evenly bg-white rounded-[5px]`}
    >
      <div id="city" className="w-[80%] mx-auto">
        <div className="font-[700] mb-[8px] text-[1.2em]">Miasto</div>
        <select
          className="border-[0.5px] border-gray-900 rounded-[5px] w-full h-[35px] text-[1.1em] font-[400] pl-[5px]"
          name="city"
        >
          <option>Namysłów</option>
          <option>Wołczyn</option>
          <option>Syców</option>
        </select>
      </div>
      <div id="city" className="w-[80%] mx-auto">
        <div className="mb-[8px] text-[1.2em] font-[700]">Rodzaj nieruchomości</div>
        <select
          className="border-[0.5px] border-gray-900 rounded-[5px] w-full text-[1.1em] h-[35px] pl-[5px]"
          name="city"
        >
          <option>Mieszkanie</option>
          <option>Dom</option>
          <option>Grunt</option>
          <option>Lokal</option>
        </select>
      </div>
      <div id="city" className="w-[80%] mx-auto">
        <div className="mb-[8px] text-[1.2em] font-[700]">Rodzaj oferty</div>
        <select
          className="border-[0.5px] border-gray-900 rounded-[5px] w-full text-[1.1em] h-[35px]"
          name="city"
        >
          <option>Wynajem</option>
          <option>Sprzedaż</option>
        </select>
      </div>
      <div id="city" className="w-[80%] mx-auto">
        <div className="mb-[4px] font-[700]">Cena (zł)</div>
        <div className="flex justify-between h-[30px]">
          <input
            placeholder="Od"
            className="border-[0.5px] border-gray-900 rounded-[5px] pl-[3px] w-[45%] text-[1.1em] h-[35px]"
          ></input>
          <input
            placeholder="Do"
            className="border-[0.5px] border-gray-900 rounded-[5px] pl-[3px] w-[45%] text-[1.1em] h-[35px]"
          ></input>
        </div>
      </div>
      <div id="city" className="w-[80%] mx-auto">
        <div className="mb-[4px] font-[700] ">Liczba pokoi</div>
        <div className="flex justify-between font-normal">
          <input
            placeholder="Od"
            className="border-[0.5px] border-gray-900 rounded-[5px] pl-[3px] w-[45%] text-[1.1em] h-[35px]"
          ></input>
          <input
            placeholder="Do"
            className="border-[0.5px] border-gray-900 rounded-[5px] pl-[3px] w-[45%] text-[1.1em] h-[30px]"
          ></input>
        </div>
      </div>
      <div id="city" className="w-[80%] mx-auto">
        <div className="mb-[4px] font-[700]">Metraż</div>
        <div className="flex justify-between">
          <input
            placeholder="Od"
            className="border-[0.5px] border-gray-900 rounded-[5px] pl-[3px] w-[45%] text-[1.1em] h-[35px]"
          ></input>
          <input
            placeholder="Do"
            className="border-[0.5px] border-gray-900 rounded-[5px] pl-[3px] w-[45%] text-[1.1em] h-[35px]"
          ></input>
        </div>
      </div>
    </div>
  );
}
