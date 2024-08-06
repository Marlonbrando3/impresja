import React from "react";

type City = {
  city: any;
  setCity: any;
  query: any;
  setQuery: any;
};

export default function City({ city, setCity, query, setQuery }: City) {
  const hanldeUpdateingCity = (e: any) => {
    setCity(e.target.value);
    setQuery({ ...query, propertyType: e.getAttribute });
    console.log(query);
  };
  return (
    <div>
      <select
        onChange={hanldeUpdateingCity}
        className="w-full h-[50px] text-[20px] rounded-[5px] pl-[5px] border-gray-400 border outline-none font-semibold cursor-pointer"
      >
        <option value="nieruchomosci_namyslow" data-name="Nieruchomości Namysłów">
          Namysłów
        </option>
        <option value="nieruchomosci_sycow" data-name="Nieruchomości Syców">
          Syców
        </option>
        <option disabled>Oleśnica (wkrótce)</option>
        <option disabled>Kluczbork (wkrótce)</option>
        <option disabled>Brzeg (wkrótce)</option>
        <option disabled>Oława (wkrótce)</option>
      </select>
    </div>
  );
}
