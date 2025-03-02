import type { Metadata, Viewport } from "next";
import { TenorsSans, DMSerif } from "../fonts/fonts";
import "../globals.css";
import GoogleAnalitycs from "../components/googleAnalitycs";
import HotJar from "../components/hotJar";

export const metadata: Metadata = {
  title: "Nowe domy oraz mieszkania w Sycowie || Osiedle Syców w najlepszej lokalizacji w Sycowie.",
  description:
    "Nowa inwestycja złożona z dwupoziomowych szeregówek w Sycowie. Kameralna, cicha i jednocześnie blisko infrastruktury na najlepszej działce w Sycowie.",
  // icons: {
  //   icon: "/icon_logo.ico",
  // },
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
      <HotJar />
      <GoogleAnalitycs />
      <body className={`${TenorsSans.className} ${DMSerif.className}`}>{children}</body>
    </html>
  );
}
