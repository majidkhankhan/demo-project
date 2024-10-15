"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
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

export default function AroundTheWorld() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/pliticsKhabars"
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
    const url = `${window.location.origin}/MadhyaPradeshDetailsD/${mainKhabarId}`;
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
      <div
        className="ak-block ak-block-3  ak-block-column ak-block-module-thumb-round ak-block-inner-boxed ak-block-width-1 clearfix"
        id="block_65f7f61f36732_9"
      >
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
                पॉलिटिक्स
              </Link>
            </h1>
          </div>
        </div>

        <div className="mt-2 ak-block-inner aroundtheworld clearfix">
          <div className="ak-block-posts clearfix">
            {posts.pliticsKhabars.slice(0, 1).map((newsItem) => (
              <article
                key={newsItem.mainKhabarId}
                className="ak-module ak-module-3 ak-column-module clearfix ak-exclusive-post post-224 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-tech-science category-us-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
              >
                {newsItem.newsImage.endsWith(".mp4") && (
                  <div className="ak-module-inner clearfix">
                    <div className="ak-module-grid-wrap">
                      <div className="ak-module-featured">
                        <div className="ak-module-badges" />
                        <div className="ak-module-video-duration">
                          <div className="active">Watch</div>
                        </div>
                        <span className="ak-module-format-icon format-video">
                          <i className="ak-icon fa fa-play" />
                        </span>
                        <div className="ak-featured-cover">
                          <Link
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                            className="ak-featured-link"
                            rel="bookmark"
                            title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                          >
                            <div className="ak-featured-thumb lazy-thumb">
                              <video
                                controls
                                autoPlay
                                style={{ height: "200", width: "400px" }}
                              >
                                <source
                                  src={
                                    image_resize +
                                    "?url=" +
                                    baseUrl +
                                    newsItem.newsImage +
                                    "&w=374&h=319&outtype=webp"
                                  }
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </Link>
                        </div>
                        <div className="ak-module-terms badge">
                          <Link
                            className="term-49"
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                          >
                            {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                          </Link>
                        </div>
                      </div>
                      <div className="ak-module-details">
                        <h1
                          className="ak-module-title"
                          style={{ fontSize: "16px" }}
                        >
                          <Link
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                            rel="bookmark"
                            title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                          >
                            {stripHtmlTags(newsItem.newsHeading, 80)}
                          </Link>
                        </h1>
                        <div className="ak-module-meta">
                          <div className="ak-module-time">
                            <Link
                              href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                              className="ak-module-meta-published"
                            >
                              <i className="ak-icon akfi-schedule" />
                              {formatDateInHindi(newsItem.date)}
                            </Link>
                          </div>
                          <div className="ak-module-view-count">
                            <span style={{ color: "#d88531" }}>
                              <i className="ak-icon  ak-fi akfi-power" />
                              <span className="count">
                                {newsItem.viewCount}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {!newsItem.newsImage.endsWith(".mp4") && (
                  <div className="ak-module-inner clearfix">
                    <div className="ak-module-grid-wrap">
                      <div className="ak-module-featured">
                        <div className="ak-module-badges">
                          <Link
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                            title="LIFE"
                          >
                            <span className="ak-badge-icon ak-badge-type-text term-49">
                              <span className="ak-badge-icon-text">न्यूज़</span>
                            </span>
                          </Link>
                        </div>
                        <div className="ak-featured-cover">
                          <Link
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                            className="ak-featured-link"
                            rel="bookmark"
                            title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                          >
                            <div className="ak-featured-thumb lazy-thumb size-715">
                              <img
                                loading="eager "
                                decoding="async"
                                width={350}
                                height={250}
                                src={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=374&h=319&outtype=webp"
                                }
                                className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                alt={stripHtmlTags(newsItem.newsHeading, 80)}
                                data-src={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=374&h=319&outtype=webp"
                                }
                                data-sizes="auto"
                                data-srcset={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=374&h=319&outtype=webp"
                                }
                                data-expand={700}
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="ak-module-terms badge">
                          <Link
                            className="term-49"
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                          >
                            {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                          </Link>
                        </div>
                      </div>
                      <div className="ak-module-details">
                        <h1
                          className="ak-module-title"
                          style={{ fontSize: "16px" }}
                        >
                          <Link
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                            rel="bookmark"
                            title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                          >
                            {stripHtmlTags(newsItem.newsHeading, 80)}
                          </Link>
                        </h1>
                        <div className="ak-module-meta">
                          <div className="ak-module-time">
                            <Link
                              href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                              className="ak-module-meta-published"
                            >
                              <i className="ak-icon akfi-schedule" />
                              {formatDateInHindi(newsItem.date)}
                            </Link>
                          </div>
                          <div className="ak-module-view-count">
                            <span style={{ color: "#d88531" }}>
                              <i className="ak-icon  ak-fi akfi-power" />
                              <span className="count">
                                {newsItem.viewCount}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}

            {posts.pliticsKhabars.slice(1, 6).map((newsItem) => {
              const shareLinks = generateShareLinks(
                newsItem.mainKhabarId,
                newsItem.newsHeading
              );
              return (
                <article
                  key={newsItem.mainKhabarId}
                  className="bordergap mb-2 ak-module ak-module-1-small ak-column-module ak-module-meta-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                >
                  {newsItem.newsImage.endsWith(".mp4") && (
                    <div className="ak-module-inner clearfix">
                      <div className="ak-module-featured">
                        <div className="ak-module-badges" />
                        <div className="ak-module-video-duration">
                          <div className="active">Watch</div>
                        </div>
                        <span className="ak-module-format-icon format-video">
                          <i className="ak-icon fa fa-play" />
                        </span>
                        <div className="ak-featured-cover">
                          <Link
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                            className="ak-featured-link"
                            rel="bookmark"
                            title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                          >
                            <div className="ak-featured-thumb lazy-thumb">
                              <video
                                controls
                                autoPlay
                                style={{ height: "86", width: "120px" }}
                              >
                                <source
                                  src={
                                    image_resize +
                                    "?url=" +
                                    baseUrl +
                                    newsItem.newsImage +
                                    "&w=120&h=102&outtype=webp"
                                  }
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="ak-module-details">
                        <h1
                          className="ak-module-title"
                          style={{ fontSize: "16px" }}
                        >
                          <Link
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                            rel="bookmark"
                            title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                          >
                            {stripHtmlTags(newsItem.newsHeading, 80)}
                          </Link>
                        </h1>
                      </div>
                    </div>
                  )}
                  {!newsItem.newsImage.endsWith(".mp4") && (
                    <div className="ak-module-inner clearfix">
                      <div className="ak-module-featured">
                        <div className="ak-featured-cover">
                          <Link
                            href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                            className="ak-featured-link"
                            rel="bookmark"
                            title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                          >
                            <div className="ak-featured-thumb lazy-thumb size-715">
                              <img
                                loading="eager "
                                decoding="async"
                                width={120}
                                height={86}
                                src={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=120&h=102&outtype=webp"
                                }
                                className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                                alt={stripHtmlTags(newsItem.newsHeading, 80)}
                                data-src={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=120&h=102&outtype=webp"
                                }
                                data-sizes="auto"
                                data-srcset={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=120&h=102&outtype=webp"
                                }
                                data-expand={700}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="ak-module-details">
                        <h1 className="ak-module-title">
                          <Link
                            href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                            rel="bookmark"
                            aria-label=" खबरें और भी"
                            title="4 Ways To Tell If There Are Hidden Cameras In Your Airbnb"
                          >
                            {stripHtmlTags(newsItem.newsHeading, 60)}
                          </Link>
                        </h1>
                        <div className="ak-module-meta">
                          <div className="ak-module-time">
                            <Link
                              href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                              aria-label=" खबरें और भी"
                              className="ak-module-meta-published"
                            >
                              <i className="ak-icon akfi-schedule" />
                              {formatDateInHindi(newsItem.date)}
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link
                              href={shareLinks.facebook}
                              target="_blank"
                              aria-label="facebook"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </Link>
                            &nbsp;&nbsp; &nbsp;&nbsp;
                            <Link
                              href={shareLinks.whatsapp}
                              target="_blank"
                              aria-label="whatsapp"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="fa fa-whatsapp"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
