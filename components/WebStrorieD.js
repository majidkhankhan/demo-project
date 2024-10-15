import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import { Helmet, HelmetProvider } from "react-helmet-async";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength);
  }
  return text;
};

const stripHtmlTags = (html, maxLength) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const strippedText = tempDiv.textContent || tempDiv.innerText || "";
  return truncateText(strippedText, maxLength);
};

function WebStrorieD() {
  const { webStoriesId } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.sadaivsatya.com/api/home/getwebstories/${webStoriesId}`
        );
        console.log("Fetched data:", data); // Log the fetched data
        setNewsDetails(data);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };

    fetchNewsDetails();
  }, [webStoriesId]);

  const BASE_URL = "https://api.sadaivsatya.com/";
  const image_resize = "https://api.sadaivsatya.com/api/home/resize";

  if (!newsDetails || !newsDetails.webStoriesImages) {
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

  // Comma-separated images ko array me convert kar rahe hain
  const imageArray = newsDetails.webStoriesImages.split(",");

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>शब्द टुडे | हिंदी न्यूज़</title>
          <script defer src="https://cdn.ampproject.org/v0.js"></script>
          <script
            defer
            custom-element="amp-story"
            src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
          ></script>
        </Helmet>
      </HelmetProvider>

      <div className="webstory-container">
        {/* AMP Story Container */}
        <amp-story
          standalone=""
          publisher="शब्द टुडे"
          title={newsDetails.webStoriesHeading}
        >
          {imageArray.map((imagePath, index) => (
            <amp-story-page key={index} id={`page-${index + 1}`}>
              <amp-grid-layer template="fill">
                <amp-img
                  src={`${image_resize}?url=${BASE_URL}${imagePath}&w=194&h=345&outtype=webp`}
                  width="900"
                  height="1600"
                  alt={`Image ${index + 1}`}
                  layout="fill"
                ></amp-img>
              </amp-grid-layer>
            </amp-story-page>
          ))}
        </amp-story>
      </div>
    </>
  );
}

export default WebStrorieD;
