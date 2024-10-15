import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { format } from "date-fns";
import { hi } from "date-fns/locale";
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

function TajaKhel1() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/cricketRandom"
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
    const url = `${window.location.origin}/KhelDetailsD/${mainKhabarId}`;
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
              <Link
                href="/Khels"
                title=" ताज़ा खेल समाचार"
                aria-label=" ताज़ा खेल समाचार"
              >
                ताज़ा खेल समाचार
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="bordergap wdgt-wrap alag" id="common-lifestyle">
        <div className="wdgt-lft">
          {posts.cricketRandom.slice(0, 4).map((newsItem) => {
            const shareLinks = generateShareLinks(
              newsItem.mainKhabarId,
              newsItem.newsHeading
            );
            return (
              <div key={newsItem.mainKhabarId}>
                <div
                  to={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                  data-nid={201717079673351}
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
                    <h1 className="wdgt-subtitle1">
                      <Link href={`/KhelDetailsD/${newsItem.mainKhabarId}`}>
                        {stripHtmlTags(newsItem.newsHeading, 65)}
                      </Link>
                    </h1>
                    <div className="socialmedia">
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
        <div className="wdgt-rgt">
          {posts.cricketRandom.slice(4, 8).map((newsItem) => {
            const shareLinks = generateShareLinks(
              newsItem.mainKhabarId,
              newsItem.newsHeading
            );
            return (
              <div key={newsItem.mainKhabarId}>
                <div
                  to={`/KhelDetailsD/${newsItem.mainKhabarId}`}
                  title="पिगमेंटेशन दूर करके त्वचा को चमकदार बनाता है कुमकुमादी तेलम, जानें फायदे"
                  className="bordergap card-sm mb-2"
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
                    <h1 className="wdgt-subtitle1">
                      <Link href={`/KhelDetailsD/${newsItem.mainKhabarId}`}>
                        {stripHtmlTags(newsItem.newsHeading, 60)}
                      </Link>
                    </h1>
                    <div className="socialmedia">
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
  );
}

export default TajaKhel1;
