import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Circles } from "react-loader-spinner";

const baseUrl = "https://api.sadaivsatya.com/";

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
export default function JarurPadhe() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/khasKhabar"
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
                <a href="/astrology/" title="धर्म">
                  जरूर पढ़ें
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="ak-block-inner clearfix">
          <div className="ak-block-posts clearfix">
            {postData.khasKhabar.slice(0, 1).map((newsItem) => (
              <article
                key={newsItem.mainKhabarId}
                className="bordergap ak-module ak-module-1-small ak-column-module ak-module-meta-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
              >
                <div className="ak-module-inner clearfix">
                  <div className="ak-module-featured">
                    <div className="ak-featured-cover">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        className="ak-featured-link"
                        rel="bookmark"
                        title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="lazy"
                            decoding="async"
                            width={120}
                            height={86}
                            src={baseUrl + newsItem.newsImage}
                            className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                            alt=""
                            data-src={baseUrl + newsItem.newsImage}
                            data-sizes="auto"
                            data-srcset={baseUrl + newsItem.newsImage}
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="ak-module-details">
                    <h1 className="ak-module-title">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        rel="bookmark"
                        title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 60)}
                      </Link>
                    </h1>
                  </div>
                </div>
              </article>
            ))}
            {postData.khasKhabar.slice(1, 2).map((newsItem) => (
              <article
                key={newsItem.mainKhabarId}
                className="bordergap ak-module ak-module-1-small ak-column-module ak-module-meta-hide clearfix post-226 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-sports category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news"
              >
                <div className="ak-module-inner clearfix">
                  <div className="ak-module-featured">
                    <div className="ak-featured-cover">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        className="ak-featured-link"
                        rel="bookmark"
                        title="Robot companies pledge they’re not going to let the robots kill you"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="lazy"
                            decoding="async"
                            width={120}
                            height={86}
                            src={baseUrl + newsItem.newsImage}
                            className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                            alt=""
                            data-src={baseUrl + newsItem.newsImage}
                            data-sizes="auto"
                            data-srcset={baseUrl + newsItem.newsImage}
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="ak-module-details">
                    <h1 className="ak-module-title">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        rel="bookmark"
                        title="Robot companies pledge they’re not going to let the robots kill you"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 60)}
                      </Link>
                    </h1>
                  </div>
                </div>
              </article>
            ))}
            {postData.khasKhabar.slice(2, 3).map((newsItem) => (
              <article
                key={newsItem.mainKhabarId}
                className="bordergap ak-module ak-module-1-small ak-column-module ak-module-meta-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
              >
                <div className="ak-module-inner clearfix">
                  <div className="ak-module-featured">
                    <div className="ak-featured-cover">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        className="ak-featured-link"
                        rel="bookmark"
                        title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="lazy"
                            decoding="async"
                            width={120}
                            height={86}
                            src={baseUrl + newsItem.newsImage}
                            className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                            alt=""
                            data-src={baseUrl + newsItem.newsImage}
                            data-sizes="auto"
                            data-srcset={baseUrl + newsItem.newsImage}
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="ak-module-details">
                    <h1 className="ak-module-title">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        rel="bookmark"
                        title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 60)}
                      </Link>
                    </h1>
                  </div>
                </div>
              </article>
            ))}
            {postData.khasKhabar.slice(3, 4).map((newsItem) => (
              <article
                key={newsItem.mainKhabarId}
                className="bordergap ak-module ak-module-1-small ak-column-module ak-module-meta-hide clearfix post-225 post type-post status-publish format-standard has-post-thumbnail  category-business category-entertainment category-tech-science category-work-life tag-breaking tag-election tag-politics tag-technology tag-world-news"
              >
                <div className="ak-module-inner clearfix">
                  <div className="ak-module-featured">
                    <div className="ak-featured-cover">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        className="ak-featured-link"
                        rel="bookmark"
                        title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="lazy"
                            decoding="async"
                            width={120}
                            height={86}
                            src={baseUrl + newsItem.newsImage}
                            className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                            alt=""
                            data-src={baseUrl + newsItem.newsImage}
                            data-sizes="auto"
                            data-srcset={baseUrl + newsItem.newsImage}
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="ak-module-details">
                    <h1 className="ak-module-title">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        rel="bookmark"
                        title="Binance’s BNB cryptocurrency hit by massive $100 million hack"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 60)}
                      </Link>
                    </h1>
                  </div>
                </div>
              </article>
            ))}
            {postData.khasKhabar.slice(4, 5).map((newsItem) => (
              <article
                key={newsItem.mainKhabarId}
                className="bordergap ak-module ak-module-1-small ak-column-module ak-module-meta-hide clearfix post-226 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-sports category-work-life category-world-news tag-breaking tag-election tag-politics tag-technology tag-world-news"
              >
                <div className="ak-module-inner clearfix">
                  <div className="ak-module-featured">
                    <div className="ak-featured-cover">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        className="ak-featured-link"
                        rel="bookmark"
                        title="Robot companies pledge they’re not going to let the robots kill you"
                      >
                        <div className="ak-featured-thumb lazy-thumb size-715">
                          <img
                            loading="lazy"
                            decoding="async"
                            width={120}
                            height={86}
                            src={baseUrl + newsItem.newsImage}
                            className="attachment-newsy_120x86 size-newsy_120x86 lazyload wp-post-image"
                            alt=""
                            data-src={baseUrl + newsItem.newsImage}
                            data-sizes="auto"
                            data-srcset={baseUrl + newsItem.newsImage}
                            data-expand={700}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="ak-module-details">
                    <h1 className="ak-module-title">
                      <Link
                        href={`/Newsdetails3/${newsItem.mainKhabarId}`}
                        rel="bookmark"
                        title="Robot companies pledge they’re not going to let the robots kill you"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 60)}
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
  );
}
