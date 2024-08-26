import type { Metadata, Viewport } from "next";
import Head from "next/head";
import { Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalitycs from "./components/googleAnalitycs";
import HotJar from "./components/hotJar";

const inter = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Impresja nieruchomości Namysłów, Kluczbork, Oleśnica, Oława, Brzeg",
  description: "Nieruchomości Namysłów Kluczbork, Oleśnica, Oława, Brzeg",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <Head>
        <HotJar />
        <GoogleAnalitycs />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
