import React from "react";

type Property = {
  property: any;
};

export default function DescriptionMain({ property }: Property) {
  console.log(property.headerAdvertisement);
  return (
    <div className="[w-50%] h-full flex flex-col">
      <p className="font-bold text-[20px]">{property.headerAdvertisement}</p>
    </div>
  );
}
