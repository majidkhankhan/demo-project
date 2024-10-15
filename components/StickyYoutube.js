"use client"
import React, { useEffect, useState } from "react";
import LiveURL2 from "./LiveURL2"; // Adjust the import path based on your project structure
import Link from "next/link";

const MediaComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false); // New state to track if the component has been closed

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the component has not been closed and the scroll position is greater than 500
      if (!isClosed && window.scrollY > 500) {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosed]); // Add isClosed to the dependency array to ensure effect updates accordingly

  // Function to handle close button click
  const handleCloseClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setIsVisible(false); // Hide the component when close button is clicked
    setIsClosed(true); // Set the component as closed
  };

  return (
    <div className="ak-featured-media ak-featured-media-sticky">
      <div
        data-src="https://www.youtube.com/watch?v=rmzJr1oUjKg"
        data-type="youtube"
        data-repeat="false"
        data-autoplay="true"
        className="ak-video-player ak-youtube-player clearfix inited"
      >
        {isVisible && (
          <Link
            href="#"
            className="media-sticky-close"
            onClick={handleCloseClick}
          >
            <i
              className="fa fa-times"
              style={{ color: "red", backgroundColor: "black" }}
            />
          </Link>
        )}
        <div>{isVisible && <LiveURL2 />}</div>
      </div>
    </div>
  );
};

export default MediaComponent;
