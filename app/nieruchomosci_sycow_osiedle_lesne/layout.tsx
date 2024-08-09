import type { Metadata, Viewport } from "next";
import { TenorsSans, DMSerif } from "../fonts/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Nieruchomości Syców, Domy na sprzedaż Syców",
  description:
    "Nowa inwestycja złożona z dwupoziomowych szeregówek w Sycowie. Kameralna, cicha i jednocześnie blisko infrastruktury na najlepszej działce w Sycowie.",
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
      <body className={`${TenorsSans.className} ${DMSerif.className}`}>{children}</body>
    </html>
  );
}
