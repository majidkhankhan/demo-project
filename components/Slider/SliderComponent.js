import React from "react";
import Link from "next/link";
import Image from "next/image";
import { stripHtmlTags } from "../../util/strip-html";

export default async function SliderComponent() {

  const posts = await (
    await fetch("https://api.sadaivsatya.com/api/home/tajaKhabars")
  ).json();

  const baseUrl = "https://api.sadaivsatya.com/";
  const image_resize = "https://api.sadaivsatya.com/api/home/resize";

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide mb-1"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {posts?.tazaKhabars?.slice(0, 1).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item active ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image priority
                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>

                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(1, 2).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(2, 3).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(3, 4).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(4, 5).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(5, 6).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(6, 7).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(7, 8).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>

                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(8, 9).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(9, 10).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>

                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(10, 11).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}{" "}
          {posts?.tazaKhabars?.slice(11, 12).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>
                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(12, 13).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>

                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(13, 14).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>

                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(14, 15).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>

                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(15, 16).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>

                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
          {posts?.tazaKhabars?.slice(16, 17).map((newsItem) => (
            <div
              key={newsItem.mainKhabarId}
              className={`carousel-item ${newsItem.newsImage && !newsItem.newsImage.endsWith(".mp4")
                ? ""
                : ""
                }`}
            >
              {newsItem.newsImage && newsItem.newsImage.endsWith(".mp4") ? (
                <div className="video-container" >
                  <span
                    className={`ak-module-format-icon format-video `}
                  >
                    <i className="ak-icon fa fa-play" />
                  </span>

                  <video controls autoPlay className="d-block w-100">
                    <source
                      src={
                        image_resize +
                        "?url=" +
                        baseUrl +
                        newsItem.newsImage +
                        "&w=780&h=520&outtype=webp"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image

                  src={
                    image_resize +
                    "?url=" +
                    baseUrl +
                    newsItem.newsImage +
                    "&w=780&h=520&outtype=webp"
                  }
                  width={780}
                  height={520}
                  className="d-block w-100  zoom"

                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={stripHtmlTags(newsItem.newsTag, 60)}
                />
              )}
              <div className="carousel-caption d-md-block slider">
                <Link
                  href={`/SliderDetails/${newsItem.mainKhabarId}`}
                  aria-label="Slider"
                >
                  <h1>{stripHtmlTags(newsItem.newsTag, 60)}</h1>
                </Link>
                <p> {stripHtmlTags(newsItem.newsHeading, 80)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* End Anil comment */}

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>

        <div
          className="carousel tns-nav"
          style={{
            display: "flex",
            overflowX: "auto",
            minWidth: "34px",
            margin: "7px 5px",
          }}
        >
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            1
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={1}
            aria-label="Slide 2"
          >
            2
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={2}
            aria-label="Slide 3"
          >
            3
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={3}
            aria-label="Slide 4"
          >
            4
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={4}
            aria-label="Slide 5"
          >
            5
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={5}
            aria-label="Slide 6"
          >
            6
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={6}
            aria-label="Slide 7"
          >
            7
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={7}
            aria-label="Slide 8"
          >
            8
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={8}
            aria-label="Slide 9"
          >
            9
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={9}
            aria-label="Slide 10"
          >
            10
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={10}
            aria-label="Slide 11"
          >
            11
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={11}
            aria-label="Slide 12"
          >
            12
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={12}
            aria-label="Slide 13"
          >
            13
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={13}
            aria-label="Slide 14"
          >
            14
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={14}
            aria-label="Slide 15"
          >
            15
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={15}
            aria-label="Slide 16"
          >
            16
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-href={16}
            aria-label="Slide 17"
          >
            17
          </button>
        </div>
      </div>
    </div>
  );
}
