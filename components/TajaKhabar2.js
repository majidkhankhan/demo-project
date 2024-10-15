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

function TajaKhabar2() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/frontKhabars"
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
    const url = `${window.location.origin}/TajaKhabarDetailsNews/${mainKhabarId}`;
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
          id="block_65fab515e40bc_4"
        >
          <div className="ak-block-header ak-block-header-style-5 no-tabs mt-2">
            <div
              className="main-wdgt container"
              id="widget-rs-4937"
              data-vars-widget-type="home"
              data-vars-widget-name="astrology"
              data-vars-orderid={10}
            >
              <div className="wdgt-hdng">
                <h1 className="head">
                  <Link href="/" title="ताजा खबरें" aria-label="ताजा खबरें">
                    ताजा खबरें
                  </Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="ak-block-inner clearfix">
            <div className="ak-block-posts clearfix">
              {posts.frontKhabars.slice(0, 5).map((newsItem) => {
                const shareLinks = generateShareLinks(
                  newsItem.mainKhabarId,
                  newsItem.newsHeading
                );
                return (
                  <article
                    key={newsItem.mainKhabarId}
                    className="bordergap  ak-module ak-module-1-small ak-column-module clearfix post-249 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-featured category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                  >
                    <div className="ak-module-inner clearfix">
                      <div className="ak-module-featured">
                        <div className="ak-featured-cover">
                          <Link
                            href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                            className="ak-featured-link"
                            rel="bookmark"
                            aria-label={stripHtmlTags(newsItem.newsHeading, 40)}
                            title={stripHtmlTags(newsItem.newsHeading, 50)}
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
                                  "&w=120&h=86&outtype=webp"
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
                                  "&w=120&h=86&outtype=webp"
                                }
                                data-sizes="auto"
                                data-srcset={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=120&h=86&outtype=webp"
                                }
                                data-expand={700}
                                sizes="120px"
                                srcSet={
                                  image_resize +
                                  "?url=" +
                                  baseUrl +
                                  newsItem.newsImage +
                                  "&w=120&h=86&outtype=webp"
                                }
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="ak-module-details">
                        <h1 className="ak-module-title">
                          <Link
                            href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                            rel="bookmark"
                            aria-label={stripHtmlTags(newsItem.newsHeading, 40)}
                            title={stripHtmlTags(newsItem.newsHeading, 40)}
                          >
                            {stripHtmlTags(newsItem.newsHeading, 40)}
                          </Link>
                        </h1>
                        <div className="socialmedia">
                          <div className="ak-module-meta">
                            <div className="ak-module-time">
                              <Link
                                href={`/TajaKhabarDetailsNews/${newsItem.mainKhabarId}`}
                                className="ak-module-meta-published"
                                aria-label={stripHtmlTags(
                                  newsItem.newsHeading,
                                  40
                                )}
                              >
                                <i className="ak-icon akfi-schedule" />
                                {formatDateInHindi(newsItem.date)}
                              </Link>
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
                              </Link>{" "}
                            </div>
                          </div>

                          <div></div>
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

export default TajaKhabar2;
