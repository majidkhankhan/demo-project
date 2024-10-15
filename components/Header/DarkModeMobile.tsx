"use client";
import React, { useState } from "react";

type Props = {};

function DarkModeMobile({}: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <input
      id="dark_mode"
      onClick={toggleDarkMode}
      type="checkbox"
      className="ak-dark-mode-toggle"
    />
  );
}

export default DarkModeMobile;
