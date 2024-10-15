import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Circles } from "react-loader-spinner";
import BigAdd from "./BigAdd";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
function VideoDetails() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/getvideo"
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
      <HelmetProvider>
        <Helmet>
          <title>वीडियो | शब्द टुडे | हिंदी न्यूज़</title>
          <link
            rel="canonical"
            href="https://www.sadaivsatya.com/VideoDetails"
          />
        </Helmet>
      </HelmetProvider>

      <section className="">
        <div className="mt-3 px-1">
          <BigAdd />
        </div>

        {/* <div className="ak-block-header wdgt-hdng ak-block-header-style-5 no-tabs">
<b className="mb-2">वीडियो-</b>
</div> */}

        <ul className="web-stry" id="webStories">
          {postData.slice(0, 30).map((post) => (
            <li key={post.shortVideoId}>
              <Link
                href={`/VideoDetailsD/${post.shortVideoId}`}
                title="सानिया मिर्जा के सूट लुक्स हैं हटके, दिखेंगी स्टाइलिश"
              >
                <span className="ak-module-format-icon format-video">
                  <i className="ak-icon fa fa-play" />
                </span>
                <img
                  src={`${image_resize}?url=${BASE_URL}${post.shortVideoImage}&w=227&h=405&outtype=webp`}
                  alt="sania mirza trendy ethnic suits for traditional look"
                  title="sania mirza trendy ethnic suits for traditional look"
                />
                <i className="fa-solid fa-video play-icon"></i>
                <div className="web-stry-cnt">
                  <p>{stripHtmlTags(post.shortVideoTile, 40)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default VideoDetails;
