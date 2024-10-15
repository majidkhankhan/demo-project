import React from "react";
import Link from "next/link";
import DarkModeMobile from "./DarkModeMobile";
import Image from "next/image";

export default async function MobileHeaders() {
  const newsData = await (
    await fetch("https://api.sadaivsatya.com/api/home/getState")
  ).json();

  return (
    <div>
      <div className="ak-header-mobile-wrap">
        <div className="ak-container">
          <div className="ak-bar ak-header-mobile-bar ak-mobile-bar ak-bar-dark dark full-width clearfix">
            <div className="container">
              <div className="ak-bar-inner">
                <div className="ak-row ak-row-items-middle">
                  <div className="ak-column ak-column-left ak-column-grow">
                    <div className="ak-inner-row ak-row-items-middle ak-justify-content-left">
                      <div className="ak-bar-item ak-header-menu-handler ">
                        <Link
                          href="/"
                          aria-label="Mobile Side Menu"
                          className="ak-menu-handler"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasWithBothOptions"
                          aria-controls="offcanvasWithBothOptions"
                        >
                          <span /> <span /> <span />
                        </Link>
                      </div>
                      <div className="ak-bar-item ak-header-mobile-logo">
                        <div className="ak-logo-wrap ak-logo-image">
                          <Link href="/" rel="home">
                            <Image
                              priority={true}
                              alt="Shabd Today Logo"
                              className="mobile-logo"
                              width={115}
                              height={48}
                              src="/design/images/logo.png"
                              srcSet="/design/images/logo.png 1x, /design/images/logo.png 2x"
                              style={{ padding: "2" }}
                            />
                          </Link>{" "}
                        </div>{" "}
                      </div>
                      <div className="ak-header-button ak-header-button3">
                        <Link href="/LiveNews" className="btn round">
                          <i
                            className="ak-icon  fa fa-video-camera"
                            style={{ color: "red" }}
                          ></i>
                          लाइव{" "}
                        </Link>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <div className="ak-column ak-column-right ak-column-normal">
                    <div className="ak-inner-row ak-row-items-middle ak-justify-content-right">
                      <div className="ak-bar-item ak-dark-mode">
                        <div className="ak-toggle-container">
                          <label htmlFor="dark_mode">
                            <span className="screen-reader-text">
                              डार्क मोड
                            </span>
                          </label>
                          <DarkModeMobile />
                          <span className="slider round" />
                        </div>
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="ak-bar ak-header-mobile-bar ak-mobile_menu-bar  full-width clearfix">
            <div className="container">
              <div className="ak-bar-inner">
                <div className="ak-row ak-row-items-middle">
                  <div className="ak-column ak-column-left ak-column-grow">
                    <div className="ak-inner-row ak-row-items-middle ak-justify-content-left">
                      <div className="ak-bar-item ak-mobile-bar-menu-container">
                        <ul
                          id="menu-mobile-navigation"
                          className="ak-menu ak-mobile-bar-menu ak-menu-wide ak-menu-style-6 ak-mobile-menu"
                        >
                          <li
                            id="menu-item-264"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-50 menu-item-264"
                          >
                            <Link href="/LiveNews">
                              <i
                                className="ak-icon  fa fa-video-camera"
                                style={{ color: "red" }}
                              ></i>
                              <span
                                style={{
                                  fontWeight: 900,
                                  color: "#ff003b",
                                  fontFamily: "emoji",
                                }}
                              >
                                {" "}
                                लाइव न्यूज़{" "}
                              </span>{" "}
                            </Link>{" "}
                          </li>
                          <li
                            id="menu-item-264"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-50 menu-item-264"
                          >
                            <Link href="/TajaKhabarDetails">
                              <span>ताजा खबरें </span>{" "}
                            </Link>{" "}
                          </li>
                          <li
                            id="menu-item-261"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-44 menu-item-261"
                          >
                            <Link href="/MadhyaPradeshDetails">
                              <span>मध्यप्रदेश</span>
                            </Link>
                          </li>
                          <li
                            id="menu-item-262"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-45 menu-item-262"
                          >
                            <Link href="/ChhatisgarDetails">
                              <span>छत्तीसगढ़ </span>{" "}
                            </Link>
                          </li>
                          <li
                            id="menu-item-266"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-49 menu-item-266"
                          >
                            <Link href="/International">
                              <span>अन्तर्राष्ट्रीय</span>{" "}
                            </Link>{" "}
                          </li>
                          <li
                            id="menu-item-267"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-48 menu-item-267"
                          >
                            <Link href="/RashifalDetails">
                              <span>राशिफल </span>
                            </Link>{" "}
                          </li>
                          <li
                            id="menu-item-268"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-268"
                          >
                            <Link href="/WebstorieDetails">
                              <span>वेब स्टोरीज</span>{" "}
                            </Link>
                          </li>
                          <li
                            id="menu-item-268"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-268"
                          >
                            <Link href="/VideoDetails">
                              <span>वीडियो</span>
                            </Link>
                          </li>
                          <li
                            id="menu-item-268"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-268"
                          >
                            <Link href="/DaramDetails">
                              <span>धर्म</span>{" "}
                            </Link>
                          </li>
                          <li
                            id="menu-item-268"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-268"
                          >
                            <Link href="/Khels">
                              <span>खेल</span>
                            </Link>
                          </li>
                          <li
                            id="menu-item-268"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-268"
                          >
                            <Link href="/BuisnessDetails">
                              {" "}
                              <span>बिज़नेस</span>{" "}
                            </Link>
                          </li>
                          <li
                            id="menu-item-268"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-51 menu-item-268"
                          >
                            <Link href="/Bollywood">
                              <span>बॉलीवुड</span>
                            </Link>
                          </li>
                          <li
                            id="menu-item-263"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-46 menu-item-263"
                          >
                            <Link href="/Wether">
                              <span>मौसम</span>
                            </Link>{" "}
                          </li>
                          <li
                            id="menu-item-254"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-45 menu-item-254"
                          >
                            <Link
                              href="/MadhyaPradeshDetails"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
                              aria-controls="offcanvasRight"
                            >
                              <span>अन्य राज्य </span>
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header bg-red">
          <h5 className="offcanvas-title text-white " id="offcanvasBottomLabel">
            {" "}
            अन्य राज्य
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />{" "}
        </div>
        <div className="offcanvas-body bg-red">
          <div className="astronews">
            <div className="block">
              {newsData?.statenames?.length > 0 ? (
                newsData.statenames.map((newsItem, index) => (
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
      </div>{" "}
    </div>
  );
}
