"use client";

import React, { useRef } from "react";
import { useEffect } from "react";

export default function Text() {
  const text: any = useRef();

  const onScroll = () => {
    console.log(window.innerWidth);
    if (scrollY > 180 && window.innerWidth > 1024) {
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
      className="flex flex-col justify-center lg:w-[50%] w-[90vw] lg:invisible transition-duration-200 lg:-ml-[200px] duration-200 mx-auto lg:mx-0 mt-[40px] md:mt-0"
    >
      <div className="md:text-[35px] text-[25px] md:leading-10 leading-8 font-semibold mx-auto">
        Znajdź lub sprzedaj swoją nieruchomość
      </div>
      <div className="w-[100px] h-[5px] bg-blue-400 my-[15px]"></div>
      <p>
        Na tym portalu możesz <b>bezpłatnie</b> zamieścić swoje ogłoszenie o sprzedaż mieszkania w
        woj. opolskim oraz województwach ościennych. Działalność portalu głównie skupi się na
        zaspoojaniu potrzeb osób szukającyh <strong>nieruchomości w Namysłowie</strong>,
        <strong> nieruchomości w Sycowie</strong>, Kluczborku niemniej już w tej chwili pojawiają
        się pierwsze zapytania o możliwość dodawania ogłoszeń w innych miastach dlatego zakładamy,
        że rozwój portalu będzie bardzo szybki. Jeżeli zatem szukasz lub chcesz sprzedać mieszkanie
        w powiatach takich jak Namysłowski, Kluczborski, Brzeski, Oleski - jesteśmy gotowi na Twoje
        ogłoszenia. Twojego powiatu nie ma na liście? Bez obaw daj nam znać i postaramy się umieścić
        również Twojego ogłoszenie.
      </p>
    </div>
  );
}
