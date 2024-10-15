"use server";
import React, { lazy } from "react";
import axios from "axios";

const SliderComponent = lazy(() => import("./SliderComponent"));

async function Slider() {
  const { data: posts } = await axios.get(
    "https://api.sadaivsatya.com/api/home/breaking"
  );
  return <SliderComponent posts={posts} />;
}

export default Slider;
