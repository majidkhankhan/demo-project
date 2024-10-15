"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Circles } from "react-loader-spinner";
import { img } from "react-lazy-load-image-component";
export default function BigAdd() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/bigAdd"
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
      {posts.bigAdd.slice(0, 1).map((newsItem) => (
        <div key={newsItem.mainKhabarId} className="row vc_row ak-hidden-md">
          <div className="ak_vc_container">
            <div className="wpb_column ak_column_3 vc_column_container vc_col-sm-12">
              <div className="ak_vc_wrapper wpb_wrapper">
                <div
                  className="ak-ad ak-ad-big ak-block-ads  clearfix"
                  id="block_65f7f61f36732_11"
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
                      srcSet={`${image_resize}?url=${baseUrl}${newsItem.newsImage}&w=320&h=40&outtype=webp 320w,
          ${image_resize}?url=${baseUrl}${newsItem.newsImage}&w=640&h=80&outtype=webp 640w,
          ${image_resize}?url=${baseUrl}${newsItem.newsImage}&w=970&h=120&outtype=webp 970w`}
                      sizes="(max-width: 600px) 100vw, 50vw"
                      src={`${image_resize}?url=${baseUrl}${newsItem.newsImage}&w=970&h=120&outtype=webp`}
                      alt="Advertisement"
                      width={970}
                      height={120}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
