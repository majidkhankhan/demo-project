import React from "react";
import Link from "next/link";
import { stripHtmlTags } from "../../util/strip-html";


export default async function BigCard() {
  const posts = await (
    await fetch("https://api.sadaivsatya.com/api/home/mpNews")
  ).json();

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
    const url = `${baseUrl}/MadhyaPradeshDetailsD/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
  };

  const baseUrl = "https://api.sadaivsatya.com/";
  const image_resize = "https://api.sadaivsatya.com/api/home/resize";

  return (
    <div>
      <div className="ak-block-bottom-posts clearfix container">
        {posts.mpNews.slice(0, 1).map((newsItem) => {
          const shareLinks = generateShareLinks(
            newsItem.mainKhabarId,
            newsItem.newsHeading
          );
          return (
            <article
              key={newsItem.mainKhabarId}
              className="ak-module ak-module-2 ak-column-module clearfix post-229 post type-post status-publish format-standard has-post-thumbnail  category-business category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                        title="The One Side Effect Of Trauma We Rarely Talk About"
                      >
                        <div className="ak-featured-thumb lazy-thumb">
                          <video
                            controls
                            autoPlay
                            style={{ height: "250px", width: "350px" }}
                          >
                            <source
                              src={
                                image_resize +
                                "?url=" +
                                baseUrl +
                                newsItem.newsImage +
                                "&w=400&h=300&outtype=webp"
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
                        className="term-46"
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                      >
                        {stripHtmlTags(newsItem.newsTag, 20)}
                      </Link>
                    </div>
                    <div className="ak-module-featured-meta">
                      <div className="ak-module-view-count">
                        <span style={{ color: "#edaa02" }}>
                          <i className="ak-icon  ak-fi akfi-fire" />
                          <span className="count">{newsItem.viewCount}</span>
                        </span>
                      </div>
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
                        title="The One Side Effect Of Trauma We Rarely Talk About"
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
                    </div>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 80)}</p>
                    </div>
                  </div>
                </div>
              )}
              {!newsItem.newsImage.endsWith(".mp4") && (
                <div className="ak-module-inner clearfix">
                  <div className="ak-module-featured">
                    <div className="ak-module-badges" />
                    <div className="ak-featured-cover">
                      <Link
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                        className="ak-featured-link"
                        rel="bookmark"
                        title="The One Side Effect Of Trauma We Rarely Talk About"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="lazy"
                            decoding="async"
                            width={400}
                            height={300}
                            src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=400&h=300&outtype=webp"
                            }
                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                            alt={stripHtmlTags(newsItem.newsHeading, 80)}
                            data-src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=400&h=300&outtype=webp"
                            }
                            data-sizes="auto"
                            data-srcset={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=400&h=300&outtype=webp"
                            }
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ak-module-terms badge">
                      <Link
                        className="term-46"
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                      >
                        {stripHtmlTags(newsItem.newsTag, 20)}
                      </Link>
                    </div>
                    <div className="ak-module-featured-meta">
                      <div className="ak-module-view-count">
                        <span style={{ color: "#edaa02" }}>
                          <i className="ak-icon  ak-fi akfi-fire" />
                          <span className="count">{newsItem.viewCount}</span>
                        </span>
                      </div>
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
                        title="The One Side Effect Of Trauma We Rarely Talk About"
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
                        <span style={{ color: "#000000" }}>
                          <i className="ak-icon  ak-fi akfi-power" />
                          <span className="count">{newsItem.viewCount}</span>
                        </span>
                      </div>
                      <div className="socialmedia">
                        <Link
                          href={shareLinks.facebook}
                          target="_blank"
                          aria-label="Facebook"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                        &nbsp;&nbsp; &nbsp;&nbsp;
                        <Link
                          href={shareLinks.whatsapp}
                          target="_blank"
                          aria-label="whatsapp"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 80)}</p>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {posts.mpNews.slice(1, 2).map((newsItem) => {
          const shareLinks = generateShareLinks(
            newsItem.mainKhabarId,
            newsItem.newsHeading
          );
          return (
            <article
              key={newsItem.mainKhabarId}
              className="ak-module ak-module-2 ak-column-module clearfix post-229 post type-post status-publish format-standard has-post-thumbnail  category-business category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                        title="The One Side Effect Of Trauma We Rarely Talk About"
                      >
                        <div className="ak-featured-thumb lazy-thumb">
                          <video
                            controls
                            autoPlay
                            style={{ height: "250px", width: "350px" }}
                          >
                            <source
                              src={
                                image_resize +
                                "?url=" +
                                baseUrl +
                                newsItem.newsImage +
                                "&w=400&h=300&outtype=webp"
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
                        className="term-46"
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                      >
                        {stripHtmlTags(newsItem.newsTag, 20)}
                      </Link>
                    </div>
                    <div className="ak-module-featured-meta">
                      <div className="ak-module-view-count">
                        <span style={{ color: "#edaa02" }}>
                          <i className="ak-icon  ak-fi akfi-fire" />
                          <span className="count">{newsItem.viewCount}</span>
                        </span>
                      </div>
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
                        title="The One Side Effect Of Trauma We Rarely Talk About"
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
                    </div>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 80)}</p>
                    </div>
                  </div>
                </div>
              )}
              {!newsItem.newsImage.endsWith(".mp4") && (
                <div className="ak-module-inner clearfix">
                  <div className="ak-module-featured">
                    <div className="ak-module-badges" />
                    <div className="ak-featured-cover">
                      <Link
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                        className="ak-featured-link"
                        rel="bookmark"
                        title="The One Side Effect Of Trauma We Rarely Talk About"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="lazy"
                            decoding="async"
                            width={400}
                            height={300}
                            src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=400&h=300&outtype=webp"
                            }
                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                            alt={stripHtmlTags(newsItem.newsHeading, 80)}
                            data-src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=400&h=300&outtype=webp"
                            }
                            data-sizes="auto"
                            data-srcset={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=400&h=300&outtype=webp"
                            }
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ak-module-terms badge">
                      <Link
                        className="term-46"
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                      >
                        {stripHtmlTags(newsItem.newsTag, 20)}
                      </Link>
                    </div>
                    <div className="ak-module-featured-meta">
                      <div className="ak-module-view-count">
                        <span style={{ color: "#edaa02" }}>
                          <i className="ak-icon  ak-fi akfi-fire" />
                          <span className="count">{newsItem.viewCount}</span>
                        </span>
                      </div>
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
                        title="The One Side Effect Of Trauma We Rarely Talk About"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 92)}
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
                        <span style={{ color: "#000000" }}>
                          <i className="ak-icon  ak-fi akfi-power" />
                          <span className="count">{newsItem.viewCount}</span>
                        </span>
                      </div>
                      <div className="socialmedia">
                        <Link
                          href={shareLinks.facebook}
                          target="_blank"
                          aria-label="Facebook"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                        &nbsp;&nbsp; &nbsp;&nbsp;
                        <Link
                          href={shareLinks.whatsapp}
                          target="_blank"
                          aria-label="whatsapp"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 80)}</p>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
