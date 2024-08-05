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
      className="rounded-[7px] p-[7px] cursor-pointer hover:bg-orange-500 hover:text-white duration-200"
    >
      {element}
    </Link>
  );
}
