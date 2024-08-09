import React from "react";
import AboutProperties from "../../components/aboutProperties.tsx/aboutProperties";
import Properties from "../../data/properties.json";

export default function PropertiesLists() {
  return (
    <div>
      {Properties.map((i) => (
        <AboutProperties data={i} />
      ))}
    </div>
  );
}
