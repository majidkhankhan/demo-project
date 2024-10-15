import React from "react";
import BigAdd from "./BigAdd";
import Madhyapradesh2 from "./Madhyapradesh2";
import Madhyapradesh1 from "./Madhyapradesh1";
import Madhyapradesh3 from "./Madhyapradesh3";
import Madhyapradesh4 from "./Madhyapradesh4";
import Madhyapradesh5 from "./Madhyapradesh5";
import Madhyapradesh6 from "./Madhyapradesh6";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MadhyaPradeshDetails = () => {
  // const canonicalUrl = "https://www.sadaivsatya.com/MadhyaPradeshDetails";
  // const pageTitle = "मध्य प्रदेश समाचार | हिंदी न्यूज़ | शब्द टुडे";
  // const pageDescription = "मध्य प्रदेश News in Hindi (मध्य प्रदेश समाचार) शब्द टुडे | हिंदी न्यूज़";

  return (
    <div>

      {/* <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet> */}

<HelmetProvider>
<Helmet>
        <title>मध्यप्रदेश | शब्द टुडे | हिंदी न्यूज़</title>
        <link rel="canonical" href="https://www.sadaivsatya.com/MadhyaPradeshDetails" />
      </Helmet>
</HelmetProvider>
     


      <div className="ak-post-wrapper" style={{ transform: "none" }}>
        <div
          className="ak-content-wrap ak-post-wrap ak-layout-style-1 clearfix ak-post-style-7 clearfix"
          style={{ transform: "none" }}
        >
          <div className="ak-container" style={{ transform: "none" }}>
      
              <div className="ak-content" style={{ transform: "none" }}>
                <div className="" style={{ transform: "none" }}>
                  <div className="mt-2">
                    <BigAdd />
                  </div>

                  <div className="row" style={{ transform: "none" }}>
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
                        <div className=" post-sidebar">
                          <Madhyapradesh1 />

                          <div className="mt-2">
                            <Madhyapradesh3 />
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
                    <div className="ak_column_1 col-md-9">
                      <div className="ak-article-inner">
                        <Madhyapradesh2 />
                        <div className="mt-2">
                          <Madhyapradesh4 />
                          <Madhyapradesh5 />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Madhyapradesh6 />
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
