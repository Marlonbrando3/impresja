import React from "react";
import Header from "../components/header/header";
import MainView from "../components/osiedleLesne/mainView";
import SecondView from "../components/osiedleLesne/secondView";
import HeaderTransparent from "../components/header/headerTransparent";
import Thirdview from "../components/osiedleLesne/thirdview";
import ContactformOsiedleLesne from "../components/contactfrom/contactformOsiedleLesne";
import Footer from "../components/footer/footer";
import Slider from "../components/osiedleLesne/slider";
import QandaComponent from "../components/qanda/qandaComponent";
import Qanda from "../components/qand";
import PropertiesLists from "../components/aboutProperties.tsx/propertiesLists";

export default function Page() {
  return (
    <div>
      <HeaderTransparent />
      <MainView />
      <SecondView />
      <Thirdview />
      <Slider />
      <PropertiesLists />
      {/* <Qanda /> */}
      <ContactformOsiedleLesne />
      <Footer />
    </div>
  );
}
