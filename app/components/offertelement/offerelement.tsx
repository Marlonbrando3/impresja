import React from "react";
import Image from "next/image";
import Link from "next/link";

type Property = {
  property: any;
};

export default function Offerelement({ property }: Property) {
  return (
    <Link
      href={{ pathname: `/oferta/id`, query: { id: property.id } }}
      className="w-[350px] h-[400px] border-gray-900 rounded-[7px] shadow-md overflow-hidden cursor-pointer hover:shadow-xl duration-200"
    >
      <div className="relative h-[250px] w-full">
        <div className="bottom-0 left-0 absolute text-white font-bold z-20 text-[25px] bg-blue-500/[0.9] rounded-r-xl px-[10px]">
          {property.price.amount.toLocaleString().replaceAll(",", " ")}&nbsp; zł
        </div>
        <Image
          src={`https://img.asariweb.pl/normal/${property.images[0].id}`}
          fill
          objectFit="cover"
          alt="property"
        />
      </div>
      <div className="p-[15px]">
        <div className="text-gray-500 mb-[5px]">{property.location.locality}</div>
        <div className="font-bold text-[18px]">Mieszkanie 2 pokojowe w centurm Namysłowa</div>
        <div>Powierzchnia 45 m2</div>
      </div>
    </Link>
  );
}
