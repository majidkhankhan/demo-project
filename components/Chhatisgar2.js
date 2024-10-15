import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Circles } from "react-loader-spinner";

const BASE_URL = "https://api.sadaivsatya.com/";
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

function Chhatisgar2() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/cgNews"
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

  const handleNewsClick = (trendingTagId) => {
    navigate.push(`/NewsDetails/${trendingTagId}`);
  };
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
  return (
    <div>
      <div className="row vc_row">
        <div
          className="ak_vc_container"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <div className="wpb_column ak_column_3 vc_column_container vc_col-sm-12">
            <div className="ak_vc_wrapper wpb_wrapper">
              <div
                className="ak-block ak-block-10 ak-block-module-thumb-round ak-block-inner-boxed ak-block-width-3 clearfix"
                id="block_65f7f61f36732_12"
              >
                <div className="ak-block-header wdgt-hdng  ak-block-header-style-5 no-tabs">
                  <b style={{ marginLeft: "10px" }}>छत्तीसगढ-</b>
                </div>
                <div className="ak-block-inner clearfix">
                  <div className="ak-block-posts clearfix">
                    <div className="row">
                      <div className="col-sm-3">
                        {postData.cgNews.slice(0, 1).map((post) => (
                          <article
                            key={post.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-237 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
                          >
                            <div className="ak-module-inner clearfix">
                              <div className="ak-module-featured">
                                <div className="ak-module-badges" />
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    rel="bookmark"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                  >
                                    <div className="ak-featured-thumb lazy-thumb size-715">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={350}
                                        height={250}
                                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                        alt=""
                                        data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        data-sizes="auto"
                                        data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        data-expand={700}
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="ak-module-terms badge">
                                  <Link
                                    className="term-47"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                  >
                                    {stripHtmlTags(post.newsTag, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1 className="ak-module-title">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    rel="bookmark"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    title="Summer Beauty Products Under $20 You Can Score At Walmart"
                                  >
                                    {stripHtmlTags(post.newsHeading, 40)}
                                  </Link>
                                </h1>
                              </div>
                            </div>
                          </article>
                        ))}
                        {postData.cgNews.slice(1, 2).map((post) => (
                          <article
                            key={post.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-238 post type-post status-publish format-video has-post-thumbnail  category-entertainment category-featured category-tech-science category-videos tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
                          >
                            <div className="ak-module-inner clearfix">
                              <div className="ak-module-featured">
                                <div className="ak-module-badges" />
                                <div className="ak-module-video-duration"></div>
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    rel="bookmark"
                                    title="Can you guess what’s wrong with these paintings?"
                                  >
                                    <div className="ak-featured-thumb lazy-thumb size-715">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={350}
                                        height={250}
                                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                        alt=""
                                        data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        data-sizes="auto"
                                        data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        data-expand={700}
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="ak-module-terms badge">
                                  <Link
                                    className="term-51"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                  >
                                    {stripHtmlTags(post.newsTag, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1 className="ak-module-title">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    rel="bookmark"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    title="Can you guess what’s wrong with these paintings?"
                                  >
                                    {stripHtmlTags(post.newsHeading, 50)}
                                  </Link>
                                </h1>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                      <div className="col-sm-6">
                        {postData.cgNews.slice(2, 3).map((post) => (
                          <article
                            key={post.mainKhabarId}
                            className="ak-module ak-module-6 clearfix post-239 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science tag-breaking tag-election tag-politics tag-technology tag-world-news"
                          >
                            <div className="clearfix ak-module-inner">
                              <div className="clearfix ak-module-featured">
                                <div className="ak-module-badges" />
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    rel="bookmark"
                                    title="19 Brilliant Hacks for Your Next Family Camping Trip"
                                  >
                                    <div className="ak-featured-thumb lazy-thumb size-715">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={750}
                                        height={536}
                                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=487&h=348&outtype=webp`}
                                        className="attachment-newsy_750x536 size-newsy_750x536 lazyload wp-post-image"
                                        alt=""
                                        data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=487&h=348&outtype=webp`}
                                        data-sizes="auto"
                                        data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=487&h=348&outtype=webp`}
                                        data-expand={700}
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="ak-module-terms badge">
                                  <Link
                                    className="term-46"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                  >
                                    {stripHtmlTags(post.newsTag, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1 className="ak-module-title">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    rel="bookmark"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    title="19 Brilliant Hacks for Your Next Family Camping Trip"
                                  >
                                    {stripHtmlTags(post.newsHeading, 60)}
                                  </Link>
                                </h1>
                                <div className="ak-module-meta">
                                  {/* <div className="ak-module-author">
                                  <Link   href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}>
                                    <img
                                      alt="Picabo Street"
                                      aria-label={stripHtmlTags(post.newsHeading, 30)}
                                      src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                      srcSet={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                      className="avatar avatar-22 photo post-author-avatar"
                                      height={22}
                                      width={22}
                                    />
                                  </Link>
                                  {stripHtmlTags(post.newsTag, 15)}-
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    aria-label={stripHtmlTags(post.newsHeading, 30)}
                                    className="ak-module-author-name"
                                  >
                                  {stripHtmlTags(post.newsHeading, 15)}
                                  </Link>
                                </div> */}
                                  <div className="ak-module-time">
                                    <Link
                                      href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                      aria-label={stripHtmlTags(
                                        post.newsHeading,
                                        30
                                      )}
                                      className="ak-module-meta-published"
                                    >
                                      <i className="ak-icon akfi-schedule" />
                                      {formatDateInHindi(post.date)}
                                    </Link>
                                  </div>
                                  <div className="ak-module-view-count">
                                    <i className="ak-icon  ak-fi akfi-trending_up" />
                                  </div>
                                </div>
                                <div className="ak-module-summary">
                                  <p> {stripHtmlTags(post.newsDetails, 140)}</p>
                                </div>
                                <div className="clearfix ak-module-bottom" />
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                      <div className="col-sm-3">
                        {postData.cgNews.slice(3, 4).map((post) => (
                          <article
                            key={post.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-240 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-featured category-sports category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                          >
                            <div className="ak-module-inner clearfix">
                              <div className="ak-module-featured">
                                <div className="ak-module-badges">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    title="Featured"
                                  >
                                    <span className="ak-badge-icon ak-badge-type-icon term-43">
                                      <i className="ak-icon ak-badge-icon-i ak-fi akfi-trending_up" />
                                    </span>
                                  </Link>
                                </div>
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
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
                                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                        alt=""
                                        data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        data-sizes="auto"
                                        data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        data-expand={700}
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="ak-module-terms badge">
                                  <Link
                                    className="term-43"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                  >
                                    {stripHtmlTags(post.newsTag, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1 className="ak-module-title">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    rel="bookmark"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    title="Here’s How You Can Book A Trip For Just $1"
                                  >
                                    {stripHtmlTags(post.newsHeading, 50)}
                                  </Link>
                                </h1>
                              </div>
                            </div>
                          </article>
                        ))}
                        {postData.cgNews.slice(4, 5).map((post) => (
                          <article
                            key={post.mainKhabarId}
                            className="ak-module ak-module-2 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-241 post type-post status-publish format-standard has-post-thumbnail  category-entertainment category-us-news category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news"
                          >
                            <div className="ak-module-inner clearfix">
                              <div className="ak-module-featured">
                                <div className="ak-module-badges" />
                                <div className="ak-featured-cover">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    className="ak-featured-link"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    rel="bookmark"
                                    title="Is January Really The Best Month To Book Cheap Flights?"
                                  >
                                    <div className="ak-featured-thumb lazy-thumb size-715">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={350}
                                        height={250}
                                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                        alt=""
                                        data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        data-sizes="auto"
                                        data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=231&h=165&outtype=webp`}
                                        data-expand={700}
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="ak-module-terms badge">
                                  <Link
                                    className="term-47"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                  >
                                    {stripHtmlTags(post.newsTag, 20)}
                                  </Link>
                                </div>
                              </div>
                              <div className="ak-module-details">
                                <h1 className="ak-module-title">
                                  <Link
                                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                                    rel="bookmark"
                                    aria-label={stripHtmlTags(
                                      post.newsHeading,
                                      30
                                    )}
                                    title="Is January Really The Best Month To Book Cheap Flights?"
                                  >
                                    {stripHtmlTags(post.newsHeading, 40)}
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
      </div>
    </div>
  );
}

export default Chhatisgar2;
