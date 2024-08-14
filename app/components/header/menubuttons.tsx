import React from "react";
import Link from "next/link";

interface Menu {
  element: String;
  link: any;
}

export default function Menubutton({ element, link }: Menu) {
  return (
    <Link
      href={link}
      className={`${
        element === "Chcę dodać ofertę" && "bg-blue-500 text-white"
      }  rounded-[7px] p-[7px] cursor-pointer hover:bg-[#DCB15C] hover:text-white duration-200 ${
        element === "Osiedle Leśne Syców" && "font-[800] border border-orange-500"
      }`}
    >
      {element}
    </Link>
  );
}
