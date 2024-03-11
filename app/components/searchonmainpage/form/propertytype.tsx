import React from "react";

export default function Ordertype() {
  return (
    <select className="h-[50px] text-[20px] w-[48%] rounded-[5px] pl-[5px] border border-gray-900 outline-none cursor-pointer">
      <option>Dom</option>
      <option>Mieszkanie</option>
      <option>Działkę</option>
    </select>
  );
}
