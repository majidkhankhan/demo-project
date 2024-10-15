import React, { useState, useEffect } from "react";
import axios from "axios";
import BigAdd from "./BigAdd";
import RashifalSmall from "./RashifalSmall";
import Link from "next/link";
import { useParams } from "next/navigation";
import DhamSansar from "./DhamSansar";
import SocialMediaShare from "./SocialMediaShare";
import Astrology from "./Astrology";
import EkaDashi from "./EkaDashi";
import ButtonTags from "./ButtonTags";
import { Circles } from "react-loader-spinner";
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

function RashiDetail() {
  const { rashifalId } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsResponse, additionalResponse] = await axios.all([
          axios.get(
            `https://api.sadaivsatya.com/api/home/getrashifadeatils/${rashifalId}`
          ),
          axios.get("https://api.sadaivsatya.com/api/home/rashifalKhabarss"), // Replace with your second API endpoint
        ]);

        console.log("Fetched news details:", newsResponse.data); // Log the fetched news details
        console.log("Fetched additional data:", additionalResponse.data); // Log the fetched additional data

        setNewsDetails(newsResponse.data);
        setAdditionalData(additionalResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [rashifalId]);

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

  if (!newsDetails || !additionalData) {
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
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";
    return imagePath.startsWith("http") ? imagePath : `${BASE_URL}${imagePath}`;
  };
  const BASE_URL = "https://api.sadaivsatya.com/";
  return (
    <div>
      <div className="ak-post-wrapper" style={{ transform: "none" }}>
        <div
          className="ak-content-wrap ak-post-wrap ak-layout-style-1 clearfix ak-post-style-7 clearfix"
          style={{ transform: "none" }}
        >
          <div className="ak-container" style={{ transform: "none" }}>
            <article
              id="post-224"
              className="post-224 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-featured category-tech-science category-us-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article ak-article clearfix autoload-initted autoload-loaded"
              data-type="post"
              data-id={224}
              data-autoload={225}
              data-template="style-7"
              style={{ transform: "none" }}
            >
              <div className="ak-content" style={{ transform: "none" }}>
                <div className="containercustome" style={{ transform: "none" }}>
                  <div className="mt-2">
                    <BigAdd />
                  </div>
                  <div className="row" style={{ transform: "none" }}>
                    <div
                      className="ak_column_1 col-md-3 content-column sidebar-column sidebar-column-primary sticky-sidebar"
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
                          position: "static",
                          transform: "none",
                          top: 0,
                          left: "914.5px",
                        }}
                      >
                        <div className="sidebar post-sidebar">
                          <DhamSansar />

                          <div className="mt-5">
                            <SocialMediaShare />
                          </div>
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
                    <div className="ak_column_2 col-md-6 content-column">
                      <div className="ak-article-inner">
                        <div className="ak-block-boxed">
                          <div className="text-center example">
                            <button
                              type="button"
                              className="btn contras"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              राशि चुनें
                            </button>
                          </div>

                          <div className="SactionNews">
                            <div className="" id="icon-grid">
                              {/* Page Content */}
                              <div className="heading my-3">
                                <Link href="#">
                                  <h2>
                                    {" "}
                                    {newsDetails &&
                                      stripHtmlTags(
                                        newsDetails.rashifalName,
                                        30
                                      )}
                                  </h2>
                                  <div className="icon">
                                    <img
                                      alt="मेष"
                                      loading="lazy"
                                      width={100}
                                      height={100}
                                      style={{ color: "transparent" }}
                                      src={getImageUrl(
                                        newsDetails.rashifalImage
                                      )}
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="border-bottom my-2 pb-2 text-center">
                                <b>
                                  {newsDetails &&
                                    stripHtmlTags(
                                      newsDetails.rashifalFristName,
                                      60
                                    )}
                                </b>
                                <h2 className="mt-3">
                                  {" "}
                                  {formatDateInHindi(newsDetails.date)}
                                </h2>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <ul
                                    className="nav nav-pills mb-3"
                                    id="pills-tab"
                                    role="tablist"
                                  >
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link contas active card-text"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                      >
                                        आज का राशिफल
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link card-text"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                      >
                                        साप्ताहिक राशिफल
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link card-text"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                      >
                                        मासिक राशिफल
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link card-text"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact-varsik"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                      >
                                        वार्षिक राशिफल
                                      </button>
                                    </li>
                                  </ul>
                                  <div
                                    className="tab-content"
                                    id="pills-tabContent"
                                  >
                                    <div
                                      className="tab-pane fade show active card-text"
                                      id="pills-home"
                                      role="tabpanel"
                                      aria-labelledby="pills-home-tab"
                                    >
                                      {newsDetails &&
                                        stripHtmlTags(
                                          newsDetails.rashifalToday,
                                          100
                                        )}
                                    </div>
                                    <div
                                      className="tab-pane fade card-text"
                                      id="pills-profile"
                                      role="tabpanel"
                                      aria-labelledby="pills-profile-tab"
                                    >
                                      {newsDetails &&
                                        stripHtmlTags(
                                          newsDetails.rashifalWeek,
                                          100
                                        )}{" "}
                                    </div>
                                    <div
                                      className="tab-pane fade card-text"
                                      id="pills-contact"
                                      role="tabpanel"
                                      aria-labelledby="pills-contact-tab"
                                    >
                                      {newsDetails &&
                                        stripHtmlTags(
                                          newsDetails.rashifalMonth,
                                          100
                                        )}{" "}
                                    </div>
                                    <div
                                      className="tab-pane fade card-text"
                                      id="pills-contact-varsik"
                                      role="tabpanel"
                                      aria-labelledby="pills-contact-tab"
                                    >
                                      {newsDetails &&
                                        stripHtmlTags(
                                          newsDetails.rashifalYear,
                                          100
                                        )}{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                />
                              </div>
                              <div className="modal-body">
                                <section className="rashi">
                                  <div className="astronews">
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
                                            <Link href="#" title="धर्म">
                                              राशिफल
                                            </Link>
                                          </h1>
                                          <Link
                                            href="#"
                                            className="pull-right contas rdmr"
                                          >
                                            {" "}
                                            राशि चुनें{" "}
                                            <i className="icon-arrow" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="block">
                                      {additionalData.rashifalKhabarss
                                        .slice(0, 1)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="मेष"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/aries.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(1, 2)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="वृषभ"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/Taurus.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(2, 3)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="मिथुन"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/gemini.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(3, 4)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="कर्क"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/cancer.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(4, 5)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="सिंह"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/leo.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(5, 6)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="कन्या"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/virgo.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(6, 7)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="तुला"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/libra.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(7, 8)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="वृश्चिक"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/scorpio.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(8, 9)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="धनु"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/Sagittarius.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(9, 10)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="मकर"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/Capricorn.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(10, 11)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="कुंभ"
                                                  loading="lazy"
                                                  width={100}
                                                  height={100}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/aquarius.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                      {additionalData.rashifalKhabarss
                                        .slice(11, 12)
                                        .map((item, index) => (
                                          <div
                                            className="item"
                                            key={item.rashifalId}
                                            data-bs-dismiss="modal"
                                          >
                                            <Link
                                              href={`/RashiDetail/${item.rashifalId}`}
                                              className="astro"
                                            >
                                              <div className="iconrashi">
                                                <img
                                                  alt="मीन"
                                                  loading="lazy"
                                                  width={50}
                                                  height={50}
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src="/design/images/rashifal/pisces.png"
                                                />
                                              </div>
                                              <div className="title">
                                                {stripHtmlTags(
                                                  item.rashifalName,
                                                  10
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ))}
                                    </div>
                                  </div>
                                </section>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <ButtonTags />
                      </div>
                    </div>
                    <div
                      className="ak_column_1 col-md-3 sidebar-column sidebar-column-primary-right sticky-sidebar"
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
                          position: "static",
                          transform: "none",
                          top: 0,
                          left: "914.5px",
                        }}
                      >
                        <div className="sidebar post-sidebar">
                          <div className="container">
                            <RashifalSmall />
                          </div>

                          <div className="container mt-1">
                            <Astrology />
                          </div>
                          <div className="container">
                            <EkaDashi />
                          </div>
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
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RashiDetail;
