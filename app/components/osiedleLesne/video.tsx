"use client";

import React, { useEffect, useCallback, useState } from "react";

export default function Video() {
  const [showedVideo, setShowedVideo] = useState(false);

  const onScroll = useCallback(() => {
    const { scrollX, scrollY, innerWidth } = window;
    // console.log("yOffset", scrollX, "scrollY", scrollY);

    if (scrollY > 800) {
      console.log("show video");
      setShowedVideo(true);
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
    <>
      <div id="video" className="lg:w-[1020px] w-[90vw] pt-[80px] border-gray-600 mx-auto">
        {" "}
        <p className="text-[42px] w-full leading-[35px] text-[#723C19] mx-auto float-left mb-[10px]">
          Osiedle leśne z lotu ptaka
        </p>
        <p className="text-[18px] w-full md:w-[600px] leading-[18px] text-yellow-700 mx-auto mb-[30px] float-left">
          Poznaj dokładną lokalizację wraz z otoczeniem oraz infrastrukturą tego wyjątkowego
          projektu <strong>mieszkań w Sycowie.</strong>
        </p>
        <div className="relative lg:w-[1000px] w-full rounded-xl overflow-hidden">
          {showedVideo === true && (
            <div className="h-0 pt-[56.25%]">
              <iframe
                loading="lazy"
                className="w-full h-full absolute top-0 left-0"
                src="https://www.youtube.com/embed/uhmTYJceekA?si=Cdhx1kc2gJOyo8o6&controls=1&playlist=uhmTYJceekA"
                title="Nieruchomości Syców"
                // frameBorder={true}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; frameborder"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
