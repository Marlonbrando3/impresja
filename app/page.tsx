import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import Header from "./components/header/header";
import View from "./components/mainview/view";
import Secondview from "./components/secondview/secondview";
import Footer from "./components/footer/footer";
import Offersonmainpage from "./components/offersonmainpage/offersonmainpage";
import Contactform from "./components/contactfrom/contactform";

export default function Home() {
  return (
    <>
      <Script
        id="GTM"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NNW1E1J5PY"
      ></Script>
      <Script id="GA">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NNW1E1J5PY');`}
      </Script>
      <Head>
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
      </Head>
      <main className="text-black relative">
        <Header />
        <View />
        <Secondview />
        <Offersonmainpage />
        <Contactform />
        <Footer />
      </main>
    </>
  );
}
