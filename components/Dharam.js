import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "next/navigation";
import Link from "next/link";
import { Circles } from "react-loader-spinner";

const BASE_URL = "https://api.sadaivsatya.com/";

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
const Card = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/dharams"
        );
        setPostData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNewsClick = (mainKhabarId) => {
    navigate(`/NewsDetails5/${mainKhabarId}`);
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
                    {postData.dharam.slice(0, 1).map((post) => (
                      <article
                        key={post.id}
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
                                  href={post.link}
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title={post.title}
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
                                        src={`${BASE_URL}${post.newsImage}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
                                >
                                  {stripHtmlTags(post.newsHeading, 50)}{" "}
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
                                  href={post.link}
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title={post.title}
                                >
                                  <div className="ak-featured-thumb lazy-thumb size-500">
                                    <img
                                      fetchPriority="high"
                                      decoding="async"
                                      width={360}
                                      height={180}
                                      src={`${BASE_URL}${post.newsImage}`}
                                      className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                      alt={post.title}
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="ak-module-terms badge">
                                <Link
                                  className="term-46"
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
                                >
                                  {stripHtmlTags(post.newsHeading, 50)}{" "}
                                </Link>
                              </h1>
                            </div>
                          </div>
                        )}
                      </article>
                    ))}
                    {postData.dharam.slice(1, 2).map((post) => (
                      <article className="ak-module ak-module-2-wide ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-227 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-tech-science category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article">
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
                                  href="#"
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
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
                                        src={`${BASE_URL}${post.newsImage}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
                                >
                                  {stripHtmlTags(post.newsHeading, 40)}
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
                                  href="#"
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title="Everything you need to know about Amazon’s Prime Early Access Sale next week"
                                >
                                  <div className="ak-featured-thumb lazy-thumb size-500">
                                    <img
                                      decoding="async"
                                      width={360}
                                      height={180}
                                      src={`${BASE_URL}${post.newsImage}`}
                                      className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                      alt=""
                                      data-src={`${BASE_URL}${post.newsImage}`}
                                      data-sizes="auto"
                                      data-srcset={`${BASE_URL}${post.newsImage}`}
                                      data-expand={700}
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="ak-module-terms badge">
                                <Link
                                  className="term-46"
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
                                >
                                  {stripHtmlTags(post.newsHeading, 40)}
                                </Link>
                              </h1>
                            </div>
                          </div>
                        )}
                      </article>
                    ))}
                    {postData.dharam.slice(2, 3).map((post) => (
                      <article
                        key={post.id}
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
                                  href={post.link}
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title={post.title}
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
                                        src={`${BASE_URL}${post.newsImage}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
                                >
                                  {stripHtmlTags(post.newsHeading, 50)}{" "}
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
                                  href={post.link}
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title={post.title}
                                >
                                  <div className="ak-featured-thumb lazy-thumb size-500">
                                    <img
                                      fetchPriority="high"
                                      decoding="async"
                                      width={360}
                                      height={180}
                                      src={`${BASE_URL}${post.newsImage}`}
                                      className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                      alt={post.title}
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="ak-module-terms badge">
                                <Link
                                  className="term-46"
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
                                >
                                  {stripHtmlTags(post.newsHeading, 50)}{" "}
                                </Link>
                              </h1>
                            </div>
                          </div>
                        )}
                      </article>
                    ))}
                    {postData.dharam.slice(3, 4).map((post) => (
                      <article
                        key={post.id}
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
                                  href={post.link}
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title={post.title}
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
                                        src={`${BASE_URL}${post.newsImage}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
                                >
                                  {stripHtmlTags(post.newsHeading, 50)}{" "}
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
                                  href={post.link}
                                  className="ak-featured-link"
                                  rel="bookmark"
                                  title={post.title}
                                >
                                  <div className="ak-featured-thumb lazy-thumb size-500">
                                    <img
                                      fetchPriority="high"
                                      decoding="async"
                                      width={360}
                                      height={180}
                                      src={`${BASE_URL}${post.newsImage}`}
                                      className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                      alt={post.title}
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="ak-module-terms badge">
                                <Link
                                  className="term-46"
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
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
                                  href={`/NewsDetails5/${post.mainKhabarId}`}
                                >
                                  {stripHtmlTags(post.newsHeading, 50)}{" "}
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
  );
};

export default Card;
