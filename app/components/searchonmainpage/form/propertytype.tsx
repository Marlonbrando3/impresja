import React from "react";

type PropertyType = {
  query: any;
  setQuery: any;
};

export default function Ordertype({ query, setQuery }: PropertyType) {
  const hanldeUpdateingType = (e: any) => {
    setQuery({ ...query, propertyType: e.target.value });
    console.log(query);
  };
  return (
    <select
      onChange={hanldeUpdateingType}
      className="h-[50px] text-[20px] w-[48%] rounded-[5px] pl-[5px] border border-gray-300 outline-none cursor-pointer"
    >
      <option value="house">Dom</option>
      <option value="flat">Mieszkanie</option>
      <option value="plot">Działkę</option>
      <option value="locale">Lokal</option>
    </select>
  );
}
