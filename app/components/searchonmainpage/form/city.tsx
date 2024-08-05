import React from "react";

export default function City() {
  return (
    <div>
      <select className="w-full h-[50px] text-[20px] rounded-[5px] pl-[5px] border-gray-900 border outline-none font-semibold cursor-pointer">
        <option>Namysłów</option>
        <option>Syców</option>
        <option disabled>Oleśnica (wkrótce)</option>
        <option disabled>Kluczbork (wkrótce)</option>
        <option disabled>Brzeg (wkrótce)</option>
        <option disabled>Oława (wkrótce)</option>
      </select>
    </div>
  );
}
