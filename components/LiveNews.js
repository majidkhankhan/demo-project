import React from 'react';
import BigAdd from './BigAdd';
import TajaSlide from './TajaSlide';
import TajaKhabarSamachar from './TajaKhabarSamachar';
import Crime from './Crime';
import FakeKhabre from './FakeKhabre';
import Sehat from './Sehat';
import Tranding from './Tranding';
import TajaKhabr from './TajaKhabr';
import LiveUrl from './LiveUrl';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function LiveNews() {
  return (
    <div>
        <HelmetProvider>
        <Helmet>
        <title>लाइव न्यूज़ | शब्द टुडे | हिंदी न्यूज़</title>
        <link rel="canonical" href="https://www.sadaivsatya.com/LiveNews" />
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
                <div className='mt-2'>
                  <BigAdd />
                </div>

                <div className="row" style={{ transform: "none" }}>
                  <div className="ak_column_1 col-md-9">
                    <div className="ak-article-inner">
                      <div className=''>
                        <div className=" ak-block-header-style-5 no-tabs">
                          <div
                            className="main-wdgt"
                            id="widget-rs-4937"
                            data-vars-widget-type="home"
                            data-vars-widget-name="astrology"
                            data-vars-orderid={10}
                          >
                            <LiveUrl />
                          </div>
                        </div>
                        <TajaKhabr />
                        {/* <StickyYoutube2 /> */}
                      </div>
                    </div>

                    <div className='mt-2'>
                      <TajaKhabarSamachar />
                    </div>
                    <Tranding />
                  </div>
                  <div
                    className="ak_column_ col-md-3 sidebar-column sidebar-column-primary-right sticky-sidebar"
                    style={{
                      position: "relative",
                      overflow: "visible",
                      boxSizing: "border-box",
                      minHeight: 1
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
                        left: "914.5px"
                      }}
                    >
                      <div className="sidebar post-sidebar">
                        <Crime />
                        <TajaSlide />
                        <Sehat />
                        <FakeKhabre />
                      </div>
                      <div
                        className="resize-sensor"
                        style={{
                          position: "absolute",
                          inset: 0,
                          overflow: "hidden",
                          zIndex: -1,
                          visibility: "hidden"
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
                            visibility: "hidden"
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              transition: "all 0s ease 0s",
                              width: 410,
                              height: 1260
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
                            visibility: "hidden"
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              transition: "0s",
                              width: "200%",
                              height: "200%"
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

export default LiveNews;
