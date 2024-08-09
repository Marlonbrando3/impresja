import React from "react";
import QandaComponent from "./qanda/qandaComponent";
import QandaData from "../data/qandaData.json";

export default function Qanda() {
  return (
    <div className="w-full h-[300px]">
      <div className="border w-[1020px] h-full mx-auto">
        {QandaData.map((i) => (
          <QandaComponent data={i} />
        ))}
      </div>
    </div>
  );
}
