"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { FetchPropertiesFromAsari } from "../functions/fetchpropertiesfromasari";
import { FetchIDsFromAsari } from "../functions/fetchidsfromasari";
import { WritePropertyAsFile } from "../functions/writePropertyAsFile";

export default function Admin() {
  const [actualId, setActualId] = useState<number>(0);
  const [results, setResults] = useState<any>(1);
  const [listStatus, setListStatus] = useState<any>();
  const [propertiesId, setPropertiesId] = useState<any>();
  const [propertiesLength, setPropertiesLength] = useState<any>();

  const fetchIDs = async () => {
    console.log("Przygotowuję...");
    const res = await FetchIDsFromAsari();
    const resStatus = await res.status;
    const propertiesIdsTemp = await res.data;
    const propertiesLengtsTemp = await res.data.length;
    console.log(`Pobrano numery ogłoszeń ${propertiesIdsTemp}`);
    console.log("--------");

    let ResultsTemp: any[] = [];

    for (const property of propertiesIdsTemp) {
      console.log(`Pobieram nieruchomość o numerze ${property}`);
      await new Promise(async (resolve, reject) => {
        let resultTemp = await FetchPropertiesFromAsari(property);
        let result = await resultTemp.list.data;

        console.log(result);

        if (result.country.name === "Polska") {
          ResultsTemp.push(result);
          console.log("Dodano nieruchomość");
        } else {
          console.log("Odrzucono nieruchomość");
        }
        // ResultsTemp.push(result);
        await delay(3000);
        resolve(console.log("Zapisano!"));
        console.log("-------");
      });
    }

    console.log(`Pobrane ogłoszenia`);
    console.log(ResultsTemp);
    //save properties as JSON file
    await WritePropertyAsFile(ResultsTemp);

    setResults(ResultsTemp);
  };

  const delay = async (time: number) => {
    await new Promise((resolve) => setTimeout(() => resolve(console.log("Pobrano!")), time));
  };

  const fetchData = async () => {
    // let resultsProps: any[] = [];

    // console.log(propertiesIds);

    if (listStatus === 200 && propertiesLength > 0) {
      let res = await FetchPropertiesFromAsari(propertiesId[1]);
      const resultsTemp = await res;

      console.log(await resultsTemp);
      console.log("data");
      // setResults([...results, resultsTemp.list.data]);
      await setResults(results * 2);
      await setActualId(actualId + 1);
    }
    console.log(results);
    // lala();
  };

  const stopFetching = () => {
    setPropertiesId([]);
  };

  // usememo(() => {
  //   if (propertiesId !== "") {
  //     setTimeout(() => {
  //       fetchData();
  //     }, 4000);
  //   }
  // }, [results, propertiesId]);

  return (
    <>
      <meta property="Nieruchomości w Hiszpanii, Chorwacji, Portugalii" content="image" />
      <title>Biuro nieruchomości Namysłów. Biuro nieruchomości Syców.</title>
      <meta
        name="Keywords"
        content="nieruchomości w namysłowie, domy w namysłowie, mieszkania Syców, mieszkania namysłów"
      />
      <meta
        name="Description"
        content="Mieszkania i domy na terenie Namysłówa, Sycowa, Kluczborka, Oławy, Wołczyna oraz pozostałej części woj. opolskiego oraz wielkopolskiego."
      />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1"
      />
      <div className="p-[50px]">
        <div
          onClick={fetchIDs}
          className="border text-center w-[300px] cursor-pointer bg-blue-500 text-[30px] text-white"
        >
          Ściągnij dane z Asari
        </div>
        <div
          onClick={stopFetching}
          className="border text-center w-[300px] cursor-pointer bg-blue-500 text-[30px] text-white"
        >
          Zatrzymaj import
        </div>
        <div></div>
      </div>
    </>
  );
}
