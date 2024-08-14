import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

type Question = {
  data: any;
  items: any;
};

export default function QandaComponent({ data, items }: Question) {
  // console.log(items);

  const handlingQANDA = (id: any) => {
    if (items.current[id].style.height === "0px" || items.current[id].style.height === "") {
      items.current[id].style.height = "auto";
      items.current[id].style.paddingTop = "15px";
      items.current[id].style.paddingBottom = "15px";
    } else if (items.current[id].style.height === "auto" || items.current[id].style.height === "") {
      items.current[id].style.height = "0px";
      items.current[id].style.paddingTop = "0px";
      items.current[id].style.paddingBottom = "0px";
    }

    console.log(items.current[id].style.height);
  };
  return (
    <>
      <div className="flex border border-[#e4c27e] items-center my-[3px]">
        <div
          onClick={() => handlingQANDA(data.id)}
          id={data.id}
          className="w-full h-[40px] flex items-center font-bold lg:text-[20px] text-[18px] pl-[10px] leading-[24px] cursor-pointer py-[30px] md:py-0"
          dangerouslySetInnerHTML={{ __html: data.topic }}
        ></div>
        <IoMdArrowDropdown
          id={data.id}
          className="w-[40px] h-[40px] cursor-pointer hidden lg:block text-orange-400"
          onClick={() => handlingQANDA(data.id)}
        />
      </div>
      <div
        ref={(el) => (items.current[data.id] = el)}
        dangerouslySetInnerHTML={{ __html: data.description }}
        className="h-[0px] px-[15px] duration-150 overflow-hidden"
      ></div>
    </>
  );
}
