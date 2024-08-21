import React from "react";
import Script from "next/script";

export default function GoogleAnalitycs() {
  return (
    <>
      <Script
        id="google-analitycs-load"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11239400043"
      ></Script>
      <Script id="google-analitycs" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11239400043'),
          { page_path: window.location.pathname,});`}
      </Script>
    </>
  );
}
