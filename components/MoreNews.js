"use client"
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
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

export default function MoreNews() {
  const [posts, setPosts] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [thirdData, setThirdData] = useState([]);
  const [four, setFourPosts] = useState([]);
  const [five, setFiveData] = useState([]);
  const [sixData, setSixData] = useState([]);
  const [sevenData, setSevenData] = useState([]);
  const [eightData, setEightData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          response1,
          response2,
          response3,
          response4,
          response5,
          response6,
          response7,
          response8,
        ] = await Promise.all([
          axios.get("https://api.sadaivsatya.com/api/home/frontKhabars"),
          axios.get("https://api.sadaivsatya.com/api/home/international"),
          axios.get("https://api.sadaivsatya.com/api/home/mpNews"),
          axios.get("https://api.sadaivsatya.com/api/home/cgNews"),
          axios.get("https://api.sadaivsatya.com/api/home/bissinessKhabars"),
          axios.get("https://api.sadaivsatya.com/api/home/bollywood"),
          axios.get("https://api.sadaivsatya.com/api/home/khelKhabars"),
          axios.get("https://api.sadaivsatya.com/api/home/technologyKhabars"),
        ]);
        setPosts(response1.data);
        setSecondData(response2.data);
        setThirdData(response3.data);
        setFourPosts(response4.data);
        setFiveData(response5.data);
        setSixData(response6.data);
        setSevenData(response7.data);
        setEightData(response8.data);
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
      <div className="row vc_row">
        <div className="ak_vc_container mt-4">
          <div className="wpb_column ak_column_3 vc_column_container vc_col-sm-12">
            <div className="ak_vc_wrapper wpb_wrapper">
              <div
                className="ak-block ak-block-list-2 ak-block-column ak-block-module-thumb-round ak-block-inner-boxed ak-block-width-4 ak-pagination-container load_more clearfix"
                id="block_65f7f61f36732_18"
              >
                <div className="ak-block-header ak-block-header-style-5">
                  <h1 className="ak-block-title gayab">
                    <a href="#">
                      <span className="title-text">
                        <span>
                          <i
                            className="ak-icon fa fa-square"
                            dataSiderSelectId="f7781bce-f30e-4e9f-86d0-a24e1691f249"
                          ></i>
                          &nbsp;&nbsp;अधिक समाचार
                        </span>
                      </span>
                      <i className="fa fa-angle-double-right" />
                    </a>
                  </h1>
                  <div className="ak-block-tabs ak-menu-more-enabled">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link active px-2"
                          id="nav-home-tab"
                          dataBsToggle="tab"
                          dataBsTarget="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          ताजा खबरें
                        </button>
                        <button
                          className="nav-link px-2"
                          id="nav-profile-tab"
                          dataBsToggle="tab"
                          dataBsTarget="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          अंतरराष्ट्रीय
                        </button>
                        <button
                          className="nav-link px-2"
                          id="nav-contact-tab"
                          dataBsToggle="tab"
                          dataBsTarget="#nav-contact"
                          type="button"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          मध्य प्रदेश
                        </button>
                        <button
                          className="nav-link px-2"
                          id="nav-entertainment-tab"
                          dataBsToggle="tab"
                          dataBsTarget="#nav-entertainment"
                          type="button"
                          role="tab"
                          aria-controls="nav-entertainment"
                          aria-selected="false"
                        >
                          छत्तीसगढ़{" "}
                        </button>
                        <button
                          className="nav-link px-2"
                          id="nav-tech-tab"
                          dataBsToggle="tab"
                          dataBsTarget="#nav-tech"
                          type="button"
                          role="tab"
                          aria-controls="nav-tech"
                          aria-selected="false"
                        >
                          बिज़नेस{" "}
                        </button>
                        <button
                          className="nav-link px-2"
                          id="nav-work-tab"
                          dataBsToggle="tab"
                          dataBsTarget="#nav-work"
                          type="button"
                          role="tab"
                          aria-controls="nav-work"
                          aria-selected="false"
                        >
                          बॉलीवुड{" "}
                        </button>

                        <button
                          className="nav-link px-2"
                          id="nav-politiks-tab"
                          dataBsToggle="tab"
                          dataBsTarget="#nav-politiks"
                          type="button"
                          role="tab"
                          aria-controls="nav-politiks"
                          aria-selected="false"
                        >
                          खेल{" "}
                        </button>
                        <button
                          className="nav-link px-2"
                          id="nav-technology-tab"
                          dataBsToggle="tab"
                          dataBsTarget="#nav-technology"
                          type="button"
                          role="tab"
                          aria-controls="nav-technology"
                          aria-selected="false"
                        >
                          टेक्नोलॉजी{" "}
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="ak-block-inner morenews clearfix">
                  <div className="ak-block-posts clearfix">
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex="0"
                      >
                        {posts.frontKhabars.slice(0, 1).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-232 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="15 Stunning One-Piece Swimsuits On Sale At Nordstrom Right Now"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="15 Stunning One-Piece Swimsuits On Sale At Nordstrom Right Now"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="15 Stunning One-Piece Swimsuits On Sale At Nordstrom Right Now"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="15 Stunning One-Piece Swimsuits On Sale At Nordstrom Right Now"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {posts.frontKhabars.slice(1, 2).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {posts.frontKhabars.slice(2, 3).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-234 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="15 Fashionable Women’s Wide-Width Shoes For Problem Feet"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="15 Fashionable Women’s Wide-Width Shoes For Problem Feet"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="15 Fashionable Women’s Wide-Width Shoes For Problem Feet"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="15 Fashionable Women’s Wide-Width Shoes For Problem Feet"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {posts.frontKhabars.slice(3, 4).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {posts.frontKhabars.slice(4, 5).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {posts.frontKhabars.slice(5, 6).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {posts.frontKhabars.slice(6, 7).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-238 post type-post status-publish format-video has-post-thumbnail  category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Can you guess what’s wrong with these paintings?"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Can you guess what’s wrong with these paintings?"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Can you guess what’s wrong with these paintings?"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Can you guess what’s wrong with these paintings?"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {posts.frontKhabars.slice(7, 8).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                          >
                            {newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      title="Featured"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-icon term-43">
                                        <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 70)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex="0"
                      >
                        {secondData.international
                          .slice(0, 1)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="How to write like the best-selling author of all time"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-51"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="How to write like the best-selling author of all time"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />

                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="How to write like the best-selling author of all time"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-51"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="How to write like the best-selling author of all time"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {secondData.international
                          .slice(1, 2)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-46"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />

                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-46"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {secondData.international
                          .slice(2, 3)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-47"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />
                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-47"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {secondData.international
                          .slice(3, 4)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-43"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        title="Featured"
                                      >
                                        <span className="ak-badge-icon ak-badge-type-icon term-43">
                                          <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                        </span>
                                      </a>
                                    </div>
                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-43"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {secondData.international
                          .slice(4, 5)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="The Best Memorial Day 2021 Clothing Sales Online"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-49"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="The Best Memorial Day 2021 Clothing Sales Online"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        title="LIFE"
                                      >
                                        <span className="ak-badge-icon ak-badge-type-text term-49">
                                          <span className="ak-badge-icon-text">
                                            न्यूज़
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="The Best Memorial Day 2021 Clothing Sales Online"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-49"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="The Best Memorial Day 2021 Clothing Sales Online"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {secondData.international
                          .slice(5, 6)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-47"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />
                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-47"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {secondData.international
                          .slice(6, 7)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-46"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />

                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-46"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {secondData.international
                          .slice(7, 8)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="How to write like the best-selling author of all time"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-51"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="How to write like the best-selling author of all time"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />

                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="How to write like the best-selling author of all time"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-51"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="How to write like the best-selling author of all time"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                        tabIndex="0"
                      >
                        {thirdData.mpNews.slice(0, 1).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {thirdData.mpNews.slice(1, 2).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {thirdData.mpNews.slice(2, 3).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {thirdData.mpNews.slice(3, 4).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      title="Featured"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-icon term-43">
                                        <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {thirdData.mpNews.slice(4, 5).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {thirdData.mpNews.slice(5, 6).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {thirdData.mpNews.slice(6, 7).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {thirdData.mpNews.slice(7, 8).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                      </div>

                      <div
                        className="tab-pane fade"
                        id="nav-entertainment"
                        role="tabpanel"
                        aria-labelledby="nav-entertainment-tab"
                        tabIndex="0"
                      >
                        {four.cgNews.slice(0, 1).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {four.cgNews.slice(1, 2).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      title="Featured"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-icon term-43">
                                        <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {four.cgNews.slice(2, 3).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {four.cgNews.slice(3, 4).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      title="Featured"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-icon term-43">
                                        <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {four.cgNews.slice(4, 5).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {four.cgNews.slice(5, 6).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {four.cgNews.slice(6, 7).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {four.cgNews.slice(7, 8).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/ChhatisgarDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                      </div>

                      <div
                        className="tab-pane fade"
                        id="nav-tech"
                        role="tabpanel"
                        aria-labelledby="nav-tech-tab"
                        tabIndex="0"
                      >
                        {five.bissinessKhabars.slice(0, 1).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      title="Featured"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-icon term-43">
                                        <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {five.bissinessKhabars.slice(1, 2).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {five.bissinessKhabars.slice(2, 3).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {five.bissinessKhabars.slice(3, 4).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb ">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      title="Featured"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-icon term-43">
                                        <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {five.bissinessKhabars.slice(4, 5).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {five.bissinessKhabars.slice(5, 6).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {five.bissinessKhabars.slice(6, 7).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {five.bissinessKhabars.slice(7, 8).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                      </div>

                      <div
                        className="tab-pane fade"
                        id="nav-work"
                        role="tabpanel"
                        aria-labelledby="nav-work-tab"
                        tabIndex="0"
                      >
                        {sixData.bollywood.slice(0, 1).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sixData.bollywood.slice(1, 2).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb ">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sixData.bollywood.slice(2, 3).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb ">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sixData.bollywood.slice(3, 4).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      title="Featured"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-icon term-43">
                                        <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sixData.bollywood.slice(4, 5).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb ">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sixData.bollywood.slice(5, 6).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sixData.bollywood.slice(6, 7).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb ">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sixData.bollywood.slice(7, 8).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-politiks"
                        role="tabpanel"
                        aria-labelledby="nav-politiks-tab"
                        tabIndex="0"
                      >
                        {sevenData.khelKhabars.slice(0, 1).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb ">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sevenData.khelKhabars.slice(1, 2).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sevenData.khelKhabars.slice(2, 3).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb  size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sevenData.khelKhabars.slice(3, 4).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb ">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      title="Featured"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-icon term-43">
                                        <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-43"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Here’s How You Can Book A Trip For Just $1"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sevenData.khelKhabars.slice(4, 5).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb ">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-47"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 50)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sevenData.khelKhabars.slice(5, 6).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-46"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sevenData.khelKhabars.slice(6, 7).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-49"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Memorial Day 2021 Clothing Sales Online"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}{" "}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {sevenData.khelKhabars.slice(7, 8).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb">
                                        <video controls autoPlay>
                                          <source
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />

                                  <div className="ak-featured-cover">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={321}
                                          height={214}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            70
                                          )}
                                          dataSrc={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataSizes="auto"
                                          dataSrcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=321&h=214&outtype=webp"
                                          }
                                          dataExpand={700}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <a
                                      className="term-51"
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1 className="ak-module-title">
                                    <a
                                      href={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="How to write like the best-selling author of all time"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 60)}
                                    </a>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-technology"
                        role="tabpanel"
                        aria-labelledby="nav-technology-tab"
                        tabIndex="0"
                      >
                        {eightData.technologyKhabars
                          .slice(0, 1)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-43"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        title="Featured"
                                      >
                                        <span className="ak-badge-icon ak-badge-type-icon term-43">
                                          <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                        </span>
                                      </a>
                                    </div>
                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-43"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {eightData.technologyKhabars
                          .slice(1, 2)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-236 post type-post status-publish format-video has-post-thumbnail  category-business category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-46"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />

                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715 ">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-46"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="19 People Confess the Most Embarrassing Things They’ve Ever Done"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {eightData.technologyKhabars
                          .slice(2, 3)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-47"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />
                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-47"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {eightData.technologyKhabars
                          .slice(3, 4)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-43"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        title="Featured"
                                      >
                                        <span className="ak-badge-icon ak-badge-type-icon term-43">
                                          <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                        </span>
                                      </a>
                                    </div>
                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-43"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Here’s How You Can Book A Trip For Just $1"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {eightData.technologyKhabars
                          .slice(4, 5)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-233 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="The Best Memorial Day 2021 Clothing Sales Online"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-49"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="The Best Memorial Day 2021 Clothing Sales Online"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        title="LIFE"
                                      >
                                        <span className="ak-badge-icon ak-badge-type-text term-49">
                                          <span className="ak-badge-icon-text">
                                            न्यूज़
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="The Best Memorial Day 2021 Clothing Sales Online"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715 ak-featured-thumb.size-716">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-49"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="The Best Memorial Day 2021 Clothing Sales Online"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {eightData.technologyKhabars
                          .slice(5, 6)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-47"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />
                                    <div className="ak-featured-cover">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-47"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          50
                                        )}{" "}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {eightData.technologyKhabars
                          .slice(6, 7)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-235 post type-post status-publish format-video has-post-thumbnail  category-sports category-tech-science category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
                            // Ensure each element has a unique key
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
                                      <a
                                        href={newsItem.link}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-51"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges" />

                                    <div className="ak-featured-cover">
                                      <a
                                        href={newsItem.link}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      <a
                                        className="term-51"
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                      >
                                        {stripHtmlTags(newsItem.newsTag, 20)}{" "}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                        {eightData.technologyKhabars
                          .slice(7, 8)
                          .map((newsItem) => (
                            <article
                              key={newsItem.mainKhabarId}
                              className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                            // Ensure each element has a unique key
                            >
                              {newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-video-duration">
                                      <div className="active">Watch</div>
                                    </div>
                                    <span className="ak-module-format-icon format-video">
                                      <i className="ak-icon fa fa-play" />
                                    </span>
                                    <div className="ak-featured-cover">
                                      <a
                                        href={newsItem.link}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        <div className="ak-featured-thumb lazy-thumb">
                                          <video controls autoPlay>
                                            <source
                                              src={
                                                image_resize +
                                                "?url=" +
                                                baseUrl +
                                                newsItem.newsImage +
                                                "&w=321&h=214&outtype=webp"
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      {/* Terms logic here */}
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                              {!newsItem.newsImage.endsWith(".mp4") && (
                                <div className="ak-module-inner clearfix">
                                  <div className="ak-module-featured">
                                    <div className="ak-module-badges">
                                      {/* Badge logic here */}
                                    </div>
                                    <div className="ak-featured-cover">
                                      <a
                                        href={newsItem.link || "#"}
                                        className="ak-featured-link"
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        <div className="ak-featured-thumb lazy-thumb size-715">
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            width={321}
                                            height={214}
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                            alt={stripHtmlTags(
                                              newsItem.newsHeading,
                                              70
                                            )}
                                            dataSrc={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataSizes="auto"
                                            dataSrcset={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=321&h=214&outtype=webp"
                                            }
                                            dataExpand={700}
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="ak-module-terms badge">
                                      {/* Terms logic here */}
                                    </div>
                                  </div>
                                  <div className="ak-module-details">
                                    <h1 className="ak-module-title">
                                      <a
                                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                                        rel="bookmark"
                                        title={newsItem.title}
                                      >
                                        {stripHtmlTags(
                                          newsItem.newsHeading,
                                          60
                                        )}
                                      </a>
                                    </h1>
                                  </div>
                                </div>
                              )}
                            </article>
                          ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="ak-pagination load_more clearfix">
              <a
                href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                className="ak-pagination-btn"
                data-action="next"
                data-block-id="block_65f7f61f36732_18"
                title="Load More Posts"
                rel="nofollow"
              >
                <span className="ak-pagination-btn-load-more">
                  <i className="fa fa-caret-down" aria-hidden="true" />{" "}
                  <span className="txt">Load More Posts</span>
                </span>
                <span className="ak-pagination-btn-loading">
                  <i className="fa fa-circle-o-notch fa-spin fa-fw" />{" "}
                  <span className="txt">Loading...</span>
                </span>
                <span className="ak-pagination-btn-no-more">
                  No more posts.
                </span>
              </a>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
