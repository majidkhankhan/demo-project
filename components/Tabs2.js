import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Circles } from "react-loader-spinner";

const baseUrl = "https://api.sadaivsatya.com/";
const image_resize = "https://api.sadaivsatya.com/api/home/resize";
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

export default function Tabs2() {
  const [posts, setPosts] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [thirdData, setThirdData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // eslint-disable-next-line no-undef
        const [response1, response2, response3] = await Promise.all([
          axios.get("https://api.sadaivsatya.com/api/home/khelKhabars"),
          axios.get("https://api.sadaivsatya.com/api/home/movise"),
          axios.get("https://api.sadaivsatya.com/api/home/manoranjans"),
        ]);
        setPosts(response1.data);
        setSecondData(response2.data);
        setThirdData(response3.data);
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
  const generateShareLinksm = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/KhelDetailsD/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
  };

  const generateShareLinksa = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/BollywoodDetails/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
  };
  const generateShareLinksk = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/BollywoodDetails/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
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
              <Link href="/BuisnessDetails" title="वायरल" aria-label="वायरल">
                वायरल
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div
        className="ak-block ak-block-list-1-small-square ak-block-column ak-block-boxeddd ak-block-module-thumb-round ak-block-width-1 ak-pagination-container clearfix ak-pagination-loaded"
        id="block_6612e9b74a4cb_5"
      >
        <div className="ak-block-header ak-block-header-style-14 no-title">
          <div className="ak-block-tabs ak-menu-more-enabled loaded tablistdata">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link active listt"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  खेल
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link listt"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  मूवीज़
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link listt"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  मनोरंजन
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex={0}
          >
            <div className="ak-block-inner clearfix">
              <div className="ak-block-posts clearfix">
                {posts.khelKhabars.slice(0, 4).map((post) => {
                  const shareLinks = generateShareLinksm(
                    post.mainKhabarId,
                    post.newsHeading
                  );
                  return (
                    <article
                      key={post.mainKhabarId}
                      className="bordergap ak-module ak-module-1-small-square ak-column-module clearfix post-223 post type-post status-publish format-standard has-post-thumbnail  category-featured category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                    >
                      {post.newsImage.endsWith(".mp4") && (
                        <div className="ak-module-inner clearfix">
                          <div className="ak-module-featured">
                            <div className="ak-module-video-duration">
                              <div className="active">Watch</div>
                            </div>
                            <span className="ak-module-format-icon format-video">
                              <i className="ak-icon fa fa-play" />
                            </span>
                            <div className="ak-featured-cover">
                              <Link
                                href={`/KhelDetailsD/${post.mainKhabarId}`}
                                className="ak-featured-link"
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 60)}
                                title="How thinking about ‘future you’ can build a happier life"
                              >
                                <div className="ak-featured-thumb lazy-thumb">
                                  <video
                                    controls
                                    autoPlay
                                    style={{ height: "75px", width: "75px" }}
                                  >
                                    <source
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        post.newsImage +
                                        "&w=75&h=75&outtype=webp"
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
                                href={`/KhelDetailsD/${post.mainKhabarId}`}
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 60)}
                                title="How thinking about ‘future you’ can build a happier life"
                              >
                                {stripHtmlTags(post.newsHeading, 60)}
                              </Link>
                            </h1>
                            <div className="ak-module-meta">
                              <div className="ak-module-time">
                                <Link
                                  href={`/KhelDetailsD/${post.mainKhabarId}`}
                                  aria-label={stripHtmlTags(
                                    post.newsHeading,
                                    60
                                  )}
                                  className="ak-module-meta-published"
                                >
                                  <i className="ak-icon akfi-schedule" />{" "}
                                  {formatDateInHindi(post.date)}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {!post.newsImage.endsWith(".mp4") && (
                        <div className="ak-module-inner clearfix">
                          <div className="ak-module-featured">
                            <div className="ak-featured-cover">
                              <Link
                                href={`/KhelDetailsD/${post.mainKhabarId}`}
                                className="ak-featured-link"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                rel="bookmark"
                                title="How thinking about ‘future you’ can build a happier life"
                              >
                                <div className="ak-featured-thumb lazy-thumb size-1000">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width={75}
                                    height={75}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
                                    className="attachment-newsy_75x75 size-newsy_75x75 wp-post-image lazyautosizes lazyloaded"
                                    alt=""
                                    data-src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
                                    data-sizes="auto"
                                    data-srcset={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
                                    data-expand={700}
                                    sizes="75px"
                                    srcSet={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
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
                                href={`/KhelDetailsD/${post.mainKhabarId}`}
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="How thinking about ‘future you’ can build a happier life"
                              >
                                {stripHtmlTags(post.newsHeading, 60)}{" "}
                              </Link>
                            </h1>
                            <div className="ak-module-meta">
                              <div className="ak-module-time">
                                <Link
                                  href={`/KhelDetailsD/${post.mainKhabarId}`}
                                  className="ak-module-meta-published"
                                  aria-label={stripHtmlTags(
                                    post.newsHeading,
                                    30
                                  )}
                                >
                                  <i className="ak-icon akfi-schedule" />
                                  {formatDateInHindi(post.date)}
                                </Link>
                                &nbsp;&nbsp; &nbsp;&nbsp;
                                <Link
                                  href={shareLinks.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="facebook"
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
                                  rel="noopener noreferrer"
                                  aria-label="whatsapp"
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
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex={0}
          >
            <div className="ak-block-inner clearfix">
              <div className="ak-block-posts clearfix">
                {secondData.movise.slice(0, 4).map((post) => {
                  const shareLinks = generateShareLinksm(
                    post.mainKhabarId,
                    post.newsHeading
                  );
                  return (
                    <article
                      key={post.mainKhabarId}
                      className="bordergap ak-module ak-module-1-small-square ak-column-module clearfix post-223 post type-post status-publish format-standard has-post-thumbnail  category-featured category-sports category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                    >
                      {post.newsImage.endsWith(".mp4") && (
                        <div className="ak-module-inner clearfix">
                          <div className="ak-module-featured">
                            <div className="ak-module-video-duration">
                              <div className="active">Watch</div>
                            </div>
                            <span className="ak-module-format-icon format-video">
                              <i className="ak-icon fa fa-play" />
                            </span>
                            <div className="ak-featured-cover">
                              <Link
                                href={`/BollywoodDetails/${post.mainKhabarId}`}
                                className="ak-featured-link"
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="How thinking about ‘future you’ can build a happier life"
                              >
                                <div className="ak-featured-thumb lazy-thumb">
                                  <video
                                    controls
                                    autoPlay
                                    style={{ height: "75px", width: "75px" }}
                                  >
                                    <source
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        post.newsImage +
                                        "&w=75&h=75&outtype=webp"
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
                                href={`/BollywoodDetails/${post.mainKhabarId}`}
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="How thinking about ‘future you’ can build a happier life"
                              >
                                {stripHtmlTags(post.newsHeading, 60)}
                              </Link>
                            </h1>
                            <div className="ak-module-meta">
                              <div className="ak-module-time">
                                <Link
                                  href={`/BollywoodDetails/${post.mainKhabarId}`}
                                  className="ak-module-meta-published"
                                  aria-label={stripHtmlTags(
                                    post.newsHeading,
                                    30
                                  )}
                                >
                                  <i className="ak-icon akfi-schedule" />{" "}
                                  {formatDateInHindi(post.date)}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {!post.newsImage.endsWith(".mp4") && (
                        <div className="ak-module-inner clearfix">
                          <div className="ak-module-featured">
                            <div className="ak-featured-cover">
                              <Link
                                href={`/BollywoodDetails/${post.mainKhabarId}`}
                                className="ak-featured-link"
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="How thinking about ‘future you’ can build a happier life"
                              >
                                <div className="ak-featured-thumb lazy-thumb size-1000">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width={75}
                                    height={75}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
                                    className="attachment-newsy_75x75 size-newsy_75x75 wp-post-image lazyautosizes lazyloaded"
                                    alt=""
                                    data-src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
                                    data-sizes="auto"
                                    data-srcset={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
                                    data-expand={700}
                                    sizes="75px"
                                    srcSet={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
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
                                href={`/BollywoodDetails/${post.mainKhabarId}`}
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="How thinking about ‘future you’ can build a happier life"
                              >
                                {stripHtmlTags(post.newsHeading, 60)}{" "}
                              </Link>
                            </h1>
                            <div className="ak-module-meta">
                              <div className="ak-module-time">
                                <Link
                                  href={`/BollywoodDetails/${post.mainKhabarId}`}
                                  className="ak-module-meta-published"
                                  aria-label={stripHtmlTags(
                                    post.newsHeading,
                                    30
                                  )}
                                >
                                  <i className="ak-icon akfi-schedule" />
                                  {formatDateInHindi(post.date)}
                                </Link>
                                &nbsp;&nbsp; &nbsp;&nbsp;
                                <Link
                                  href={shareLinks.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="facebook"
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
                                  rel="noopener noreferrer"
                                  aria-label="whatsapp"
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
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabIndex={0}
          >
            <div className="ak-block-inner clearfix">
              <div className="ak-block-posts clearfix">
                {thirdData.manoranjan.slice(0, 4).map((post) => {
                  const shareLinks = generateShareLinksm(
                    post.mainKhabarId,
                    post.newsHeading
                  );
                  return (
                    <article
                      key={post.mainKhabarId}
                      className="bordergap ak-module ak-module-1-small-square ak-column-module clearfix ak-exclusive-post post-224 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-tech-science category-us-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
                    >
                      {post.newsImage.endsWith(".mp4") && (
                        <div className="ak-module-inner clearfix">
                          <div className="ak-module-featured">
                            <div className="ak-module-video-duration">
                              <div className="active">Watch</div>
                            </div>
                            <span className="ak-module-format-icon format-video">
                              <i className="ak-icon fa fa-play" />
                            </span>
                            <div className="ak-featured-cover">
                              <Link
                                href={`/BollywoodDetails/${post.mainKhabarId}`}
                                className="ak-featured-link"
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                              >
                                <div className="ak-featured-thumb lazy-thumb">
                                  <video
                                    controls
                                    autoPlay
                                    style={{ height: "75px", width: "75px" }}
                                  >
                                    <source
                                      src={
                                        image_resize +
                                        "?url=" +
                                        baseUrl +
                                        post.newsImage +
                                        "&w=75&h=75&outtype=webp"
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
                                href={`/BollywoodDetails/${post.mainKhabarId}`}
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                              >
                                {stripHtmlTags(post.newsHeading, 50)}
                              </Link>
                            </h1>
                            <div className="ak-module-meta">
                              <div className="ak-module-time">
                                <Link
                                  href={`/BollywoodDetails/${post.mainKhabarId}`}
                                  className="ak-module-meta-published"
                                  aria-label={stripHtmlTags(
                                    post.newsHeading,
                                    30
                                  )}
                                >
                                  <i className="ak-icon akfi-schedule" />
                                  {formatDateInHindi(post.date)}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {!post.newsImage.endsWith(".mp4") && (
                        <div className="ak-module-inner clearfix">
                          <div className="ak-module-featured">
                            <div className="ak-featured-cover">
                              <Link
                                href={`/BollywoodDetails/${post.mainKhabarId}`}
                                className="ak-featured-link"
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                              >
                                <div className="ak-featured-thumb lazy-thumb size-1000">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width={75}
                                    height={75}
                                    src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
                                    className="attachment-newsy_75x75 size-newsy_75x75 wp-post-image lazyautosizes ls-is-cached lazyloaded"
                                    alt=""
                                    data-src={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
                                    data-sizes="auto"
                                    data-srcset={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
                                    data-expand={700}
                                    sizes="75px"
                                    srcSet={
                                      image_resize +
                                      "?url=" +
                                      baseUrl +
                                      post.newsImage +
                                      "&w=75&h=75&outtype=webp"
                                    }
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
                                href={`/BollywoodDetails/${post.mainKhabarId}`}
                                rel="bookmark"
                                aria-label={stripHtmlTags(post.newsHeading, 30)}
                                title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                              >
                                {stripHtmlTags(post.newsHeading, 50)}{" "}
                              </Link>
                            </h1>
                            <div className="ak-module-meta">
                              <div className="ak-module-time">
                                <Link
                                  href={`/BollywoodDetails/${post.mainKhabarId}`}
                                  className="ak-module-meta-published"
                                  aria-label={stripHtmlTags(
                                    post.newsHeading,
                                    30
                                  )}
                                >
                                  <i className="ak-icon akfi-schedule" />
                                  {formatDateInHindi(post.date)}
                                </Link>
                                {/* </div>
                            <div> */}
                                &nbsp;&nbsp; &nbsp;&nbsp;
                                <Link
                                  href={shareLinks.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="facebook"
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
                                  rel="noopener noreferrer"
                                  aria-label="whatsapp"
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
      </div>
    </div>
  );
}
