import React from "react";

interface Menu {
  element: String;
}

export default function Menubutton({ element }: Menu) {
  return (
    <div className="rounded-[7px] p-[7px] cursor-pointer hover:bg-orange-500 hover:text-white duration-200">
      {element}
    </div>
  );
}
