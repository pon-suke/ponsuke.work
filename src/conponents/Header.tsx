import * as React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <Link href="/">
    <div id="header">
      <h1 className="noDecoration">pon&nbsp;suke人生リークBlog</h1>
    </div>
  </Link>
);

export default Header;
