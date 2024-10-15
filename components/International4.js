import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { hi } from "date-fns/locale";
import Link from "next/link";
import { Circles } from "react-loader-spinner";
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength);
    //return text.substring(0, maxLength) + '...';
  }
  return text;
};

const stripHtmlTags = (html, maxLength) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const strippedText = tempDiv.textContent || tempDiv.innerText || "";
  return truncateText(strippedText, maxLength);
};
function International4() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/topHeadlines"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // Define your base URL for news images

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
  const baseUrl = "https://api.sadaivsatya.com/";
  const image_resize = "https://api.sadaivsatya.com/api/home/resize";
  return (
    <div>
      <section className=" mt-3 gayab">
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
                <a href="/astrology/" title="धर्म">
                  ट्रेंडिंग ख़बरें
                </a>
              </h1>
            </div>
          </div>
        </div>

        <div className="webStory">
          <div className="block">
            <div className="item">
              {posts.topHeadlines.slice(0, 1).map((newsItem) => (
                <div
                  key={newsItem.mainKhabarId}
                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                  title="#"
                  aria-label="ट्रेंडिंग ख़बरें"
                  className="webstory-card"
                  target="_blank"
                >
                  <figure>
                    <img
                      alt=""
                      loading="lazy"
                      width={160}
                      height={282}
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=120&h=86&outtype=webp"
                      }
                      style={{ color: "transparent" }}
                    />
                  </figure>
                  <div className="caption">
                    <div className="title card-text">
                      <Link
                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                        aria-label="ट्रेंडिंग ख़बरें"
                      >
                        {" "}
                        {stripHtmlTags(newsItem.newsHeading, 15)}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ overflow: "hidden" }}>
              <marquee style={{ scrollAmount: 2 }}>
                {posts.topHeadlines.slice(1, 6).map((newsItem) => (
                  <div
                    key={newsItem.mainKhabarId}
                    className="item"
                    style={{ float: "left", margin: "5" }}
                  >
                    <div
                      href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                      title="#"
                      aria-label="ट्रेंडिंग ख़बरें"
                      className="webstory-card"
                      target="_blank"
                    >
                      <figure>
                        <img
                          alt="#"
                          loading="lazy"
                          width={160}
                          height={282}
                          src={
                            image_resize +
                            "?url=" +
                            baseUrl +
                            newsItem.newsImage +
                            "&w=120&h=86&outtype=webp"
                          }
                          style={{ color: "transparent" }}
                        />
                      </figure>
                      <div className="caption">
                        <div className="title card-text">
                          <Link
                            href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                            aria-label="ट्रेंडिंग ख़बरें"
                          >
                            {" "}
                            {stripHtmlTags(newsItem.newsHeading, 15)}{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default International4;
