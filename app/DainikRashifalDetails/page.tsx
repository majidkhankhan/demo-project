"use client";
import React from "react";
import dynamic from "next/dynamic";

const DainikRashifalDetails = dynamic(
  () => import("../../components/DainikRashifalDetails"),
  {
    ssr: false,
  }
);
type Props = {};

const page = (props: Props) => {
  return <DainikRashifalDetails />;
};

export default page;
