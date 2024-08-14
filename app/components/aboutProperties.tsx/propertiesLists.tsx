import React from "react";
import AboutProperties from "../../components/aboutProperties.tsx/aboutProperties";
import Properties from "../../data/properties.json";

export default function PropertiesLists() {
  return (
    <div id="plans">
      {Properties.map((i) => (
        <AboutProperties key={i.id} data={i} />
      ))}
    </div>
  );
}
