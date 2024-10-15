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
export default function Blocks() {
  const [posts, setPosts] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [thirdData, setThirdData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          axios.get("https://api.sadaivsatya.com/api/home/manoranjans"),
          axios.get("https://api.sadaivsatya.com/api/home/bussiness"),
          axios.get("https://api.sadaivsatya.com/api/home/technologyKhabars"),
        ]);
        setPosts(response1.data);
        setSecondData(response2.data);
        setThirdData(response3.data);
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

  const generateShareLinksm = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/BollywoodDetails/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
  };

  const generateShareLinksa = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/BusinessDetailsD/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
  };
  const generateShareLinksk = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/InternationalDetails/${mainKhabarId}`;
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
      <div className="Newsarea ">
        <div className="main-block">
          <div className="block">
            <div className="stickybar">
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
                      मनोरंजन
                    </Link>
                  </h1>
                </div>
              </div>
              {posts.manoranjan.slice(0, 6).map((newsItem) => {
                const shareLinks = generateShareLinksm(
                  newsItem.mainKhabarId,
                  newsItem.newsHeading
                );
                return (
                  <div key={newsItem.mainKhabarId} className="item card">
                    {newsItem.newsImage.endsWith(".mp4") && (
                      <div className="card-news">
                        <video controls autoPlay width={100} height={75}>
                          <source
                            src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=100&h=75&outtype=webp"
                            }
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        &nbsp;
                        <div className="text">
                          <Link
                            style={{ color: "black", fontWeight: "700" }}
                            href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                          >
                            {stripHtmlTags(newsItem.newsHeading, 65)}
                          </Link>
                          <div className="full-width">
                            <div className="national">
                              <b style={{ color: "black", fontSize: "12px" }}>
                                {formatDateInHindi(newsItem.date)}
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {!newsItem.newsImage.endsWith(".mp4") && (
                      <div className="card-news">
                        <img
                          alt={stripHtmlTags(newsItem.newsHeading, 65)}
                          loading="lazy"
                          width={100}
                          height={75}
                          style={{ color: "transparent" }}
                          src={
                            image_resize +
                            "?url=" +
                            baseUrl +
                            newsItem.newsImage +
                            "&w=100&h=75&outtype=webp"
                          }
                        />
                        &nbsp;
                        <div className="text">
                          <Link
                            style={{ color: "black", fontWeight: "700" }}
                            href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                          >
                            {stripHtmlTags(newsItem.newsHeading, 65)}
                          </Link>
                          <div className="full-width">
                            <div className="national">
                              <b
                                style={{
                                  color: "black",
                                  fontSize: "12px",
                                  marginRight: "0px",
                                  marginLeft: "0px",
                                }}
                              >
                                {formatDateInHindi(newsItem.date)}
                              </b>
                            </div>
                            <div className="ak-module-view-count">
                              <span>
                                <i className="fa fa-eye" aria-hidden="true" />
                                &nbsp;
                                <span className="count">
                                  {newsItem.viewCount}
                                </span>
                              </span>
                            </div>

                            <div className="socialmedia">
                              <Link
                                href={shareLinks.facebook}
                                target="_blank"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                              >
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </Link>

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
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="block">
            <div className="stickybar">
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
                      बिजनेस
                    </Link>
                  </h1>
                </div>
              </div>
              {secondData.bussiness.slice(0, 6).map((newsItem) => {
                const shareLinks = generateShareLinksm(
                  newsItem.mainKhabarId,
                  newsItem.newsHeading
                );
                return (
                  <div key={newsItem.mainKhabarId} className="item card">
                    {newsItem.newsImage.endsWith(".mp4") && (
                      <div className="card-news">
                        <video controls autoPlay width={100} height={75}>
                          <source
                            src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=100&h=75&outtype=webp"
                            }
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        &nbsp;
                        <div className="text">
                          <Link
                            style={{ color: "black", fontWeight: "700" }}
                            href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                          >
                            {stripHtmlTags(newsItem.newsHeading, 65)}
                          </Link>
                          <div className="full-width">
                            <div className="national">
                              <Link
                                style={{ color: "black", fontSize: "12px" }}
                              >
                                {formatDateInHindi(newsItem.date)}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {!newsItem.newsImage.endsWith(".mp4") && (
                      <div className="card-news">
                        <img
                          alt={stripHtmlTags(newsItem.newsHeading, 65)}
                          loading="lazy"
                          width={100}
                          height={75}
                          style={{ color: "transparent" }}
                          src={
                            image_resize +
                            "?url=" +
                            baseUrl +
                            newsItem.newsImage +
                            "&w=100&h=75&outtype=webp"
                          }
                        />
                        &nbsp;
                        <div className="text">
                          <Link
                            style={{ color: "black", fontWeight: "700" }}
                            href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                          >
                            {stripHtmlTags(newsItem.newsHeading, 65)}
                          </Link>
                          <div className="full-width">
                            <div className="national">
                              <b
                                style={{
                                  color: "black",
                                  fontSize: "12px",
                                  marginRight: "0px",
                                  marginLeft: "0px",
                                }}
                              >
                                {formatDateInHindi(newsItem.date)}
                              </b>
                            </div>
                            <div className="ak-module-view-count">
                              <span>
                                <i className="fa fa-eye" aria-hidden="true" />
                                &nbsp;
                                <span className="count">
                                  {newsItem.viewCount}
                                </span>
                              </span>
                            </div>
                            <div className="socialmedia">
                              <Link
                                href={shareLinks.facebook}
                                target="_blank"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                              >
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </Link>

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
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="block">
            <div className="stickybar">
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
                      टेक्नोलॉजी
                    </Link>
                  </h1>
                </div>
              </div>
              {thirdData.technologyKhabars.slice(0, 6).map((newsItem) => {
                const shareLinks = generateShareLinksk(
                  newsItem.mainKhabarId,
                  newsItem.newsHeading
                );
                return (
                  <div key={newsItem.mainKhabarId} className="item card">
                    {newsItem.newsImage.endsWith(".mp4") && (
                      <div className="card-news" title="">
                        <video controls autoPlay width={100} height={75}>
                          <source
                            src={
                              image_resize +
                              "?url=" +
                              baseUrl +
                              newsItem.newsImage +
                              "&w=100&h=75&outtype=webp"
                            }
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        &nbsp;
                        <div className="text">
                          <Link
                            className="ak-module-title"
                            style={{ color: "black", fontweight: "700" }}
                            href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                          >
                            {stripHtmlTags(newsItem.newsHeading, 70)}
                          </Link>
                          <div className="full-width">
                            <div className="national">
                              <b style={{ color: "black", fontSize: "12px" }}>
                                {formatDateInHindi(newsItem.date)}
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {!newsItem.newsImage.endsWith(".mp4") && (
                      <div className="card-news" title="">
                        <img
                          alt={stripHtmlTags(newsItem.newsHeading, 65)}
                          loading="lazy"
                          width={100}
                          height={75}
                          style={{ color: "transparent" }}
                          src={
                            image_resize +
                            "?url=" +
                            baseUrl +
                            newsItem.newsImage +
                            "&w=100&h=75&outtype=webp"
                          }
                        />
                        &nbsp;
                        <div className="text">
                          <Link
                            style={{ color: "black", fontWeight: "700" }}
                            href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                          >
                            {stripHtmlTags(newsItem.newsHeading, 70)}
                          </Link>

                          <div className="full-width">
                            <div className="national">
                              <b
                                style={{
                                  color: "black",
                                  fontSize: "12px",
                                  marginRight: "0px",
                                  marginLeft: "0px",
                                }}
                              >
                                {formatDateInHindi(newsItem.date)}
                              </b>
                            </div>
                            <div className="ak-module-view-count">
                              <span>
                                <i className="fa fa-eye" aria-hidden="true" />
                                &nbsp;
                                <span className="count">
                                  {newsItem.viewCount}
                                </span>
                              </span>
                            </div>
                            <div className="socialmedia">
                              <Link
                                href={shareLinks.facebook}
                                target="_blank"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                              >
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </Link>

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
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
