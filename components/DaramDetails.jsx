import React, { useState, useEffect } from "react";
import BigAdd from "./BigAdd";
import Link from "next/link";
import DharamSanchar2 from "./DharamSanchar2";
import LifeSeince from "./LifeSeince";
import DhamSansar from "./DhamSansar";
import EkaDashi from "./EkaDashi";
import RashifalSmall from "./RashifalSmall";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

function DaramDetails() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/dharams"
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
    const url = `${window.location.origin}/DaramDetailsD/${mainKhabarId}`;
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
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>धर्म | शब्द टुडे | हिंदी न्यूज़</title>
          <link
            rel="canonical"
            href="https://www.sadaivsatya.com/DaramDetails"
          />
        </Helmet>
      </HelmetProvider>

      <div className="ak-post-wrapper" style={{ transform: "none" }}>
        <div
          className="ak-content-wrap ak-post-wrap ak-layout-style-1 clearfix ak-post-style-7 clearfix"
          style={{ transform: "none" }}
        >
          <div className="ak-container" style={{ transform: "none" }}>
            <div className="ak-content" style={{ transform: "none" }}>
              <div className="" style={{ transform: "none" }}>
                <div className="mt-2">
                  <BigAdd />
                </div>

                <div className="row" style={{ transform: "none" }}>
                  <div className="ak_column_1 col-md-9">
                    <div className="ak-article-inner">
                      <div className="">
                        <div className="ak-block-header ak-block-header-style-5 no-tabs">
                          <div className="wdgt-hdng">
                            <h2 className="head">
                              <Link href="/" title="धर्म" aria-label="धर्म">
                                धर्म
                              </Link>
                            </h2>
                          </div>
                        </div>
                        <div className="wdgt-wrap" id="common-lifestyle">
                          <div
                            className="wdgt-lft "
                            style={{ marginRight: "8px" }}
                          >
                            {postData.dharam.slice(0, 1).map((post) => (
                              <div
                                key={post.mainKhabarId}
                                href={`/DaramDetailsD/${post.mainKhabarId}`}
                                data-nid={201717087057468}
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                                className="card-lg bordergap "
                              >
                                <i className="img-sizer" />
                                <img
                                  className="lazy-img card-img"
                                  loading="lazy"
                                  src={
                                    image_resize +
                                    "?url=" +
                                    baseUrl +
                                    post.newsImage +
                                    "&w=483&h=272&outtype=webp"
                                  }
                                  srcSet={
                                    image_resize +
                                    "?url=" +
                                    baseUrl +
                                    post.newsImage +
                                    "&w=483&h=272&outtype=webp"
                                  }
                                  alt={stripHtmlTags(post.newsHeading, 30)}
                                  width="466px"
                                  height="262px"
                                  title={stripHtmlTags(post.newsHeading, 30)}
                                />
                                <Link
                                  href={`/DaramDetailsD/${post.mainKhabarId}`}
                                  className="big-news-title"
                                >
                                  {stripHtmlTags(post.newsHeading, 60)}
                                </Link>
                              </div>
                            ))}
                            {postData.dharam.slice(1, 3).map((post) => {
                              const shareLinks = generateShareLinks(
                                post.mainKhabarId,
                                post.newsHeading
                              );
                              return (
                                <div
                                  key={post.mainKhabarId}
                                  href={`/DaramDetailsD/${post.mainKhabarId}`}
                                  data-nid={201717079673351}
                                  aria-label={stripHtmlTags(
                                    post.newsHeading,
                                    30
                                  )}
                                  title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                                  className="card-sm bordergap "
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
                                        post.newsImage +
                                        "&w=125&h=70&outtype=webp"
                                      }
                                      srcSet={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        post.newsImage +
                                        "&w=125&h=70&outtype=webp"
                                      }
                                      width="125px"
                                      height="70px"
                                      alt={stripHtmlTags(post.newsHeading, 30)}
                                      title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                                    />
                                  </div>
                                  <div className="sm-rght">
                                    <Link
                                      href={`/DaramDetailsD/${post.mainKhabarId}`}
                                      className="wdgt-subtitle1"
                                    >
                                      {stripHtmlTags(post.newsHeading, 80)}
                                    </Link>

                                    <div className="socialmedia">
                                      <span className="tm-stmp">
                                        <i className="ak-icon akfi-schedule me-1" />
                                        {formatDateInHindi(post.date)}{" "}
                                      </span>
                                      <Link
                                        href={shareLinks.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="facebook"
                                      >
                                        <i
                                          className="fa fa-facebook"
                                          aria-hidden="true"
                                        ></i>
                                      </Link>
                                      <Link
                                        href={shareLinks.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="whatsapp"
                                      >
                                        <i
                                          className="fa fa-whatsapp"
                                          aria-hidden="true"
                                        ></i>
                                      </Link>{" "}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="wdgt-rgt">
                            {postData.dharam.slice(3, 8).map((post) => {
                              const shareLinks = generateShareLinks(
                                post.mainKhabarId,
                                post.newsHeading
                              );
                              return (
                                <div
                                  key={post.mainKhabarId}
                                  href={`/DaramDetailsD/${post.mainKhabarId}`}
                                  aria-label={stripHtmlTags(
                                    post.newsHeading,
                                    30
                                  )}
                                  title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                                  className="card-sm card-sm-devider bordergap "
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
                                        post.newsImage +
                                        "&w=125&h=70&outtype=webp"
                                      }
                                      srcSet={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        post.newsImage +
                                        "&w=125&h=70&outtype=webp"
                                      }
                                      width="125px"
                                      height="70px"
                                      alt={stripHtmlTags(post.newsHeading, 30)}
                                      title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                                    />
                                  </div>
                                  <div className="sm-rght">
                                    <Link
                                      href={`/DaramDetailsD/${post.mainKhabarId}`}
                                      className="wdgt-subtitle1"
                                    >
                                      {stripHtmlTags(post.newsHeading, 70)}
                                    </Link>

                                    <div className="socialmedia">
                                      <span className="tm-stmp">
                                        <i className="ak-icon akfi-schedule me-1" />
                                        {formatDateInHindi(post.date)}
                                      </span>
                                      <Link
                                        href={shareLinks.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="facebook"
                                      >
                                        <i
                                          className="fa fa-facebook"
                                          aria-hidden="true"
                                        ></i>
                                      </Link>
                                      <Link
                                        href={shareLinks.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="whatsapp"
                                      >
                                        <i
                                          className="fa fa-whatsapp"
                                          aria-hidden="true"
                                        ></i>
                                      </Link>{" "}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <DharamSanchar2 />
                    </div>
                  </div>
                  <div
                    className="ak_column_ col-md-3  sidebar-column sidebar-column-primary-right sticky-sidebar"
                    style={{
                      position: "relative",
                      overflow: "visible",
                      boxSizing: "border-box",
                      minHeight: 1,
                    }}
                  >
                    <div
                      className="theiaStickySidebar"
                      style={{
                        paddingTop: 0,
                        paddingBottom: 1,
                        position: "sticky",
                        transform: "none",
                        top: 0,
                        left: "914.5px",
                      }}
                    >
                      <div className="sidebar post-sidebar">
                        <DhamSansar />
                        <EkaDashi />

                        <LifeSeince />
                        <RashifalSmall />
                      </div>
                      <div
                        className="resize-sensor"
                        style={{
                          position: "absolute",
                          inset: 0,
                          overflow: "hidden",
                          zIndex: -1,
                          visibility: "hidden",
                        }}
                      >
                        <div
                          className="resize-sensor-expand"
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            overflow: "hidden",
                            zIndex: -1,
                            visibility: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              transition: "all 0s ease 0s",
                              width: 410,
                              height: 1260,
                            }}
                          />
                        </div>
                        <div
                          className="resize-sensor-shrink"
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            overflow: "hidden",
                            zIndex: -1,
                            visibility: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              transition: "0s",
                              width: "200%",
                              height: "200%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaramDetails;
