"use client";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import City from "./city";
import Ordertype from "./ordertype";
import Propertytype from "./propertytype";
import Pricefrom from "./pricefrom";
import Priceto from "./priceto";

export default function Form() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [city, setCity] = useState("nieruchomosci_namyslow");

  const [query, setQuery]: any = useState({
    orderType: "buy",
    propertyType: "house",
    topic: "Nieruchomości Namysłów",
    page: 1,
  });

  const handleSchearching = (e: any) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    Object.keys(query).forEach((key) => {
      if (query[key]) {
        params.set(key, query[key]);
      } else {
        params.delete(key);
      }
    });
    // params.set("page", "1");
    const queryString = params.toString();
    const updatedPath = `https://localhost:3000/${city}?${queryString}`;
    router.push(updatedPath);
  };

  return (
    <form
      onSubmit={handleSchearching}
      className="flex flex-col lg:w-[310px] w-full h-[230px] mx-auto border-gray-800 justify-between font-semibold"
    >
      <div className="w-full">
        <City city={city} setCity={setCity} query={query} setQuery={setQuery} />
      </div>
      <div className="flex w-full justify-between">
        <Ordertype query={query} setQuery={setQuery} />
        <Propertytype query={query} setQuery={setQuery} />
      </div>
      <div className="flex w-full justify-between">
        <Pricefrom />
        <Priceto />
      </div>
      <button className="bg-orange-400 text-white h-[50px] rounded-[5px] hover:bg-blue-500 duration-200 text-[20px]">
        Szukaj
      </button>
    </form>
  );
}
