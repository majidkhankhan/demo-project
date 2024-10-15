import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Circles } from "react-loader-spinner";

const baseUrl = "https://api.sadaivsatya.com/";
const image_resize = "https://api.sadaivsatya.com/api/home/resize";
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
function Astrology() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/astroPrediction"
        );
        setPostData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNewsClick = (trendingTagId) => {
    navigate.push(`/NewsDetails/${trendingTagId}`);
  };
  const formatDateInHindi = (dateString) => {
    const date = new Date(dateString);
    const monthsInHindi = [
      "जनवरी",
      "फरवरी",
      "मार्च",
      "अप्रैल",
      "मई",
      "जून",
      "जुलाई",
      "अगस्त",
      "सितंबर",
      "अक्टूबर",
      "नवंबर",
      "दिसंबर",
    ];
    const day = date.getDate();
    const month = monthsInHindi[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  if (loading) {
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
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <div className="ak-block-header ak-block-header-style-5 no-tabs">
        <div
          className="main-wdgt container"
          id="widget-rs-4937"
          data-vars-widget-type="home"
          data-vars-widget-name="astrology"
          data-vars-orderid={10}
        >
          <div className="wdgt-hdng">
            <h1 className="head">
              <Link href="/" title="एस्ट्रोलॉजी" aria-label="एस्ट्रोलॉजी">
                एस्ट्रोलॉजी
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {postData.astroPrediction.slice(0, 5).map((post) => (
            <div key={post.mainKhabarId} className="carousel-item active">
              <Link
                href={`/DaramDetailsD/${post.mainKhabarId}`}
                aria-label="एस्ट्रोलॉजी"
              >
                <img
                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    post.newsImage +
                    "&w=988&h=329&outtype=webp"
                  }
                  className="d-block w-100"
                  alt="Shabd Today Slide"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Astrology;
