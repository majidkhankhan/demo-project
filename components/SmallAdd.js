"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Circles } from "react-loader-spinner";
import { img } from "react-lazy-load-image-component";
export default function SmallAdd() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/smallAdd"
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
      {posts.smallAdd.slice(0, 1).map((newsItem) => (
        <div
          key={newsItem.mainKhabarId}
          className="ak-ad-small ak-block-ads clearfix"
        >
          <Link
            href="#"
            target="_blank"
            className="adlink"
            aria-label="Ad"
            rel="nofollow noopener"
          >
            <img
              loading="lazy"
              className="lazyload"
              src={
                image_resize +
                "?url=" +
                baseUrl +
                newsItem.newsImage +
                "&w=400&h=300&outtype=webp"
              }
              alt=""
              width={400}
              height={300}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
