import * as React from "react";
import Link from "next/link";
import AdSense from "react-adsense";
import Script from "next/script";

const Header: React.FC = () => (
  <>
    {/* <Script
      data-ad-client="ca-pub-4852357139979343"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></Script>
    <AdSense.Google client="ca-pub-4852357139979343" /> */}
    <Link href="/p/1">
      <div id="header">
        <h1 className="noDecoration">pon&nbsp;suke人生リークBlog</h1>
      </div>
    </Link>
  </>
);

export default Header;
