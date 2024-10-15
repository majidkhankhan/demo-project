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
function WebSeries() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/webSeries"
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
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        className=" vc_row dark vc_custom_1664728292054 vc_row-has-fill"
        style={{ padding: "10px" }}
      >
        <div className="ak_vc_container">
          <div className="wpb_column ak_column_3 vc_column_container vc_col-sm-12">
            <div className="ak_vc_wrapper wpb_wrapper">
              <div
                className="ak-block ak-block-custom-header  ak-block-width-3 clearfix"
                id="block_65f7f61f36732_16"
              >
                <div className="ak-block-inner clearfix" />
              </div>
              <div
                className="main-wdgt glry-bg"
                data-vars-widget-type="category"
                data-vars-widget-name="image gallery"
                data-vars-orderid={11}
                id="widget-rs-4996"
              >
                <div className="wdgt-hdng">
                  <h1>
                    <Link href="/photos/" title="फोटो गैलरी">
                      वेब सीरीज
                    </Link>
                  </h1>
                </div>
                <div className="wdgt-wrap" id="r_main_gallery_24">
                  <div className="wdgt-lft">
                    {postData.webSeries.slice(0, 1).map((post) => (
                      <Link
                        key={post.id}
                        className="card-lg"
                        data-nid={10118981}
                        href="#"
                        title="जब उर्फी जावेद को कर दिया था शो से बाहर, तबीयत खराब होने पर भी सेट पर बुलाया"
                        onclick='gaClickEvent("image gallery", "category", "11","www.livehindustan.com/state/" , {"id":"10118981","name": "image gallery","creative": "www.livehindustan.com/photos/entertainment/when-urfi-javed-was-make-out-of-the-show-was-called-on-set-even-when-she-was-unwell-1-10118981", "position": 1})'
                      >
                        {" "}
                        <i className="img-sizer" />{" "}
                        <img
                          className="card-img lazy-img"
                          loading="lazy"
                          src={
                            image_resize +
                            "?url=" +
                            BASE_URL +
                            post.newsImage +
                            "&w=292&h=249&outtype=webp"
                          }
                          width="466px"
                          height="262px"
                          srcSet={
                            image_resize +
                            "?url=" +
                            BASE_URL +
                            post.newsImage +
                            "&w=292&h=249&outtype=webp"
                          }
                          alt="जब उर्फी जावेद को कर दिया था शो से बाहर, तबीयत खराब होने पर भी सेट पर बुलाया"
                          title="जब उर्फी जावेद को कर दिया था शो से बाहर, तबीयत खराब होने पर भी सेट पर बुलाया"
                        />
                        <Link
                          className="big-news-title"
                          href={`/Newsdetails3/${post.mainKhabarId}`}
                        >
                          {stripHtmlTags(post.newsHeading, 60)}
                        </Link>
                        <small className="pht-contnr">
                          <i className="icon-photo" />
                          <em>7</em>
                        </small>
                      </Link>
                    ))}
                    {postData.webSeries.slice(1, 2).map((post) => (
                      <Link
                        key={post.id}
                        href="/photos/entertainment/br-chopra-mahabharat-draupadi-rupa-ganguly-look-changed-completely-after-36-years-1-10117664"
                        data-nid={10117664}
                        title="36 साल बाद कुछ ऐसी दिखती हैं पुराने 'महाभारत' की द्रौपदी, 3 बार की थी आत्महत्या की कोशिश"
                        className="card-sm lft-card lft-card-m"
                        onclick='gaClickEvent("image gallery", "category", "11","www.livehindustan.com/state/" , {"id":"10118981","name": "image gallery","creative": "www.livehindustan.com/photos/entertainment/when-urfi-javed-was-make-out-of-the-show-was-called-on-set-even-when-she-was-unwell-1-10118981", "position": 2})'
                      >
                        <div className="sm-lft">
                          <small
                            className="pht-contnr"
                            style={{ zIndex: 33, right: 5 }}
                          >
                            <i className="icon-photo" />
                            <em>7</em>
                          </small>
                          <i className="img-sizer" />
                          <img
                            className="card-img lazy-img"
                            loading="lazy"
                            src={
                              image_resize +
                              "?url=" +
                              BASE_URL +
                              post.newsImage +
                              "&w=125&h=106&outtype=webp"
                            }
                            width="125px"
                            height="70px"
                            srcSet={
                              image_resize +
                              "?url=" +
                              BASE_URL +
                              post.newsImage +
                              "&w=125&h=106&outtype=webp"
                            }
                            alt="36 साल बाद कुछ ऐसी दिखती हैं पुराने 'महाभारत' की द्रौपदी, 3 बार की थी आत्महत्या की कोशिश"
                            title="36 साल बाद कुछ ऐसी दिखती हैं पुराने 'महाभारत' की द्रौपदी, 3 बार की थी आत्महत्या की कोशिश"
                          />
                        </div>
                        <div className="sm-rght">
                          <Link
                            className="wdgt-subtitle1"
                            href={`/Newsdetails3/${post.mainKhabarId}`}
                          >
                            {stripHtmlTags(post.newsHeading, 60)}
                          </Link>{" "}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="wdgt-rgt">
                    {postData.webSeries.slice(2, 6).map((post) => (
                      <Link
                        key={post.id}
                        className="card-sm"
                        href="/photos/entertainment/june-theater-release-upcoming-films-in-june-kartik-aaryan-chandu-champion-horror-movie-sports-drama-1-10113539"
                        data-nid={10113539}
                        title="जून में सिनेमाघरों में रिलीज होने जा रही हैं ये 6 फिल्में, इस लिस्ट में एक हॉरर फिल्म का भी नाम शामिल"
                        onclick='gaClickEvent("image gallery", "category", "11","www.livehindustan.com/state/" , {"id":"10113539","name": "image gallery","creative": "www.livehindustan.com/photos/entertainment/june-theater-release-upcoming-films-in-june-kartik-aaryan-chandu-champion-horror-movie-sports-drama-1-10113539", "position": 2+1})'
                      >
                        <div className="sm-lft">
                          <small
                            className="pht-contnr"
                            style={{ zIndex: 33, right: 5 }}
                          >
                            <i className="icon-photo" />
                            <em>7</em>
                          </small>
                          <i className="img-sizer" />
                          <img
                            className="card-img lazy-img"
                            loading="lazy"
                            src={
                              image_resize +
                              "?url=" +
                              BASE_URL +
                              post.newsImage +
                              "&w=125&h=106&outtype=webp"
                            }
                            width="125px"
                            height="70px"
                            srcSet={
                              image_resize +
                              "?url=" +
                              BASE_URL +
                              post.newsImage +
                              "&w=125&h=106&outtype=webp"
                            }
                            alt="जून में सिनेमाघरों में रिलीज होने जा रही हैं ये 6 फिल्में, इस लिस्ट में एक हॉरर फिल्म का भी नाम शामिल"
                            title="जून में सिनेमाघरों में रिलीज होने जा रही हैं ये 6 फिल्में, इस लिस्ट में एक हॉरर फिल्म का भी नाम शामिल"
                          />
                        </div>
                        <div className="sm-rght">
                          <Link
                            className="wdgt-subtitle1"
                            href={`/Newsdetails3/${post.mainKhabarId}`}
                          >
                            {stripHtmlTags(post.newsHeading, 60)}
                          </Link>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebSeries;
