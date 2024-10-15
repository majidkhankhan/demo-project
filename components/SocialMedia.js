import React from "react";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div>
      <div
        className="ak-block ak-block-inner-boxed ak-block-width-1 clearfix"
        style={{ marginTop: "-20px" }}
        id="block_65f7f61f36732_10"
      >
        <div className="ak-block-header ak-block-header-style-5 no-tabs container">
          <h1 className="ak-block-title">
            <Link href="#">
              <span className="title-text">
                <span>जुड़े रहो</span>
              </span>
            </Link>
          </h1>
        </div>
        <div className="ak-block-inner clearfix">
          <ul className="ak-social-counter social-counter-style-2 social-counter-light-square clearfix">
            <li className="social-item">
              <Link
                href="#"
                aria-label="Youtube"
                className=" youtube"
                target="_blank"
                rel="external noopener nofollow"
              >
                <i className="item-icon fa fa-youtube" />
              </Link>
            </li>
            <li className="social-item">
              <Link
                href="#"
                aria-label="Facebook"
                className=" facebook"
                target="_blank"
                rel="external noopener nofollow"
              >
                <i className="item-icon fa fa-facebook" />
              </Link>
            </li>
            <li className="social-item">
              <Link
                href="#"
                aria-label="Twitter"
                className=" twitter"
                target="_blank"
                rel="external noopener nofollow"
              >
                <i className="item-icon fa fa-twitter" />
              </Link>
            </li>
            <li className="social-item">
              <Link
                href="#"
                aria-label="Instagram"
                className=" instagram"
                target="_blank"
                rel="external noopener nofollow"
              >
                <i className="item-icon fa fa-instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
