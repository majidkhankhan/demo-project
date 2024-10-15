import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Circles } from "react-loader-spinner";
import BigAdd from "./BigAdd";
import OtherStateShare from "./OtherStateShare";
import ButtonTags from "./ButtonTags";
import Sehat from "./Sehat";
import OtherStateEkadashi from "./OtherStateEkadashi";
import OtherStateTranding from "./OtherStateTranding";
import { Helmet } from "react-helmet";

const BASE_URL = "https://api.sadaivsatya.com/";
const image_resize = "https://api.sadaivsatya.com/api/home/resize";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const stripHtmlTags = (html, maxLength) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const strippedText = tempDiv.textContent || tempDiv.innerText || "";
  return truncateText(strippedText, maxLength);
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

function OtherState() {
  const { stateId } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.sadaivsatya.com/api/home/getotherstate/${stateId}`
        );
        console.log("Fetched data:", data);
        setNewsDetails(data);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };

    fetchNewsDetails();
  }, [stateId]);

  if (!newsDetails) {
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

  return (
    <div>
      <Helmet>
        <title>अन्य राज्य | शब्द टुडे | हिंदी न्यूज़</title>
      </Helmet>
      <div className="ak-archive-grid">
        <div className="">
          <div className="">
            <div className="ak-post-wrapper" style={{ transform: "none" }}>
              <div
                className="ak-content-wrap ak-post-wrap ak-layout-style-1 clearfix ak-post-style-7 clearfix"
                style={{ transform: "none" }}
              >
                <div className="ak-container" style={{ transform: "none" }}>
                  <div>
                    <div className="ak-content" style={{ transform: "none" }}>
                      <div className="" style={{ transform: "none" }}>
                        <div className="row" style={{ transform: "none" }}>
                          <div className="ak_column_1 col-md-9 ">
                            <div className="ak-article-inner">
                              <div className="">
                                <div
                                  className="ak-block ak-block-list-4 ak-block-column ak-block-width-2 ak-pagination-container load_more clearfix ak-pagination-loaded"
                                  id="block_6684070e8b33c_3"
                                >
                                  <div className="ak-block-inner clearfix">
                                    {newsDetails.otherKhabars
                                      .slice(0, 1)
                                      .map((news, index) => (
                                        <h1
                                          key={news.mainKhabarId}
                                          className="state"
                                        >
                                          {stripHtmlTags(news.newsState)}
                                        </h1>
                                      ))}
                                    <hr></hr>
                                    <div className="ak-block-posts clearfix">
                                      {newsDetails.otherKhabars.map(
                                        (news, index) => (
                                          <article
                                            key={news.mainKhabarId}
                                            className="bordergap ak-module ak-module-4 ak-column-module clearfix ak-exclusive-post post-227 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-tech-science category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
                                          >
                                            <div className="ak-module-inner clearfix">
                                              <div className="ak-module-featured">
                                                <div className="ak-module-badges" />
                                                <div className="ak-featured-cover">
                                                  <Link
                                                    href={`/OtherStateDetails/${news.mainKhabarId}`}
                                                    className="ak-featured-link"
                                                    rel="bookmark"
                                                    title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
                                                  >
                                                    <div className="ak-featured-thumb lazy-thumb size-715">
                                                      <img
                                                        // width={333}
                                                        // height={222}
                                                        src={
                                                          image_resize +
                                                          "?url=" +
                                                          BASE_URL +
                                                          news.newsImage +
                                                          "&w=333&h=222&outtype=webp"
                                                        }
                                                        className="wp-post-image lazyautosizes lazyloaded"
                                                        alt="Shabd Today"
                                                        decoding="async"
                                                        fetchPriority="high"
                                                        data-src={
                                                          image_resize +
                                                          "?url=" +
                                                          BASE_URL +
                                                          news.newsImage +
                                                          "&w=333&h=222&outtype=webp"
                                                        }
                                                        data-sizes="auto"
                                                        data-srcset={
                                                          image_resize +
                                                          "?url=" +
                                                          BASE_URL +
                                                          news.newsImage +
                                                          "&w=333&h=222&outtype=webp"
                                                        }
                                                        srcSet={
                                                          image_resize +
                                                          "?url=" +
                                                          BASE_URL +
                                                          news.newsImage +
                                                          "&w=333&h=222&outtype=webp"
                                                        }
                                                      />
                                                    </div>
                                                  </Link>
                                                </div>
                                              </div>
                                              <div className="ak-module-details">
                                                <h1 className="ak-module-title">
                                                  <Link
                                                    href={`/OtherStateDetails/${news.mainKhabarId}`}
                                                    rel="bookmark"
                                                    title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
                                                  >
                                                    {stripHtmlTags(
                                                      news.newsHeading,
                                                      50
                                                    )}
                                                  </Link>
                                                </h1>
                                                <div className="ak-module-meta">
                                                  <div className="ak-module-time">
                                                    <Link
                                                      href={`/OtherStateDetails/${news.mainKhabarId}`}
                                                      className="ak-module-meta-published"
                                                    >
                                                      <i className="ak-icon akfi-schedule" />
                                                      {formatDateInHindi(
                                                        news.date
                                                      )}
                                                    </Link>
                                                  </div>
                                                  <div className="ak-module-view-count">
                                                    <span
                                                      style={{
                                                        color: "#d88531",
                                                      }}
                                                    >
                                                      <i className="ak-icon  ak-fi akfi-power" />
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="ak-module-summary">
                                                  <p>
                                                    {stripHtmlTags(
                                                      news.newsDetails,
                                                      60
                                                    )}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </article>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-2 text-center">
                              <OtherStateTranding />
                              <ButtonTags />

                              <div className="pt-2">
                                <BigAdd />
                              </div>
                            </div>
                          </div>
                          <div
                            className="ak_column_ col-md-3 sidebar-column sidebar-column-primary-right sticky-sidebar"
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
                                <OtherStateShare />

                                <Sehat />

                                <OtherStateEkadashi />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherState;
