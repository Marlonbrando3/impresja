"use client";

import React from "react";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Propertyimage() {
  const propertyIMG: any = useRef();
  const onScroll = () => {
    // console.log(scrollY);
    if (scrollY > 180) {
      propertyIMG.current.style.right = "-100px";
      // console.log(text.current.style.marginLeft);
    }
    if (scrollY < 180) {
      propertyIMG.current.style.right = "-800px";
      // console.log(text.current.style.marginLeft);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Image
      ref={propertyIMG}
      src="/property_second.png"
      alt="property"
      height={600}
      width={600}
      className="absolute -right-[800px] -top-[80px] duration-300 hidden lg:block z-20"
    />
  );
}
