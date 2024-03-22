"use client";

import React from "react";
import Search from "../searchonmainpage/search";

export default function View() {
  const handleFetching = async () => {
    try {
      let res = await fetch("/api/asari", {
        // method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        //   "SiteAuth": "68870:9f3vO7R8BLF4ra05tgO5cD38m41a6bLniXn0C4o5",
        // },
      });

      const data = await res.json();

      console.log(data.properties);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full lg:h-[600px] h-[80vh] bg-[url('/background_view.jpeg')] lg:bg-center bg-cover bg-top bg- relative bg-fixed">
      <div className="w-full h-full absolute lg:bg-gradient-to-r from-white from-35% to-white-500/[0.0] to-75%"></div>
      <div className="lg:w-[1100px] w-full h-full mx-auto flex items-center z-20 relative">
        {/* <button onClick={handleFetching}>Fetch from Asari</button> */}
        <Search />
      </div>
    </div>
  );
}
