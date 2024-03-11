import Image from "next/image";
import Header from "./components/header/header";
import View from "./components/mainview/view";
import Secondview from "./components/secondview/secondview";
import Footer from "./components/footer/footer";
import Offersonmainpage from "./components/offersonmainpage/offersonmainpage";
import Contactform from "./components/contactfrom/contactform";

export default function Home() {
  return (
    <main className="text-black relative">
      <Header />
      <View />
      <Secondview />
      <Offersonmainpage />
      <Contactform />
      <Footer />
    </main>
  );
}
