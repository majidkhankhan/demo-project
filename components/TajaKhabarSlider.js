import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Circles } from "react-loader-spinner";

const BASE_URL = "https://api.sadaivsatya.com/";
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
function TajaKhabarSlider() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/tajaKhabars"
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
    <div className="border">
      <div className="ak-block-header wdgt-hdng ak-block-header-style-5 no-tabs ">
        <b className="mb-2">समाचार -</b>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {postData.tazaKhabars.slice(0, 1).map((post) => (
            <div
              key={post.mainKhabarId}
              className="carousel-item active p-2"
              data-bs-interval="2000"
            >
              <img
                src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=1000&h=333&outtype=webp`}
                className="d-block w-100"
                width={966}
                height={322}
                loading="lazy"
                alt={stripHtmlTags(post.newsHeading, 100)}
              />

              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  aria-label={stripHtmlTags(post.newsHeading, 30)}
                >
                  <h1> {stripHtmlTags(post.newsHeading, 100)}</h1>
                </Link>
              </div>
            </div>
          ))}
          {postData.tazaKhabars.slice(1, 2).map((post) => (
            <div
              key={post.mainKhabarId}
              className="carousel-item p-2"
              data-bs-interval="2000"
            >
              <Link
                href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                aria-label={stripHtmlTags(post.newsHeading, 30)}
              >
                <img
                  src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=1000&h=333&outtype=webp`}
                  className="d-block w-100"
                  width={966}
                  height={322}
                  loading="lazy"
                  alt={stripHtmlTags(post.newsHeading, 100)}
                />
              </Link>
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  aria-label={stripHtmlTags(post.newsHeading, 30)}
                >
                  <h1> {stripHtmlTags(post.newsHeading, 100)}</h1>
                </Link>
              </div>
            </div>
          ))}
          {postData.tazaKhabars.slice(2, 3).map((post) => (
            <div
              key={post.mainKhabarId}
              className="carousel-item p-2"
              data-bs-interval="2000"
            >
              <Link
                href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                aria-label={stripHtmlTags(post.newsHeading, 30)}
              >
                <img
                  src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=1000&h=333&outtype=webp`}
                  className="d-block w-100"
                  width={966}
                  height={322}
                  loading="lazy"
                  alt={stripHtmlTags(post.newsHeading, 100)}
                />
              </Link>
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  aria-label={stripHtmlTags(post.newsHeading, 30)}
                >
                  <h1> {stripHtmlTags(post.newsHeading, 100)}</h1>
                </Link>
              </div>
            </div>
          ))}
          {postData.tazaKhabars.slice(3, 4).map((post) => (
            <div
              key={post.mainKhabarId}
              className="carousel-item p-2"
              data-bs-interval="2000"
            >
              <Link
                href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                aria-label={stripHtmlTags(post.newsHeading, 30)}
              >
                <img
                  src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=1000&h=333&outtype=webp`}
                  className="d-block w-100"
                  width={966}
                  height={322}
                  loading="lazy"
                  alt={stripHtmlTags(post.newsHeading, 100)}
                />
              </Link>
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  aria-label={stripHtmlTags(post.newsHeading, 30)}
                >
                  <h1> {stripHtmlTags(post.newsHeading, 100)}</h1>
                </Link>
              </div>
            </div>
          ))}
          {postData.tazaKhabars.slice(4, 5).map((post) => (
            <div
              key={post.mainKhabarId}
              className="carousel-item p-2"
              data-bs-interval="2000"
            >
              <Link
                href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                aria-label={stripHtmlTags(post.newsHeading, 30)}
              >
                <img
                  src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=1000&h=333&outtype=webp`}
                  className="d-block w-100"
                  width={966}
                  height={322}
                  loading="lazy"
                  alt={stripHtmlTags(post.newsHeading, 100)}
                />
              </Link>
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  aria-label={stripHtmlTags(post.newsHeading, 30)}
                >
                  <h1> {stripHtmlTags(post.newsHeading, 100)}</h1>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TajaKhabarSlider;
