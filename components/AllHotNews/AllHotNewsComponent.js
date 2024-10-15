import React from "react";
import Link from "next/link";
import { stripHtmlTags } from "../../util/strip-html";

export default async function AllHotNews() {
  const posts = await (
    await fetch("https://api.sadaivsatya.com/api/home/frontKhabars")
  ).json();


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
      <div className="container">
        {posts.frontKhabars.slice(0, 1).map((newsItem) => {
          const shareLinks = generateShareLinks(
            newsItem.mainKhabarId,
            newsItem.newsHeading
          );
          return (
            <article
              key={newsItem.mainKhabarId}
              className="ak-module ak-module-1-medium clearfix post-226 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-sports category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                        title="Robot companies pledge they’re not going to let the robots kill you"
                        aria-label="Shabd Today"
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
                                "&w=270&h=270&outtype=webp"
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
                        className="term-43"
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                        aria-label="Shabd Today"
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
                        title="Robot companies pledge they’re not going to let the robots kill you"
                        aria-label="Shabd Today"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 100)}
                      </Link>
                    </h1>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 200)}</p>
                    </div>
                    <div className="ak-module-meta gayab">
                      <div className="ak-module-time">
                        <Link
                          href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                          aria-label="Shabd Today"
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
                    </div>
                  </div>
                </div>
              )}
              {!newsItem.newsImage.endsWith(".mp4") && (
                <div className="ak-module-inner clearfix">
                  <div className="ak-module-featured">
                    <div className="ak-module-badges">
                      <Link
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                        title="Featured"
                        aria-label="Shabd Today"
                      >
                        <span className="ak-badge-icon ak-badge-type-icon term-43">
                          <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                        </span>
                      </Link>
                    </div>
                    <div className="ak-featured-cover">
                      <Link
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                        className="ak-featured-link"
                        rel="bookmark"
                        title="Robot companies pledge they’re not going to let the robots kill you"
                        aria-label="Shabd Today"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="eager"
                            decoding="async"
                            width={270}
                            height={270}
                            src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=270&h=270&outtype=webp"
                            }
                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                            alt={stripHtmlTags(newsItem.newsHeading, 100)}
                            data-src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=270&h=270&outtype=webp"
                            }
                            data-sizes="auto"
                            data-srcset={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=270&h=270&outtype=webp"
                            }
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ak-module-terms badge">
                      <Link
                        className="term-43"
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                        aria-label="Shabd Today"
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
                        title="Robot companies pledge they’re not going to let the robots kill you"
                        aria-label="Shabd Today"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 100)}
                      </Link>
                    </h1>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 200)}</p>
                    </div>
                    <div className="ak-module-meta gayab">
                      <div className="ak-module-time">
                        <Link
                          href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                          aria-label="Shabd Today"
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
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {posts.frontKhabars.slice(1, 2).map((newsItem) => {
          const shareLinks = generateShareLinks(
            newsItem.mainKhabarId,
            newsItem.newsHeading
          );
          return (
            <article
              key={newsItem.mainKhabarId}
              className="ak-module ak-module-1-medium clearfix ak-exclusive-post post-227 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-tech-science category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
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
                        title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
                        aria-label="Shabd Today"
                      >
                        <div className="ak-featured-thumb lazy-thumb">
                          <video
                            controls
                            autoPlay
                          // style={{ height: "250px", width: "350px" }}
                          >
                            <source
                              src={
                                image_resize +
                                "?url=" +
                                baseUrl +
                                newsItem.newsImage +
                                "&w=270&h=270&outtype=webp"
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
                        className="term-50"
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                        aria-label="Shabd Today"
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
                        title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
                        aria-label="Shabd Today"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 100)}
                      </Link>
                    </h1>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 200)}</p>
                    </div>
                    <div className="ak-module-meta gayab">
                      <div className="ak-module-time">
                        <Link
                          href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                          aria-label="Shabd Today"
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
                        title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
                        aria-label="Shabd Today"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="eager "
                            decoding="async"
                            width={270}
                            height={270}
                            src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=270&h=270&outtype=webp"
                            }
                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                            alt={stripHtmlTags(newsItem.newsHeading, 100)}
                            data-src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=270&h=270&outtype=webp"
                            }
                            data-sizes="auto"
                            data-srcset={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=270&h=270&outtype=webp"
                            }
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ak-module-terms badge">
                      <Link
                        className="term-50"
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                        aria-label="Shabd Today"
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
                        title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
                        aria-label="Shabd Today"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 100)}
                      </Link>
                    </h1>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 200)}</p>
                    </div>
                    <div className="ak-module-meta gayab">
                      <div className="ak-module-time">
                        <Link
                          href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                          className="ak-module-meta-published"
                          aria-label="Shabd Today"
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
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {posts.frontKhabars.slice(2, 3).map((newsItem) => {
          const shareLinks = generateShareLinks(
            newsItem.mainKhabarId,
            newsItem.newsHeading
          );
          return (
            <article
              key={newsItem.mainKhabarId}
              className="ak-module ak-module-1-medium clearfix post-228 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-featured category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
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
                        title="Do We Really Need To Wear Hair Products That Contain Sunscreen?"
                        aria-label="Shabd Today"
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
                                "&w=376&h=321&outtype=webp"
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
                        className="term-45"
                        href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                        aria-label="Shabd Today"
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
                        title="Do We Really Need To Wear Hair Products That Contain Sunscreen?"
                        aria-label="Shabd Today"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 90)}
                      </Link>
                    </h1>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 200)}</p>
                    </div>
                    <div className="ak-module-meta gayab">
                      <div className="ak-module-time">
                        <Link
                          href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                          aria-label="Shabd Today"
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
                        title="Do We Really Need To Wear Hair Products That Contain Sunscreen?"
                        aria-label="Shabd Today"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="eager "
                            decoding="async"
                            width={270}
                            height={270}
                            src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=376&h=321&outtype=webp"
                            }
                            className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                            alt={stripHtmlTags(newsItem.newsHeading, 100)}
                            data-src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=376&h=321&outtype=webp"
                            }
                            data-sizes="auto"
                            data-srcset={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=376&h=321&outtype=webp"
                            }
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ak-module-terms badge">
                      <Link
                        className="term-45"
                        href="#"
                        aria-label="Shabd Today"
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
                        title="Do We Really Need To Wear Hair Products That Contain Sunscreen?"
                        aria-label="Shabd Today"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 90)}
                      </Link>
                    </h1>
                    <div className="ak-module-summary">
                      <p>{stripHtmlTags(newsItem.newsDetails, 200)}</p>
                    </div>
                    <div className="ak-module-meta gayab">
                      <div className="ak-module-time">
                        <Link
                          href={`/MadhyaPradeshDetailsD/${newsItem.mainKhabarId}`}
                          aria-label="Shabd Today"
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
