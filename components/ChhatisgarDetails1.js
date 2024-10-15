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

function ChhatisgarDetails1() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/sehat"
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
  const generateShareLinks = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/ChhatisgarDetailsD/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
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
      <div
        className="ak-block ak-block-3  ak-block-column ak-block-module-thumb-round ak-block-inner-boxed ak-block-width-1 clearfix"
        id="block_65f7f61f36732_9"
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
                <Link href="#" title="धर्म" aria-label="लाइफस्टाइल">
                  जरूर पढ़ें
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="ak-block-inner clearfix">
          <div className="ak-block-posts clearfix">
            {postData.sehat.slice(0, 5).map((post) => {
              const shareLinks = generateShareLinks(
                post.mainKhabarId,
                post.newsHeading
              );
              return (
                <article
                  key={post.mainKhabarId}
                  className="bordergap ak-module ak-module-1-small ak-column-module ak-module-meta-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                >
                  <div className="ak-module-inner clearfix">
                    <div className="ak-module-featured">
                      <div className="ak-featured-cover">
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="lazy"
                            decoding="async"
                            width={120}
                            height={86}
                            src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=120&h=86&outtype=webp`}
                            className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                            alt={stripHtmlTags(post.newsHeading, 40)}
                            data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=120&h=86&outtype=webp`}
                            data-sizes="auto"
                            data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=120&h=86&outtype=webp`}
                            data-expand={700}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ak-module-details">
                      <h1 className="ak-module-title">
                        <Link
                          href={`/OtherStateDetails/${post.mainKhabarId}`}
                          rel="bookmark"
                          title="4 Ways To Tell If There Are Hidden Cameras In Your Airbnb"
                        >
                          {stripHtmlTags(post.newsHeading, 50)}
                        </Link>
                      </h1>
                      <div className="ak-module-meta">
                        <div className="ak-module-time">
                          <Link
                            href={`/OtherStateDetails/${post.mainKhabarId}`}
                            className="ak-module-meta-published"
                          >
                            <i className="ak-icon akfi-schedule" />
                            {formatDateInHindi(post.date)}
                          </Link>
                          &nbsp;&nbsp;&nbsp;
                          <Link
                            href={shareLinks.facebook}
                            target="_blank"
                            aria-label="facebook"
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
                            aria-label="whatsapp"
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
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChhatisgarDetails1;
