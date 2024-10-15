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

function SliderDetails4() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/jobs"
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
    navigate(`/NewsDetails/${trendingTagId}`);
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
                  <Link href="/" title="जॉब" aria-label="जॉब">
                    जॉब
                  </Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="ak-block-inner clearfix">
            <div className="ak-block-posts clearfix">
              {postData.jobs.slice(0, 5).map((post) => (
                <article
                  key={post.mainKhabarId}
                  className="bordergap ak-module ak-module-1-small ak-column-module clearfix post-249 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-featured category-us-news category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                >
                  <div className="ak-module-inner clearfix">
                    <div className="ak-module-featured">
                      <div className="ak-featured-cover">
                        <Link
                          href={`/SliderDetails/${post.mainKhabarId}`}
                          className="ak-featured-link"
                          rel="bookmark"
                          aria-label="जॉब"
                          title="4 Ways To Tell If There Are Hidden Cameras In Your Airbnb"
                        >
                          <div className="ak-featured-thumb lazy-thumb size-715">
                            <img
                              width={120}
                              height={86}
                              src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=120&h=86&outtype=webp`}
                              className="attachment-newsy_120x86 size-newsy_120x86 wp-post-image lazyautosizes ls-is-cached lazyloaded"
                              alt=""
                              decoding="async"
                              loading="lazy"
                              data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=120&h=86&outtype=webp`}
                              data-sizes="auto"
                              data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=120&h=86&outtype=webp`}
                              data-expand={700}
                              sizes="120px"
                              srcSet={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=120&h=86&outtype=webp`}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="ak-module-details">
                      <h1 className="ak-module-title">
                        <Link
                          href={`/SliderDetails/${post.mainKhabarId}`}
                          rel="bookmark"
                          aria-label="जॉब"
                          title="4 Ways To Tell If There Are Hidden Cameras In Your Airbnb"
                        >
                          {stripHtmlTags(post.newsHeading, 50)}
                        </Link>
                      </h1>
                      <div className="ak-module-meta">
                        <div className="ak-module-time">
                          <Link
                            href={`/SliderDetails/${post.mainKhabarId}`}
                            aria-label="जॉब"
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
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderDetails4;
