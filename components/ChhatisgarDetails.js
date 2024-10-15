import React from "react";
import BigAdd from "./BigAdd";
import LifeSeince from "./LifeSeince";
import Chhatisgar2 from "./Chhatisgar2";
import Chhatisgar1 from "./Chhatisgar1";
import Chhatisgar6 from "./Chhatisgar6";
import Chhatisgar4 from "./Chhatisgar4";
import Chhatisgar5 from "./Chhatisgar5";
import Chhatisgar3 from "./Chhatisgar3";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function MadhyaPradeshDetails() {
  return (
    <div>
 <HelmetProvider>
 <Helmet>
        <title>छत्तीसगढ़ | शब्द टुडे | हिंदी न्यूज़</title>
        <link rel="canonical" href="https://www.sadaivsatya.com/ChhatisgarDetails" />
      </Helmet>
 </HelmetProvider>
     

      <div className="ak-post-wrapper" style={{ transform: "none" }}>
        <div
          className="ak-content-wrap ak-post-wrap ak-layout-style-1 clearfix ak-post-style-7 clearfix"
          style={{ transform: "none" }}
        >
          <div className="ak-container" style={{ transform: "none" }}>
          
              <div className="ak-content" style={{ transform: "none" }}>
                <div  style={{ transform: "none" }}>
                  <div className="row" style={{ transform: "none" }}>
                  <div className="ak_column_1 col-md-9 ">
                      <div className="ak-article-inner">
<div >
                        <Chhatisgar2 />
                        </div>
                        <div className="mt-3">
                          <Chhatisgar4 />
                          <Chhatisgar5 />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Chhatisgar6 />
                      </div>
                    </div>
                    <div
                      className="ak_column_ col-md-3 sidebar-column sidebar-column-primary-right sticky-sidebar"
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
                        
                          <Chhatisgar1 />
                          <div className="mt-2">
                            <Chhatisgar3 />
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
                  
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default MadhyaPradeshDetails;
