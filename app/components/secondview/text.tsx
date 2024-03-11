"use client";

import React, { useRef } from "react";
import { useEffect } from "react";

export default function Text() {
  const text: any = useRef();

  const onScroll = () => {
    console.log(window.innerWidth);
    if (scrollY > 350 && window.innerWidth > 1024) {
      text.current.style.visibility = "visible";
      text.current.style.marginLeft = "0px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={text}
      className="flex flex-col justify-center lg:w-[50%] w-[90vw] lg:invisible transition-duration-200 lg:-ml-[200px] duration-200 mx-auto lg:mx-0"
    >
      <div className="text-[35px] leading-10 font-semibold">
        Znajdź lub sprzedaj swoją nieruchomość
      </div>
      <div className="w-[100px] h-[5px] bg-orange-500 my-[15px]"></div>
      <p>
        Na tym portalu możesz <b>bezpłatnie</b> zamieścić swoje ogłoszenie na sprzaż mieszkania w
        południowej części woj. opolskiego. Naszym zadaniem jest połączenie poszukujących i
        sprzedających w tym regionie Polski. Jeżeli zatem szukasz lub chcesz sprzedać mieszkanie w
        powiatach takich jak Namysłowski, Kluczborski, Brzeski, Oleski - jesteśmy gotowi na Twoje
        ogłoszenia. Twojego powiatu nie ma na liście? Bez obaw daj nam znać i postaramy się umieścić
        również Twojego ogłoszenie.
      </p>
    </div>
  );
}
