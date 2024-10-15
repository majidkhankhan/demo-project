"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Circles } from "react-loader-spinner";
import { img } from "react-lazy-load-image-component";

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

export default function Webstorie() {
  const [posts, setPosts] = useState([]);
  // const [secondData, setSecondData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/webstory"
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
      <section className="">
        <div
          className="main-wdgt container pt-2"
          id="widget-rs-4937"
          data-vars-widget-type="home"
          data-vars-widget-name="astrology"
          data-vars-orderid={10}
        >
          <div className="wdgt-hdng">
            <h1 className="head">
              <Link href="#" title="धर्म">
                वेब स्टोरीज
              </Link>
            </h1>
          </div>
        </div>

        <div className="webStory">
          <div className="block">
            {posts.webstory.slice(0, 1).map((newsItem) => (
              <div key={newsItem.webStoriesId} className="item">
                <Link
                  href={`/WebStrorieD/${newsItem.webStoriesId}`}
                  target="_blank"
                  className="webstory-card"
                >
                  <figure>
                    <img
                      alt={stripHtmlTags(newsItem.newsHeading, 65)}
                      loading="lazy"
                      width={160}
                      height={282}
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.webStoriesImage +
                        "&w=189&h=337&outtype=webp"
                      }
                      style={{ color: "transparent" }}
                    />
                  </figure>
                  <div className="caption">
                    <h1 className="card-title" style={{ fontSize: "16px" }}>
                      <strong style={{ color: "#8B0000" }}>
                        {stripHtmlTags(newsItem.webStoriesTagName, 10)}-
                      </strong>
                    </h1>
                    <p className="title card-text" style={{ fontSize: "16px" }}>
                      {stripHtmlTags(newsItem.webStoriesHeading, 20)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
            {posts.webstory.slice(1, 2).map((newsItem) => (
              <div key={newsItem.webStoriesId} className="item">
                <Link
                  href={`/WebStrorieD/${newsItem.webStoriesId}`}
                  target="_blank"
                  className="webstory-card"
                >
                  <figure>
                    <img
                      alt={stripHtmlTags(newsItem.webStoriesHeading, 20)}
                      loading="lazy"
                      width={160}
                      height={282}
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.webStoriesImage +
                        "&w=189&h=337&outtype=webp"
                      }
                      style={{ color: "transparent" }}
                    />
                  </figure>
                  <div className="caption">
                    <h1 className="card-title" style={{ fontSize: "16px" }}>
                      <strong style={{ color: "#8B0000" }}>
                        {stripHtmlTags(newsItem.webStoriesTagName, 10)}-
                      </strong>
                    </h1>
                    <p className="title card-text" style={{ fontSize: "16px" }}>
                      {stripHtmlTags(newsItem.webStoriesHeading, 20)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}

            {posts.webstory.slice(2, 3).map((newsItem) => (
              <div key={newsItem.webStoriesId} className="item">
                <Link
                  href={`/WebStrorieD/${newsItem.webStoriesId}`}
                  target="_blank"
                  className="webstory-card"
                >
                  <figure>
                    <img
                      alt={stripHtmlTags(newsItem.newsHeading, 65)}
                      loading="lazy"
                      width={160}
                      height={282}
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.webStoriesImage +
                        "&w=189&h=337&outtype=webp"
                      }
                      style={{ color: "transparent" }}
                    />
                  </figure>
                  <div className="caption">
                    <h1 className="card-title" style={{ fontSize: "16px" }}>
                      <strong style={{ color: "#8B0000" }}>
                        {stripHtmlTags(newsItem.webStoriesTagName, 10)}-
                      </strong>
                    </h1>
                    <p className="title card-text" style={{ fontSize: "16px" }}>
                      {stripHtmlTags(newsItem.webStoriesHeading, 20)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
            {posts.webstory.slice(3, 4).map((newsItem) => (
              <div key={newsItem.webStoriesId} className="item">
                <Link
                  href={`/WebStrorieD/${newsItem.webStoriesId}`}
                  target="_blank"
                  className="webstory-card"
                >
                  <figure>
                    <img
                      alt={stripHtmlTags(newsItem.newsHeading, 65)}
                      loading="lazy"
                      width={160}
                      height={282}
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.webStoriesImage +
                        "&w=189&h=337&outtype=webp"
                      }
                      style={{ color: "transparent" }}
                    />
                  </figure>
                  <div className="caption">
                    <h1 className="card-title" style={{ fontSize: "16px" }}>
                      <strong style={{ color: "#8B0000" }}>
                        {stripHtmlTags(newsItem.webStoriesTagName, 10)}-
                      </strong>
                    </h1>
                    <p className="title card-text" style={{ fontSize: "16px" }}>
                      {stripHtmlTags(newsItem.webStoriesHeading, 20)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
            {posts.webstory.slice(4, 5).map((newsItem) => (
              <div key={newsItem.webStoriesId} className="item">
                <Link
                  href={`/WebStrorieD/${newsItem.webStoriesId}`}
                  target="_blank"
                  className="webstory-card"
                >
                  <figure>
                    <img
                      alt={stripHtmlTags(newsItem.newsHeading, 65)}
                      loading="lazy"
                      width={160}
                      height={282}
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.webStoriesImage +
                        "&w=189&h=337&outtype=webp"
                      }
                      style={{ color: "transparent" }}
                    />
                  </figure>
                  <div className="caption">
                    <h1 className="card-title" style={{ fontSize: "16px" }}>
                      <strong style={{ color: "#8B0000" }}>
                        {stripHtmlTags(newsItem.webStoriesTagName, 10)}-
                      </strong>
                    </h1>
                    <p className="title card-text" style={{ fontSize: "16px" }}>
                      {stripHtmlTags(newsItem.webStoriesHeading, 20)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
            {posts.webstory.slice(5, 6).map((newsItem) => (
              <div key={newsItem.webStoriesId} className="item">
                <Link
                  href={`/WebStrorieD/${newsItem.webStoriesId}`}
                  target="_blank"
                  className="webstory-card"
                >
                  <figure>
                    <img
                      alt={stripHtmlTags(newsItem.newsHeading, 65)}
                      loading="lazy"
                      width={160}
                      height={282}
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.webStoriesImage +
                        "&w=189&h=337&outtype=webp"
                      }
                      style={{ color: "transparent" }}
                    />
                  </figure>
                  <div className="caption">
                    <h1 className="card-title" style={{ fontSize: "16px" }}>
                      <strong style={{ color: "#8B0000" }}>
                        {stripHtmlTags(newsItem.webStoriesTagName, 10)}-
                      </strong>
                    </h1>
                    <p className="title card-text" style={{ fontSize: "16px" }}>
                      {stripHtmlTags(newsItem.webStoriesHeading, 20)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
}
