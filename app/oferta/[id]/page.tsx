"use client";

import React from "react";
import Header from "../../components/header/header";
import Images from "../../components/offercard/images";
import PropertiesFromAsari from "../../../public/properties.json";
import { useSearchParams } from "next/navigation";

import OfferHeader from "../../components/offercard/offerHeader";
import PropertySpecification from "../../components/offercard/propertySpecification";
import Description from "../../components/offercard/description";
import Footer from "../../components/footer/footer";
import Contactform from "../../components/contactfrom/contactform";
import Head from "next/head";

export default function Id({ params }: any) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  let property = PropertiesFromAsari.filter((property) => {
    return property.id.toString() === id;
  });

  return (
    <>
      <Head>
        <meta property="Nieruchomości w Hiszpanii, Chorwacji, Portugalii" content="image" />
        <title>{params.title}</title>
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
      </Head>
      <div className="w-full bg-gray-100/[0.8] h-auto">
        <Header />
        <OfferHeader property={property} />
        <Images property={property} />
        <PropertySpecification property={property} />
        <Description property={property} />
        <Contactform />
        <Footer />
      </div>
    </>
  );
}
