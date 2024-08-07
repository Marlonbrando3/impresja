import React from "react";
import AgentInfoInDesc from "./agentInfoInDesc";

type Desc = {
  property: any;
};

export default function Description({ property }: Desc) {
  console.log(property[0].description);
  return (
    <div>
      <div className="lg:w-[1020px] w-[90%} mx-auto bg-white rounded-[10px] my-[20px]">
        <p className="p-[40px] font-bold text-[26px]">Opis nieruchomości</p>
        <div className="w-full flex">
          <div className="lg:w-[800px] px-[40px] pb-[40px] text-[18px]">
            {" "}
            <p dangerouslySetInnerHTML={{ __html: property[0].description }}></p>
          </div>
          <AgentInfoInDesc />
        </div>
      </div>
    </div>
  );
}
