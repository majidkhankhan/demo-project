import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { hi } from "date-fns/locale";
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

function Movies() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/movise"
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
  const generateShareLinks = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/BollywoodDetails/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
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
      <div id="newsy_block_3-3" className="widget widget_newsy_block_3">
        <div
          className="ak-block ak-block-3  ak-block-column ak-block-module-thumb-round ak-block-width-1 clearfix"
          id="block_665b3808e5243_4"
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
                  <Link
                    href="/Bollywood"
                    aria-label="Bollywood Movies"
                    title="Movies"
                  >
                    मूवीज
                  </Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="ak-block-inner clearfix">
            <div className="ak-block-posts clearfix">
              {posts.movise.slice(0, 1).map((newsItem) => (
                <article
                  key={newsItem.mainKhabarId}
                  className=" bordergap ak-module ak-module-3 ak-column-module ak-module-meta-hide clearfix post-247 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                >
                  <div className="ak-module-inner clearfix">
                    <div className="ak-module-grid-wrap">
                      <div className="ak-module-featured">
                        <div className="ak-module-badges" />
                        <div className="ak-featured-cover">
                          <Link
                            href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                            className="ak-featured-link"
                            rel="bookmark"
                            aria-label={stripHtmlTags(newsItem.newsHeading, 50)}
                            title="How To Make Drinking Just A Tiny Bit Better For You"
                          >
                            <div className="ak-featured-thumb lazy-thumb size-715">
                              <img
                                width={350}
                                height={250}
                                src={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=267&h=228&outtype=webp"
                                }
                                className="attachment-newsy_350x250 size-newsy_350x250 wp-post-image lazyautosizes ls-is-cached lazyloaded"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                data-src={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=267&h=228&outtype=webp"
                                }
                                data-sizes="auto"
                                data-srcset={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=267&h=228&outtype=webp"
                                }
                                data-expand={700}
                                sizes="345px"
                                srcSet={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=267&h=228&outtype=webp"
                                }
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="ak-module-details">
                        <h1 className="ak-module-title">
                          <Link
                            href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                            rel="bookmark"
                            aria-label={stripHtmlTags(newsItem.newsHeading, 50)}
                            title="How To Make Drinking Just A Tiny Bit Better For You"
                          >
                            {stripHtmlTags(newsItem.newsHeading, 50)}
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              {posts.movise.slice(1, 5).map((newsItem) => {
                const shareLinks = generateShareLinks(
                  newsItem.mainKhabarId,
                  newsItem.newsHeading
                );
                return (
                  <article
                    key={newsItem.mainKhabarId}
                    className=" bordergap ak-module ak-module-1-small ak-column-module clearfix post-248 post type-post status-publish format-video has-post-thumbnail  category-entertainment category-sports category-videos category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news post_format-post-format-video"
                  >
                    <div className="ak-module-inner clearfix">
                      <div className="ak-module-featured">
                        <div className="ak-featured-cover">
                          <Link
                            href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                            className="ak-featured-link"
                            rel="bookmark"
                            aria-label={stripHtmlTags(newsItem.newsHeading, 50)}
                            title="How To Pack Like A Pro, According To Flight Attendants"
                          >
                            <div className="ak-featured-thumb lazy-thumb size-715">
                              <img
                                width={120}
                                height={86}
                                src={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=120&h=102&outtype=webp"
                                }
                                className="attachment-newsy_120x86 size-newsy_120x86 wp-post-image lazyautosizes ls-is-cached lazyloaded"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                data-src={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=120&h=102&outtype=webp"
                                }
                                data-sizes="auto"
                                data-srcset={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=120&h=102&outtype=webp"
                                }
                                data-expand={700}
                                sizes="120px"
                                srcSet={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=120&h=102&outtype=webp"
                                }
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="ak-module-details">
                        <h1 className="ak-module-title">
                          <Link
                            href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                            rel="bookmark"
                            aria-label={stripHtmlTags(newsItem.newsHeading, 50)}
                            title="How To Pack Like A Pro, According To Flight Attendants"
                          >
                            {stripHtmlTags(newsItem.newsHeading, 50)}
                          </Link>
                        </h1>
                        <div className="ak-module-meta">
                          <div className="ak-module-time">
                            <Link
                              href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                              className="ak-module-meta-published"
                              aria-label={stripHtmlTags(
                                newsItem.newsHeading,
                                50
                              )}
                            >
                              <i className="ak-icon akfi-schedule" />
                              {formatDateInHindi(newsItem.date)}
                            </Link>
                            &nbsp;&nbsp;&nbsp;
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
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
