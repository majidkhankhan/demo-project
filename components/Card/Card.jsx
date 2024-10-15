"use server";
import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";

const CardComponent = dynamic(() => import("./CardComponent"), {
  ssr: false,
});

async function Card() {
  const { data: postData } = await axios.get(
    "https://api.sadaivsatya.com/api/home/breaking"
  );
  return postData && <CardComponent postData={postData} />;
}

export default Card;
