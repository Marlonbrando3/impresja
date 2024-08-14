import React from "react";
import PropertyCards from "../PropertyCard/propertyCards";
import Properties from "../../../public/properties.json";

export default function ResultsOffers() {
  return (
    <div className="flex-grow">
      {Properties.map((i) => (
        <PropertyCards key={i.id} property={i} />
      ))}
    </div>
  );
}
