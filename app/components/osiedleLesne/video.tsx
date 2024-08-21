"use client";

import React, { useEffect, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Video() {
  const router = useRouter();
  const params = useSearchParams();
  const path = usePathname();

  const videoPopUp: any = useRef();
  const YTvideo: any = useRef();

  useEffect(() => {
    // console.log(window.location);

    if (window.location.hash === "#video") {
      videoPopUp.current.style.display = "block";
    } else {
      videoPopUp.current.style.display = "none";
    }
  });

  const handleClosingVideo = () => {
    videoPopUp.current.style.display = "none";
    router.replace(path);
    YTvideo.current.src = YTvideo.current.src;
  };

  return (
    <>
      <div
        ref={videoPopUp}
        className="hidden lg:w-[1000px] lg:h-[563px] md:w-[730px] md:h-[410px] w-[400px] h-[225px] fixed bg-gray-300 mx-auto left-0 right-0 z-10 my-auto top-0 bottom-0 shadow-[0px_0px_125px_65px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden"
      >
        <div className="relative w-full h-full">
          <div
            className="absolute w-[100px] h-[40px] bg-white z-20 right-0 top-0 flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white"
            onClick={handleClosingVideo}
          >
            Zamknij X
          </div>
          <iframe
            ref={YTvideo}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/uhmTYJceekA?si=Cdhx1kc2gJOyo8o6&controls=1&playlist=uhmTYJceekA"
            title="YouTube video player"
            // frameBorder={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; frameborder"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
