import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {LanguageProvider} from './context/LanguageContext'
export const metadata: Metadata = {
  title: "Strona Krajowego Związku Towarzystw Polsko-Niemieckich",
  description:
    "Strona poświęcona aktualnościom i działalmności towarzystwa polsko-niemieckiego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <LanguageProvider>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
          <Footer />
          </LanguageProvider>
      </body>
    </html>
  );
}
