import React from "react";
import City from "./city";
import Ordertype from "./ordertype";
import Propertytype from "./propertytype";
import Pricefrom from "./pricefrom";
import Priceto from "./priceto";

export default function Form() {
  return (
    <form className="flex flex-col lg:w-[310px] w-full h-[230px] mx-auto border-gray-800 justify-between font-semibold">
      <div className="w-full">
        <City />
      </div>
      <div className="flex w-full justify-between">
        <Ordertype />
        <Propertytype />
      </div>
      <div className="flex w-full justify-between">
        <Pricefrom />
        <Priceto />
      </div>
      <button className="bg-orange-500 text-white h-[50px] rounded-[5px] hover:bg-blue-500 duration-200 text-[20px]">
        Szukaj
      </button>
    </form>
  );
}
