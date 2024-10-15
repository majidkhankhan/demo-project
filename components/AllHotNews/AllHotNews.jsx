"use server";
import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";

const AllHotNewsComponent = dynamic(() => import("./AllHotNewsComponent"), {
  ssr: false,
});

async function AllHotNews() {
  const { data: posts } = await axios.get(
    "https://api.sadaivsatya.com/api/home/frontKhabars"
  );
  return posts && <AllHotNewsComponent posts={posts} />;
}

export default AllHotNews;
