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

export default function LifeStyle() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/healthKhabars"
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

  return (
    <div>
      <div className="container">
        <div className="row vc_row">
          <div className="ak_vc_container">
            <div className="wpb_column ak_column_3 vc_column_container vc_col-sm-12">
              <div className="ak_vc_wrapper wpb_wrapper">
                <div
                  className="ak-block ak-block-10 ak-block-module-thumb-round ak-block-inner-boxed ak-block-width-3 clearfix"
                  id="block_65f7f61f36732_12"
                >
                  <div className="ak-block-header ak-block-header-style-5 no-tabs">
                    <div
                      className="main-wdgt container pt-3"
                      id="widget-rs-4937"
                      data-vars-widget-type="home"
                      data-vars-widget-name="astrology"
                      data-vars-orderid={10}
                    >
                      <div className="wdgt-hdng">
                        <h1 className="head">
                          <Link href="#" title="धर्म">
                            ताजा खबरें
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="ak-block-inner clearfix">
                    <div className="ak-block-posts clearfix">
                      <div className="row">
                        <div className="col-sm-3">
                          {posts.healthKhabars.slice(0, 1).map((newsItem) => (
                            <article className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article">
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
                                        href={newsItem.url}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video
                                            controls
                                            autoPlay
                                            style={{
                                              height: "250px",
                                              width: "350px",
                                            }}
                                          >
                                            <source
                                              src={baseUrl + newsItem.newsImage}
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link
                                        className="term-47"
                                        href={newsItem.categoryUrl}
                                      >
                                        {" "}
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href={newsItem.url}
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </Link>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />
                                    <div className="ak-featured-cover">
                                      <Link
                                        href={newsItem.url}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={350}
                                            height={250}
                                            src={baseUrl + newsItem.newsImage}
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt=""
                                          />
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link
                                        className="term-47"
                                        href={newsItem.categoryUrl}
                                      >
                                        {" "}
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href={newsItem.url}
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}
                                      </Link>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                          {posts.healthKhabars.slice(1, 2).map((newsItem) => (
                            <article className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-238 post type-post status-publish format-video has-post-thumbnail  category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video">
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
                                        href="#"
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Can you guess what’s wrong with these paintings?"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video
                                            controls
                                            autoPlay
                                            style={{
                                              height: "250px",
                                              width: "350px",
                                            }}
                                          >
                                            <source
                                              src={baseUrl + newsItem.newsImage}
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link className="term-51" href="#">
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href="#"
                                        rel="bookmark"
                                        title="Can you guess what’s wrong with these paintings?"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </Link>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />

                                    <div className="ak-featured-cover">
                                      <Link
                                        href="#"
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Can you guess what’s wrong with these paintings?"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={350}
                                            height={250}
                                            src={baseUrl + newsItem.newsImage}
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt=""
                                            data-src={
                                              baseUrl + newsItem.newsImage
                                            }
                                            data-sizes="auto"
                                            data-srcset={
                                              baseUrl + newsItem.newsImage
                                            }
                                            data-expand={700}
                                          />
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link className="term-51" href="#">
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href="2022/08/24/can-you-guess-whats-wrong-with-these-paintings/index.html"
                                        rel="bookmark"
                                        title="Can you guess what’s wrong with these paintings?"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </Link>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        </div>
                        <div className="col-sm-6">
                          {posts.healthKhabars.slice(2, 3).map((newsItem) => (
                            <article className="ak-module ak-module-6 clearfix post-239 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science tag-breaking tag-election tag-politics tag-technology tag-world-news">
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div className="clearfix ak-module-inner">
                                  <div className="clearfix ak-module-featured">
                                    <div className="ak-module-badges" />
                                    <div className="ak-module-video-duration">
                                      <div className="active">Watch</div>
                                    </div>
                                    <span className="ak-module-format-icon format-video">
                                      <i className="ak-icon fa fa-play" />
                                    </span>
                                    <div className="ak-featured-cover">
                                      <Link
                                        href="#"
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="19 Brilliant Hacks for Your Next Family Camping Trip"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video
                                            controls
                                            autoPlay
                                            style={{
                                              height: "536px",
                                              width: "750px",
                                            }}
                                          >
                                            <source
                                              src={baseUrl + newsItem.newsImage}
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link className="term-46" href="#">
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href="#"
                                        rel="bookmark"
                                        title="19 Brilliant Hacks for Your Next Family Camping Trip"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          150
                                        )}{" "}
                                      </Link>
                                    </h1>
                                    <div className="ak-module-meta">
                                      <div className="ak-module-author">
                                        <Link href="#">
                                          <video
                                            controls
                                            autoPlay
                                            height={22}
                                            width={22}
                                          >
                                            <source
                                              src={baseUrl + newsItem.newsImage}
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </Link>
                                        {/* by Anil Comment */}
                                        <Link
                                          href="#"
                                          className="ak-module-author-name"
                                        >
                                          {stripHtmlTags(newsItem.newsTag, 20)}
                                        </Link>
                                      </div>
                                      <div className="ak-module-time">
                                        <Link
                                          href="#"
                                          className="ak-module-meta-published"
                                        >
                                          <i className="ak-icon akfi-schedule" />
                                          {formatDateInHindi(newsItem.date)}
                                        </Link>
                                      </div>
                                      <div className="ak-module-view-count">
                                        <i className="ak-icon  ak-fi akfi-trending_up" />
                                        <span className="count">
                                          {newsItem.viewCount}
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="ak-module-summary"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <p>
                                        {" "}
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          150
                                        )}
                                      </p>
                                    </div>
                                    <div className="clearfix ak-module-bottom" />
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="clearfix ak-module-inner">
                                  <div className="clearfix ak-module-featured">
                                    <div className="ak-module-badges" />
                                    <div className="ak-featured-cover">
                                      <Link
                                        href="#"
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="19 Brilliant Hacks for Your Next Family Camping Trip"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={750}
                                            height={536}
                                            src={baseUrl + newsItem.newsImage}
                                            className="attachment-newsy_750x536 size-newsy_750x536 lazyload wp-post-image"
                                            alt=""
                                            data-src={
                                              baseUrl + newsItem.newsImage
                                            }
                                            data-sizes="auto"
                                            data-srcset={
                                              baseUrl + newsItem.newsImage
                                            }
                                            data-expand={700}
                                          />
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link className="term-46" href="#">
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href="#"
                                        rel="bookmark"
                                        title="19 Brilliant Hacks for Your Next Family Camping Trip"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          150
                                        )}{" "}
                                      </Link>
                                    </h1>
                                    <div className="ak-module-meta">
                                      <div className="ak-module-author">
                                        <Link href="#">
                                          <img
                                            alt="Picabo Street"
                                            src={baseUrl + newsItem.newsImage}
                                            srcSet={
                                              baseUrl + newsItem.newsImage
                                            }
                                            className="avatar avatar-22 photo post-author-avatar"
                                            height={22}
                                            width={22}
                                          />
                                        </Link>
                                        {/* by Anil Comment */}
                                        <Link
                                          href="#"
                                          className="ak-module-author-name"
                                        >
                                          {stripHtmlTags(newsItem.newsTag, 20)}
                                        </Link>
                                      </div>
                                      <div className="ak-module-time">
                                        <Link
                                          href="#"
                                          className="ak-module-meta-published"
                                        >
                                          <i className="ak-icon akfi-schedule" />
                                          {formatDateInHindi(newsItem.date)}
                                        </Link>
                                      </div>
                                      <div className="ak-module-view-count">
                                        <i className="ak-icon  ak-fi akfi-trending_up" />
                                        <span className="count">
                                          {newsItem.viewCount}
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="ak-module-summary"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <p>
                                        {" "}
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          150
                                        )}
                                      </p>
                                    </div>
                                    <div className="clearfix ak-module-bottom" />
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        </div>
                        <div className="col-sm-3">
                          {posts.healthKhabars.slice(3, 4).map((newsItem) => (
                            <article className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news">
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
                                        href="#"
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video
                                            controls
                                            autoPlay
                                            style={{
                                              height: "250px",
                                              width: "350px",
                                            }}
                                          >
                                            <source
                                              src={baseUrl + newsItem.newsImage}
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link className="term-43" href="#">
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href="#"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </Link>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges">
                                      <Link href="#" title="Featured">
                                        <span className="ak-badge-icon ak-badge-type-icon term-43">
                                          <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="ak-featured-cover">
                                      <Link
                                        href="#"
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={350}
                                            height={250}
                                            src={baseUrl + newsItem.newsImage}
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt=""
                                            data-src={
                                              baseUrl + newsItem.newsImage
                                            }
                                            data-sizes="auto"
                                            data-srcset={
                                              baseUrl + newsItem.newsImage
                                            }
                                            data-expand={700}
                                          />
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link className="term-43" href="#">
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href="#"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </Link>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                          {posts.healthKhabars.slice(4, 5).map((newsItem) => (
                            <article className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-241 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-us-news category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news">
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
                                        href="#"
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Is January Really The Best Month To Book Cheap Flights?"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video
                                            controls
                                            autoPlay
                                            style={{
                                              height: "250px",
                                              width: "350px",
                                            }}
                                          >
                                            <source
                                              src={baseUrl + newsItem.newsImage}
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link className="term-47" href="#">
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href="#"
                                        rel="bookmark"
                                        title="Is January Really The Best Month To Book Cheap Flights?"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </Link>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />
                                    <div className="ak-featured-cover">
                                      <Link
                                        href="#"
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Is January Really The Best Month To Book Cheap Flights?"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={350}
                                            height={250}
                                            src={baseUrl + newsItem.newsImage}
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt=""
                                            data-src={
                                              baseUrl + newsItem.newsImage
                                            }
                                            data-sizes="auto"
                                            data-srcset={
                                              baseUrl + newsItem.newsImage
                                            }
                                            data-expand={700}
                                          />
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <Link className="term-47" href="#">
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1
                                      className="ak-module-title"
                                      style={{ fontSize: "16px" }}
                                    >
                                      <Link
                                        href="#"
                                        rel="bookmark"
                                        title="Is January Really The Best Month To Book Cheap Flights?"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </Link>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
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
