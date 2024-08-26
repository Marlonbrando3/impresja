import type { Metadata, Viewport } from "next";
import { TenorsSans, DMSerif } from "../fonts/fonts";
import "../globals.css";
import GoogleAnalitycs from "../components/googleAnalitycs";
import Hotjar from "@hotjar/browser";

export const metadata: Metadata = {
  title: "Nieruchomości Syców - nowe domy oraz mieszkania",
  description:
    "Nowa inwestycja złożona z dwupoziomowych szeregówek w Sycowie. Kameralna, cicha i jednocześnie blisko infrastruktury na najlepszej działce w Sycowie.",
  icons: {
    icon: "/icon_logo.ico",
  },
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
  const siteId = 5083945;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  return (
    <html lang="pl">
      <GoogleAnalitycs />
      <body className={`${TenorsSans.className} ${DMSerif.className}`}>{children}</body>
    </html>
  );
}
