import React from "react";
import SearchEngine from "../searchEngine/searchEngine";
import ResultsOffers from "./resultsOffers";

export default function Results() {
  return (
    <div className="w-full py-[30px] bg-gray-100">
      <div className="max-w-[1200px] w-[90vw] mx-auto flex border-red-900">
        <SearchEngine />
        <ResultsOffers />
      </div>
    </div>
  );
}
