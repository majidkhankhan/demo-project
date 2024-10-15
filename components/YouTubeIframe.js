import React, { useState, useEffect } from 'react';

const YouTubeIframe = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on scroll position
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <iframe
          width="200"
          height="150"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            zIndex: 1000, // Ensure it's on top of other content
          }}
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeIframe;
