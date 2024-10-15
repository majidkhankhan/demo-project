"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
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

export default function EditorPic() {
  const [posts, setPosts] = useState([]);
  const [secondData, setSecondData] = useState([]);
  // const [thirdData, setThirdData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get("https://api.sadaivsatya.com/api/home/stockMarket"),
          axios.get("https://api.sadaivsatya.com/api/home/getwebStorie"),
          // axios.get("https://api.sadaivsatya.com/api/home/khelKhabars")
        ]);
        setPosts(response1.data);
        setSecondData(response2.data);
        // setThirdData(response3.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <div className="">
        <div className="ak_vc_container">
          <div className="wpb_column ak_column_3 vc_column_container vc_col-sm-9">
            <div className="ak_vc_wrapper wpb_wrapper">
              <div
                className="ak-block ak-block-7 ak-block-inner-boxed ak-block-module-thumb-round ak-block-width-3 clearfix"
                id="block_65f7f61f36732_13"
              >
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
                          शब्द टुडे ट्रेंडिंग
                        </Link>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="ak-block-inner clearfix">
                  <div className="ak-block-posts clearfix">
                    <div className="row">
                      <div className="col-sm-8">
                        {posts.stockMarket.slice(0, 1).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-6 clearfix post-242 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-featured category-sports tag-breaking tag-election tag-politics tag-technology tag-world-news"
                          >
                            {newsItem.newsImage.endsWith(".mp4") && (
                              <div className="clearfix ak-module-inner">
                                <div className="clearfix ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-module-video-duration">
                                    {/* <div className="active">Watch</div> */}
                                  </div>
                                  <span className="ak-module-format-icon format-video">
                                    <i className="ak-icon fa fa-play" />
                                  </span>
                                  <div className="ak-featured-cover">
                                    <Link
                                      href="#"
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Hotels In The World In 2021, According To Travelers"
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
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=568&h=485&outtype=webp"
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
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
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Hotels In The World In 2021, According To Travelers"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 130)}
                                    </Link>
                                  </h1>
                                  <div className="ak-module-meta">
                                    <div className="ak-module-time">
                                      <Link
                                        href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                        className="ak-module-meta-published"
                                      >
                                        <i className="ak-icon akfi-schedule" />
                                        {formatDateInHindi(newsItem.date)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div
                                    className="ak-module-summary"
                                    style={{ fontSize: "16px" }}
                                  >
                                    <p>
                                      {stripHtmlTags(newsItem.newsDetails, 150)}{" "}
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
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="The Best Hotels In The World In 2021, According To Travelers"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={750}
                                          height={536}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=568&h=485&outtype=webp"
                                          }
                                          className="attachment-newsy_750x536 size-newsy_750x536 lazyload wp-newsItem-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            130
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=568&h=485&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=568&h=485&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
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
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="The Best Hotels In The World In 2021, According To Travelers"
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 130)}
                                    </Link>
                                  </h1>
                                  <div className="ak-module-meta">
                                    <div className="ak-module-time">
                                      <Link
                                        href="#"
                                        className="ak-module-meta-published"
                                      >
                                        <i className="ak-icon akfi-schedule" />
                                        {formatDateInHindi(newsItem.date)}
                                      </Link>
                                    </div>
                                  </div>
                                  <div
                                    className="ak-module-summary"
                                    style={{ fontSize: "16px" }}
                                  >
                                    <p>
                                      {stripHtmlTags(newsItem.newsDetails, 150)}{" "}
                                    </p>
                                  </div>
                                  <div className="clearfix ak-module-bottom" />
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                      <div className="col-sm-4">
                        {posts.stockMarket.slice(1, 2).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-243 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-featured category-us-news tag-breaking tag-election tag-politics tag-technology tag-world-news"
                          >
                            {newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-module-video-duration">
                                    {/* <div className="active">Watch</div> */}
                                  </div>
                                  <span className="ak-module-format-icon format-video">
                                    <i className="ak-icon fa fa-play" />
                                  </span>
                                  <div className="ak-featured-cover">
                                    <Link
                                      href="#"
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="15 Classic Princess Fairytales That Are Way More Hardcore Than Their Disney Counterparts"
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
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=272&h=232&outtype=webp"
                                            }
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
                                      {stripHtmlTags(newsItem.newsHeading, 20)}
                                    </Link>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1
                                    className="ak-module-title"
                                    style={{ fontSize: "16px" }}
                                  >
                                    <Link
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="15 Classic Princess Fairytales That Are Way More Hardcore Than Their Disney Counterparts"
                                    >
                                      {stripHtmlTags(newsItem.newsDetails, 60)}{" "}
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
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="15 Classic Princess Fairytales That Are Way More Hardcore Than Their Disney Counterparts"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={350}
                                          height={250}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=272&h=232&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            130
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=272&h=232&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=272&h=232&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <Link
                                      className="term-46"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 20)}
                                    </Link>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1
                                    className="ak-module-title"
                                    style={{ fontSize: "16px" }}
                                  >
                                    <Link
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="15 Classic Princess Fairytales That Are Way More Hardcore Than Their Disney Counterparts"
                                    >
                                      {stripHtmlTags(newsItem.newsDetails, 60)}{" "}
                                    </Link>
                                  </h1>
                                </div>
                              </div>
                            )}
                          </article>
                        ))}
                        {posts.stockMarket.slice(2, 3).map((newsItem) => (
                          <article
                            key={newsItem.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-244 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news"
                          >
                            {newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges" />
                                  <div className="ak-module-video-duration">
                                    {/* <div className="active">Watch</div> */}
                                  </div>
                                  <span className="ak-module-format-icon format-video">
                                    <i className="ak-icon fa fa-play" />
                                  </span>
                                  <div className="ak-featured-cover">
                                    <Link
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Going Part Time Can Be A Cruel Trap For Women, But There’s A Way To Do It Right"
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
                                            src={
                                              image_resize +
                                              "?url=" +
                                              baseUrl +
                                              newsItem.newsImage +
                                              "&w=272&h=232&outtype=webp"
                                            }
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
                                      className="term-49"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 20)}
                                    </Link>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1
                                    className="ak-module-title"
                                    style={{ fontSize: "16px" }}
                                  >
                                    <Link
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Going Part Time Can Be A Cruel Trap For Women, But There’s A Way To Do It Right"
                                    >
                                      {stripHtmlTags(newsItem.newsDetails, 60)}
                                    </Link>
                                  </h1>
                                </div>
                              </div>
                            )}
                            {!newsItem.newsImage.endsWith(".mp4") && (
                              <div className="ak-module-inner clearfix">
                                <div className="ak-module-featured">
                                  <div className="ak-module-badges">
                                    <Link
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      title="LIFE"
                                    >
                                      <span className="ak-badge-icon ak-badge-type-text term-49">
                                        <span className="ak-badge-icon-text">
                                          न्यूज़
                                        </span>
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="ak-featured-cover">
                                    <Link
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      className="ak-featured-link"
                                      rel="bookmark"
                                      title="Going Part Time Can Be A Cruel Trap For Women, But There’s A Way To Do It Right"
                                    >
                                      <div className="ak-featured-thumb lazy-thumb size-715">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={350}
                                          height={250}
                                          src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=272&h=232&outtype=webp"
                                          }
                                          className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                          alt={stripHtmlTags(
                                            newsItem.newsHeading,
                                            130
                                          )}
                                          data-src={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=272&h=232&outtype=webp"
                                          }
                                          data-sizes="auto"
                                          data-srcset={
                                            image_resize +
                                            "?url=" +
                                            baseUrl +
                                            newsItem.newsImage +
                                            "&w=272&h=232&outtype=webp"
                                          }
                                          data-expand={700}
                                        />
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="ak-module-terms badge">
                                    <Link
                                      className="term-49"
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                    >
                                      {stripHtmlTags(newsItem.newsHeading, 20)}
                                    </Link>
                                  </div>
                                </div>
                                <div className="ak-module-details">
                                  <h1
                                    className="ak-module-title"
                                    style={{ fontSize: "16px" }}
                                  >
                                    <Link
                                      href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                      rel="bookmark"
                                      title="Going Part Time Can Be A Cruel Trap For Women, But There’s A Way To Do It Right"
                                    >
                                      {stripHtmlTags(newsItem.newsDetails, 60)}
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
              <div
                className="ak-block ak-block-list-2 ak-block-column ak-block-inner-boxed ak-block-width-3 clearfix"
                id="block_65f7f61f36732_14"
              >
                <div className="ak-block-inner clearfix">
                  <div className="ak-block-posts clearfix">
                    {posts.stockMarket.slice(3, 6).map((newsItem) => (
                      <article
                        key={newsItem.mainKhabarId}
                        className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-245 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                      >
                        {newsItem.newsImage.endsWith(".mp4") && (
                          <div className="ak-module-inner clearfix">
                            <div className="ak-module-featured">
                              <div className="ak-module-badges" />
                              <div className="ak-module-video-duration">
                                {/* <div className="active">Watch</div> */}
                              </div>
                              <span className="ak-module-format-icon format-video">
                                <i className="ak-icon fa fa-play" />
                              </span>
                              <div className="ak-featured-cover">
                                <Link
                                  href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title="Consumer Reports Best Sunscreen For 2021 Is Cheapest At This Retailer"
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
                                        src={
                                          image_resize +
                                          "?url=" +
                                          baseUrl +
                                          newsItem.newsImage +
                                          "&w=284&h=242&outtype=webp"
                                        }
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                </Link>
                              </div>
                              <div className="ak-module-terms badge">
                                <Link
                                  className="term-46"
                                  href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                >
                                  {stripHtmlTags(newsItem.newsHeading, 20)}{" "}
                                </Link>
                              </div>
                            </div>
                            <div className="ak-module-details">
                              <h1
                                className="ak-module-title"
                                style={{ fontSize: "16px" }}
                              >
                                <Link
                                  href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                  rel="bookmark"
                                  title="Consumer Reports Best Sunscreen For 2021 Is Cheapest At This Retailer"
                                >
                                  {stripHtmlTags(newsItem.newsDetails, 60)}{" "}
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
                                  href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title="Consumer Reports Best Sunscreen For 2021 Is Cheapest At This Retailer"
                                >
                                  <div className="ak-featured-thumb lazy-thumb size-715">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width={350}
                                      height={250}
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=284&h=242&outtype=webp"
                                      }
                                      className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                      alt={stripHtmlTags(
                                        newsItem.newsHeading,
                                        130
                                      )}
                                      data-src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=284&h=242&outtype=webp"
                                      }
                                      data-sizes="auto"
                                      data-srcset={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        newsItem.newsImage +
                                        "&w=284&h=242&outtype=webp"
                                      }
                                      data-expand={700}
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="ak-module-terms badge">
                                <Link
                                  className="term-46"
                                  href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                >
                                  {stripHtmlTags(newsItem.newsHeading, 20)}{" "}
                                </Link>
                              </div>
                            </div>
                            <div className="ak-module-details">
                              <h1
                                className="ak-module-title"
                                style={{ fontSize: "16px" }}
                              >
                                <Link
                                  href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                                  rel="bookmark"
                                  title="Consumer Reports Best Sunscreen For 2021 Is Cheapest At This Retailer"
                                >
                                  {stripHtmlTags(newsItem.newsDetails, 60)}{" "}
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
          <div className="sticky-column wpb_column ak_column_1  vc_column_container vc_col-sm-3 vc_custom_1664996206990 marginggap mt-3">
            <div className="ak_vc_wrapper wpb_wrapper text-center">
              <div
                className="ak-block ak-block-list-10 ak-block-column ak-block-module-seperator-line ak-block-boxed dark ak-block-numeric-style-7 ak-block-width-1 clearfix mb-4"
                id="block_65f7f61f36732_15"
              >
                <div className="ak-block-header ak-block-header-style-5 no-tabs mb-2">
                  <h1 className="ak-block-title">
                    <span className="title-text">
                      <span>वेब स्टोरीज </span>
                    </span>
                  </h1>
                </div>
                <div className="ak-block-inner clearfix">
                  <div className="ak-block-posts clearfix">
                    {secondData.webstory.slice(0, 13).map((newsItem, index) => (
                      <article
                        key={newsItem.webStoriesId}
                        className="ak-module ak-module-10 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-224 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-tech-science category-us-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
                      >
                        <div className="ak-module-inner clearfix">
                          <div className="ak-module-details">
                            <h1 className="ak-module-title">
                              <Link
                                href="/WebstorieDetails"
                                rel="bookmark"
                                title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                              >
                                {stripHtmlTags(newsItem.webStoriesHeading, 30)}{" "}
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
    </div>
  );
}
