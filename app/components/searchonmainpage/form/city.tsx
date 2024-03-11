import React from "react";

export default function City() {
  return (
    <div>
      <select className="w-full h-[50px] text-[20px] rounded-[5px] pl-[5px] border-gray-900 bg-orange-500 outline-none font-semibold cursor-pointer text-white">
        <option>Namysłów</option>
        <option>Oleśnica</option>
        <option>Kluczbork</option>
        <option>Brzeg</option>
        <option>Oława</option>
      </select>
    </div>
  );
}
