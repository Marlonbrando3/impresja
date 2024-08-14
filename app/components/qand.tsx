"use client";

import React from "react";
import { useRef } from "react";
import QandaComponent from "./qanda/qandaComponent";
import QandaData from "../data/qandaData.json";
import { TenorsSans } from "../fonts/fonts";

export default function Qanda() {
  const items: any = useRef([]);

  return (
    <div id="qanda" className="w-full h-auto">
      <div className=" py-[80px] lg:w-[1000px] w-[90vw] h-full mx-auto">
        <p
          className={`${TenorsSans.className} text-[32px] lg:w-[900px] w-full leading-[35px] text-[#723C19] mb-[30px]`}
        >
          <h1 className="inline">Nieruchomości Syców</h1>, dlaczego warto?
          <br />
          Pytania i odpowiedzi
        </p>
        {QandaData.map((i) => (
          <QandaComponent key={i.id} data={i} items={items} />
        ))}
      </div>
    </div>
  );
}
