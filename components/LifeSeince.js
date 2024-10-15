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
function LifeSeince() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/lifeSeince"
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
              <Link href="/" title="लाइफ साइंस " aria-label="लाइफ साइंस">
                लाइफ साइंस
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {postData.lifeSeince.slice(0, 5).map((post) => (
            <div
              key={post.mainKhabarId}
              className="carousel-item active"
              data-bs-interval="2000"
            >
              <Link
                href={`/DaramDetailsD/${post.mainKhabarId}`}
                aria-label={stripHtmlTags(post.newsHeading, 30)}
              >
                <img
                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    post.newsImage +
                    "&w=313&h=177&outtype=webp"
                  }
                  className="d-block w-100"
                  width={242}
                  height={121}
                  alt={stripHtmlTags(post.newsHeading, 30)}
                />
              </Link>
              {/* <div className="carousel-caption d-none d-md-block ">
                <Link href={`/DaramDetailsD/${post.mainKhabarId}`} aria-label={stripHtmlTags(post.newsHeading, 30)} >
                  <h1 className="touchh1">{stripHtmlTags(post.newsHeading, 30)}</h1>
                </Link>
              </div> */}
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default LifeSeince;
