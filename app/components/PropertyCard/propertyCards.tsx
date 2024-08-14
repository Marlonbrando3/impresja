import React from "react";
import ImageMain from "./imageMain";
import DescriptionMain from "./descriptionMain";

type Property = {
  property: any;
};

export default function PropertyCards({ property }: Property) {
  // shadow-[0px_0px_14px_-3px_rgba(0,0,0,0.3)]
  return (
    <div className="flex w-[97%] rounded-[5px] h-[320px] mb-[20px] float-right border overflow-hidden ">
      <ImageMain property={property} />
      <DescriptionMain property={property} />
      {/* {property.type} */}
    </div>
  );
}
