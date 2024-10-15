"use client";
import React, { useState } from "react";

type Props = {};

function DarkMode({}: Props) {
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
    <div className="ak-bar-item ak-dark-mode">
      <div className="ak-toggle-container">
        <label htmlFor="dark_mode">
          {" "}
          <span className="screen-reader-text">Dark mode</span>{" "}
        </label>
        <input
          onClick={toggleDarkMode}
          type="checkbox"
          aria-label="Dark Mode"
          className="ak-dark-mode-toggle"
        />
        <span className="slider round" />{" "}
      </div>{" "}
    </div>
  );
}

export default DarkMode;
