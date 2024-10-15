"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { format } from "date-fns";
import { hi } from "date-fns/locale";
import { Circles } from "react-loader-spinner";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
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

export default function Footer() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/tajaKhabars"
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
  const generateShareLinks = (mainKhabarId, newsHeading) => {
    const encodedNewsHeading = encodeURIComponent(newsHeading);
    const url = `${window.location.origin}/TajaKhabarDetailsNews/${mainKhabarId}`;
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

  // Define base URL for images
  const baseUrl = "https://api.sadaivsatya.com/";
  const image_resize = "https://api.sadaivsatya.com/api/home/resize";

  return (
    <div>
      <div className="ak-footer-wrap">
        <div className="ak-container">
          <div className="ak-bar ak-footer-bar ak-top-bar ak-bar-dark dark full-width clearfix">
            <div className="container">
              <div className="ak-bar-inner">
                <div className="ak-row ak-row-items-middle ak-row-responsive">
                  <div className="ak-column ak-column-center ak-column-normal">
                    <div className="ak-inner-row ak-row-items-middle ak-justify-content-left">
                      <div className="ak-footer-widgets">
                        <div className="row" style={{ display: "block" }}>
                          <div className="col-sm-4 ak-footer-column">
                            <aside className="sidebar sidebar-footer-1">
                              <div
                                id="newsy_about_us-3"
                                className="widget widget_newsy_about_us"
                              >
                                <div
                                  className="ak-block ak-block-about-us  ak-block-width-1 clearfix"
                                  id="block_65f7f61f36732_27"
                                >
                                  <div className="ak-block-header ak-block-header-style-5 no-tabs">
                                    <h1 className="ak-block-title">
                                      {" "}
                                      <span className="title-text">
                                        {" "}
                                        <span>हमारे बारे में</span>{" "}
                                      </span>{" "}
                                    </h1>{" "}
                                  </div>
                                  <div className="ak-block-inner clearfix">
                                    <div className="ak-about-image">
                                      <Link href="/">
                                        {" "}
                                        <img
                                          loading="lazy"
                                          src="/design/images/logo.png"
                                          alt="shabadtoday"
                                          width={333}
                                          height={140}
                                        />{" "}
                                      </Link>{" "}
                                    </div>
                                    <p className="ak-about-description text-white">
                                      शब्द टुडे भारत का एक प्रमुख हिंदी न्यूज
                                      समाचारपत्र है। भारत के 12 राज्‍यों में
                                      इसके 100 संस्‍करण प्रकाशित हो रहे हैं।
                                      शब्द टुडे समूह के प्रकाशनों में दिव्य शब्द
                                      टुडे और डीएनए और पत्रिका अहा ज़िंदगी भी
                                      शामिल हैं। 2024 में यह देश का सबसे अधिक
                                      पढ़ा जाने वाला समाचार-पत्र बना।
                                      <Link
                                        href="/"
                                        className="ak-about-link"
                                        aria-label="शब्द टुडे"
                                      />{" "}
                                    </p>
                                    <div className="ak-about-social-items">
                                      <ul className="ak-social-counter social-counter-style-4 social-counter-light-box clearfix">
                                        <li className="social-item">
                                          <Link
                                            href="https://www.facebook.com"
                                            aria-label="Facebook"
                                            className=" facebook"
                                            target="_blank"
                                            rel="external noopener nofollow"
                                          >
                                            {" "}
                                            <i className="item-icon fa fa-facebook" />{" "}
                                            <span className="item-count">
                                              {" "}
                                              0{" "}
                                            </span>
                                            <span className="item-name">
                                              {" "}
                                              Facebook{" "}
                                            </span>{" "}
                                            <span className="item-title">
                                              {" "}
                                              Likes{" "}
                                            </span>{" "}
                                            <span className="item-join">
                                              {" "}
                                              Join us on Facebook{" "}
                                            </span>{" "}
                                            <span className="item-button">
                                              {" "}
                                              Like our page{" "}
                                            </span>{" "}
                                          </Link>{" "}
                                        </li>{" "}
                                        <li className="social-item">
                                          {" "}
                                          <Link
                                            href="https://www.twitter.com"
                                            aria-label="Twitter"
                                            className=" twitter"
                                            target="_blank"
                                            rel="external noopener nofollow"
                                          >
                                            {" "}
                                            <i className="item-icon fa fa-twitter" />{" "}
                                            <span className="item-count">
                                              {" "}
                                              0
                                            </span>{" "}
                                            <span className="item-name">
                                              {" "}
                                              Twitter{" "}
                                            </span>{" "}
                                            <span className="item-title">
                                              {" "}
                                              Followers{" "}
                                            </span>
                                            <span className="item-join">
                                              {" "}
                                              Join us on Twitter{" "}
                                            </span>{" "}
                                            <span className="item-button">
                                              {" "}
                                              Follow Us{" "}
                                            </span>{" "}
                                          </Link>{" "}
                                        </li>{" "}
                                        <li className="social-item">
                                          <Link
                                            href="https://instagram.com"
                                            aria-label="Instagram"
                                            className=" instagram"
                                            target="_blank"
                                            rel="external noopener nofollow"
                                          >
                                            <i className="item-icon fa fa-instagram" />{" "}
                                            <span className="item-count">
                                              {" "}
                                              0{" "}
                                            </span>{" "}
                                            <span className="item-name">
                                              {" "}
                                              Instagram{" "}
                                            </span>
                                            <span className="item-title">
                                              {" "}
                                              Followers{" "}
                                            </span>{" "}
                                            <span className="item-join">
                                              {" "}
                                              Join us on Instagram{" "}
                                            </span>{" "}
                                            <span className="item-button">
                                              {" "}
                                              Follow Us{" "}
                                            </span>{" "}
                                          </Link>{" "}
                                        </li>
                                        <li className="social-item">
                                          <Link
                                            href="#"
                                            aria-label="RSS"
                                            className=" rss"
                                            target="_blank"
                                            rel="external noopener nofollow"
                                          >
                                            <i className="item-icon fa fa-rss" />{" "}
                                            <span className="item-count">
                                              {" "}
                                              RSS{" "}
                                            </span>{" "}
                                            <span className="item-name">
                                              {" "}
                                              RSS{" "}
                                            </span>
                                            <span className="item-title">
                                              {" "}
                                              Subscribe{" "}
                                            </span>{" "}
                                            <span className="item-join">
                                              {" "}
                                              Subscribe our RSS{" "}
                                            </span>
                                            <span className="item-button">
                                              {" "}
                                              Subscribe{" "}
                                            </span>{" "}
                                          </Link>{" "}
                                        </li>{" "}
                                      </ul>{" "}
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </aside>{" "}
                          </div>
                          <div className="col-sm-4 ak-footer-column">
                            <aside className="sidebar sidebar-footer-2">
                              <div
                                id="newsy_list_1_small_square-3"
                                className="widget widget_newsy_list_1_small_square"
                              >
                                <div
                                  className="ak-block ak-block-list-1-small-square ak-block-column ak-block-module-thumb-round ak-block-width-1 clearfix"
                                  id="block_65f7f61f36732_28"
                                >
                                  <div className="ak-block-header ak-block-header-style-5 no-tabs">
                                    <h1 className="ak-block-title">
                                      <span className="title-text">
                                        {" "}
                                        <span>ट्रेंडिंग पोस्ट्स</span>{" "}
                                      </span>{" "}
                                    </h1>{" "}
                                  </div>
                                  <div className="ak-block-inner clearfix">
                                    <div className="ak-block-posts clearfix">
                                      {posts.tazaKhabars
                                        .slice(0, 3)
                                        .map((post) => {
                                          const shareLinks = generateShareLinks(
                                            post.mainKhabarId,
                                            post.newsHeading
                                          );
                                          return (
                                            <article
                                              key={post.mainKhabarId}
                                              className="bordergap mt-2 ak-module ak-module-1-small-square ak-column-module clearfix ak-exclusive-post post-224 post type-post status-publish format-standard has-post-thumbnail  category-business category-featured category-tech-science category-us-news tag-breaking tag-election tag-politics tag-technology tag-world-news ak-exclusive-article"
                                            >
                                              {post.newsImage.endsWith(
                                                ".mp4"
                                              ) && (
                                                  <div className="ak-module-inner clearfix">
                                                    <div className="ak-module-featured">
                                                      {" "}
                                                      <div className="ak-module-badges" />
                                                      <div className="ak-module-video-duration">
                                                        {" "}
                                                        <div className="active">
                                                          {" "}
                                                          Watch{" "}
                                                        </div>{" "}
                                                      </div>
                                                      <span className="ak-module-format-icon format-video">
                                                        {" "}
                                                        <i className="ak-icon fa fa-play" />
                                                      </span>{" "}
                                                      <div className="ak-featured-cover">
                                                        <Link
                                                          href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                                          className="ak-featured-link"
                                                          rel="bookmark"
                                                          title={post.title}
                                                        >
                                                          <div className="ak-featured-thumb lazy-thumb">
                                                            {" "}
                                                            <video
                                                              controls
                                                              autoPlay
                                                              style={{
                                                                height: "100px",
                                                                width: "100px",
                                                              }}
                                                            >
                                                              <source
                                                                src={
                                                                  image_resize +
                                                                  "?url=" +
                                                                  baseUrl +
                                                                  post.newsImage +
                                                                  "&w=75&h=75&outtype=webp"
                                                                }
                                                                type="video/mp4"
                                                              />{" "}
                                                              Your browser does
                                                              not support the
                                                              video tag.
                                                            </video>{" "}
                                                          </div>{" "}
                                                        </Link>{" "}
                                                      </div>{" "}
                                                    </div>
                                                    <div className="ak-module-details">
                                                      <h2 className="ak-module-title">
                                                        <Link
                                                          href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                                          rel="bookmark"
                                                          title={post.newsTag}
                                                        >
                                                          {stripHtmlTags(
                                                            post.newsHeading,
                                                            50
                                                          )}{" "}
                                                        </Link>{" "}
                                                      </h2>
                                                      <div className="ak-module-meta">
                                                        {" "}
                                                        <div className="ak-module-time">
                                                          <Link
                                                            href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                                            className="ak-module-meta-published"
                                                            style={{
                                                              fontSize: "14px",
                                                              marginTop: "3px",
                                                            }}
                                                          >
                                                            {" "}
                                                            <i className="ak-icon akfi-schedule" />
                                                            {formatDateInHindi(
                                                              post.date
                                                            )}{" "}
                                                          </Link>{" "}
                                                        </div>{" "}
                                                      </div>{" "}
                                                    </div>{" "}
                                                  </div>
                                                )}
                                              {!post.newsImage.endsWith(
                                                ".mp4"
                                              ) && (
                                                  <div className="ak-module-inner clearfix">
                                                    {" "}
                                                    <div className="ak-module-featured">
                                                      {" "}
                                                      <div className="ak-featured-cover">
                                                        <Link
                                                          href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                                          className="ak-featured-link"
                                                          rel="bookmark"
                                                          title={post.title}
                                                        >
                                                          <div className="ak-featured-thumb lazy-thumb size-1000">
                                                            {" "}
                                                            <img
                                                              width={75}
                                                              height={75}
                                                              src={
                                                                image_resize +
                                                                "?url=" +
                                                                baseUrl +
                                                                post.newsImage +
                                                                "&w=75&h=75&outtype=webp"
                                                              }
                                                              className="attachment-newsy_75x75 size-newsy_75x75 lazyload wp-post-image"
                                                              alt="Shabd Today taza Khabar"
                                                              decoding="async"
                                                              loading="lazy"
                                                            />{" "}
                                                          </div>{" "}
                                                        </Link>{" "}
                                                      </div>{" "}
                                                    </div>
                                                    <div className="ak-module-details">
                                                      {" "}
                                                      <h2 className="ak-module-title">
                                                        {" "}
                                                        <Link
                                                          href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                                          rel="bookmark"
                                                          title={post.newsTag}
                                                        >
                                                          {stripHtmlTags(
                                                            post.newsHeading,
                                                            50
                                                          )}{" "}
                                                        </Link>{" "}
                                                      </h2>{" "}
                                                      <div className="ak-module-meta">
                                                        {" "}
                                                        <div className="ak-module-time">
                                                          <Link
                                                            href={`/TajaKhabarDetailsNews/${post.mainKhabarId}`}
                                                            className="ak-module-meta-published"
                                                            style={{
                                                              fontSize: "14px",
                                                              marginTop: "3px",
                                                            }}
                                                          >
                                                            {" "}
                                                            <i className="ak-icon akfi-schedule" />{" "}
                                                            {formatDateInHindi(
                                                              post.date
                                                            )}{" "}
                                                          </Link>{" "}
                                                        </div>{" "}
                                                        <div>
                                                          <Link
                                                            href={
                                                              shareLinks.facebook
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="facebook"
                                                          >
                                                            <i
                                                              className="fa fa-facebook"
                                                              aria-hidden="true"
                                                            ></i>
                                                          </Link>{" "}
                                                          &nbsp;&nbsp;
                                                          &nbsp;&nbsp;
                                                          <Link
                                                            href={
                                                              shareLinks.whatsapp
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="whatsapp"
                                                          >
                                                            <i
                                                              className="fa fa-whatsapp"
                                                              aria-hidden="true"
                                                            ></i>
                                                          </Link>
                                                        </div>{" "}
                                                      </div>{" "}
                                                    </div>{" "}
                                                  </div>
                                                )}{" "}
                                            </article>
                                          );
                                        })}{" "}
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </aside>{" "}
                          </div>
                          <div className="col-sm-4 ak-footer-column">
                            {" "}
                            <aside className="sidebar sidebar-footer-3">
                              <div
                                id="newsy_popular_categories-3"
                                className="widget widget_newsy_popular_categories"
                              >
                                {" "}
                                <div
                                  className="ak-block ak-block-categories  ak-block-width-2 clearfix"
                                  id="block_65f7f61f36732_29"
                                >
                                  <div className="ak-block-header ak-block-header-style-5 no-tabs">
                                    <h1 className="ak-block-title">
                                      {" "}
                                      <span className="title-text">
                                        {" "}
                                        <span>पॉपुलर कैटेगरी</span>{" "}
                                      </span>{" "}
                                    </h1>{" "}
                                  </div>{" "}
                                  <div className="ak-block-inner clearfix">
                                    {" "}
                                    <ul className="popular-cats-list  columns-2">
                                      <li className="popular-cat-item term-49">
                                        <Link
                                          className="link"
                                          href="/TajaKhabarDetails"
                                        >
                                          ताजा खबरें{" "}
                                          <span className="term-count">1</span>{" "}
                                        </Link>{" "}
                                      </li>
                                      <li className="popular-cat-item term-47">
                                        {" "}
                                        <Link
                                          className="link"
                                          href="/MadhyaPradeshDetails"
                                        >
                                          {" "}
                                          मध्य प्रदेश
                                          <span className="term-count">
                                            2
                                          </span>{" "}
                                        </Link>{" "}
                                      </li>{" "}
                                      <li className="popular-cat-item term-43">
                                        <Link
                                          className="link"
                                          href="/ChhatisgarDetails"
                                        >
                                          {" "}
                                          छत्तीसगढ़{" "}
                                          <span className="term-count">
                                            3
                                          </span>{" "}
                                        </Link>{" "}
                                      </li>{" "}
                                      <li className="popular-cat-item term-46">
                                        {" "}
                                        <Link
                                          className="link"
                                          href="/WebstorieDetails"
                                        >
                                          {" "}
                                          वेब स्टोरीज{" "}
                                          <span className="term-count">
                                            4
                                          </span>{" "}
                                        </Link>{" "}
                                      </li>
                                      <li className="popular-cat-item term-48">
                                        {" "}
                                        <Link
                                          className="link"
                                          href="/MadhyaPradeshDetails"
                                        >
                                          {" "}
                                          देश{" "}
                                          <span className="term-count">5</span>
                                        </Link>{" "}
                                      </li>{" "}
                                      <li className="popular-cat-item term-50">
                                        {" "}
                                        <Link className="link" href="/Khels">
                                          {" "}
                                          क्रिकेट
                                          <span className="term-count">6</span>
                                        </Link>{" "}
                                      </li>{" "}
                                    </ul>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                              <div
                                id="tag_cloud-3"
                                className="widget widget_tag_cloud"
                              >
                                <div className="ak-block-header ak-block-header-style-5">
                                  {" "}
                                  <h1 className="widget-title ak-block-title">
                                    <span className="title-text">टैग्स </span>{" "}
                                  </h1>{" "}
                                </div>{" "}
                                <div className="tagcloud mt-2">
                                  {" "}
                                  <Link
                                    href="/BuisnessDetails"
                                    className="tag-cloud-link tag-link-54 tag-link-position-1"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="Breaking (30 items)"
                                  >
                                    {" "}
                                    बिज़नेस{" "}
                                  </Link>{" "}
                                  <Link
                                    href="/Bollywood"
                                    className="tag-cloud-link tag-link-55 tag-link-position-2"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="Election (30 items)"
                                  >
                                    {" "}
                                    बॉलीवुड{" "}
                                  </Link>{" "}
                                  <Link
                                    href="/ChhatisgarDetails"
                                    className="tag-cloud-link tag-link-52 tag-link-position-3"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="Politics (30 items)"
                                  >
                                    {" "}
                                    छत्तीसगढ़{" "}
                                  </Link>{" "}
                                  <Link
                                    href="/RashifalDetails"
                                    className="tag-cloud-link tag-link-53 tag-link-position-4"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="Technology (30 items)"
                                  >
                                    राशिफल{" "}
                                  </Link>{" "}
                                  <Link
                                    href="/VideoDetails"
                                    className="tag-cloud-link tag-link-56 tag-link-position-5"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="World News (30 items)"
                                  >
                                    {" "}
                                    वीडियो{" "}
                                  </Link>
                                </div>
                                <div className="tagcloud">
                                  {" "}
                                  <Link
                                    href="/International"
                                    className="tag-cloud-link tag-link-55 tag-link-position-2"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="Election (30 items)"
                                  >
                                    {" "}
                                    अन्तर्राष्ट्रीय{" "}
                                  </Link>{" "}
                                  <Link
                                    href="/Khels"
                                    className="tag-cloud-link tag-link-52 tag-link-position-3"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="Politics (30 items)"
                                  >
                                    {" "}
                                    खेल{" "}
                                  </Link>{" "}
                                  <Link
                                    href="/DaramDetails"
                                    className="tag-cloud-link tag-link-53 tag-link-position-4"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="Technology (30 items)"
                                  >
                                    {" "}
                                    धर्म{" "}
                                  </Link>{" "}
                                  <Link
                                    href="/MadhyaPradeshDetails"
                                    className="tag-cloud-link tag-link-53 tag-link-position-4"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="Technology (30 items)"
                                  >
                                    {" "}
                                    मध्य प्रदेश{" "}
                                  </Link>{" "}
                                  <Link
                                    href="/WebstorieDetails"
                                    className="tag-cloud-link tag-link-56 tag-link-position-5"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="World News (30 items)"
                                  >
                                    {" "}
                                    वेब स्टोरीज{" "}
                                  </Link>{" "}
                                </div>{" "}
                              </div>{" "}
                            </aside>{" "}
                          </div>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="ak-bar ak-footer-bar ak-mid-bar ak-bar-dark dark full-width clearfix">
            <div className="container">
              {" "}
              <div className="ak-bar-inner">
                <div className="ak-row ak-row-items-middle ak-row-responsive">
                  {" "}
                  <div className="ak-column ak-column-left ak-column-grow">
                    <div className="ak-inner-row ak-row-items-middle ak-justify-content-left">
                      {" "}
                      <div className="ak-bar-item ak-footer-copyright">
                        Copyright © 2024{" "}
                        <Link
                          href="https://sadaivsatya.com/"
                          title="Just another Newsy Demo site"
                        >
                          शब्द टुडे{" "}
                        </Link>
                        <Link
                          href="https://sadaivsatya.com/"
                          title="शब्द टुडे"
                        />{" "}
                        .{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <div className="ak-column ak-column-right ak-column-grow">
                    {" "}
                    <div className="ak-inner-row ak-row-items-middle ak-justify-content-right">
                      <div className="ak-bar-item ak-footer-menu-container ">
                        {" "}
                        <ul
                          id="menu-footer-navigation"
                          className="ak-menu ak-menu-wide ak-menu-style-6 ak-footer-menu"
                        >
                          {" "}
                          <li
                            id="menu-item-273"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-273"
                          >
                            <Link href="https://sadaivsatya.com/">
                              {" "}
                              <span> Advertise with Us</span>{" "}
                            </Link>{" "}
                          </li>{" "}
                          <li
                            id="menu-item-275"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-275"
                          >
                            <Link href="https://sadaivsatya.com/">
                              {" "}
                              <span>www.shabadtoday.com</span>{" "}
                            </Link>{" "}
                          </li>{" "}
                          <li
                            id="menu-item-276"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-276"
                          >
                            {" "}
                            <Link href="https://sadaivsatya.com/">
                              {" "}
                              <span>info@shabadtoday.org</span>
                            </Link>{" "}
                          </li>{" "}
                        </ul>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
