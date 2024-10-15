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

function Entertainment() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/manoranjans"
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
    navigate(`/NewsDetails/${trendingTagId}`);
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
    const url = `${window.location.origin}/BollywoodDetails/${mainKhabarId}`;
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
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        className="container vc_row dark vc_custom_1664728292054 vc_row-has-fill"
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
                    <Link
                      href="/Bollywood"
                      title="मनोरंजन न्यूज़"
                      aria-label="मनोरंजन न्यूज़"
                    >
                      मनोरंजन न्यूज़
                    </Link>
                  </h1>
                </div>
                <div className="wdgt-wrap" id="r_main_gallery_24">
                  <div className="wdgt-lft">
                    {postData.manoranjan.slice(0, 1).map((newsItem) => (
                      <div key={newsItem.mainKhabarId}>
                        <div
                          className="card-lg"
                          data-nid={10118981}
                          aria-label="मनोरंजन न्यूज़"
                          to={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                          title="जब उर्फी जावेद को कर दिया था शो से बाहर, तबीयत खराब होने पर भी सेट पर बुलाया"
                        >
                          <i className="img-sizer" />
                          <img
                            className="card-img lazy-img"
                            loading="lazy"
                            src={`${image_resize}?url=${BASE_URL}${newsItem.newsImage}&w=471&h=265&outtype=webp`}
                            width="466px"
                            height="262px"
                            srcSet={`${image_resize}?url=${BASE_URL}${newsItem.newsImage}&w=471&h=265&outtype=webp`}
                            alt="जब उर्फी जावेद को कर दिया था शो से बाहर, तबीयत खराब होने पर भी सेट पर बुलाया"
                            title="जब उर्फी जावेद को कर दिया था शो से बाहर, तबीयत खराब होने पर भी सेट पर बुलाया"
                          />
                          <h1 className="big-news-title">
                            <Link
                              href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                            >
                              {stripHtmlTags(newsItem.newsHeading, 60)}
                            </Link>
                          </h1>
                          <small className="pht-contnr">
                            <i className="icon-photo" />
                          </small>
                        </div>
                      </div>
                    ))}
                    {postData.manoranjan.slice(1, 2).map((newsItem) => {
                      const shareLinks = generateShareLinks(
                        newsItem.mainKhabarId,
                        newsItem.newsHeading
                      );
                      return (
                        <div key={newsItem.mainKhabarId}>
                          <div
                            to={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                            data-nid={10117664}
                            title="36 साल बाद कुछ ऐसी दिखती हैं पुराने 'महाभारत' की द्रौपदी, 3 बार की थी आत्महत्या की कोशिश"
                            className="card-sm lft-card lft-card-m"
                          >
                            <div className="sm-lft">
                              <small
                                className="pht-contnr"
                                style={{ zIndex: 33, right: 5 }}
                              >
                                <i className="icon-photo" />
                              </small>
                              <i className="img-sizer" />
                              <img
                                className="card-img lazy-img"
                                loading="lazy"
                                src={`${image_resize}?url=${BASE_URL}${newsItem.newsImage}&w=125&h=70&outtype=webp`}
                                width="125px"
                                height="70px"
                                srcSet={`${image_resize}?url=${BASE_URL}${newsItem.newsImage}&w=125&h=70&outtype=webp`}
                                alt="36 साल बाद कुछ ऐसी दिखती हैं पुराने 'महाभारत' की द्रौपदी, 3 बार की थी आत्महत्या की कोशिश"
                                title="36 साल बाद कुछ ऐसी दिखती हैं पुराने 'महाभारत' की द्रौपदी, 3 बार की थी आत्महत्या की कोशिश"
                              />
                            </div>
                            <div className="sm-rght">
                              <h1 className="wdgt-subtitle1">
                                <Link
                                  href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                >
                                  {stripHtmlTags(newsItem.newsHeading, 60)}
                                </Link>
                                <span className="socialmedia">
                                  {" "}
                                  &nbsp;&nbsp;&nbsp;
                                  <Link
                                    href={shareLinks.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="facebook"
                                  >
                                    <i
                                      className="fa fa-facebook"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  &nbsp;&nbsp; &nbsp;&nbsp;
                                  <Link
                                    href={shareLinks.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="whatsapp"
                                  >
                                    <i
                                      className="fa fa-whatsapp"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>{" "}
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="wdgt-rgt">
                    {postData.manoranjan.slice(2, 6).map((newsItem) => {
                      const shareLinks = generateShareLinks(
                        newsItem.mainKhabarId,
                        newsItem.newsHeading
                      );
                      return (
                        <div key={newsItem.mainKhabarId}>
                          <div
                            className="card-sm"
                            to={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                            data-nid={10113539}
                            title={stripHtmlTags(newsItem.newsHeading, 100)}
                            aria-label={stripHtmlTags(
                              newsItem.newsHeading,
                              100
                            )}
                          >
                            <div className="sm-lft">
                              <small
                                className="pht-contnr"
                                style={{ zIndex: 33, right: 5 }}
                              >
                                <i className="icon-photo" />
                              </small>
                              <i className="img-sizer" />
                              <img
                                className="card-img lazy-img"
                                loading="lazy"
                                src={`${image_resize}?url=${BASE_URL}${newsItem.newsImage}&w=125&h=70&outtype=webp`}
                                width="125px"
                                height="70px"
                                srcSet={`${image_resize}?url=${BASE_URL}${newsItem.newsImage}&w=125&h=70&outtype=webp`}
                                alt="जून में सिनेमाघरों में रिलीज होने जा रही हैं ये 6 फिल्में, इस लिस्ट में एक हॉरर फिल्म का भी नाम शामिल"
                                title="जून में सिनेमाघरों में रिलीज होने जा रही हैं ये 6 फिल्में, इस लिस्ट में एक हॉरर फिल्म का भी नाम शामिल"
                              />
                            </div>
                            <div className="sm-rght">
                              <h1 className="wdgt-subtitle1">
                                <Link
                                  href={`/BollywoodDetails/${newsItem.mainKhabarId}`}
                                >
                                  {" "}
                                  {stripHtmlTags(newsItem.newsHeading, 72)}
                                </Link>

                                <span className="socialmedia">
                                  {" "}
                                  &nbsp;&nbsp;&nbsp;
                                  <Link
                                    href={shareLinks.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="facebook"
                                  >
                                    <i
                                      className="fa fa-facebook"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  &nbsp;&nbsp; &nbsp;&nbsp;
                                  <Link
                                    href={shareLinks.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="whatsapp"
                                  >
                                    <i
                                      className="fa fa-whatsapp"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>{" "}
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default Entertainment;
