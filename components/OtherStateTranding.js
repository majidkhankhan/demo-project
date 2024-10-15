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
function OtherStateTranding() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/topHeadlines"
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
      <section className=" mt-3 gayab">
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
                <Link href="/astrology/" title="धर्म">
                  ट्रेंडिंग ख़बरें
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div className="webStory">
          <div className="block">
            {postData.topHeadlines.slice(0, 1).map((post) => (
              <div key={post.mainKhabarId} className="item">
                <div
                  href={`/OtherStateDetails/${post.mainKhabarId}`}
                  title="#"
                  className="webstory-card"
                >
                  <figure>
                    <img
                      alt=""
                      loading="lazy"
                      width={160}
                      height={282}
                      src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=143&h=80&outtype=webp`}
                      style={{ color: "transparent" }}
                    />
                  </figure>
                  <div className="caption">
                    <div className="title card-text">
                      <Link href={`/OtherStateDetails/${post.mainKhabarId}`}>
                        {" "}
                        {stripHtmlTags(post.newsHeading, 10)}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <marquee scrollamount="2">
              {postData.topHeadlines.slice(1, 6).map((post) => (
                <div
                  key={post.mainKhabarId}
                  className="item"
                  style={{ float: "left", margin: "5" }}
                >
                  <div
                    href={`/OtherStateDetails/${post.mainKhabarId}`}
                    title="#"
                    className="webstory-card"
                  >
                    <figure>
                      <img
                        alt="#"
                        loading="lazy"
                        width={160}
                        height={282}
                        src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=143&h=80&outtype=webp`}
                        style={{ color: "transparent" }}
                      />
                    </figure>
                    <div className="caption">
                      <div className="title card-text">
                        <Link href={`/OtherStateDetails/${post.mainKhabarId}`}>
                          {" "}
                          {stripHtmlTags(post.newsHeading, 15)}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </marquee>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OtherStateTranding;
