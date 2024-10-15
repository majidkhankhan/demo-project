import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import BigAdd from "./BigAdd";
import ButtonTags from "./ButtonTags";
import SocialMediaShare from "./SocialMediaShare";
import TajaKhabar2 from "./TajaKhabar2";
import TajaKhabar3 from "./TajaKhabar3";
import TajaKhabar4 from "./TajaKhabar4";
import TajaKhabar5 from "./TajaKhabar5";
import FakeKhabre from "./FakeKhabre";
import { Circles } from "react-loader-spinner";
import DOMPurify from "dompurify"; // For sanitizing HTML content

const BASE_URL = "https://api.sadaivsatya.com/";
const image_resize = "https://api.sadaivsatya.com/api/home/resize";

function TajaKhabarDetailsNews() {
  const { mainKhabarId } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.sadaivsatya.com/api/home/getAllDetails/${mainKhabarId}`
        );
        console.log("Fetched data:", data); // Log the fetched data
        setNewsDetails(data);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };

    fetchNewsDetails();
  }, [mainKhabarId]);

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

  const renderHtmlContent = (html) => {
    const sanitizedHtml = DOMPurify.sanitize(html);
    return { __html: sanitizedHtml };
  };

  return (
    <div>
      <div className="ak-post-wrapper" style={{ transform: "none" }}>
        <div
          className="ak-content-wrap ak-post-wrap ak-layout-style-1 clearfix ak-post-style-7 clearfix"
          style={{ transform: "none" }}
        >
          <div className="ak-container" style={{ transform: "none" }}>
            <div className="ak-content" style={{ transform: "none" }}>
              <div className="containercustome" style={{ transform: "none" }}>
                <div className="mt-2">
                  <BigAdd />
                </div>
                <div
                  className="row grid-container"
                  style={{ transform: "none" }}
                >
                  <div
                    className="grid-item ak_column_1 col-md-3 sidebar-column sidebar-column-primary sticky-sidebar"
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
                        <TajaKhabar3 />
                        <FakeKhabre />
                        <SocialMediaShare />
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

                  <div className="grid-item ak_column_2 col-md-6">
                    <header className="entry-header ak-post-header">
                      <div className="ak-post-badges" />

                      <h1 className="ak-post-title mt-2">
                        {newsDetails.mainTazaKhabars &&
                          stripHtmlTags(
                            newsDetails.mainTazaKhabars.newsHeading,
                            60
                          )}
                      </h1>
                      <div className="ak-post-summary mb-2">
                        {newsDetails.mainTazaKhabars &&
                          stripHtmlTags(
                            newsDetails.mainTazaKhabars.newsDetails,
                            150
                          )}
                      </div>
                    </header>
                    <div className="ak-article-inner">
                      <div className="ak-article-inner">
                        <div className="ak-post-featured">
                          <div className="ak-featured-cover">
                            <Link
                              href="wp-content/uploads/sites/26/2022/10/post-18.jpg"
                              aria-label="whatsapp"
                            >
                              <div
                                className="ak-featured-thumb lazy-thumb size-auto"
                                style={{ paddingBottom: "50%" }}
                              >
                                <img
                                  width={750}
                                  height={375}
                                  src={
                                    image_resize +
                                    "?url=" +
                                    BASE_URL +
                                    newsDetails.mainTazaKhabars.newsImage +
                                    "&w=770&h=385&outtype=webp"
                                  }
                                  className="attachment-newsy_750x375 size-newsy_750x375 wp-post-image lazyautosizes lazyloaded"
                                  alt="taza Khabar"
                                  decoding="async"
                                  fetchPriority="high"
                                  data-src={
                                    image_resize +
                                    "?url=" +
                                    BASE_URL +
                                    newsDetails.mainTazaKhabars.newsImage +
                                    "&w=770&h=385&outtype=webp"
                                  }
                                  data-sizes="auto"
                                  data-srcset={
                                    image_resize +
                                    "?url=" +
                                    BASE_URL +
                                    newsDetails.mainTazaKhabars.newsImage +
                                    "&w=770&h=385&outtype=webp"
                                  }
                                  data-expand={700}
                                  sizes="750px"
                                  srcSet={
                                    image_resize +
                                    "?url=" +
                                    BASE_URL +
                                    newsDetails.mainTazaKhabars.newsImage +
                                    "&w=770&h=385&outtype=webp"
                                  }
                                />
                              </div>
                            </Link>
                          </div>
                        </div>

                        <div className="ak-post-content">
                          <p
                            className="has-drop-cap"
                            id="has-drop-cap"
                            dangerouslySetInnerHTML={renderHtmlContent(
                              newsDetails.mainTazaKhabars.newsDetails
                            )}
                          />
                        </div>
                        <ButtonTags />
                      </div>
                    </div>
                  </div>
                  <div
                    className="grid-item ak_column_1 col-md-3 sidebar-column sidebar-column-primary-right sticky-sidebar"
                    style={{
                      position: "relative",
                      overflow: "visible",
                      boxSizing: "border-box",
                      minHeight: 1,
                    }}
                  >
                    <div
                      className="stickybar"
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
                        <TajaKhabar2 />
                        <TajaKhabar5 />
                        {/* <SmallAdd /> */}
                        <div className="mt-2">
                          <TajaKhabar4 />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default TajaKhabarDetailsNews;