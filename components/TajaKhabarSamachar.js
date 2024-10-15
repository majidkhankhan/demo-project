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
function TajaKhabarSamachar() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/tajaKhabars"
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
  const generateShareLinks = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/TajaKhabarDetailsNews/${mainKhabarId}`;
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
  return (
    <div>
      <div className="border">
        <div className="ak-block-header ak-block-header-style-5 no-tabs ">
          <div
            className="main-wdgt container"
            id="widget-rs-4937"
            data-vars-widget-type="home"
            data-vars-widget-name="astrology"
            data-vars-orderid={10}
          >
            <div className="wdgt-hdng">
              <h1 className="head">
                <Link href="/" title="ताज़ा  समाचार" aria-label="ताज़ा  समाचार">
                  ताज़ा समाचार
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="wdgt-wrap" id="common-lifestyle">
          <div className="wdgt-lft">
            {postData.tazaKhabars.slice(0, 4).map((post) => {
              const shareLinks = generateShareLinks(
                post.mainKhabarId,
                post.newsHeading
              );
              return (
                <div
                  key={post.mainKhabarId}
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  data-nid={201717079673351}
                  title={stripHtmlTags(post.newsHeading, 100)}
                  aria-label={stripHtmlTags(post.newsHeading, 100)}
                  className="card-sm bordergap "
                >
                  <div className="sm-lft">
                    <i className="img-sizer" />
                    <img
                      className="lazy-img card-img"
                      loading="lazy"
                      src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=125&h=70&outtype=webp`}
                      width="125px"
                      height="70px"
                      alt={stripHtmlTags(post.newsHeading, 30)}
                      title={stripHtmlTags(post.newsHeading, 100)}
                    />
                  </div>
                  <div className="sm-rght">
                    <Link
                      href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                      className="wdgt-subtitle1"
                    >
                      {stripHtmlTags(post.newsHeading, 100)}
                    </Link>
                    <span className="tm-stmp">
                      {" "}
                      <i className="ak-icon akfi-schedule me-2" />
                      {formatDateInHindi(post.date)}
                      <span className="socialmedia">
                        {" "}
                        &nbsp;
                        <Link
                          href={shareLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="facebook"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                        &nbsp;
                        <Link
                          href={shareLinks.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="whatsapp"
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </Link>{" "}
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="wdgt-rgt">
            {postData.tazaKhabars.slice(5, 9).map((post) => {
              const shareLinks = generateShareLinks(
                post.mainKhabarId,
                post.newsHeading
              );
              return (
                <div
                  key={post.mainKhabarId}
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  title={stripHtmlTags(post.newsHeading, 100)}
                  aria-label={stripHtmlTags(post.newsHeading, 100)}
                  className="card-sm card-sm-devider bordergap"
                >
                  <div className="sm-lft">
                    <i className="img-sizer" />
                    <img
                      className="lazy-img  card-img"
                      loading="lazy"
                      src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=125&h=70&outtype=webp`}
                      srcSet={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=125&h=70&outtype=webp`}
                      width="125px"
                      height="70px"
                      alt={stripHtmlTags(post.newsHeading, 30)}
                      title={stripHtmlTags(post.newsHeading, 100)}
                    />
                  </div>
                  <div className="sm-rght">
                    <Link
                      href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                      className="wdgt-subtitle1"
                    >
                      {stripHtmlTags(post.newsHeading, 100)}
                    </Link>

                    <span className="tm-stmp">
                      {" "}
                      <i className="ak-icon akfi-schedule me-2" />
                      {formatDateInHindi(post.date)}
                      <span className="socialmedia">
                        {" "}
                        &nbsp;
                        <Link
                          href={shareLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="facebook"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                        &nbsp;
                        <Link
                          href={shareLinks.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="whatsapp"
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </Link>
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
  );
}

export default TajaKhabarSamachar;
