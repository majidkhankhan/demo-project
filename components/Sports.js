"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { hi } from "date-fns/locale";
import Link from "next/link";
import { Circles } from "react-loader-spinner";
import { img } from "react-lazy-load-image-component";
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

export default function Sports() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/cricket"
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
      <div className="ak-archive-grid">
        <div className="container">
          <div className="ak-block-header ak-block-header-style-5 no-tabs">
            <div
              className="main-wdgt "
              id="widget-rs-4937"
              data-vars-widget-type="home"
              data-vars-widget-name="astrology"
              data-vars-orderid={10}
            >
              <div className="wdgt-hdng">
                <h1 className="head">
                  <Link href="#" title="धर्म">
                    क्रिकेट
                  </Link>
                </h1>
              </div>
            </div>
          </div>

          <div
            className="ak-block ak-block-grid ak-block-grid-2  ak-block-width-3 clearfix tg-gradient tg-focus"
            id="block_6634b19b40b49_2"
          >
            <div className="ak-block-inner clearfix">
              <div className="ak-block-posts clearfix">
                {posts.cricket.slice(0, 1).map((newsItem) => (
                  <article
                    key={newsItem.mainKhabarId}
                    className="ak-module ak-module-grid ak-module-grid-big ak-block-item-1 clearfix ak-exclusive-post post-224 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-tech-science category-us-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
                  >
                    <div className="ak-module-inner clearfix">
                      <div className="ak-module-grid-wrap">
                        <div className="ak-module-featured">
                          <div className="ak-module-badges">
                            <Link
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                              title="LIFE"
                            >
                              <span className="ak-badge-icon ak-badge-type-text term-49">
                                <span className="ak-badge-icon-text">
                                  स्पोर्ट्स
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="ak-featured-cover">
                            <Link
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                              className="ak-featured-link"
                              rel="bookmark"
                              title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                            >
                              <div className="ak-featured-thumb lazy-thumb background-thumb  size-715">
                                <div
                                  className=" lazyloaded"
                                  title=""
                                  loading="lazy"
                                  data-bgset={
                                    image_resize +
                                    "?url=" +
                                    baseUrl +
                                    newsItem.newsImage +
                                    "&w=585&h=495&outtype=webp"
                                  }
                                  style={{
                                    backgroundImage: `url(${image_resize}?url=${baseUrl}${newsItem.newsImage}&w=585&h=495&outtype=webp)`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <picture style={{ display: "none" }}>
                                    <source
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=585&h=495&outtype=webp"
                                      }
                                      sizes="578px"
                                      srcSet={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=585&h=495&outtype=webp"
                                      }
                                    />
                                    <img
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        40
                                      )}
                                      className="lazyautosizes ls-is-cached"
                                      loading="lazy"
                                      data-sizes="auto"
                                      data-parent-fit="cover"
                                      sizes="578px"
                                    />
                                  </picture>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="ak-module-details">
                          <div className="ak-module-terms inline_badge">
                            <Link
                              className="term-49"
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                            >
                              {stripHtmlTags(newsItem.newsTag, 10)}
                            </Link>
                          </div>
                          <h1 className="ak-module-title">
                            <Link
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                              rel="bookmark"
                              title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                            >
                              {stripHtmlTags(newsItem.newsHeading, 40)}
                            </Link>
                          </h1>
                          <div className="ak-module-meta">
                            <div className="ak-module-author">
                              स्पोर्ट्स-
                              <Link
                                href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                className="ak-module-author-name"
                              >
                                {stripHtmlTags(newsItem.newsTag, 20)}
                              </Link>
                            </div>
                            <div className="ak-module-time">
                              <Link
                                href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                className="ak-module-meta-published"
                              >
                                <i className="ak-icon akfi-schedule" />
                                {formatDateInHindi(newsItem.date)}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}

                {posts.cricket.slice(1, 2).map((newsItem) => (
                  <article
                    key={newsItem.mainKhabarId}
                    className="ak-module ak-module-grid ak-module-grid-wide-big ak-block-item-2 clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                  >
                    <div className="ak-module-inner clearfix">
                      <div className="ak-module-grid-wrap">
                        <div className="ak-module-featured">
                          <div className="ak-module-badges" />
                          <div className="ak-featured-cover">
                            <Link
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                              className="ak-featured-link"
                              rel="bookmark"
                              title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                            >
                              <div className="ak-featured-thumb lazy-thumb background-thumb  size-500">
                                <div
                                  className=" lazyloaded"
                                  title=""
                                  loading="lazy"
                                  data-bgset={`${baseUrl}${newsItem.newsImage}`}
                                  style={{
                                    backgroundImage: `url(${image_resize}?url=${baseUrl}${newsItem.newsImage}&w=585&h=495&outtype=webp)`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <picture style={{ display: "none" }}>
                                    <source
                                      data-srcset={`${baseUrl}${newsItem.newsImage}`}
                                      sizes="578px"
                                      srcSet={`${baseUrl}${newsItem.newsImage}`}
                                    />
                                    <img
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        40
                                      )}
                                      className="lazyautosizes"
                                      loading="lazy"
                                      data-sizes="auto"
                                      data-parent-fit="cover"
                                      sizes="578px"
                                    />
                                  </picture>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="ak-module-details">
                          <div className="ak-module-terms inline_badge">
                            <Link
                              className="term-46"
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                            >
                              {stripHtmlTags(newsItem.newsTag, 10)}
                            </Link>
                          </div>
                          <h1 className="ak-module-title">
                            <Link
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                              rel="bookmark"
                              title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                            >
                              {stripHtmlTags(newsItem.newsHeading, 50)}
                            </Link>
                          </h1>
                          <div className="ak-module-meta">
                            <div className="ak-module-author">
                              स्पोर्ट्स-
                              <Link
                                href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                className="ak-module-author-name"
                              >
                                {stripHtmlTags(newsItem.newsTag, 20)}
                              </Link>
                            </div>
                            <div className="ak-module-time">
                              <Link
                                href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                className="ak-module-meta-published"
                              >
                                <i className="ak-icon akfi-schedule" />{" "}
                                {formatDateInHindi(newsItem.date)}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
                {posts.cricket.slice(2, 3).map((newsItem) => (
                  <article
                    key={newsItem.mainKhabarId}
                    className="ak-module ak-module-grid ak-module-grid-wide-big ak-block-item-3 clearfix post-226 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-sports category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news"
                  >
                    <div className="ak-module-inner clearfix">
                      <div className="ak-module-grid-wrap">
                        <div className="ak-module-featured">
                          <div className="ak-module-badges">
                            <Link
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                              title="Featured"
                            >
                              <span className="ak-badge-icon ak-badge-type-icon term-43">
                                <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                              </span>
                            </Link>
                          </div>
                          <div className="ak-featured-cover">
                            <Link
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                              className="ak-featured-link"
                              rel="bookmark"
                              title="Robot companies pledge they’re not going to let the robots kill you"
                            >
                              <div className="ak-featured-thumb lazy-thumb background-thumb  size-500">
                                <div
                                  className=" lazyloaded"
                                  title=""
                                  loading="lazy"
                                  data-bgset={`${baseUrl}${newsItem.newsImage}`}
                                  style={{
                                    backgroundImage: `url(${image_resize}?url=${baseUrl}${newsItem.newsImage}&w=585&h=495&outtype=webp)`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <picture style={{ display: "none" }}>
                                    <source
                                      data-srcset={`${baseUrl}${newsItem.newsImage}`}
                                      sizes="578px"
                                      srcSet={`${baseUrl}${newsItem.newsImage}`}
                                    />
                                    <img
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        40
                                      )}
                                      className="lazyautosizes"
                                      loading="lazy"
                                      data-sizes="auto"
                                      data-parent-fit="cover"
                                      sizes="578px"
                                    />
                                  </picture>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="ak-module-details">
                          <div className="ak-module-terms inline_badge">
                            <Link
                              className="term-43"
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                            >
                              {stripHtmlTags(newsItem.newsTag, 10)}
                            </Link>
                          </div>
                          <h1 className="ak-module-title">
                            <Link
                              href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                              rel="bookmark"
                              title="Robot companies pledge they’re not going to let the robots kill you"
                            >
                              {stripHtmlTags(newsItem.newsHeading, 50)}
                            </Link>
                          </h1>
                          <div className="ak-module-meta">
                            <div className="ak-module-author">
                              स्पोर्ट्स-
                              <Link
                                href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                className="ak-module-author-name"
                              >
                                {stripHtmlTags(newsItem.newsTag, 20)}
                              </Link>
                            </div>
                            <div className="ak-module-time">
                              <Link
                                href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                className="ak-module-meta-published"
                              >
                                <i className="ak-icon akfi-schedule" />{" "}
                                {formatDateInHindi(newsItem.date)}
                              </Link>
                            </div>
                          </div>
                        </div>
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
  );
}
