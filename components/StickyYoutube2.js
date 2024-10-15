import React, { useEffect, useState } from "react";
import { useLocation } from "next/link";

const StickyYoutube2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Change 1000 to the desired scroll position where you want the component to appear
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Only add scroll event listener if we are on a specific route
    if (location.pathname === "/your-specific-route") {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div
      className={`sticky-youtube ${isVisible ? "visible" : "hidden"}`}
      style={{
        position: "sticky",
        top: 0,
        transition: "opacity 0.5s ease",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Your StickyYoutube content here */}
      <h2>Sticky Youtube</h2>
    </div>
  );
};

export default StickyYoutube2;
