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

const formatDateInHindi = (dateString) => {
  const date = new Date(dateString);
  return format(date, "do MMMM yyyy", { locale: hi });
};
function RashifalVerticle() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/rashifalKhabarss"
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
  return (
    <div>
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
              <a href="/astrology/" title="धर्म">
                राशिफल
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="block smallrashi">
        {posts.rashifalKhabarss.slice(0, 1).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="मेष"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/aries.png"
                />
              </div>
              <div className="title">मेष</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(1, 2).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="वृषभ"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/Taurus.png"
                />
              </div>
              <div className="title">वृषभ</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(2, 3).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="मिथुन"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/gemini.png"
                />
              </div>
              <div className="title">मिथुन</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(3, 4).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="कर्क"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/cancer.png"
                />
              </div>
              <div className="title">कर्क</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(4, 5).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="सिंह"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/leo.png"
                />
              </div>
              <div className="title">सिंह</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(5, 6).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="कन्या"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/virgo.png"
                />
              </div>
              <div className="title">कन्या</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(6, 7).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="तुला"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/libra.png"
                />
              </div>
              <div className="title">तुला</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(7, 8).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="वृश्चिक"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/scorpio.png"
                />
              </div>
              <div className="title">वृश्चिक</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(8, 9).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="धनु"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/Sagittarius.png"
                />
              </div>
              <div className="title">धनु</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(9, 10).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="मकर"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/Capricorn.png"
                />
              </div>
              <div className="title">मकर</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(10, 11).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="कुंभ"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/aquarius.png"
                />
              </div>
              <div className="title">कुंभ</div>
            </Link>
          </div>
        ))}
        {posts.rashifalKhabarss.slice(11, 12).map((newsItem) => (
          <div key={newsItem.rashifalId} className="item ak-module-title">
            <Link
              href={`/RashiDetail/${newsItem.rashifalId}`}
              className="astro"
            >
              <div className="icon rounded-image">
                <img
                  alt="मीन"
                  loading="lazy"
                  width={90}
                  height={90}
                  style={{ color: "transparent" }}
                  src="design/images/rashifal/pisces.png"
                />
              </div>
              <div className="title">मीन</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RashifalVerticle;
