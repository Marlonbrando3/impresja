import React from "react";
import Link from "next/link";

interface Menu {
  element: String;
  link: any;
}

export default function Menubuttontransparent({ element, link }: Menu) {
  return (
    <Link
      href={`${
        element === "Dlaczego Syców?" ? "/nowe-mieszkania-sycow/dlaczego_nieruchomosci_sycow" : link
      }`}
      className={`${
        (element === "Kontakt" && "bg-blue-500 text-white") ||
        (element === "Video z inwestycji" && "bg-[#dcb15c] text-white")
      } rounded-[7px] p-[7px] cursor-pointer hover:bg-[#DCB15C] hover:text-white duration-200 mx-[7px] `}
    >
      {element}
    </Link>
  );
}
