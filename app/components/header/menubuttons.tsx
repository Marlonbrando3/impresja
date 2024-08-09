import React from "react";
import Link from "next/link";

interface Menu {
  element: String;
  link: any;
}

export default function Menubutton({ element, link }: Menu) {
  return (
    <Link
      href="/nieruchomosci_sycow_osiedle_lesne/#c"
      className={`${
        element === "Kontakt" && "bg-[#DCB15C] text-white"
      } rounded-[7px] p-[7px] cursor-pointer hover:bg-[#DCB15C] hover:text-white duration-200`}
    >
      {element}
    </Link>
  );
}
