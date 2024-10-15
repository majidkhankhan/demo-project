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
function Chahtish() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/cgNews"
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
      <div className="container">
        <div className="ak-block-header ak-block-header-style-5 no-tabs">
          <div
            className="main-wdgt container"
            id="widget-rs-4937"
            data-vars-widget-type="home"
            data-vars-widget-name="astrology"
            data-vars-orderid={10}
          >
            <div className="wdgt-hdng">
              <h2 className="head">
                <Link href="#" title="धर्म">
                  छत्तीसगढ़
                </Link>
              </h2>
              <Link href="#" className="pull-right rdmr">
                {" "}
                और पढ़ें <i className="icon-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="wdgt-wrap" id="common-lifestyle">
          <div className="wdgt-lft">
            {posts.cgNews.slice(0, 1).map((newsItem) => (
              <Link
                href="#"
                data-nid={201717087057468}
                title="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                className="card-lg"
              >
                <i className="img-sizer" />
                <img
                  className="lazy-img card-img"
                  loading="lazy"
                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=480&h=409&outtype=webp"
                  }
                  srcSet={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=480&h=409&outtype=webp"
                  }
                  alt="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                  width="466px"
                  height="262px"
                  title="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                />
                <Link
                  className="big-news-title"
                  href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                >
                  {stripHtmlTags(newsItem.newsHeading, 60)}
                </Link>
              </Link>
            ))}
            {posts.cgNews.slice(1, 3).map((newsItem) => (
              <Link
                href="#"
                data-nid={201717079673351}
                title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                className="card-sm"
              >
                <div className="sm-lft">
                  <i className="img-sizer" />
                  <img
                    className="lazy-img card-img"
                    loading="lazy"
                    src={
                      image_resize +
                      "?url=" +
                      baseUrl +
                      newsItem.newsImage +
                      "&w=125&h=106&outtype=webp"
                    }
                    srcSet={
                      image_resize +
                      "?url=" +
                      baseUrl +
                      newsItem.newsImage +
                      "&w=125&h=106&outtype=webp"
                    }
                    width="125px"
                    height="70px"
                    alt="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                    title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                  />
                </div>
                <div className="sm-rght">
                  <Link
                    className="wdgt-subtitle1"
                    href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                  >
                    {stripHtmlTags(newsItem.newsHeading, 60)}
                  </Link>
                  <span className="tm-stmp">
                    {formatDateInHindi(newsItem.date)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="wdgt-rgt">
            {posts.cgNews.slice(3, 7).map((newsItem) => (
              <Link
                href="#"
                title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                className="card-sm card-sm-devider"
              >
                <div className="sm-lft">
                  <i className="img-sizer" />
                  <img
                    className="lazy-img  card-img"
                    loading="lazy"
                    src={
                      image_resize +
                      "?url=" +
                      baseUrl +
                      newsItem.newsImage +
                      "&w=125&h=106&outtype=webp"
                    }
                    srcSet={
                      image_resize +
                      "?url=" +
                      baseUrl +
                      newsItem.newsImage +
                      "&w=125&h=106&outtype=webp"
                    }
                    width="125px"
                    height="70px"
                    alt="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                    title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                  />
                </div>
                <div className="sm-rght">
                  <Link
                    className="wdgt-subtitle1"
                    href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                  >
                    {stripHtmlTags(newsItem.newsHeading, 60)}
                  </Link>
                  <span className="tm-stmp">
                    {formatDateInHindi(newsItem.date)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chahtish;
