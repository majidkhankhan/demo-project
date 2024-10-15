"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
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
export default function Whattowatch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/videshs"
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
        <div
          data-vc-full-width="true"
          data-vc-full-width-init="false"
          className="row vc_row dark vc_custom_1664728292054 vc_row-has-fill"
        >
          <div className="ak_vc_container">
            <div className="wpb_column ak_column_3 vc_column_container vc_col-sm-12">
              <div className="ak_vc_wrapper wpb_wrapper">
                <div
                  className="ak-block ak-block-custom-header  ak-block-width-3 clearfix"
                  id="block_65f7f61f36732_16"
                >
                  <div className="ak-block-header ak-block-header-style-5 no-tabs">
                    <div
                      className="main-wdgt container pt-2"
                      id="widget-rs-4937"
                      data-vars-widget-type="home"
                      data-vars-widget-name="astrology"
                      data-vars-orderid={10}
                    >
                      <div className="wdgt-hdng">
                        <h1 className="head">
                          <Link href="#" title="धर्म">
                            विदेश समाचार
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="ak-block-inner clearfix" />
                </div>
                <div
                  className="ak-block ak-block-video-playlist  ak-block-width-3 clearfix  ak-video-playlist-horizontal  dark"
                  id="block_65f7f61f36732_17"
                >
                  <div className="ak-block-inner clearfix">
                    <div className="tab-content" id="nav-tabContent">
                      {posts.videsh.slice(0, 1).map((newsItem) => (
                        <div
                          key={newsItem.id}
                          className="tab-pane fade show active"
                          id="nav-homee"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                          tabIndex="0"
                        >
                          {newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <iframe
                                    style={{ paddingLeft: "0px;" }}
                                    width="100%"
                                    height={600}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      newsItem.newsImage +
                                      "&w=1132&h=400&outtype=webp"
                                    }
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen=""
                                  />
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp style={{ color: "red" }}>
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>
                              </div>
                            </div>
                          )}
                          {!newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <Link
                                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=106&h=90&outtype=webp"
                                      }
                                      className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                      style={{
                                        maxHeight: "400px",
                                        width: "100%",
                                      }}
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        150
                                      )}
                                      data-src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-sizes="auto"
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-expand={700}
                                    />
                                  </Link>
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp
                                    style={{ color: "red", fontSize: "16px" }}
                                  >
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {posts.videsh.slice(1, 2).map((newsItem) => (
                        <div
                          key={newsItem.id}
                          className="tab-pane fade"
                          id="nav-profilee"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                          tabIndex="0"
                        >
                          {newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <iframe
                                    width="100%"
                                    height={600}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      newsItem.newsImage +
                                      "&w=1132&h=400&outtype=webp"
                                    }
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen=""
                                  />
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp style={{ color: "red" }}>
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>
                              </div>
                            </div>
                          )}
                          {!newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <Link
                                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=106&h=90&outtype=webp"
                                      }
                                      className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                      style={{
                                        maxHeight: "400px",
                                        width: "100%",
                                      }}
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        150
                                      )}
                                      data-src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-sizes="auto"
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-expand={700}
                                    />
                                  </Link>
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp
                                    style={{ color: "red", fontSize: "16px" }}
                                  >
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>{" "}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {posts.videsh.slice(2, 3).map((newsItem) => (
                        <div
                          key={newsItem.id}
                          className="tab-pane fade"
                          id="nav-contactt"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                          tabIndex="0"
                        >
                          {newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <iframe
                                    width="100%"
                                    height={600}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      newsItem.newsImage +
                                      "&w=1132&h=400&outtype=webp"
                                    }
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen=""
                                  />
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp style={{ color: "red" }}>
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>
                              </div>
                            </div>
                          )}
                          {!newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <Link
                                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=106&h=90&outtype=webp"
                                      }
                                      className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                      style={{
                                        maxHeight: "400px",
                                        width: "100%",
                                      }}
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        150
                                      )}
                                      data-src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-sizes="auto"
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-expand={700}
                                    />
                                  </Link>
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp
                                    style={{ color: "red", fontSize: "16px" }}
                                  >
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>{" "}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {posts.videsh.slice(3, 4).map((newsItem) => (
                        <div
                          key={newsItem.id}
                          className="tab-pane fade"
                          id="nav-home1"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab1"
                          tabIndex="0"
                        >
                          {newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <iframe
                                    width="100%"
                                    height={600}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      newsItem.newsImage +
                                      "&w=1132&h=400&outtype=webp"
                                    }
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen=""
                                  />
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp style={{ color: "red" }}>
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>
                              </div>
                            </div>
                          )}
                          {!newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <Link
                                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=106&h=90&outtype=webp"
                                      }
                                      className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                      style={{
                                        maxHeight: "400px",
                                        width: "100%",
                                      }}
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        150
                                      )}
                                      data-src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-sizes="auto"
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-expand={700}
                                    />
                                  </Link>
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp
                                    style={{ color: "red", fontSize: "16px" }}
                                  >
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>{" "}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {posts.videsh.slice(4, 5).map((newsItem) => (
                        <div
                          key={newsItem.id}
                          className="tab-pane fade"
                          id="nav-profile1"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab1"
                          tabIndex="0"
                        >
                          {newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <iframe
                                    width="100%"
                                    height={600}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      newsItem.newsImage +
                                      "&w=1132&h=400&outtype=webp"
                                    }
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen=""
                                  />
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp style={{ color: "red" }}>
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>
                              </div>
                            </div>
                          )}
                          {!newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <Link
                                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=106&h=90&outtype=webp"
                                      }
                                      className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                      style={{
                                        maxHeight: "400px",
                                        width: "100%",
                                      }}
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        150
                                      )}
                                      data-src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-sizes="auto"
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-expand={700}
                                    />
                                  </Link>
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp
                                    style={{ color: "red", fontSize: "16px" }}
                                  >
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>{" "}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {posts.videsh.slice(5, 6).map((newsItem) => (
                        <div
                          key={newsItem.id}
                          className="tab-pane fade"
                          id="nav-contact1"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab1"
                          tabIndex="0"
                        >
                          {newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <iframe
                                    width="100%"
                                    height={600}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      newsItem.newsImage +
                                      "&w=1132&h=400&outtype=webp"
                                    }
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen=""
                                  />
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp style={{ color: "red" }}>
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>
                              </div>
                            </div>
                          )}
                          {!newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <Link
                                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=106&h=90&outtype=webp"
                                      }
                                      className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                      style={{
                                        maxHeight: "400px",
                                        width: "100%",
                                      }}
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        150
                                      )}
                                      data-src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-sizes="auto"
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-expand={700}
                                    />
                                  </Link>
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp
                                    style={{ color: "red", fontSize: "16px" }}
                                  >
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>{" "}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {posts.videsh.slice(6, 7).map((newsItem) => (
                        <div
                          key={newsItem.id}
                          className="tab-pane fade"
                          id="nav-homee1"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab2"
                          tabIndex="0"
                        >
                          {newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <iframe
                                    style={{ width: "100%", height: "600" }}
                                    width="100%"
                                    height={600}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      newsItem.newsImage +
                                      "&w=1132&h=400&outtype=webp"
                                    }
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen=""
                                  />
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp style={{ color: "red" }}>
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>
                              </div>
                            </div>
                          )}
                          {!newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <Link
                                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=106&h=90&outtype=webp"
                                      }
                                      className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                      style={{
                                        maxHeight: "400px",
                                        width: "100%",
                                      }}
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        150
                                      )}
                                      data-src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-sizes="auto"
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-expand={700}
                                    />
                                  </Link>
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp
                                    style={{ color: "red", fontSize: "16px" }}
                                  >
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>{" "}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {posts.videsh.slice(7, 8).map((newsItem) => (
                        <div
                          key={newsItem.id}
                          className="tab-pane fade"
                          id="nav-contact1"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab1"
                          tabIndex="0"
                        >
                          {newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <iframe
                                    width="100%"
                                    height={600}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      newsItem.newsImage +
                                      "&w=1132&h=400&outtype=webp"
                                    }
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen=""
                                  />
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp style={{ color: "red" }}>
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>
                              </div>
                            </div>
                          )}
                          {!newsItem.newsImage.endsWith(".mp4") && (
                            <div className="ak-video-playlist-player-wrap">
                              <div className="ak-video-playlist-player-holder">
                                <div className="ak-featured-media">
                                  <Link
                                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=106&h=90&outtype=webp"
                                      }
                                      className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                      style={{
                                        maxHeight: "400px",
                                        width: "100%",
                                      }}
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        150
                                      )}
                                      data-src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-sizes="auto"
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=1132&h=400&outtype=webp"
                                      }
                                      data-expand={700}
                                    />
                                  </Link>
                                </div>
                                <Link
                                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                >
                                  <samp
                                    style={{ color: "red", fontSize: "16px" }}
                                  >
                                    लिंक क्लिक -
                                  </samp>
                                  {stripHtmlTags(newsItem.newsHeading, 150)}
                                </Link>{" "}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="ak-video-playlist-list-wrap">
                      <div className="ak-video-playlist-playing-wrap">
                        <div className="ak-video-playlist-playing-top">
                          <div className="ak-video-playlist-playing-icon">
                            {" "}
                            <i className="fa fa-play" />
                          </div>{" "}
                          <span>Currently Playing</span>
                        </div>
                        <div className="ak-video-playlist-playing-title">
                          <h1>
                            <samp>
                              {" "}
                              <marquee
                                className="marq"
                                behavior="alternate"
                                style={{ width: "100%", margin: 0, padding: 0 }}
                              >
                                <small style={{ marginTop: "5px;" }}>
                                  हिंदी न्यूज समाचारपत्र - ब्रेकिंग न्यूज़ लाइव
                                </small>{" "}
                              </marquee>{" "}
                            </samp>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="ak-video-playlist-list-inner-wrap t1">
                      {" "}
                      <nav>
                        <div
                          className="nav nav-tabss"
                          id="nav-tab"
                          role="tablist"
                          style={{
                            flexWrap: "nowrap",
                            overflowX: "auto",
                            paddingBottom: 30,
                          }}
                        >
                          {posts.videsh.slice(0, 1).map((newsItem) => (
                            <button
                              key={newsItem.id}
                              className="nav-link active"
                              id="nav-home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-homee"
                              type="button"
                              role="tab"
                              aria-controls="nav-homee"
                              aria-selected="true"
                            >
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={222}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video
                                          controls
                                          autoPlay
                                          className="d-block w-100"
                                          style={{ width: "120", height: "86" }}
                                        >
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=106&h=90&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h3
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "9px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        <samp>
                                          {stripHtmlTags(
                                            newsItem.newsHeading,
                                            50
                                          )}
                                        </samp>
                                      </h3>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={222}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={120}
                                          height={86}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            150
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "12px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </button>
                          ))}
                          {posts.videsh.slice(1, 2).map((newsItem) => (
                            <button

                              key={newsItem.id}
                              className="nav-link"
                              id="nav-profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profilee"
                              type="button"
                              role="tab"
                              aria-controls="nav-profilee"
                              aria-selected="false"
                            >
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={235}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video
                                          controls
                                          autoPlay
                                          className="d-block w-100"
                                          style={{ width: "120", height: "86" }}
                                        >
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=106&h=90&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "9px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={235}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={120}
                                          height={86}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            150
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "12px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </button>
                          ))}
                          {posts.videsh.slice(2, 3).map((newsItem) => (
                            <button

                              key={newsItem.id}
                              className="nav-link"
                              id="nav-contact-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-contactt"
                              type="button"
                              role="tab"
                              aria-controls="nav-contactt"
                              aria-selected="false"
                            >
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={236}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video
                                          controls
                                          autoPlay
                                          className="d-block w-100"
                                          style={{ width: "120", height: "86" }}
                                        >
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=106&h=90&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "9px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={236}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={120}
                                          height={86}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            150
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "12px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </button>
                          ))}
                          {posts.videsh.slice(3, 4).map((newsItem) => (
                            <button

                              key={newsItem.id}
                              className="nav-link "
                              id="nav-home-tab1"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home1"
                              type="button"
                              role="tab"
                              aria-controls="nav-home1"
                              aria-selected="true"
                            >
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={222}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video
                                          controls
                                          autoPlay
                                          className="d-block w-100"
                                          style={{ width: "120", height: "86" }}
                                        >
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=106&h=90&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "9px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={222}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={120}
                                          height={86}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            150
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "12px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </button>
                          ))}
                          {posts.videsh.slice(4, 5).map((newsItem) => (
                            <button

                              key={newsItem.id}
                              className="nav-link"
                              id="nav-profile-tab1"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile1"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile1"
                              aria-selected="false"
                            >
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={235}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video
                                          controls
                                          autoPlay
                                          className="d-block w-100"
                                          style={{ width: "120", height: "86" }}
                                        >
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=106&h=90&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "9px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={235}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={120}
                                          height={86}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            150
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "12px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </button>
                          ))}
                          {posts.videsh.slice(5, 6).map((newsItem) => (
                            <button

                              key={newsItem.id}
                              className="nav-link"
                              id="nav-contact-tab1"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-contact1"
                              type="button"
                              role="tab"
                              aria-controls="nav-contact1"
                              aria-selected="false"
                            >
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={236}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video
                                          controls
                                          autoPlay
                                          className="d-block w-100"
                                          style={{ width: "120", height: "86" }}
                                        >
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=106&h=90&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "9px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={236}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={120}
                                          height={86}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            150
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "12px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </button>
                          ))}
                          {posts.videsh.slice(6, 7).map((newsItem) => (
                            <button

                              key={newsItem.id}
                              className="nav-link"
                              id="nav-home-tab2"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-homee1"
                              type="button"
                              role="tab"
                              aria-controls="nav-homee1"
                              aria-selected="true"
                            >
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={222}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video
                                          controls
                                          autoPlay
                                          className="d-block w-100"
                                          style={{ width: "120", height: "86" }}
                                        >
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=106&h=90&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "9px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={222}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={120}
                                          height={86}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            150
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "12px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </button>
                          ))}
                          {posts.videsh.slice(7, 8).map((newsItem) => (
                            <button

                              key={newsItem.id}
                              className="nav-link"
                              id="nav-contact-tab1"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-contact1"
                              type="button"
                              role="tab"
                              aria-controls="nav-contact1"
                              aria-selected="false"
                            >
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={236}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video
                                          controls
                                          autoPlay
                                          className="d-block w-100"
                                          style={{ width: "120", height: "86" }}
                                        >
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=106&h=90&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "9px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div
                                  className="ak-video-playlist-item"
                                  data-id={236}
                                >
                                  <div className="ak-video-playlist-item-wrap">
                                    <div className="ak-video-playlist-item-thumb">
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={120}
                                          height={86}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            150
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=106&h=90&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </div>
                                    <div className="ak-video-playlist-item-desc">
                                      <h1
                                        className="ak-video-playlist-item-title"
                                        style={{
                                          textAlign: "left",
                                          fontSize: "12px",
                                          maxHeight: "80px",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </h1>{" "}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </nav>
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
