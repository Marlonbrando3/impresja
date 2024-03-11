import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex flex-col h-[100px] justify-between">
      <FaFacebookSquare className="w-[30px] h-[30px] cursor-pointer text-orange-500" />
      <FaSquareInstagram className="w-[30px] h-[30px] cursor-pointer text-orange-500" />
      <FaLinkedin className="w-[30px] h-[30px] cursor-pointer text-orange-500" />
    </div>
  );
}
