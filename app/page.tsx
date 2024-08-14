import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import Header from "./components/header/header";
import View from "./components/mainview/view";
import Secondview from "./components/secondview/secondview";
import Footer from "./components/footer/footer";
import Offersonmainpage from "./components/offersonmainpage/offersonmainpage";
import Contactform from "./components/contactfrom/contactform";
import AddYorOffer from "./components/searchonmainpage/addYorOffer";
import NewProjektSycow from "./components/newProjektSycow";

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
      <Script id="hotjar-snippet">
        {` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5083945,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
      <Head>
        <meta property="Nieruchomości w Hiszpanii, Chorwacji, Portugalii" content="image" />
        <title>Biuro nieruchomości Namysłów. Biuro nieruchomości Syców.</title>
        <link rel="shortcut icon" href="/icon_logo.png" />
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
        <NewProjektSycow />
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
