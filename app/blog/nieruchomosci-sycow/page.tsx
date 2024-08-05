import React from "react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
// import ContactFormBlogPost from "../../components/ContactFormBlogPost";
import Header from "../../components/header/header";
// import HeaderBlog from "../../components/HeaderBlog";
import HeaderBlog from "../../components/HeaderBlog";
import HeaderBlogPost from "../../components/HeaderBlogPost";
// import Blogbuttonoffers from "../../components/blogbuttonoffers";
// import MiniMainViewBlog from "../../components/MiniMainViewBlog";
import Footer from "../../components/footer/footer";
// import Newsletter from "../../components/newsletter";
import { LuArrowUpRightSquare } from "react-icons/lu";
import Contactform from "../../components/contactfrom/contactform";

export default function BlogPost() {
  const temat = "Nieruchomości Namysłów";

  const file = `app/components/posts/nieruchomosci-namyslow.md`;
  return (
    <>
      {/* <Newsletter /> */}

      <Head>
        <title>Nieruchomości Namysłów, dlaczego warto wybrać Namysłów?</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="Description" content="Namysłów jako dobre miejsce do życia." />
        <meta
          name="Keywords"
          content="Nieruchomości Hiszpania, nieruchomości w Hiszpanii, apartamenty w Hiszpanii, apartamenty Hiszpania, polska agencja nieruchomości w Hiszpanii"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <div className="main-index">
        {/* <div className="w-full h-16 fixed top-0 md:bg-gray-800/[0.4] z-20 bg-white shadow-xl">
          <Header />
        </div> */}
      </div>
      <HeaderBlogPost temat={temat} />
      {/* <Blogbuttonoffers /> */}
      {/* <ContactFormBlogPost temat="Jak kupić nieruchomość w Hiszpanii cz.1" /> */}
      <Footer />
    </>
  );
}
