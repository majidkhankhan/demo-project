import React from "react";
import Tabs2 from "./Tabs2";
import BigAdd from "./BigAdd";
import SmallAdd from "./SmallAdd";
import Buisness from "./Buisness";
import Nivesh from "./Nivesh";
import Business2 from './Business2';
import ShareMarket from './ShareMarket';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function BuisnessDetails() {
  return (
    <div>
        <HelmetProvider>
        <Helmet>
        <title>बिज़नेस | शब्द टुडे | हिंदी न्यूज़</title>
        <link rel="canonical" href="https://www.sadaivsatya.com/BuisnessDetails" />
      </Helmet>
        </HelmetProvider>
     
      <div className="ak-post-wrapper" style={{ transform: "none" }}>
        <div
          className="ak-content-wrap ak-post-wrap ak-layout-style-1 clearfix ak-post-style-7 clearfix"
          style={{ transform: "none" }}
        >
          <div className="ak-container" style={{ transform: "none" }}>
           
              <div className="ak-content" style={{ transform: "none" }}>
                <div className="containercustome" style={{ transform: "none" }}>
                  <div className="mt-2">
                    <BigAdd />
                  </div>

                  <div className="row" style={{ transform: "none" }}>
                    <div className="ak_column_2 col-md-9">
                      <div className="ak-article-inner">
                        <Buisness />
                      </div>
                      <div className="ak-article-inner">
                        <Business2 />
                      </div>
                      <div className="ak-article-inner mt-2 ">
                        <ShareMarket />
                      </div>
                    </div>
                    <div
                      className="ak_column_1 col-md-3 content-column sidebar-column sidebar-column-primary-right sticky-sidebar"
                      style={{
                        position: "relative",
                        overflow: "visible",
                        boxSizing: "border-box",
                        minHeight: 1,
                      }}
                    >
                      <div
                        className="theiaStickySidebar"
                        style={{
                          paddingTop: 0,
                          paddingBottom: 1,
                          position: "sticky",
                          transform: "none",
                          top: 0,
                          left: "914.5px",
                        }}
                      >
                        <div className="sidebar post-sidebar">
                          <Nivesh />
                          <SmallAdd/>
                          <Tabs2/>
                        </div>
                        <div
                          className="resize-sensor"
                          style={{
                            position: "absolute",
                            inset: 0,
                            overflow: "hidden",
                            zIndex: -1,
                            visibility: "hidden",
                          }}
                        >
                          <div
                            className="resize-sensor-expand"
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              overflow: "hidden",
                              zIndex: -1,
                              visibility: "hidden",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                transition: "all 0s ease 0s",
                                width: 410,
                                height: 1260,
                              }}
                            />
                          </div>
                          <div
                            className="resize-sensor-shrink"
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              overflow: "hidden",
                              zIndex: -1,
                              visibility: "hidden",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                transition: "0s",
                                width: "200%",
                                height: "200%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
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

export default BuisnessDetails;
