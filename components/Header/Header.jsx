"use server";
import React from "react";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("./HeaderComponent"), {
  ssr: false,
});

async function Header() {
  const { data: newsData } = await (
    await fetch("https://api.sadaivsatya.com/api/home/breaking")
  ).json();
  const { data: secondData } = await (
    await fetch("https://api.sadaivsatya.com/api/home/state")
  ).json();
  return <HeaderComponent newsData={newsData} secondData={secondData} />;
}

export default Header;
