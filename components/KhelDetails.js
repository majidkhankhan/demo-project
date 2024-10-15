import React from "react";
import Tabs2 from "./Tabs2";
import AroundTheWorld from "./AroundTheWorld";
import BigAdd from "./BigAdd";
import RashifalSmall from "./RashifalSmall";
import SmallAdd from "./SmallAdd";
import WebSeries from "./WebSeries";
import TajaKhabr from "./TajaKhabr";
import Movies from "./Movies";
import Khel from "./Khel";
import Buisness from "./Buisness";
import Technologes from "./Technologes";

function TajaKhabarDetails() {
  return (
    <div>
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
                        <Khel />
                      </div>
                    </div>
                    <div
                      className="ak_column_1 col-md-3 sidebar-column sidebar-column-primary-right sticky-sidebar"
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
                          position: "static",
                          transform: "none",
                          top: 0,
                          left: "914.5px",
                        }}
                      >
                        <div className="sidebar post-sidebar">
                          <Tabs2 />
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

                  <div className="row" style={{ transform: "none" }}>
                    <div
                      className="ak_column_1 col-md-3 sidebar-column sidebar-column-primary sticky-sidebar"
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
                          position: "static",
                          transform: "none",
                          top: 0,
                          left: "914.5px",
                        }}
                      >
                      &nbsp;
                        <div className="sidebar post-sidebar">
                          <Tabs2 />

                          <div className="mt-5">
                            <AroundTheWorld />
                          </div>

                          <div className="container">
                          <Movies />
                          </div>
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
                    <div className="ak_column_2 col-md-6 content-column">
                      <TajaKhabr />
                    <div className="">
                    </div>
                    <div className="container">
                    <WebSeries />
                    </div>
                      &nbsp;
                      <Buisness />
                    </div>
                    <div
                      className="ak_column_1 col-md-3 sidebar-column sidebar-column-primary-right sticky-sidebar"
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
                          position: "static",
                          transform: "none",
                          top: 0,
                          left: "914.5px",
                        }}
                      >
                        <div className="sidebar post-sidebar">
                          <RashifalSmall />

                          <div className="container">
                          <Technologes />
                          </div>

                          <Tabs2 />
                          <SmallAdd />
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

export default TajaKhabarDetails;
