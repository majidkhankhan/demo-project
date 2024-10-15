"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import BigAdd from "./BigAdd";
import SmallAdd from "./SmallAdd";
import AnyaKhel from "./AnyaKhel";
import Football from "./Football";
import Hockey from "./Hockey";
import { Circles } from "react-loader-spinner";
import TajaKhel1 from "./TajaKhel1";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

function Khels() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/khelKhabars"
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
      <HelmetProvider>
        <Helmet>
          <title>खेल | शब्द टुडे | हिंदी न्यूज़</title>
          <link rel="canonical" href="https://www.sadaivsatya.com/Khels" />
        </Helmet>
      </HelmetProvider>

      <div className="ak-archive-grid">
        <div className="">
          <div className="">
            <div className="ak-post-wrapper" style={{ transform: "none" }}>
              <div
                className="ak-content-wrap ak-post-wrap ak-layout-style-1 clearfix ak-post-style-7 clearfix"
                style={{ transform: "none" }}
              >
                <div className="ak-container" style={{ transform: "none" }}>
                  <div className="ak-content" style={{ transform: "none" }}>
                    <div style={{ transform: "none" }}>
                      <div className="row" style={{ transform: "none" }}>
                        <div className="ak_column_1 col-md-9">
                          <div className="ak-article-inner">
                            <div className="">
                              <div className="row">
                                <div className="col-12 pb-1">
                                  <section className="row">
                                    <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                                      <div
                                        id="featured"
                                        className="carousel slide carousel"
                                        data-ride="carousel"
                                      >
                                        <ol className="">
                                          <li
                                            data-target="#featured"
                                            data-slide-to={0}
                                            className="active"
                                          />
                                          <li
                                            data-target="#featured"
                                            data-slide-to={1}
                                          />
                                          <li
                                            data-target="#featured"
                                            data-slide-to={2}
                                          />
                                          <li
                                            data-target="#featured"
                                            data-slide-to={3}
                                          />
                                        </ol>
                                        <div className="carousel-inner">
                                          {posts.khelKhabars
                                            .slice(0, 1)
                                            .map((newsItem) => (
                                              <div
                                                key={newsItem.mainKhabarId}
                                                className="carousel-item active"
                                              >
                                                <div className="card border-0 rounded-0 text-light overflow zoom">
                                                  <div className="position-relative">
                                                    <div className="ratio_left-cover-1 image-wrapper">
                                                      <Link
                                                        href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                        aria-label={stripHtmlTags(
                                                          newsItem.newsHeading,
                                                          20
                                                        )}
                                                      >
                                                        <img
                                                          className="img-fluid w-100"
                                                          width={476}
                                                          height={405}
                                                          src={
                                                            image_resize +
                                                            "?url=" +
                                                            baseUrl +
                                                            newsItem.newsImage +
                                                            "&w=336&h=286&outtype=webp"
                                                          }
                                                          alt="Bootstrap news template"
                                                        />
                                                      </Link>
                                                    </div>
                                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                      <Link
                                                        href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                        aria-label={stripHtmlTags(
                                                          newsItem.newsHeading,
                                                          20
                                                        )}
                                                      >
                                                        <h1 className="h3 post-title text-white my-1">
                                                          {stripHtmlTags(
                                                            newsItem.newsHeading,
                                                            60
                                                          )}
                                                        </h1>
                                                      </Link>
                                                      <div className="news-meta">
                                                        <span className="news-date">
                                                          {formatDateInHindi(
                                                            newsItem.date
                                                          )}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                                      <div className="row">
                                        {posts.khelKhabars
                                          .slice(1, 2)
                                          .map((newsItem) => (
                                            <div
                                              key={newsItem.mainKhabarId}
                                              className="col-6 pb-1 pt-0 pr-1"
                                            >
                                              <div className="card border-0 rounded-0 text-white overflow zoom">
                                                <div className="position-relative">
                                                  <div className="ratio_right-cover-2 image-wrapper">
                                                    <Link
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    >
                                                      <img
                                                        className="img-fluid"
                                                        width={229}
                                                        height={194}
                                                        src={
                                                          image_resize +
                                                          "?url=" +
                                                          baseUrl +
                                                          newsItem.newsImage +
                                                          "&w=229&h=194&outtype=webp"
                                                        }
                                                        alt="simple blog template bootstrap"
                                                      />
                                                    </Link>
                                                  </div>
                                                  <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                    <Link
                                                      className="p-1 badge badge-primary rounded-0"
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    ></Link>
                                                    <Link
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                    >
                                                      <h1 className="h5 text-white my-1">
                                                        {stripHtmlTags(
                                                          newsItem.newsHeading,
                                                          30
                                                        )}
                                                      </h1>
                                                    </Link>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        {posts.khelKhabars
                                          .slice(2, 3)
                                          .map((newsItem) => (
                                            <div
                                              key={newsItem.mainKhabarId}
                                              className="col-6 pb-1 pl-1 pt-0"
                                            >
                                              <div className="card border-0 rounded-0 text-white overflow zoom">
                                                <div className="position-relative">
                                                  <div className="ratio_right-cover-2 image-wrapper">
                                                    <Link
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    >
                                                      <img
                                                        className="img-fluid"
                                                        width={229}
                                                        height={194}
                                                        src={
                                                          image_resize +
                                                          "?url=" +
                                                          baseUrl +
                                                          newsItem.newsImage +
                                                          "&w=229&h=194&outtype=webp"
                                                        }
                                                        alt="bootstrap templates for blog"
                                                      />
                                                    </Link>
                                                  </div>
                                                  <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                    <Link
                                                      className="p-1 badge badge-primary rounded-0"
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    ></Link>
                                                    <Link
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    >
                                                      <h1 className="h5 text-white my-1">
                                                        {stripHtmlTags(
                                                          newsItem.newsHeading,
                                                          30
                                                        )}
                                                      </h1>
                                                    </Link>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        {posts.khelKhabars
                                          .slice(3, 4)
                                          .map((newsItem) => (
                                            <div
                                              key={newsItem.mainKhabarId}
                                              className="col-6 pb-1 pr-1 pt-3"
                                            >
                                              <div className="card border-0 rounded-0 text-white overflow zoom">
                                                <div className="position-relative">
                                                  <div className="ratio_right-cover-2 image-wrapper">
                                                    <Link
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    >
                                                      <img
                                                        className="img-fluid"
                                                        width={229}
                                                        height={194}
                                                        src={
                                                          image_resize +
                                                          "?url=" +
                                                          baseUrl +
                                                          newsItem.newsImage +
                                                          "&w=229&h=194&outtype=webp"
                                                        }
                                                        alt="bootstrap blog wordpress theme"
                                                      />
                                                    </Link>
                                                  </div>
                                                  <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                    <Link
                                                      className="p-1 badge badge-primary rounded-0"
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    ></Link>
                                                    <Link
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    >
                                                      <h1 className="h5 text-white my-1">
                                                        {stripHtmlTags(
                                                          newsItem.newsHeading,
                                                          30
                                                        )}
                                                      </h1>
                                                    </Link>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        {posts.khelKhabars
                                          .slice(4, 5)
                                          .map((newsItem) => (
                                            <div
                                              key={newsItem.mainKhabarId}
                                              className="col-6 pb-1 pl-1 pt-3"
                                            >
                                              <div className="card border-0 rounded-0 text-white overflow zoom">
                                                <div className="position-relative">
                                                  <div className="ratio_right-cover-2 image-wrapper">
                                                    <Link
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    >
                                                      <img
                                                        className="img-fluid"
                                                        width={229}
                                                        height={194}
                                                        src={
                                                          image_resize +
                                                          "?url=" +
                                                          baseUrl +
                                                          newsItem.newsImage +
                                                          "&w=229&h=194&outtype=webp"
                                                        }
                                                        alt="blog website templates bootstrap"
                                                      />
                                                    </Link>
                                                  </div>
                                                  <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                    <Link
                                                      className="p-1 badge badge-primary rounded-0"
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    ></Link>
                                                    <Link
                                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                      aria-label={stripHtmlTags(
                                                        newsItem.newsHeading,
                                                        20
                                                      )}
                                                    >
                                                      <h1 className="h5 text-white my-1">
                                                        {stripHtmlTags(
                                                          newsItem.newsHeading,
                                                          30
                                                        )}
                                                      </h1>
                                                    </Link>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>

                              <div className="row vc_row">
                                <div className="ak_vc_container">
                                  <div className="wpb_column ak_column_3 vc_column_container vc_col-sm-12">
                                    <div className="ak_vc_wrapper wpb_wrapper">
                                      <div
                                        className="ak-block ak-block-list-2-wide ak-block-column ak-block-module-inner-boxed ak-block-inner-border-round ak-block-module-thumb-round ak-block-width-4 clearfix"
                                        id="block_65f7f61f36732_2"
                                      >
                                        <div className="ak-block-inner clearfix">
                                          <div className="ak-block-posts clearfix">
                                            {posts.khelKhabars
                                              .slice(5, 13)
                                              .map((newsItem) => (
                                                <article
                                                  key={newsItem.mainKhabarId}
                                                  className="ak-module ak-module-2-wide ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                                                >
                                                  <div className="ak-module-inner clearfix">
                                                    <div className="ak-module-featured">
                                                      <div className="ak-module-badges" />
                                                      <div className="ak-featured-cover">
                                                        <Link
                                                          href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                          className="ak-featured-link"
                                                          rel="bookmark"
                                                          aria-label={stripHtmlTags(
                                                            newsItem.newsHeading,
                                                            20
                                                          )}
                                                          title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                                                        >
                                                          <div className="ak-featured-thumb lazy-thumb size-500">
                                                            <img
                                                              fetchPriority="high"
                                                              decoding="async"
                                                              width={360}
                                                              height={180}
                                                              src={
                                                                image_resize +
                                                                "?url=" +
                                                                baseUrl +
                                                                newsItem.newsImage +
                                                                "&w=241&h=120&outtype=webp"
                                                              }
                                                              className="attachment-newsy_360x180 lazy size-newsy_360x180 lazyload wp-post-image"
                                                              alt=""
                                                              data-src={
                                                                image_resize +
                                                                "?url=" +
                                                                baseUrl +
                                                                newsItem.newsImage +
                                                                "&w=241&h=120&outtype=webp"
                                                              }
                                                              data-sizes="auto"
                                                              data-srcset={
                                                                image_resize +
                                                                "?url=" +
                                                                baseUrl +
                                                                newsItem.newsImage +
                                                                "&w=241&h=120&outtype=webp"
                                                              }
                                                              data-expand={700}
                                                            />
                                                          </div>
                                                        </Link>
                                                      </div>
                                                      <div className="ak-module-terms badge"></div>
                                                    </div>
                                                    <div className="ak-module-details">
                                                      <h1 className="ak-module-title">
                                                        <Link
                                                          href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                                          rel="bookmark"
                                                          aria-label={stripHtmlTags(
                                                            newsItem.newsHeading,
                                                            20
                                                          )}
                                                          title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                                                        >
                                                          {stripHtmlTags(
                                                            newsItem.newsHeading,
                                                            40
                                                          )}
                                                        </Link>
                                                      </h1>
                                                    </div>
                                                  </div>
                                                </article>
                                              ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <TajaKhel1 />
                            </div>
                          </div>

                          <div className="mt-2">
                            <AnyaKhel />

                            <div className="pt-4">
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
                              <Football />

                              <SmallAdd />

                              <Hockey />
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
  );
}

export default Khels;
