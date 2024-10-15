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

function Chhatisgar6() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/cgNews"
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
  const generateShareLinks = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/ChhatisgarDetailsD/${mainKhabarId}`;
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedNewsHeading}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedNewsHeading} ${url}`,
    };
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
              <Link href="/" aria-label="खबरें और पढ़ें">
                खबरें और पढ़ें
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="wdgt-wrap" id="common-lifestyle">
        <div className="wdgt-lft">
          {postData.cgNews.slice(0, 4).map((post) => {
            const shareLinks = generateShareLinks(
              post.mainKhabarId,
              post.newsHeading
            );
            return (
              <div
                key={post.mainKhabarId}
                href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                data-nid={201717079673351}
                title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                className="card-sm bordergap "
              >
                <div className="sm-lft">
                  <i className="img-sizer" />
                  <img
                    className="lazy-img card-img"
                    loading="lazy"
                    src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=125&h=70&outtype=webp`}
                    srcSet={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=125&h=70&outtype=webp`}
                    width="125px"
                    height="70px"
                    alt="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                    title="रात को सोने से पहले क्यों नहीं पहनने चाहिए कपड़े? ये है बड़ी वजहें"
                  />
                </div>
                <div className="sm-rght">
                  <Link
                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                    className="wdgt-subtitle1"
                  >
                    {stripHtmlTags(post.newsHeading, 70)}
                  </Link>

                  <div className="socialmedia">
                    <i className="ak-icon akfi-schedule" />{" "}
                    {formatDateInHindi(post.date)}
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
            );
          })}
        </div>
        <div className="wdgt-rgt">
          {postData.cgNews.slice(4, 8).map((post) => {
            const shareLinks = generateShareLinks(
              post.mainKhabarId,
              post.newsHeading
            );
            return (
              <div
                key={post.mainKhabarId}
                href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
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
                    alt="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                    title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                  />
                </div>
                <div className="sm-rght">
                  <Link
                    href={`/ChhatisgarDetailsD/${post.mainKhabarId}`}
                    className="wdgt-subtitle1"
                  >
                    {stripHtmlTags(post.newsHeading, 60)}
                  </Link>

                  <div className="socialmedia">
                    <i className="ak-icon akfi-schedule" />{" "}
                    {formatDateInHindi(post.date)}
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
                      aria-label="facebook"
                    >
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Chhatisgar6;
