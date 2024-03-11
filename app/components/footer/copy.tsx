import React from "react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Copy() {
  return (
    <div className="lg:w-[1100px] w-[90vw] mx-auto flex my-[20px] border-t flex-col text-[10px]">
      <p>2024, Impresja nieruchomości, Grupa Onesta</p>
      <p className="flex items-center">
        Made with <FaHeart className="mx-[3px] text-red-500" /> by <b> &nbsp;Brave Agency &nbsp;</b>
        <Link href="https://wearebrave.pl" className="underline">
          {" "}
          www.wearebrave.pl
        </Link>
      </p>
    </div>
  );
}
