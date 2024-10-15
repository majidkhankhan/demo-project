import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { Circles } from "react-loader-spinner";

const VideoDetailsD = () => {
  const { shortVideoId } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchVideoDetailsAndList = async () => {
      try {
        const { data: videoData } = await axios.get(
          `https://api.sadaivsatya.com/api/home/getvideo`
        );
        const { data: videoDetails } = await axios.get(
          `https://api.sadaivsatya.com/api/home/getvideodetails/${shortVideoId}`
        );

        const initialVideoIndex = videoData.findIndex(
          (video) => video.shortVideoId === shortVideoId
        );

        setVideoList(videoData);
        setCurrentVideo(videoDetails);
        setCurrentVideoIndex(initialVideoIndex !== -1 ? initialVideoIndex : 0);
      } catch (error) {
        console.error("Error fetching video details or list:", error);
      }
    };

    fetchVideoDetailsAndList();
  }, [shortVideoId]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!currentVideo) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Circles
          height="30"
          width="30"
          color="#f7265c"
          ariaLabel="circles-loading"
          visible={true}
        />
      </div>
    );
  }

  const BASE_URL = "https://api.sadaivsatya.com/";
  const videoUrl = `${BASE_URL}${currentVideo.shortVideoPath}`;

  const scrollVideo = (direction) => {
    if (direction === "up" && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setCurrentVideo(videoList[currentVideoIndex - 1]);
    } else if (
      direction === "down" &&
      currentVideoIndex < videoList.length - 1
    ) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setCurrentVideo(videoList[currentVideoIndex + 1]);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(videoUrl);
    alert("Link copied to clipboard!");
  };

  // Handle touch events for mobile scrolling
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEndY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStartY - touchEndY > 50) {
      // Swipe up
      scrollVideo("down");
    } else if (touchEndY - touchStartY > 50) {
      // Swipe down
      scrollVideo("up");
    }
  };

  return (
    <div
      className="bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="video-container mb-3"
        ref={videoRef}
        style={{ maxHeight: "90vh", position: "relative" }}
      >
        <Link href="/VideoDetails">
          <button
            className="w3-button w3-large w3-circle w3-light-grey"
            style={{ color: "green", marginRight: "10px" }}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </Link>

        {/* Video */}
        <video
          key={currentVideo.shortVideoId}
          width="100%"
          height="auto"
          loop
          muted
          playsInline
          autoPlay
          controls
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Share Buttons */}
        <div
          style={{
            position: "absolute",
            top: "72%",
            right: "-15px",
            transform: "translateY(-50%)",
            display: isMobile ? "none" : "flex", // Show only on desktop
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  videoUrl
                )}`,
                "_blank"
              )
            }
            style={{
              backgroundColor: "#3b5998",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              width: "40px",
              height: "40px",
            }}
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </button>
          <strong
            style={{
              color: "white",
              marginLeft: "10px",
              fontSize: "10px",
              fontStyle: "initial",
            }}
          >
            फेसबुक
          </strong>
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  videoUrl
                )}`,
                "_blank"
              )
            }
            style={{
              backgroundColor: "#1da1f2",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              width: "40px",
              height: "40px",
            }}
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </button>
          <strong
            style={{
              color: "white",
              marginLeft: "10px",
              fontSize: "10px",
              fontStyle: "initial",
            }}
          >
            ट्विटर
          </strong>
          <button
            onClick={copyLink}
            style={{
              backgroundColor: "#333",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              width: "40px",
              height: "40px",
            }}
          >
            <i className="fa fa-paperclip" aria-hidden="true"></i>
          </button>
          <strong
            style={{
              color: "white",
              marginLeft: "10px",
              fontSize: "10px",
              fontStyle: "initial",
            }}
          >
            कॉपी लिंक
          </strong>
        </div>

        {/* Up Button */}
        <button
          className="scroll-button"
          style={{
            position: "absolute",
            top: "40%",
            right: "-470px",
            backgroundColor: "#f7265c",
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "50%",
            cursor: "pointer",
            width: "50px",
            height: "50px",
            display: isMobile ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
          onClick={() => scrollVideo("up")}
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>

        {/* Down Button */}
        <button
          className="scroll-button"
          style={{
            position: "absolute",
            top: "57%",
            right: "-470px",
            backgroundColor: "#f7265c",
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "50%",
            cursor: "pointer",
            width: "50px",
            height: "50px",
            display: isMobile ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
          onClick={() => scrollVideo("down")}
        >
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .scroll-button {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default VideoDetailsD;
