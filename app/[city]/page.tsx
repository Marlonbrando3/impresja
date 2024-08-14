import React from "react";
import Header from "../components/header/header";
import MiniTopView from "../components/searchSite/MiniTopView";
import AddYorOffer from "../components/searchonmainpage/addYorOffer";
import SearchEngine from "../components/searchEngine/searchEngine";
import Results from "../components/Results/results";

export default function Page({ searchParams }: any) {
  return (
    <div>
      <Header />
      <MiniTopView params={searchParams} />
      <Results />
    </div>
  );
}
