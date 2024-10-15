import React from "react";
import Link from "next/link";

function SideSlider() {
  return (
    <div>
      <div className="ak-block-header ak-block-header-style-5 no-tabs">
        <div
          className="main-wdgt container"
          id="widget-rs-4937"
          data-vars-widget-type="home"
          data-vars-widget-name="astrology"
          data-vars-orderid={10}
        >
          <div className="wdgt-hdng">
            <h1 className="head">
              <Link to="#" title="धर्म">
                ज्योतिष विशेष
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div
        id="carouselExample"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://nonprod-media.webdunia.com/public_html/_media/hi/img/photo-gallery/cinema-actresses/priyalaya-photoshoot-still/thumb/photothumb/priyalaya-17183556544267.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://nonprod-media.webdunia.com/public_html/_media/hi/img/photo-gallery/cinema-actresses/raashi-khanna/thumb/photothumb/raashii-khanna-17187956754555.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://nonprod-media.webdunia.com/public_html/_media/hi/img/photo-gallery/tourism-country/kolkata-victoria-memorial/thumb/photothumb/kolkata-victoria-memorial-17181814195163.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SideSlider;
