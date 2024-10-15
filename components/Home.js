import React, { lazy } from "react";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";
import StickyYoutube from "./StickyYoutube";
import Card from "./Card/CardComponent";
import Slider from "./Slider/SliderComponent";
import AllHotNews from "./AllHotNews/AllHotNewsComponent";
import BigCard from "./BigCard/BigCardComponent";

import Tabs from "./Tabs";
import SmallAdd from "./SmallAdd";
import AroundTheWorld from "./AroundTheWorld";
const Webstorie = lazy(() => import("./Webstorie"));
const BigAdd = lazy(() => import("./BigAdd"));
const LifeStyle = lazy(() => import("./LifeStyle"));
const EditorPic = lazy(() => import("./EditorPic"));
const MoreNews = lazy(() => import("./MoreNews"));
const Rashifal = lazy(() => import("./Rashifal"));
const Blocks = lazy(() => import("./Blocks"));
const Sports = lazy(() => import("./Sports"));
const Whattowatch = lazy(() => import("./Whattowatch"));


function Home() {
  return (
    <>
      {/* <HelmetProvider>
        <Helmet>
          <title>शब्द टुडे | हिंदी न्यूज़</title>
          <link rel="canonical" href="https://www.sadaivsatya.com" />
        </Helmet>
      </HelmetProvider> */}

      <div className="ak-main-wrap">
        <div className="ak-header-wrap ak-header-bottom-shadow">
          <div className="ak-container">
            <div className="ak-content-wrap">
              <div className="ak-container">
                <div className="ak-content vc-content">
                  <h2 className="ak-post-title screen-reader-text">
                    Front page
                  </h2>
                  <section className="wpb-content-wrapper">
                    <Card />
                    <StickyYoutube />

                    <div className="row vc_row">
                      <div className="ak_vc_container">
                        <div className="wpb_column ak_column_2 vc_column_container vc_col-sm-8">
                          <div className="ak_vc_wrapper wpb_wrapper">
                            <Slider />
                            <div
                              className="ak-block ak-block-list-12 ak-block-module-inner-boxed ak-block-width-2 clearfix"
                              id="block_65f7f61f36732_4"
                            >
                              <div className="ak-block-header ak-block-header-style-5 no-tabs mb-2">
                                <div
                                  className="main-wdgt container"
                                  id="widget-rs-4937"
                                  data-vars-widget-type="home"
                                  data-vars-widget-name="astrology"
                                  data-vars-orderid={10}
                                >
                                  <div className="wdgt-hdng mt-2">
                                    <h1 className="head">
                                      <Link
                                        href="#"
                                        title="मध्य प्रदेश"
                                        aria-label="मध्य प्रदेश"
                                      >
                                        मध्य प्रदेश
                                      </Link>
                                    </h1>
                                  </div>
                                </div>
                              </div>
                              <div className="ak-block-inner clearfix">
                                <div className="ak-block-posts clearfix">
                                  <AllHotNews />
                                  <BigCard />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column ak_column_1 vc_column_container vc_col-sm-4">
                          <div className="ak_vc_wrapper wpb_wrapper container">
                            <Tabs />
                            <SmallAdd />
                            <AroundTheWorld />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container" style={{ marginTop: "-15px" }}>
                      <Webstorie />
                    </div>
                    <BigAdd />
                    <div className="container">
                      <Blocks />
                    </div>
                    <LifeStyle />
                    <div className="container">
                      <Rashifal />
                    </div>
                    <div className="container">
                      <Sports />
                    </div>
                    <EditorPic />
                    <Whattowatch />
                    <div className="vc_row-full-width vc_clearfix" />
                    <div />
                    <MoreNews />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default Home;
