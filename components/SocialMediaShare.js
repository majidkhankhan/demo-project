import React from "react";
import Link from "next/link";

export default function SocialMediaShare() {
  const getCurrentUrl = () => {
    return window.location.href;
  };
  return (
    <div>
      <div
        className="ak-block ak-block-inner-boxed ak-block-width-1 clearfix gayab"
        style={{ marginTop: 10 }}
        // id="block_65f7f61f36732_10" style={{marginTop:-20}}
      >
        <div className="ak-block-inner clearfix">
          <ul className="ak-social-counter social-counter-style-2 social-counter-light-square clearfix">
            <li className="social-item">
              <Link
                href="https://www.instagram.com/accounts/login/?hl=en"
                target="_blank"
                aria-label="instagram"
              >
                <img
                  width={40}
                  height={40}
                  alt="Instagram"
                  src="/design/images/social/instagram.png"
                />
                <span className="item-name">Instagram</span>
              </Link>
            </li>
            <li className="social-item">
              <Link href="https://x.com/" target="_blank" aria-label="x">
                <img
                  width={40}
                  height={40}
                  alt="Twitter"
                  src="/design/images/social/twitter.png"
                />
                <span className="item-name">Twitter</span>
              </Link>
            </li>
            <li className="social-item">
              <Link
                href="https://www.facebook.com/"
                aria-label="facebook"
                target="_blank"
              >
                <img
                  width={40}
                  height={40}
                  alt="Facebook"
                  src="/design/images/social/facebook.png"
                />
                <span className="item-name">Facebook</span>
              </Link>
            </li>
            <li className="social-item">
              <Link
                href={`https://web.whatsapp.com/send?text=${encodeURIComponent(
                  getCurrentUrl()
                )}`}
                aria-label="whatsapp"
                target="_blank"
              >
                <img
                  width={40}
                  height={40}
                  alt="whatsapp"
                  src="/design/images/social/whatsapp.png"
                />
                <span className="item-name">whatsapp</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
