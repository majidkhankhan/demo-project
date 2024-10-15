import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { hi } from "date-fns/locale";
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
function International3() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/international"
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
  // Define your base URL for news images

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
      <div className="ak-article-inner">
        <div className="">
          <div className="ak-block-header wdgt-hdng  ak-block-header-style-5 no-tabs">
            <b className="mb-2">खबरें पढ़ें-</b>
          </div>
          <div className="wdgt-wrap" id="common-lifestyle">
            <div className="wdgt-lft " style={{ marginRight: "8px" }}>
              {posts.international.slice(0, 1).map((newsItem) => (
                <div
                  key={newsItem.mainKhabarId}
                  href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                  aria-label={stripHtmlTags(newsItem.newsHeading, 30)}
                  title="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                  className="card-lg bordergap "
                >
                  <i className="img-sizer" />
                  <img
                    className="lazy-img card-img"
                    loading="lazy"
                    src={
                      image_resize +
                      "?url=" +
                      baseUrl +
                      newsItem.newsImage +
                      "&w=496&h=280&outtype=webp"
                    }
                    srcSet={
                      image_resize +
                      "?url=" +
                      baseUrl +
                      newsItem.newsImage +
                      "&w=496&h=280&outtype=webp"
                    }
                    alt="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                    width="466px"
                    height="262px"
                    title="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                  />
                  <Link
                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                    className="big-news-title"
                  >
                    {stripHtmlTags(newsItem.newsHeading, 80)}
                  </Link>
                </div>
              ))}
              {posts.international.slice(1, 3).map((newsItem) => {
                const shareLinks = generateShareLinks(
                  newsItem.mainKhabarId,
                  newsItem.newsHeading
                );
                return (
                  <div
                    key={newsItem.mainKhabarId}
                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                    aria-label={stripHtmlTags(newsItem.newsHeading, 30)}
                    title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                    className="card-sm bordergap "
                  >
                    <div className="sm-lft">
                      <i className="img-sizer" />
                      <img
                        className="lazy-img card-img"
                        loading="lazy"
                        src={
                          image_resize +
                          "?url=" +
                          baseUrl +
                          newsItem.newsImage +
                          "&w=125&h=70&outtype=webp"
                        }
                        srcSet={
                          image_resize +
                          "?url=" +
                          baseUrl +
                          newsItem.newsImage +
                          "&w=125&h=70&outtype=webp"
                        }
                        width="125px"
                        height="70px"
                        alt="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                        title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                      />
                    </div>
                    <div className="sm-rght">
                      <Link
                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                        className="wdgt-subtitle1"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 80)}
                      </Link>
                      <span className="tm-stmp">
                        {" "}
                        <i className="ak-icon akfi-schedule me-1" />
                        {formatDateInHindi(newsItem.date)}
                        <span className="socialmedia">
                          {" "}
                          &nbsp;
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
                          &nbsp;&nbsp;
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
                          </Link>
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="wdgt-rgt">
              {posts.international.slice(4, 9).map((newsItem) => {
                const shareLinks = generateShareLinks(
                  newsItem.mainKhabarId,
                  newsItem.newsHeading
                );
                return (
                  <div
                    key={newsItem.mainKhabarId}
                    href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                    aria-label={stripHtmlTags(newsItem.newsHeading, 30)}
                    title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                    className="card-sm card-sm-devider bordergap "
                  >
                    <div className="sm-lft">
                      <i className="img-sizer" />
                      <img
                        className="lazy-img  card-img"
                        loading="lazy"
                        src={
                          image_resize +
                          "?url=" +
                          baseUrl +
                          newsItem.newsImage +
                          "&w=125&h=70&outtype=webp"
                        }
                        srcSet={
                          image_resize +
                          "?url=" +
                          baseUrl +
                          newsItem.newsImage +
                          "&w=125&h=70&outtype=webp"
                        }
                        width="125px"
                        height="70px"
                        alt="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                        title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                      />
                    </div>
                    <div className="sm-rght">
                      <Link
                        href={`/InternationalDetails/${newsItem.mainKhabarId}`}
                        className="wdgt-subtitle1"
                      >
                        {stripHtmlTags(newsItem.newsHeading, 70)}
                      </Link>

                      <span className="tm-stmp">
                        {" "}
                        <i className="ak-icon akfi-schedule me-1" />
                        {formatDateInHindi(newsItem.date)}
                        <span className="socialmedia">
                          {" "}
                          &nbsp;
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
                          &nbsp;&nbsp;
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
                        </span>
                      </span>
                    </div>
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

export default International3;
