import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useNavigate } from "next/navigation";
import { Circles } from "react-loader-spinner";

const baseUrl = "https://api.sadaivsatya.com/";
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
function ViralKhabre() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/virals"
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
      <section className=" mt-3">
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
                <Link href="#" title="धर्म">
                  धर्म
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div className="webStory">
          <div className="block">
            {postData.viral.slice(0, 6).map((post) => (
              <div className="item"
                key={post.id}>
                <Link
                  href="#"
                  title="#"
                  className="webstory-card"
                  target="_blank"
                >
                  <figure>
                    <img
                      alt=""
                      loading="lazy"
                      width={160}
                      height={282}
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        post.newsImage +
                        "&w=267&h=228&outtype=webp"
                      }
                      style={{ color: "transparent" }}
                    />
                  </figure>
                  <div className="caption">
                    <div className="title card-text">
                      <Link href={`/NewsDetails5/${post.mainKhabarId}`}>
                        {" "}
                        {stripHtmlTags(post.newsHeading, 20)}{" "}
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
}

export default ViralKhabre;
