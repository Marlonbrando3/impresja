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
    <div className="w-full lg:h-[600px] h-[80vh] bg-[url('/main_bg_2.jpg')] lg:bg-center bg-cover bg-top bg- relative bg-fixed">
      <div className="w-full h-full absolute lg:bg-gradient-to-r from-white/[0.7] from-1% to-white-500/[0.7] to-55%"></div>
      <div className="lg:w-[1100px] w-full h-full mx-auto flex items-center z-[30] relative">
        <div className="fixed w-full h-full bg-white/[0.5] left-0 top-0 flex items-center justify-center text-[4vw] font-bold">
          <p className="bg-orange-500 px-[10px] text-white">Strona w przebudowie</p>
        </div>
        {/* <button onClick={handleFetching}>Fetch from Asari</button> */}
        <Search />
      </div>
    </div>
  );
}
