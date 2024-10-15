"use server";
import React from "react";
import dynamic from "next/dynamic";

const BigCardComponent = dynamic(() => import("./BigCardComponent"));

async function BigCard() {
  const { data: posts } = await (
    await fetch("https://api.sadaivsatya.com/api/home/mpNews")
  ).json();
  return posts && <BigCardComponent posts={posts} />;
}

export default BigCard;
