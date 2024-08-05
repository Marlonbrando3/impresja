import React from "react";
import HeaderBlog from "../components/HeaderBlog";
import Head from "next/head";
import Header from "../components/header/header";
import Script from "next/script";
import BlogItems from "../components/BlogItems";

export default function Blog() {
  return (
    <div>
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
      <Script id="hotjar">
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
        <title>Impresja nieruchomości - blog</title>
        <link rel="shortcut icon" href="/logotype.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <div className="main-index">
        <div className="w-full h-16 fixed top-0 md:bg-gray-800/[0.4] z-20 bg-white shadow-xl">
          <Header />
        </div>
      </div>
      <HeaderBlog />
      <BlogItems />
    </div>
  );
}
