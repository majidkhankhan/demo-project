import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "next/link";
import { Circles } from "react-loader-spinner";

const BASE_URL = "https://api.sadaivsatya.com/";
const image_resize = "https://api.sadaivsatya.com/api/home/resize";

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
}; // Make sure you have imported Bootstrap CSS

export default function Teck() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sadaivsatya.com/api/home/tajaKhabars"
        );
        setPostData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );

    // Check if the element exists before initializing the carousel
    if (carouselElement) {
      const bootstrapCarousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // 3 seconds interval for auto play
        ride: "carousel",
      });

      // Optionally, you can clean up by destroying the carousel when component unmounts
      return () => {
        bootstrapCarousel.dispose();
      };
    }
  }, []); // Empty dependency array means this runs once on mount
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
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>

          <div className="col-md-12 col-xs-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                ></li>
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                {postData.tazaKhabars.slice(0, 1).map((post) => (
                  <div key={post.id} className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=1000&h=333&outtype=webp`}
                      loading="lazy"
                      alt="devbanban"
                    />
                  </div>
                ))}
                {postData.tazaKhabars.slice(1, 2).map((post) => (
                  <div className="carousel-item" key={post.id}>
                    <img
                      className="d-block w-100"
                      src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=1000&h=333&outtype=webp`}
                      loading="lazy"
                      alt="devbanban"
                    />
                  </div>
                ))}
                {postData.tazaKhabars.slice(2, 3).map((post) => (
                  <div className="carousel-item" key={post.id}>
                    <img
                      className="d-block w-100"
                      src={`${image_resize}?url=${BASE_URL}${post.newsImage}&w=1000&h=333&outtype=webp`}
                      loading="lazy"
                      alt="devbanban"
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
