import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import MobileHeader from "../components/MobileHeader";
import { Circles } from "react-loader-spinner";

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
export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const [newsData, setPosts] = useState([]);
  const [secondData, setSecondData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/breaking"
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
  useEffect(() => {
    const fetchSecondData = async () => {
      try {
        const secondResponse = await axios.get(
          "https://api.sadaivsatya.com/api/home/state"
        );
        setSecondData(secondResponse.data);
      } catch (error) {
        console.error("Error fetching second data:", error);
      }
    };

    fetchSecondData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
      <div className="my-component">
        <div
          className="ak-bar ak-header-bar ak-top-bar ak-bar-dark full-width clearfix newheader"
          style={{ background: "#ff003b" }}
        >
          <div className="container">
            <div className="ak-bar-inner">
              <div className="ak-row ak-row-items-middle">
                <div className="ak-column ak-column-left ak-column-grow">
                  <div className="ak-inner-row ak-row-items-middle ak-justify-content-left">
                    <div className="ak-bar-item ak-header-newsticker">
                      <div
                        className="ak-block ak-block-newsticker dark ak-block-width-1 ak-slider-container clearfix"
                        id="block_65f7f61f36732_1"
                      >
                        <div className="ak-block-header1  ak-block-header ak-block-header-style-8 no-tabs">
                          <h1 className="ak-block-title1">
                            <span className="title-text">
                              <i className="ak-icon1 ak-fi akfi-flash_on"></i>
                              <span>ब्रेकिंग</span>
                            </span>
                          </h1>
                        </div>
                        <div className="ak-block-inner clearfix">
                          <div className="ak-block-posts clearfix">
                            {newsData.breaking.map((item, index) => (
                              <div
                                key={item.mainKhabarId}
                                className="ak-newsticker-item"
                              >
                                <span>
                                  <Link
                                    href={`/MadhyaPradeshDetailsD/${item.mainKhabarId}`}
                                    aria-label={stripHtmlTags(
                                      item.newsHeading,
                                      75
                                    )}
                                  >
                                    {stripHtmlTags(item.newsHeading, 75)}
                                  </Link>
                                </span>
                              </div>
                            ))}{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
                <div className="ak-column ak-column-right ak-column-normal">
                  <div className="ak-inner-row ak-row-items-middle ak-justify-content-right">
                    <div className="ak-bar-item ak-header-social-icons">
                      <ul
                        className="ak-social-counter social-counter-style-4 social-counter-light clearfix dark"
                        style={{ background: "#ff003b" }}
                      >
                        <li className="social-item">
                          <Link
                            href="https://www.facebook.com"
                            aria-label="Facebook"
                            className=" facebook"
                            target="_blank"
                            rel="external noopener nofollow"
                          >
                            <i className="item-icon fa fa-facebook" />{" "}
                          </Link>{" "}
                        </li>
                        <li className="social-item">
                          <Link
                            href="https://www.twitter.com"
                            aria-label="Twitter"
                            className=" twitter"
                            target="_blank"
                            rel="external noopener nofollow"
                          >
                            {" "}
                            <i className="item-icon fa fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li className="social-item">
                          <Link
                            href="https://www.youtube.com"
                            aria-label="Youtube"
                            className=" youtube"
                            target="_blank"
                            rel="external noopener nofollow"
                          >
                            <i className="item-icon fa fa-youtube" />{" "}
                          </Link>{" "}
                        </li>
                        <li className="social-item">
                          <Link
                            href="https://www.instagram.com"
                            aria-label="Youtube"
                            className=" youtube"
                            target="_blank"
                            rel="external noopener nofollow"
                          >
                            <i className="item-icon fa fa-instagram" />{" "}
                          </Link>{" "}
                        </li>{" "}
                      </ul>{" "}
                    </div>
                    <div className="ak-bar-item ak-header-divider divider3" />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
        <div
          className="ak-bar ak-header-bar ak-mid-bar ak-bar-dark full-width clearfix"
          style={{ background: "#ff003b" }}
        >
          <div className="container">
            <div className="ak-bar-inner">
              <div className="ak-row ak-row-items-middle">
                <div className="ak-column ak-column-left ak-column-grow">
                  <div className="ak-inner-row ak-row-items-middle ak-justify-content-left">
                    <div className="ak-bar-item ak-header-menu-handler ">
                      <Link
                        href="/"
                        className="ak-menu-handler"
                        aria-label="offcanvas With Both Options"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions"
                      >
                        <span /> <span /> <span />{" "}
                      </Link>{" "}
                    </div>
                    <div className="ak-bar-item ak-header-divider divider2" />
                    <div className="ak-bar-item ak-dark-mode">
                      <div className="ak-toggle-container">
                        <label htmlFor="dark_mode">
                          {" "}
                          <span className="screen-reader-text">
                            Dark mode
                          </span>{" "}
                        </label>
                        <input
                          onClick={toggleDarkMode}
                          type="checkbox"
                          aria-label="Dark Mode"
                          className="ak-dark-mode-toggle"
                        />
                        <span className="slider round" />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="ak-column ak-column-center ak-column-normal logo-img">
                  <div className="ak-inner-row ak-row-items-middle ak-justify-content-center">
                    <div className="ak-bar-item ak-header-logo">
                      <h1 className="site-title ak-logo-wrap ak-logo-image">
                        {" "}
                        <Link href="/" aria-label="Shabd Today logo">
                          <picture>
                            <img
                              className="site-logo"
                              width={237}
                              height={100}
                              src="/design/images/logo.png"
                              alt="शब्द टुडे Logo"
                            />
                          </picture>
                        </Link>{" "}
                      </h1>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="ak-column ak-column-right ak-column-grow">
                  <div className="ak-inner-row ak-row-items-middle ak-justify-content-right">
                    <div className="ak-bar-item ak-header-button ak-header-button2">
                      <Link
                        href="/"
                        className="btn"
                        aria-label="हिंदी न्यूज़ समाचार"
                      >
                        {" "}
                        हिंदी न्यूज़ समाचार
                      </Link>{" "}
                    </div>
                    <div className="ak-bar-item ak-header-divider divider1" />
                    <div className="ak-bar-item ak-header-button ak-header-button3">
                      <Link
                        href="/LiveNews"
                        className="btn round"
                        aria-label=" लाइव न्यूज़ "
                      >
                        <i
                          className="ak-icon  fa fa-video-camera"
                          style={{ color: "red" }}
                        ></i>{" "}
                        लाइव न्यूज़{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div
        className="offcanvas offcanvas-start bg-red"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        role="dialog"
        aria-label="offcanvas With Both Options"
        aria-modal="true"
        style={{ visibility: "visible" }}
      >
        <div className="offcanvas-header border-bottom mobilenavbg">
          <div className="pt-2">
            <Link
              href="/"
              data-bs-dismiss="offcanvas"
              aria-label="Shabd Today logo"
            >
              <img
                src="/design/images/logo.png"
                width={119}
                height={50}
                loading="lazy"
                alt="Shabd today"
              />{" "}
            </Link>
          </div>
          <button
            type="button"
            className="btn-close text-reset sidebarclose"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body mobilenavbg">
          <div className="pt-2">
            <Link href="/TajaKhabarDetails">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="Taza Khabar"
              >
                ताजा खबरें
              </button>
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/MadhyaPradeshDetails">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="Mp"
              >
                मध्य प्रदेश
              </button>{" "}
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/ChhatisgarDetails">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="CG"
              >
                {" "}
                छत्तीसगढ़
              </button>
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/International">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="international"
              >
                {" "}
                अन्तर्राष्ट्रीय{" "}
              </button>
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/RashifalDetails">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="rashifal"
              >
                {" "}
                राशिफल
              </button>
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/WebstorieDetails">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="Webseries"
              >
                वेब स्टोरीज{" "}
              </button>
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/VideoDetails">
              <button
                className="btn"
                data-bs-dismiss="offcanvas"
                type="button"
                aria-expanded="false"
                aria-label="video"
              >
                {" "}
                वीडियो{" "}
              </button>{" "}
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/DaramDetails">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="dharm"
              >
                {" "}
                धर्म{" "}
              </button>{" "}
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/Khels">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="khel"
              >
                खेल{" "}
              </button>{" "}
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/BuisnessDetails">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="business"
              >
                {" "}
                बिज़नेस
              </button>{" "}
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/Bollywood">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="bollywood"
              >
                बॉलीवुड{" "}
              </button>
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/Wether">
              <button
                className="btn"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-expanded="false"
                aria-label="mousam"
              >
                {" "}
                मौसम
              </button>{" "}
            </Link>{" "}
          </div>
          <div className="pt-2">
            <Link href="">
              {" "}
              <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                aria-expanded="false"
                aria-label="state"
              >
                अन्य राज्य
              </button>{" "}
            </Link>
          </div>
        </div>{" "}
      </div>
      {/* Desktop NavBar */}
      <div className="ak-bar ak-header-bar ak-bottom-bar  full-width clearfix my-component">
        <div className="container">
          <div className="ak-bar-inner">
            <div className="ak-row ak-row-items-middle">
              <div className="ak-column ak-column-left ak-column-grow">
                <div className="ak-inner-row ak-row-items-middle ak-justify-content-left">
                  <div className="ak-bar-item ak-header-home-button">
                    <Link
                      href="/"
                      className="ak-header-icon-btn ak-header-home-btn"
                      aria-label="Desktop NavBar"
                    >
                      <i className="ak-icon  fa fa-home" />
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="ak-column ak-column-center ak-column-normal">
                <div className="ak-inner-row ak-row-items-middle ak-justify-content-center">
                  <div className="ak-bar-item ak-header-main-menu ak-menu-more-enabled">
                    <ul
                      id="menu-main-navigation"
                      className="ak-menu ak-main-menu ak-menu-wide ak-menu-style-3 ak-main-menu"
                    >
                      <li
                        id="menu-item-254"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-45 menu-item-254"
                      >
                        <Link href="/LiveNews">
                          {" "}
                          <i
                            className="ak-icon  fa fa-video-camera"
                            style={{ color: "red" }}
                          ></i>
                          &nbsp;
                          <span
                            style={{
                              fontWeight: 900,
                              color: "#ff003b",
                              fontFamily: "emoji",
                            }}
                          >
                            {" "}
                            लाइव न्यूज़{" "}
                          </span>
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-254"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-45 menu-item-254"
                      >
                        <Link href="/TajaKhabarDetails">
                          {" "}
                          <span>ताजा खबरें </span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-253"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-44 menu-item-253"
                      >
                        <Link href="/MadhyaPradeshDetails">
                          {" "}
                          <span>मध्यप्रदेश</span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-254"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-45 menu-item-254"
                      >
                        <Link href="/ChhatisgarDetails">
                          {" "}
                          <span>छत्तीसगढ़ </span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-256"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-50 menu-item-256"
                      >
                        <Link href="/International">
                          {" "}
                          <span>अन्तर्राष्ट्रीय </span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-258"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-49 menu-item-258"
                      >
                        <Link href="/RashifalDetails">
                          {" "}
                          <span>राशिफल</span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-260"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-260"
                      >
                        <Link href="/WebstorieDetails">
                          {" "}
                          <span>वेब स्टोरीज </span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-260"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-260"
                      >
                        <Link href="/VideoDetails">
                          {" "}
                          <span>वीडियो </span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-257"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-47 menu-item-257"
                      >
                        <Link href="/DaramDetails">
                          {" "}
                          <span>धर्म</span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-259"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-48 menu-item-259"
                      >
                        <Link href="/Khels">
                          {" "}
                          <span>खेल</span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li
                        id="menu-item-260"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-260"
                      >
                        <Link href="/BuisnessDetails">
                          {" "}
                          <span>बिज़नेस </span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-260"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-260"
                      >
                        <Link href="/Bollywood">
                          {" "}
                          <span>बॉलीवुड </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li
                        id="menu-item-260"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-260"
                      >
                        <Link href="/Wether">
                          {" "}
                          <span>मौसम </span>{" "}
                        </Link>{" "}
                      </li>
                      <li
                        id="menu-item-254"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-45 menu-item-254"
                      >
                        <Link
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          {" "}
                          <span>अन्य राज्य </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="ak-column ak-column-right ak-column-grow">
                <div className="ak-inner-row ak-row-items-middle ak-justify-content-right">
                  <div className="ak-bar-item ak-header-search">
                    <Link
                      href="#"
                      className="ak-header-icon-btn ak-dropdown-button ak-search-btn"
                      aria-label="Search"
                    >
                      {" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>{" "}
                    </Link>
                    <div
                      className="ak-dropdown ak-search-box clearfix"
                      data-event="click"
                    >
                      {" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header bg-red border-bottom">
          <h5 className="offcanvas-title text-white " id="offcanvasBottomLabel">
            {" "}
            अन्य राज्य
          </h5>
          <button
            type="button"
            className="btn-close sidebarclose"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />{" "}
        </div>
        <div className="offcanvas-body bg-red">
          {" "}
          <div className="astronews">
            {" "}
            <div className="block">
              {secondData?.statenames?.length > 0 ? (
                secondData.statenames.map((newsItem, index) => (
                  <div
                    key={newsItem.stateId}
                    className="itemm"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      href={`/OtherState/${newsItem.stateId}`}
                      className="astro"
                    >
                      <div className="title">{newsItem.stateTitle}</div>
                    </Link>
                  </div>
                ))
              ) : (
                <div>No data available</div>
              )}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <MobileHeader />
    </div>
  );
}
