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
function Buisness() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/bussiness"
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
    const url = `${window.location.origin}/BusinessDetailsD/${mainKhabarId}`;
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
      <div className="">
        <div className="ak-block-header wdgt-hdng ak-block-header-style-5 no-tabs">
          <h1 className="head">
            <Link href="/BuisnessDetails" title="धर्म" aria-label="बिज़नेस">
              बिज़नेस
            </Link>
          </h1>
        </div>
        <div className="wdgt-wrap" id="common-lifestyle">
          <div className="wdgt-lft" style={{ marginRight: "8px" }}>
            {posts.bussiness.slice(0, 1).map((newsItem) => (
              <div key={newsItem.mainKhabarId}>
                <div
                  to={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                  data-nid={201717087057468}
                  aria-label={stripHtmlTags(newsItem.newsHeading, 30)}
                  title="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                  className="card-lg"
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
                      "&w=305&h=259&outtype=webp"
                    }
                    srcSet={
                      image_resize +
                      "?url=" +
                      baseUrl +
                      newsItem.newsImage +
                      "&w=305&h=259&outtype=webp"
                    }
                    alt="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                    width="466px"
                    height="262px"
                    title="World No-Tobacco Day 2024 : क्यों मनाया जाता है 'वर्ल्ड नो टोबैको डे'?"
                  />
                  <Link
                    className="big-news-title"
                    href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                  >
                    {stripHtmlTags(newsItem.newsHeading, 50)}
                  </Link>
                </div>
              </div>
            ))}
            {posts.bussiness.slice(1, 3).map((newsItem) => {
              const shareLinks = generateShareLinks(
                newsItem.mainKhabarId,
                newsItem.newsHeading
              );
              return (
                <div key={newsItem.mainKhabarId}>
                  <div
                    to={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                    data-nid={201717079673351}
                    aria-label={stripHtmlTags(newsItem.newsHeading, 30)}
                    title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                    className="bordergap card-sm mb-2"
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
                          "&w=125&h=106&outtype=webp"
                        }
                        srcSet={
                          image_resize +
                          "?url=" +
                          baseUrl +
                          newsItem.newsImage +
                          "&w=125&h=106&outtype=webp"
                        }
                        width="125px"
                        height="70px"
                        alt="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                        title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                      />
                    </div>
                    <div className="sm-rght">
                      <Link
                        className="wdgt-subtitle1"
                        href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                        aria-label={stripHtmlTags(newsItem.newsHeading, 30)}
                      >
                        {stripHtmlTags(newsItem.newsHeading, 80)}
                      </Link>

                      <div className="socialmedia">
                        <span className="tm-stmp">
                          {formatDateInHindi(newsItem.date)}{" "}
                        </span>
                        <Link
                          href={shareLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="facebook"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>

                        <Link
                          href={shareLinks.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="whatsapp"
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" wdgt-rgt">
            {posts.bussiness.slice(3, 8).map((newsItem) => {
              const shareLinks = generateShareLinks(
                newsItem.mainKhabarId,
                newsItem.newsHeading
              );
              return (
                <div key={newsItem.mainKhabarId}>
                  <div
                    to={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                    aria-label={stripHtmlTags(newsItem.newsHeading, 30)}
                    title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                    className="card-sm card-sm-devider bordergap"
                  >
                    <div className="bordergap sm-lft">
                      <i className="img-sizer" />
                      <img
                        className="lazy-img  card-img"
                        loading="lazy"
                        src={
                          image_resize +
                          "?url=" +
                          baseUrl +
                          newsItem.newsImage +
                          "&w=125&h=107&outtype=webp"
                        }
                        srcSet={
                          image_resize +
                          "?url=" +
                          baseUrl +
                          newsItem.newsImage +
                          "&w=125&h=107&outtype=webp"
                        }
                        width="125px"
                        height="70px"
                        alt="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                        title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                      />
                    </div>
                    <div className="sm-rght">
                      <Link
                        className="wdgt-subtitle1"
                        href={`/BusinessDetailsD/${newsItem.mainKhabarId}`}
                        aria-label={stripHtmlTags(newsItem.newsHeading, 30)}
                      >
                        {stripHtmlTags(newsItem.newsHeading, 80)}
                      </Link>

                      <div className="socialmedia">
                        <span className="tm-stmp">
                          {formatDateInHindi(newsItem.date)}
                        </span>
                        <Link
                          href={shareLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="facebook"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                        <Link
                          href={shareLinks.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="whatsapp"
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buisness;
