"use client";

import React, { useEffect, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Video() {
  const router = useRouter();
  const params = useSearchParams();
  const path = usePathname();

  return (
    <div id="video" className="lg:w-[1020px] w-[90vw] pt-[80px] border-gray-600 mx-auto">
      {" "}
      <p className="text-[28px] md:w-[360px] w-full leading-[35px] text-[#723C19] mx-auto mb-[30px] float-left">
        Projekt z lotu ptaka
      </p>
      <div className="lg:w-[1000px] lg:h-[563px] md:w-[730px] md:h-[410px] sm:w-[600px] sm:h-[337px] w-[340px] h-[191px] bg-gray-300 mx-auto left-0 right-0 z-10 my-auto top-0 bottom-0  rounded-xl overflow-hidden">
        <div className="relative w-full h-full">
          <iframe
            loading="lazy"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/uhmTYJceekA?si=Cdhx1kc2gJOyo8o6&controls=1&playlist=uhmTYJceekA"
            title="Nieruchomości Syców"
            // frameBorder={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; frameborder"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
