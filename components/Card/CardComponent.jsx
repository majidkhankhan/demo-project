import React from "react";
import Link from "next/link";
import { baseUrl } from "../../constants/API";
import Image from "next/image";
import { stripHtmlTags } from "../../util/strip-html";

const BASE_URL = "https://api.sadaivsatya.com/";
const image_resize = "https://api.sadaivsatya.com/api/home/resize";

const CardComponent = async () => {
  const postData = await (
    await fetch("https://api.sadaivsatya.com/api/home/breaking")
  ).json();

  const generateShareLinks = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${baseUrl}/TajaKhabarDetailsNews/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
  };

  return (
    <div>
      <div className="row vc_row ak-hidden-sm">
        <div className="ak_vc_container">
          <div className="wpb_column ak_column_3 vc_column_container vc_col-sm-12">
            <div className="ak_vc_wrapper wpb_wrapper">
              <div
                className="ak-block ak-block-list-2-wide ak-block-column ak-block-module-inner-boxed ak-block-inner-border-round ak-block-module-thumb-round ak-block-width-4 clearfix"
                id="block_65f7f61f36732_2"
              >
                <div className="ak-block-inner clearfix">
                  <div className="ak-block-posts clearfix">
                    {postData.breaking.slice(0, 1).map((post) => {
                      const shareLinks = generateShareLinks(
                        post.mainKhabarId,
                        post.newsHeading
                      );
                      return (
                        <article
                          key={post.mainKhabarId}
                          className="ak-module ak-module-2-wide ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                        >
                          {post.newsImage.endsWith(".mp4") && (
                            <div className="ak-module-inner clearfix">
                              <div className="ak-module-featured">
                                <div className="ak-module-badges" />
                                <div className="ak-module-video-duration"></div>
                                <span className="ak-module-format-icon format-video">
                                  <i className="ak-icon fa fa-play" />
                                </span>
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    rel="bookmark"
                                    title={post.title}
                                    aria-label={post.title}
                                  >
                                    <div className="ak-featured-thumb lazy-thumb">
                                      <video
                                        controls
                                        autoPlay
                                        style={{
                                          height: "180px",
                                          width: "360px",
                                        }}
                                      >
                                        <source
                                          src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
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
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1
                                  className="ak-module-title"
                                  style={{ fontSize: "16px" }}
                                >
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 55)}{" "}
                                  </Link>
                                </h1>
                              </div>
                            </div>
                          )}

                          {!post.newsImage.endsWith(".mp4") && (
                            <div className="ak-module-inner clearfix">
                              <div className="ak-module-featured">
                                <div className="ak-module-badges" />
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    rel="bookmark"
                                    title={post.title}
                                    aria-label={post.title}
                                  >
                                    <div className="ak-featured-thumb lazy-thumb size-500">
                                      <Image
                                        priority
                                        width={360}
                                        height={180}
                                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
                                        className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                        alt={post.newsHeading}
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="ak-module-terms badge">
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1
                                  className="ak-module-title"
                                  style={{ fontSize: "16px" }}
                                >
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 55)}{" "}
                                  </Link>
                                </h1>
                                <div className="socialmedia">
                                  <Link
                                    href={shareLinks.facebook}
                                    target="_blank"
                                    aria-label="Facebook"
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
                                    aria-label="Whatsapp"
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
                          )}
                        </article>
                      );
                    })}
                    {postData.breaking.slice(1, 2).map((post) => {
                      const shareLinks = generateShareLinks(
                        post.mainKhabarId,
                        post.newsHeading
                      );
                      return (
                        <article
                          key={post.mainKhabarId}
                          className="ak-module ak-module-2-wide ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-227 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-tech-science category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
                        >
                          {post.newsImage.endsWith(".mp4") && (
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
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    rel="bookmark"
                                    title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
                                    aria-label={post.title}
                                  >
                                    <div className="ak-featured-thumb lazy-thumb ">
                                      <video
                                        controls
                                        autoPlay
                                        style={{
                                          height: "180px",
                                          width: "360px",
                                        }}
                                      >
                                        <source
                                          src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
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
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 20)}{" "}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1
                                  className="ak-module-title"
                                  style={{ fontSize: "16px" }}
                                >
                                  {/* <Link href={`/NewsDetails2/${post.mainKhabarId}`} rel="bookmark" title="Everything you need to know about Amazon’s Prime Early Access Sale next week"> */}
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 45)}
                                  </Link>
                                </h1>
                              </div>
                            </div>
                          )}
                          {!post.newsImage.endsWith(".mp4") && (
                            <div className="ak-module-inner clearfix">
                              <div className="ak-module-featured">
                                <div className="ak-module-badges" />
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    rel="bookmark"
                                    title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
                                    aria-label={post.title}
                                  >
                                    <div className="ak-featured-thumb lazy-thumb size-500">
                                      <Image
                                        priority={true}
                                        width={360}
                                        height={180}
                                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
                                        className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                        alt={post.newsHeading}
                                        data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
                                        data-sizes="auto"
                                        data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
                                        data-expand={700}
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="ak-module-terms badge">
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 20)}{" "}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1
                                  className="ak-module-title"
                                  style={{ fontSize: "16px" }}
                                >
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 45)}
                                  </Link>
                                </h1>
                                <div className="socialmedia">
                                  <Link
                                    href={shareLinks.facebook}
                                    target="_blank"
                                    aria-label="Facebook"
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
                                    aria-label="Whatsapp"
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
                          )}
                        </article>
                      );
                    })}
                    {postData.breaking.slice(2, 3).map((post) => {
                      const shareLinks = generateShareLinks(
                        post.mainKhabarId,
                        post.newsHeading
                      );
                      return (
                        <article
                          key={post.mainKhabarId}
                          className="ak-module ak-module-2-wide ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                        >
                          {post.newsImage.endsWith(".mp4") && (
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
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    rel="bookmark"
                                    title={post.title}
                                    aria-label={post.title}
                                  >
                                    <div className="ak-featured-thumb lazy-thumb">
                                      <video
                                        controls
                                        autoPlay
                                        style={{
                                          height: "180px",
                                          width: "360px",
                                        }}
                                      >
                                        <source
                                          src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
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
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1
                                  className="ak-module-title"
                                  style={{ fontSize: "16px" }}
                                >
                                  <Link
                                    className="term-46"
                                    aria-label={post.title}
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                  >
                                    {stripHtmlTags(post.newsHeading, 55)}{" "}
                                  </Link>
                                </h1>
                              </div>
                            </div>
                          )}
                          {!post.newsImage.endsWith(".mp4") && (
                            <div className="ak-module-inner clearfix">
                              <div className="ak-module-featured">
                                <div className="ak-module-badges" />
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    rel="bookmark"
                                    title={post.title}
                                    aria-label={post.title}
                                  >
                                    <div className="ak-featured-thumb lazy-thumb size-500">
                                      <Image
                                        priority={true}
                                        fetchPriority="high"
                                        width={360}
                                        height={180}
                                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
                                        className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                        alt={post.newsHeading}
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="ak-module-terms badge">
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1
                                  className="ak-module-title"
                                  style={{ fontSize: "16px" }}
                                >
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 55)}{" "}
                                  </Link>
                                </h1>
                                <div className="socialmedia">
                                  <Link
                                    href={shareLinks.facebook}
                                    target="_blank"
                                    aria-label="Facebook"
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
                                    aria-label="Whatsapp"
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
                          )}
                        </article>
                      );
                    })}
                    {postData.breaking.slice(3, 4).map((post) => {
                      const shareLinks = generateShareLinks(
                        post.mainKhabarId,
                        post.newsHeading
                      );
                      return (
                        <article
                          key={post.mainKhabarId}
                          className="ak-module ak-module-2-wide ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                        >
                          {post.newsImage.endsWith(".mp4") && (
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
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    rel="bookmark"
                                    title={post.title}
                                    aria-label={post.title}
                                  >
                                    <div className="ak-featured-thumb lazy-thumb">
                                      <video
                                        controls
                                        autoPlay
                                        style={{
                                          height: "180px",
                                          width: "360px",
                                        }}
                                      >
                                        <source
                                          src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
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
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1
                                  className="ak-module-title"
                                  style={{ fontSize: "16px" }}
                                >
                                  <Link
                                    className="term-46"
                                    aria-label={post.title}
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                  >
                                    {stripHtmlTags(post.newsHeading, 55)}{" "}
                                  </Link>
                                </h1>
                              </div>
                            </div>
                          )}
                          {!post.newsImage.endsWith(".mp4") && (
                            <div className="ak-module-inner clearfix">
                              <div className="ak-module-featured">
                                <div className="ak-module-badges" />
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    rel="bookmark"
                                    title={post.title}
                                    aria-label={post.title}
                                  >
                                    <div className="ak-featured-thumb lazy-thumb size-500">
                                      <Image
                                        priority={true}
                                        fetchPriority="high"
                                        width={360}
                                        height={180}
                                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=360&h=180&outtype=webp`}
                                        className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                        alt={post.newsHeading}
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="ak-module-terms badge">
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1
                                  className="ak-module-title"
                                  style={{ fontSize: "16px" }}
                                >
                                  <Link
                                    className="term-46"
                                    href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                    aria-label={post.title}
                                  >
                                    {stripHtmlTags(post.newsHeading, 55)}{" "}
                                  </Link>
                                </h1>
                                <div className="socialmedia">
                                  <Link
                                    href={shareLinks.facebook}
                                    target="_blank"
                                    aria-label="Facebook"
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
                                    aria-label="Whatsapp"
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
      </div>
    </div>
  );
};

export default CardComponent;
