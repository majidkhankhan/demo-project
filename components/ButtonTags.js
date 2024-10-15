import React from "react";
import Link from "next/link";

function ButtonTags() {
  return (
    <div>
      <footer className="ak-post-footer">
        <div className="ak-post-tags clearfix">
          <span>शब्द टुडे पर पढ़े : </span>

          <Link href="/MadhyaPradeshDetails">मध्य प्रदेश</Link>

          <Link href="/ChhatisgarDetails">छत्तीसगढ़</Link>

          <Link href="/RashifalDetails">राशिफल</Link>

          <Link href="/International">अंतरराष्ट्रीय</Link>

          <Link href="/DaramDetails">धर्म</Link>
          <Link href="/Khels">खेल</Link>
          <Link href="/WebstorieDetails">वेब स्टोरीज</Link>
          <Link href="/Bollywood">बॉलीवुड</Link>
        </div>
      </footer>
    </div>
  );
}

export default ButtonTags;
