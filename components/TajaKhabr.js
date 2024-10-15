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
function TajaKhabr() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/frontKhabars"
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

  const generateShareLinks = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/TajaKhabarDetailsNews/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
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
      <div className="container border">
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
                <Link href="#" title="ताजा खबरें" aria-label="ताजा खबरें">
                  ताजा खबरें
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="wdgt-wrap" id="common-lifestyle">
          <div className="wdgt-lft" style={{ marginRight: "8px" }}>
            {posts.frontKhabars.slice(0, 1).map((newsItem) => (
              <div
                key={newsItem.mainKhabarId}
                href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                data-nid={201717087057468}
                aria-label="{stripHtmlTags(newsItem.newsHeading, 60)}"
                title={stripHtmlTags(newsItem.newsHeading, 60)}
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
                  alt={stripHtmlTags(newsItem.newsHeading, 20)}
                  width="466px"
                  height="262px"
                  title={stripHtmlTags(newsItem.newsHeading, 60)}
                />
                <Link
                  className="big-news-title"
                  href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                  aria-label={stripHtmlTags(newsItem.newsHeading, 60)}
                >
                  {stripHtmlTags(newsItem.newsHeading, 60)}
                </Link>
              </div>
            ))}
            {posts.frontKhabars.slice(1, 2).map((newsItem) => {
              const shareLinks = generateShareLinks(
                newsItem.mainKhabarId,
                newsItem.newsHeading
              );
              return (
                <div
                  key={newsItem.mainKhabarId}
                  href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                  data-nid={201717079673351}
                  aria-label={stripHtmlTags(newsItem.newsHeading, 60)}
                  title={stripHtmlTags(newsItem.newsHeading, 60)}
                  className="card-sm bordergap"
                >
                  <div className="sm-lft">
                    <i className="img-sizer" />
                    <img
                      className="lazy-img card-img"
                      loading="lazy"
                      src={baseUrl + newsItem.newsImage}
                      srcSet={baseUrl + newsItem.newsImage}
                      width="125px"
                      height="70px"
                      alt={stripHtmlTags(newsItem.newsHeading, 20)}
                      title={stripHtmlTags(newsItem.newsHeading, 60)}
                    />
                  </div>
                  <div className="sm-rght">
                    <Link
                      className="wdgt-subtitle1"
                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                      aria-label={stripHtmlTags(newsItem.newsHeading, 60)}
                    >
                      {stripHtmlTags(newsItem.newsHeading, 60)}
                    </Link>

                    <div className="socialmedia">
                      <span className="tm-stmp">
                        {" "}
                        <i className="ak-icon akfi-schedule me-2" />
                        {formatDateInHindi(newsItem.date)}
                      </span>
                      <Link
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="facebook"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>

                      <Link
                        href={shareLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="whatsapp"
                      >
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {posts.frontKhabars.slice(2, 3).map((newsItem) => {
              const shareLinks = generateShareLinks(
                newsItem.mainKhabarId,
                newsItem.newsHeading
              );
              return (
                <div
                  key={newsItem.mainKhabarId}
                  href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                  data-nid={201717079673351}
                  aria-label={stripHtmlTags(newsItem.newsHeading, 60)}
                  title={stripHtmlTags(newsItem.newsHeading, 60)}
                  className="card-sm bordergap"
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
                      alt={stripHtmlTags(newsItem.newsHeading, 20)}
                      title={stripHtmlTags(newsItem.newsHeading, 60)}
                    />
                  </div>
                  <div className="sm-rght">
                    <Link
                      className="wdgt-subtitle1"
                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                      aria-label={stripHtmlTags(newsItem.newsHeading, 60)}
                    >
                      {stripHtmlTags(newsItem.newsHeading, 60)}
                    </Link>

                    <div className="socialmedia">
                      <span className="tm-stmp">
                        <i className="ak-icon akfi-schedule me-2" />
                        {formatDateInHindi(newsItem.date)}
                      </span>
                      <Link
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="facebook"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>

                      <Link
                        href={shareLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="whatsapp"
                      >
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="wdgt-rgt">
            {posts.frontKhabars.slice(3, 8).map((newsItem) => {
              const shareLinks = generateShareLinks(
                newsItem.mainKhabarId,
                newsItem.newsHeading
              );
              return (
                <div
                  key={newsItem.mainKhabarId}
                  href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                  aria-label={stripHtmlTags(newsItem.newsHeading, 60)}
                  title={stripHtmlTags(newsItem.newsHeading, 60)}
                  className="card-sm card-sm-devider bordergap"
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
                      alt={stripHtmlTags(newsItem.newsHeading, 20)}
                      title={stripHtmlTags(newsItem.newsHeading, 60)}
                    />
                  </div>
                  <div className="sm-rght">
                    <Link
                      className="wdgt-subtitle1"
                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                      aria-label={stripHtmlTags(newsItem.newsHeading, 60)}
                    >
                      {stripHtmlTags(newsItem.newsHeading, 60)}
                    </Link>
                    <div className="socialmedia">
                      <span className="tm-stmp">
                        {" "}
                        <i className="ak-icon akfi-schedule me-2" />
                        {formatDateInHindi(newsItem.date)}
                      </span>
                      <Link
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="facebook"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>

                      <Link
                        href={shareLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="whatsapp"
                      >
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TajaKhabr;
