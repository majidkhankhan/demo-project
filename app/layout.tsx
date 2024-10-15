import "./globals.css";
import Footer from "../components/Footer";
import HeaderComponent from "../components/Header/HeaderComponent";
import React from "react";
import ScriptLoader from "./scriptLoader";

type Props = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <HeaderComponent />
        {children}
        <Footer />
        <ScriptLoader />
      </body>
    </html>
  );
}
