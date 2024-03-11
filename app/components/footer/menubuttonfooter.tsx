import React from "react";

interface Menu {
  element: String;
}

export default function Menubuttonfooter({ element }: Menu) {
  return (
    <div className="text-[12px] rounded-[7px] px-[8px] cursor-pointer hover:bg-orange-500 hover:text-white duration-200">
      {element}
    </div>
  );
}
