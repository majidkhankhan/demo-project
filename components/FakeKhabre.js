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
function FakeKhabre() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/factCheck"
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
    <div className="border">
      <div className="ak-block-header ak-block-header-style-5 no-tabs mt-2">
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
                href="/"
                title="फेक न्यूज एक्सपोज़"
                aria-label="फेक न्यूज एक्सपोज़"
              >
                फेक न्यूज एक्सपोज़
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="n_w_p_body">
        <div className="joytish_vishesh_img">
          <ul>
            {postData.factCheck.slice(0, 1).map((post) => (
              <li key={post.mainKhabarId}>
                <Link
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  aria-label="फेक न्यूज एक्सपोज़"
                >
                  <img
                    alt={stripHtmlTags(post.newsHeading, 100)}
                    loading="lazy"
                    src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=150&h=75&outtype=webp`}
                    className="img-fluid"
                  />
                </Link>
              </li>
            ))}
            {postData.factCheck.slice(1, 2).map((post) => (
              <li key={post.mainKhabarId}>
                <Link
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  aria-label="फेक न्यूज एक्सपोज़"
                >
                  <img
                    alt={stripHtmlTags(post.newsHeading, 100)}
                    loading="lazy"
                    src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=150&h=75&outtype=webp`}
                    className="img-fluid"
                  />
                </Link>
              </li>
            ))}
            {postData.factCheck.slice(2, 3).map((post) => (
              <li key={post.mainKhabarId}>
                <Link
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  aria-label="फेक न्यूज एक्सपोज़"
                >
                  <img
                    alt={stripHtmlTags(post.newsHeading, 100)}
                    loading="lazy"
                    src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=150&h=75&outtype=webp`}
                    className="img-fluid"
                  />
                </Link>
              </li>
            ))}
            {postData.factCheck.slice(3, 4).map((post) => (
              <li key={post.mainKhabarId}>
                <Link
                  href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                  aria-label="फेक न्यूज एक्सपोज़"
                >
                  <img
                    alt={stripHtmlTags(post.newsHeading, 100)}
                    loading="lazy"
                    src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=150&h=75&outtype=webp`}
                    className="img-fluid"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FakeKhabre;
