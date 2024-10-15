import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import BigAdd from "./BigAdd";
import ButtonTags from "./ButtonTags";
import SocialMediaShare from "./SocialMediaShare";
import { Circles } from "react-loader-spinner";
import SliderDetails1 from "./SliderDetails1";
import SliderDetails2 from "./SliderDetails2";
import SliderDetails3 from "./SliderDetails3";
import SliderDetails4 from "./SliderDetails4";
import DOMPurify from "dompurify"; // For sanitizing HTML content

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
function SliderDetails() {
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
  const BASE_URL = "https://api.sadaivsatya.com/";
  const image_resize = "https://api.sadaivsatya.com/api/home/resize";

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
            <article
              id="post-224"
              className="post-224 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-featured category-tech-science category-us-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article ak-article clearfix autoload-initted autoload-loaded"
              data-type="post"
              data-id={224}
              data-title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
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
                      className="ak_column_1 col-md-3 sidebar-column sidebar-column-primary sticky-sidebar gayab"
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
                          <SliderDetails1 />

                          <SliderDetails2 />
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

                    <div className="ak_column_2 col-md-6 content-column">
                      <header className="entry-header ak-post-header">
                        <div className="ak-post-badges" />

                        <h1 className="ak-post-title mt-2">
                          {newsDetails.mainTazaKhabars &&
                            stripHtmlTags(
                              newsDetails.mainTazaKhabars.newsHeading,
                              60
                            )}
                        </h1>
                      </header>
                      <div className="ak-article-inner">
                        <div className="ak-article-inner">
                          <div className="ak-post-featured">
                            <div className="ak-featured-cover">
                              <Link
                                href="wp-content/uploads/sites/26/2022/10/post-18.jpg"
                                aria-label="Slider"
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
                                    alt=""
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
                      className="ak_column_1 col-md-3 sidebar-column sidebar-column-primary-right sticky-sidebar"
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
                        <div className="sidebar post-sidebar container">
                          <SliderDetails3 />

                          <div className="mt-2">
                            <SliderDetails4 />
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

export default SliderDetails;
