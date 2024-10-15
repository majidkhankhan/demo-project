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

function FilmReview() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/tvSerial"
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
  return (
    <div>
      <div
        className="ak-block ak-block-list-12 ak-block-module-inner-boxed ak-block-width-2 clearfix"
        id="block_65f7f61f36732_4"
      >
        <div className="ak-block-header ak-block-header-style-5 no-tabs">
          <div
            className="main-wdgt container"
            id="widget-rs-4937"
            data-vars-widget-type="home"
            data-vars-widget-name="astrology"
            data-vars-orderid={10}
          >
            <div className="wdgt-hdng mt-3">
              <h1 className="head">
                <Link
                  href="/Bollywood"
                  title="टीवी सीरियल"
                  aria-label="टीवी सीरियल"
                >
                  टीवी सीरियल
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div className="ak-block-inner clearfix">
          <div className="ak-block-posts clearfix">
            <div>
              {postData.tvSerial.slice(0, 5).map((post) => {
                const shareLinks = generateShareLinks(
                  post.mainKhabarId,
                  post.newsHeading
                );
                return (
                  <article
                    key={post.mainKhabarId}
                    className="ak-module ak-module-1-medium clearfix post-226 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-sports category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news"
                  >
                    <div className="ak-module-inner clearfix">
                      <div className="ak-module-featured">
                        <div className="ak-featured-cover">
                          <Link
                            href={`/BollywoodDetails/${post.mainKhabarId}`}
                            className="ak-featured-link"
                            rel="bookmark"
                            aria-label={stripHtmlTags(post.newsHeading, 100)}
                            title={stripHtmlTags(post.newsHeading, 100)}
                          >
                            <div className="ak-featured-thumb lazy-thumb size-715">
                              <img
                                loading="lazy"
                                decoding="async"
                                width={350}
                                height={250}
                                src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=270&h=193&outtype=webp`}
                                className="attachment-newsy_350x250 size-newsy_350x250 lazyload wp-post-image"
                                alt=""
                                data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=270&h=193&outtype=webp`}
                                data-sizes="auto"
                                data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=270&h=193&outtype=webp`}
                                data-expand={700}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="ak-module-details">
                        <h1 className="ak-module-title">
                          <Link
                            href={`/BollywoodDetails/${post.mainKhabarId}`}
                            rel="bookmark"
                            aria-label={stripHtmlTags(post.newsHeading, 100)}
                            title={stripHtmlTags(post.newsHeading, 100)}
                          >
                            {stripHtmlTags(post.newsHeading, 100)}
                          </Link>
                        </h1>
                        <div className="ak-module-summary">
                          <p>{stripHtmlTags(post.newsDetails, 250)}</p>
                        </div>
                        <div className="socialmedia">
                          <div className="ak-module-meta gayab">
                            <div className="ak-module-time">
                              <Link
                                href={`/BollywoodDetails/${post.mainKhabarId}`}
                                aria-label={stripHtmlTags(
                                  post.newsHeading,
                                  100
                                )}
                                className="ak-module-meta-published"
                              >
                                <i
                                  className="ak-icon akfi-schedule"
                                  style={{ color: "white" }}
                                />
                                <b>{formatDateInHindi(post.date)}</b>
                              </Link>
                            </div>
                            <div className="ak-module-view-count">
                              <span style={{ color: "#d88531" }}>
                                <i className="ak-icon  ak-fi akfi-power" />
                              </span>
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
                              </Link>{" "}
                            </div>
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

export default FilmReview;
