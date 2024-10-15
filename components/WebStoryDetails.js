import React, { useState, useEffect } from "react";
import axios from "axios";
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

function WebStoryDetails() {
  const [posts, setPosts] = useState([]);
  // const [secondData, setSecondData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/getwebStorie"
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
  const baseUrl = "https://api.sadaivsatya.com/";
  const image_resize = "https://api.sadaivsatya.com/api/home/resize";

  return (
    <div>
      <section className="">
        <div className="ak-block-header wdgt-hdng  ak-block-header-style-5 no-tabs">
          <b className="mb-2"> वेब स्टोरीज-</b>
        </div>
        <ul className="web-stry" id="webStories">
          {posts.webstory.slice(0, 29).map((newsItem) => (
            <li key={newsItem.webStoriesId}>
              <Link
                href={`/WebStrorieD/${newsItem.webStoriesId}`}
                title="गाय के डकार लेने पर इस देश में लगता है टैक्स, जानिए वजह"
                target="_blank"
              >
                <i className="view-icn" />
                <img
                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.webStoriesImage +
                    "&w=150&h=300&outtype=webp"
                  }
                  width={150}
                  height={300}
                  alt="new zealand levies tax on sheep urine and cow burps to cut greenhouse gases"
                  title="new zealand levies tax on sheep urine and cow burps to cut greenhouse gases"
                />
                <div className="web-stry-cnt">
                  <p> {stripHtmlTags(newsItem.webStoriesHeading, 20)} </p>
                  <div className="date">
                    {formatDateInHindi(newsItem.date)}{" "}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default WebStoryDetails;
