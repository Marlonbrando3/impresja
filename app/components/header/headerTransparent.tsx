"use client";

import React, { use, useState, useRef, useCallback, useEffect } from "react";
import Script from "next/script";
import Menubuttontransparent from "./menubuttonstransaprent";
import Addoffer from "./addoffer";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import AddYorOffer from "../searchonmainpage/addYorOffer";

export default function HeaderTransparent() {
  const closedMenu: any = useRef();
  const openedMenu: any = useRef();
  const mobileMenu: any = useRef();
  const headerDesktop: any = useRef();
  const imageLogo: any = useRef();

  const addYourOffer: any = useRef();

  const menu = ["Strona główna", "Oferty Nieruchomości", "O nas", "Blog", "Kontakt"];

  const data = [
    { link: "/", name: "Strona Główna" },
    { link: "/nieruchomosci_sycow_osiedle_lesne/#gallery", name: "Wizualizacje" },
    { link: "/nieruchomosci_sycow_osiedle_lesne/#plans", name: "Rzuty" },
    { link: "/nieruchomosci_sycow_osiedle_lesne/#qanda", name: "Q & A" },
    { link: "/dlaczego_nieruchomosci_sycow", name: "Dlaczego Syców?" },
    { link: "/nieruchomosci_sycow_osiedle_lesne/#c", name: "Kontakt" },
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

  const onScroll = useCallback(() => {
    const { scrollX, scrollY, innerWidth } = window;
    // console.log("yOffset", innerWidth, "scrollY", scrollY);
    if (scrollY > 120) {
      headerDesktop.current.style.transition = "0.7s";
      imageLogo.current.srcset = "/impresja_logo.png";
      headerDesktop.current.style.background = "white";
      headerDesktop.current.style.boxShadow = "1px 1px 5px -3px black";
      headerDesktop.current.style.color = "black";
    } else if (scrollY < 120) {
      headerDesktop.current.style.transition = "0.3s";
      imageLogo.current.srcset = "/impresja_logo_white.png";
      headerDesktop.current.style.background = "transparent";
      headerDesktop.current.style.boxShadow = "0px 0px 0px 0px black";
      headerDesktop.current.style.color = "white";
    }
  }, []);

  useEffect(() => {
    // headerDesktop;

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className="h-[70px] w-full lg:text-white md:text-black">
      {/* <AddYorOffer addYourOffer={addYourOffer} /> */}
      <div ref={headerDesktop} className="h-[70px] w-full fixed bg-transparent z-30">
        <div
          ref={mobileMenu}
          className="w-full h-[30vh] bg-white absolute right-[100%] top-[70px] z-50 duration-200 flex items-center flex-col"
        >
          {data.map((el) => (
            <Menubuttontransparent key={el.name} element={el.name} link={el.link} />
          ))}
          {/* <Addoffer addYourOffer={addYourOffer} /> */}
        </div>
        <div className="lg:w-[1020px] w-[90vw] mx-auto flex justify-between items-center h-full">
          <div className="lg:w-[160px] w-[160px] h-full border-red-900 py-[10px] my-[20px] relative">
            <Image
              ref={imageLogo}
              src="/impresja_logo_white.png"
              alt="impresja nieruchomości"
              fill
              objectFit="contain"
            ></Image>
          </div>
          <div className="lg:flex hidden w-[820px] border-green-800 justify-end">
            {data.map((el) => (
              <Menubuttontransparent key={el.name} element={el.name} link={el.link} />
            ))}
            {/* <Addoffer addYourOffer={addYourOffer} /> */}
          </div>
          <div ref={closedMenu} onClick={showMenu} className="block lg:hidden w-[40px] h-[40px]">
            <MdOutlineMenu onClick={showMenu} className="w-[40px] h-[40px] cursor-pointer" />
          </div>
          <div
            ref={openedMenu}
            onClick={hideMenu}
            className="hidden lg:hidden w-[40px] h-[40px] cursor-pointer"
          >
            <MdOutlineMenuOpen className="w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
