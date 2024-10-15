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

function Madhyapradesh4() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/lifeSeince"
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
      <div
        className="
       "
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
                  href="/astrology/"
                  title="लाइफ साइंस"
                  aria-label="लाइफ साइंस"
                >
                  लाइफ साइंस
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div className="ak_vc_container">
          <div className="wpb_column ak_column_3 vc_column_container ">
            <div className="ak_vc_wrapper wpb_wrapper">
              <div
                className="ak-block ak-block-list-2-wide ak-block-column ak-block-module-inner-boxed ak-block-inner-border-round ak-block-module-thumb-round ak-block-width-4 clearfix"
                id="block_65f7f61f36732_2"
              >
                <div className="ak-block-inner clearfix">
                  <div className="ak-block-posts clearfix">
                    {postData.lifeSeince.slice(0, 4).map((post) => (
                      <article
                        key={post.mainKhabarId}
                        className="ak-module ak-module-2-wide ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                      >
                        <div className="ak-module-inner clearfix">
                          <div className="ak-module-featured">
                            <div className="ak-module-badges" />
                            <div className="ak-featured-cover">
                              <Link
                                href={`/MadhyaPradeshDetailsD/${post.mainKhabarId}`}
                                className="ak-featured-link"
                                rel="bookmark"
                                aria-label="लाइफ साइंस"
                                title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                              >
                                <div className="ak-featured-thumb lazy-thumb size-500">
                                  <img
                                    fetchPriority="high"
                                    decoding="async"
                                    width={360}
                                    height={180}
                                    src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=245&h=122&outtype=webp`}
                                    className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                    alt=""
                                    data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=245&h=122&outtype=webp`}
                                    data-sizes="auto"
                                    data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=245&h=122&outtype=webp`}
                                    data-expand={700}
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="ak-module-details">
                            <h1 className="ak-module-title">
                              <Link
                                href={`/MadhyaPradeshDetailsD/${post.mainKhabarId}`}
                                rel="bookmark"
                                aria-label="लाइफ साइंस"
                                title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                              >
                                {stripHtmlTags(post.newsHeading, 50)}
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
          <div className="wpb_column ak_column_3 vc_column_container">
            <div className="ak_vc_wrapper wpb_wrapper">
              <div
                className="ak-block ak-block-list-2-wide ak-block-column ak-block-module-inner-boxed ak-block-inner-border-round ak-block-module-thumb-round ak-block-width-4 clearfix"
                id="block_65f7f61f36732_2"
              >
                <div className="ak-block-inner clearfix">
                  <div className="ak-block-posts clearfix">
                    {postData.lifeSeince.slice(4, 8).map((post) => (
                      <article
                        key={post.mainKhabarId}
                        className="ak-module ak-module-2-wide ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
                      >
                        <div className="ak-module-inner clearfix">
                          <div className="ak-module-featured">
                            <div className="ak-module-badges" />
                            <div className="ak-featured-cover">
                              <Link
                                href={`/MadhyaPradeshDetailsD/${post.mainKhabarId}`}
                                className="ak-featured-link"
                                rel="bookmark"
                                aria-label="लाइफ साइंस"
                                title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                              >
                                <div className="ak-featured-thumb lazy-thumb size-500">
                                  <img
                                    fetchPriority="high"
                                    decoding="async"
                                    width={360}
                                    height={180}
                                    src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=245&h=122&outtype=webp`}
                                    className="attachment-newsy_360x180 size-newsy_360x180 lazyload wp-post-image"
                                    alt=""
                                    data-src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=245&h=122&outtype=webp`}
                                    data-sizes="auto"
                                    data-srcset={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=245&h=122&outtype=webp`}
                                    data-expand={700}
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="ak-module-details">
                            <h1 className="ak-module-title">
                              <Link
                                href={`/MadhyaPradeshDetailsD/${post.mainKhabarId}`}
                                rel="bookmark"
                                aria-label="लाइफ साइंस"
                                title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                              >
                                {stripHtmlTags(post.newsHeading, 50)}
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
  );
}

export default Madhyapradesh4;
