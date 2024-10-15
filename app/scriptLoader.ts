"use client";
import React, { useEffect } from "react";

type Props = {};

function ScriptLoader({}: Props) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}

export default ScriptLoader;
