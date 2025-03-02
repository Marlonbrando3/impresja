import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { DMSerif } from "../../fonts/fonts";

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
      <div className="flex border-t border-[#e4c27e] items-center my-[3px] py-[20px]">
        <h2
          onClick={() => handlingQANDA(data.id)}
          id={data.id}
          className={` w-full h-[40px] flex items-center lg:text-[22px] font-semibold text-[18px] pl-[10px] leading-[26px] cursor-pointer py-[30px] md:py-0 `}
          dangerouslySetInnerHTML={{ __html: data.topic }}
        ></h2>
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
