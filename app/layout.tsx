import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalitycs from "./components/googleAnalitycs";
import Hotjar from "@hotjar/browser";

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
  const siteId = 5083945;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  return (
    <html lang="pl">
      <GoogleAnalitycs />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
