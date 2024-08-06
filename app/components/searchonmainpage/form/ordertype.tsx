import React from "react";

type OrderType = {
  query: any;
  setQuery: any;
};

export default function Ordertype({ query, setQuery }: OrderType) {
  const hanldeUpdateingCity = (e: any) => {
    setQuery({ ...query, orderType: e.target.value });
    console.log(query);
  };

  return (
    <select
      onChange={hanldeUpdateingCity}
      className="w-[48%] h-[50px] text-[20px] rounded-[5px] pl-[5px] border border-gray-300 outline-none cursor-pointer"
    >
      <option value="buy">Kupię</option>
      <option value="rent">Wynajmę</option>
    </select>
  );
}
