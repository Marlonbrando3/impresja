"use client";

import React, { use, useState, useRef } from "react";
import Script from "next/script";
import Menubutton from "./menubuttons";
import Addoffer from "./addoffer";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import AddYorOffer from "../searchonmainpage/addYorOffer";

export default function Header() {
  const closedMenu: any = useRef();
  const openedMenu: any = useRef();
  const mobileMenu: any = useRef();

  const addYourOffer: any = useRef();

  const menu = ["Strona główna", "Oferty Nieruchomości", "O nas", "Blog", "Kontakt"];

  const data = [
    { link: "/", name: "Strona Główna" },
    { link: "/nieruchomosci_sycow_osiedle_lesne", name: "Osiedle Leśne Syców" },
    { link: "/", name: "O Nas" },
    { link: "/blog", name: "Blog" },
    { link: "/#c", name: "Kontakt" },
  ];

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
      <AddYorOffer addYourOffer={addYourOffer} />
      <div className="h-[70px] w-full shadow-md fixed bg-white z-30">
        <div
          ref={mobileMenu}
          className="w-full h-[30vh] absolute right-[100%] top-[70px] z-50 bg-white duration-200 flex items-center flex-col"
        >
          {data.map((el) => (
            <Menubutton key={el.name} element={el.name} link={el.link} />
          ))}
          <Addoffer addYourOffer={addYourOffer} />
        </div>
        <div className="lg:w-[1100px] w-[90vw] mx-auto flex justify-between items-center h-full">
          <div className="lg:w-[160px] w-[160px] h-full border-red-900 py-[10px] my-[20px] relative">
            <Image
              src="/impresja_logo.png"
              alt="impresja nieruchomości"
              fill
              objectFit="contain"
            ></Image>
          </div>
          <div className="lg:flex hidden w-[750px] border-green-800 justify-between">
            {data.map((el) => (
              <Menubutton key={el.name} element={el.name} link={el.link} />
            ))}
            <Addoffer addYourOffer={addYourOffer} />
          </div>
          <div ref={closedMenu} onClick={showMenu} className="block lg:hidden w-[40px] h-[40px]">
            <MdOutlineMenu onClick={showMenu} className="w-[40px] h-[40px]" />
          </div>
          <div ref={openedMenu} onClick={hideMenu} className="hidden lg:hidden w-[40px] h-[40px]">
            <MdOutlineMenuOpen className="w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
