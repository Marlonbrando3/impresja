import React, { useEffect } from "react";
import Text from "./text";
import Image from "next/image";
import Propertyimage from "./propertyimage";

export default function Secondview() {
  return (
    <div className="h-[500px] w-full">
      <div className="lg:w-[1100px] w-full h-full mx-auto flex items-center justify-start relative overflow-hidden">
        <Text />
        {/* <div className="w-[50%] h-[80%]"> */}
        {/* </div> */}
        <Propertyimage />
      </div>
    </div>
  );
}
