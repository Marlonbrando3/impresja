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
        element === "Dlaczego Syców?"
          ? "/nieruchomosci_sycow_osiedle_lesne/dlaczego_nieruchomosci_sycow"
          : link
      }`}
      className={`${
        element === "Kontakt" && "bg-[#dcb15c]"
      } rounded-[7px] p-[7px] cursor-pointer hover:bg-[#DCB15C] hover:text-white duration-200 mx-[20px] `}
    >
      {element}
    </Link>
  );
}
