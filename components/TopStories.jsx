"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
function TopStories() {
  const [posts, setPosts] = useState([]);
  // const [secondData, setSecondData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/webSeries"
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
  const baseUrl = "https://api.sadaivsatya.com/";
  return (
    <div>
      <div
        className="ak-block ak-block-list-10 ak-block-column ak-block-module-seperator-line ak-block-boxed dark ak-block-numeric-style-7 ak-block-width-1 clearfix"
        id="block_65f7f61f36732_15"
      >
        <div className="ak-block-header ak-block-header-style-5 no-tabs">
          <h1 className="ak-block-title">
            <span className="title-text">
              <span>टुडे टॉप सीरीज </span>
            </span>
          </h1>
        </div>
        <div className="ak-block-inner clearfix pt-2">
          <div className="ak-block-posts clearfix">
            {posts.webSeries.slice(0, 5).map((newsItem) => (
              <article
                key={newsItem.mainKhabarId}
                className="ak-module ak-module-10 ak-column-module ak-module-meta-hide ak-module-excerpt-hide clearfix ak-exclusive-post post-224 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-tech-science category-us-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
              >
                <div className="ak-module-inner clearfix">
                  <div className="ak-module-details">
                    <h1 className="ak-module-title">
                      <Link
                        href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                        rel="bookmark"
                        title="Perfect Zodiac Gifts For Astrology Lovers That Any Sign Will Appreciate"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 40)}
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

export default TopStories;
