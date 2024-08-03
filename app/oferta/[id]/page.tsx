"use client";

import React from "react";
import Header from "../../components/header/header";
import Images from "../../components/offercard/images";
import PropertiesFromAsari from "../../../public/properties.json";
import { useSearchParams } from "next/navigation";

import OfferHeader from "../../components/offercard/offerHeader";
import PropertySpecification from "@/app/components/offercard/propertySpecification";

export default function Id() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  let property = PropertiesFromAsari.filter((property) => {
    return property.id.toString() === id;
  });

  console.log(property);

  return (
    <div className="w-full bg-gray-100 h-[1200px]">
      <Header />
      <OfferHeader />
      <Images property={property} />
      <PropertySpecification property={property} />
    </div>
  );
}
