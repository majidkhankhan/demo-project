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

const ShareMarket = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/stockMarket"
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
    const url = `${window.location.origin}/BusinessDetailsD/${mainKhabarId}`;
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
                      href="/BuisnessDetails"
                      title="शेयर मार्केट"
                      aria-label="शेयर मार्केट"
                    >
                      शेयर मार्केट
                    </Link>
                  </h1>
                </div>
                <div className="wdgt-wrap" id="r_main_gallery_24">
                  <div className="wdgt-lft">
                    {postData.stockMarket.slice(0, 1).map((post) => (
                      <div
                        key={post.mainKhabarId}
                        className="card-lg"
                        data-nid={10118981}
                        to={`/BusinessDetailsD/${post.mainKhabarId}`}
                        title="जब उर्फी जावेद को कर दिया था शो से बाहर, तबीयत खराब होने पर भी सेट पर बुलाया"
                        aria-label={stripHtmlTags(post.newsHeading, 30)}
                      >
                        <i className="img-sizer" />
                        <img
                          className="card-img lazy-img"
                          loading="lazy"
                          src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=468&h=263&outtype=webp`}
                          width="466px"
                          height="262px"
                          srcSet={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=468&h=263&outtype=webp`}
                          alt="जब उर्फी जावेद को कर दिया था शो से बाहर, तबीयत खराब होने पर भी सेट पर बुलाया"
                          title="जब उर्फी जावेद को कर दिया था शो से बाहर, तबीयत खराब होने पर भी सेट पर बुलाया"
                        />
                        <h1 className="big-news-title">
                          <Link href={`/BusinessDetailsD/${post.mainKhabarId}`}>
                            {" "}
                            {stripHtmlTags(post.newsHeading, 50)}
                          </Link>
                        </h1>
                        <small className="pht-contnr">
                          <i className="icon-photo" />
                        </small>
                      </div>
                    ))}
                    {postData.stockMarket.slice(1, 2).map((post) => {
                      const shareLinks = generateShareLinks(
                        post.mainKhabarId,
                        post.newsHeading
                      );
                      return (
                        <div key={post.mainKhabarId}>
                          <div
                            to={`/BusinessDetailsD/${post.mainKhabarId}`}
                            data-nid={10117664}
                            title={stripHtmlTags(post.newsHeading, 30)}
                            className="card-sm lft-card lft-card-m"
                            aria-label={stripHtmlTags(post.newsHeading, 30)}
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
                                src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=125&h=70&outtype=webp`}
                                width="125px"
                                height="70px"
                                srcSet={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=125&h=70&outtype=webp`}
                                alt="36 साल बाद कुछ ऐसी दिखती हैं पुराने 'महाभारत' की द्रौपदी, 3 बार की थी आत्महत्या की कोशिश"
                                title="36 साल बाद कुछ ऐसी दिखती हैं पुराने 'महाभारत' की द्रौपदी, 3 बार की थी आत्महत्या की कोशिश"
                              />
                            </div>
                            <div className="sm-rght">
                              <h1 className="wdgt-subtitle1">
                                <Link
                                  href={`/BusinessDetailsD/${post.mainKhabarId}`}
                                >
                                  {" "}
                                  {stripHtmlTags(post.newsHeading, 60)}
                                </Link>
                              </h1>
                              <div className="socialmedia">
                                {" "}
                                &nbsp;&nbsp;
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
                                &nbsp;&nbsp;
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
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="wdgt-rgt">
                    {postData.stockMarket.slice(2, 6).map((post) => {
                      const shareLinks = generateShareLinks(
                        post.mainKhabarId,
                        post.newsHeading
                      );
                      return (
                        <div key={post.mainKhabarId}>
                          <div
                            className="card-sm"
                            to={`/BusinessDetailsD/${post.mainKhabarId}`}
                            data-nid={10113539}
                            title={stripHtmlTags(post.newsHeading, 30)}
                            aria-label={stripHtmlTags(post.newsHeading, 30)}
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
                                src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=125&h=70&outtype=webp`}
                                width="125px"
                                height="70px"
                                srcSet={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=125&h=70&outtype=webp`}
                                alt="जून में सिनेमाघरों में रिलीज होने जा रही हैं ये 6 फिल्में, इस लिस्ट में एक हॉरर फिल्म का भी नाम शामिल"
                                title="जून में सिनेमाघरों में रिलीज होने जा रही हैं ये 6 फिल्में, इस लिस्ट में एक हॉरर फिल्म का भी नाम शामिल"
                              />
                            </div>
                            <div className="sm-rght">
                              <h1 className="wdgt-subtitle1">
                                <Link
                                  href={`/BusinessDetailsD/${post.mainKhabarId}`}
                                >
                                  {" "}
                                  {stripHtmlTags(post.newsHeading, 60)}
                                </Link>
                              </h1>
                              <div className="socialmedia">
                                {" "}
                                &nbsp;&nbsp;
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
                                &nbsp;&nbsp;
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
                              </div>
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
};

export default ShareMarket;
