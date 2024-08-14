import React from "react";
import Image from "next/image";

type Property = {
  property: any;
};

export default function ImageMain({ property }: Property) {
  const link = property.img || property.imgParter;

  console.log(link);

  return (
    <div className="w-[50%] h-full border-blue-900 relative">
      <Image
        src={`https://img.asariweb.pl/normal/${property.images[0].id}`}
        fill
        objectFit="cover"
        alt="nieruchomsci"
      />
    </div>
  );
}
