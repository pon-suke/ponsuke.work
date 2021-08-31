import * as React from "react";
import Link from "next/link";
import AdSense from "react-adsense";
import Script from "next/script";
import SearchDialog from "./SearchDialog";

const Header: React.FC = () => (
  <>
    <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script>
    <AdSense.Google client="ca-pub-4852357139979343" slot="1601568202" />

    <SearchDialog />
    <Link href="/p/1">
      <a>
        <div id="header">
          <h1 className="noDecoration">pon&nbsp;suke人生リークBlog</h1>
        </div>
      </a>
    </Link>
  </>
);

export default Header;
