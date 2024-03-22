"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { FetchPropertiesFromAsari } from "@/app/functions/fetchpropertiesfromasari";
import { FetchIDsFromAsari } from "@/app/functions/fetchidsfromasari";
import { resolve } from "path";
import { rejects } from "assert";

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
        let resultTemp = await FetchPropertiesFromAsari(propertiesIdsTemp[0]);
        let result = await resultTemp.list.data;
        ResultsTemp.push(result);
        await delay(3000);
        resolve(console.log("Zapisano!"));
        console.log("-------");
      });
    }
    console.log(`Pobrane ogłoszenia`);
    console.log(ResultsTemp);
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
  );
}
