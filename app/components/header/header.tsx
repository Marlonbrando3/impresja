"use client";

import React, { use, useState, useRef } from "react";
import Script from "next/script";
import Menubutton from "./menubuttons";
import Addoffer from "./addoffer";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";

export default function Header() {
  const closedMenu: any = useRef();
  const openedMenu: any = useRef();
  const mobileMenu: any = useRef();

  const menu = ["Strona główna", "Oferty Nieruchomości", "O nas", "Blog", "Kontakt"];

  const showMenu = () => {
    closedMenu.current.style.display = "none";
    openedMenu.current.style.display = "block";
    mobileMenu.current.style.right = "0px";
  };

  const hideMenu = () => {
    closedMenu.current.style.display = "block";
    openedMenu.current.style.display = "none";
    mobileMenu.current.style.right = "-100%";
  };

  return (
    <div className="h-[70px] w-full">
      <div className="h-[70px] w-full shadow-md fixed bg-white z-30">
        <div
          ref={mobileMenu}
          className="w-full h-[30vh] absolute right-[100%] top-[70px] z-50 bg-white duration-200 flex items-center flex-col"
        >
          {menu.map((el) => (
            <Menubutton key={el} element={el} />
          ))}
          <Addoffer />
        </div>
        <div className="lg:w-[1100px] w-[90vw] mx-auto flex justify-between items-center h-full">
          <div className="lg:w-[160px] w-[180px] h-full border-red-900 py-[10px] my-[20px] relative">
            <Image
              src="/inspira_logo.png"
              alt="impresja nieruchomości"
              fill
              objectFit="contain"
            ></Image>
          </div>
          <div className="lg:flex hidden w-[750px] border-green-800 justify-between">
            {menu.map((el) => (
              <Menubutton key={el} element={el} />
            ))}
            <Addoffer />
          </div>
          <div ref={closedMenu} onClick={showMenu} className="block lg:hidden w-[30px] h-[30px]">
            <MdOutlineMenu onClick={showMenu} className="w-[30px] h-[30px]" />
          </div>
          <div ref={openedMenu} onClick={hideMenu} className="hidden lg:hidden w-[30px] h-[30px]">
            <MdOutlineMenuOpen className="w-[30px] h-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
