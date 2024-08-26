import React from "react";
import Hotjar from "@hotjar/browser";
import Script from "next/script";
import Head from "next/head";
import MainView from "../components/osiedleLesne/mainView";
import SecondView from "../components/osiedleLesne/secondView";
import HeaderTransparent from "../components/header/headerTransparent";
import Thirdview from "../components/osiedleLesne/thirdview";
import ContactformOsiedleLesne from "../components/contactfrom/contactformOsiedleLesne";
import Footer from "../components/footer/footer";
import dynamic from "next/dynamic";
import Slider from "../components/osiedleLesne/slider";
import Qanda from "../components/qand";
import PropertiesLists from "../components/aboutProperties.tsx/propertiesLists";
import Map from "../components/osiedleLesne/map";

export default function Page() {
  const Video = dynamic(() => import("../components/osiedleLesne/video"));

  const siteId = 5083945;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  return (
    <>
      <Head>
        <title>Nieruchomości Syców - nowe domy oraz mieszkania</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link rel="shortcut icon" href="/icon_logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="Description"
          content="Nowa inwestycja w Sycowie, domy i mieszkania w najlepszej lokalizacji w Sycowie blisko marketów i parku w Sycowie."
        />
        <meta
          name="Keywords"
          content="nieruchomości Syców, nieruchomości w Sycowie, dom na sprzedaż Syców, mieszkania na sprzedaz Syców, mieszkania na sprzedaż Syców bez pośredników."
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <div>
        <HeaderTransparent />
        <MainView />
        <SecondView />
        <Video />
        <Thirdview />
        <Map />
        <Slider />
        <PropertiesLists />
        <Qanda />
        <ContactformOsiedleLesne />
        <Footer />
      </div>
    </>
  );
}
