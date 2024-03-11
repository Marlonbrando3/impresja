import React from "react";
import Form from "./form/form";
import Claim from "./claim";

export default function Search() {
  return (
    <div className="lg:p-[40px] p-[10px] h-auto lg:w-auto w-[90%] mx-auto lg:mx-0 border-gray-900 rounded-[7px] flex flex-col justify-center items-center bg-white shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
      <Claim />
      <Form />
    </div>
  );
}
