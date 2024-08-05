import React from "react";
import Form from "./form";

export default function Contactform() {
  return (
    <div id="c" className="lg:w-[1100px] w-[90vw] mx-auto my-[60px]">
      <p className="text-[30px] leading-10 font-semibold">Kontakt</p>
      <div className="w-[100px] h-[5px] bg-blue-400 my-[15px] mb-[60px]"></div>
      <Form />
    </div>
  );
}
