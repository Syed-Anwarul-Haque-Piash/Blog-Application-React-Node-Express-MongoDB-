import React from "react";
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://media.istockphoto.com/photos/green-summer-background-with-empty-space-for-product-display-picture-id1323478460?b=1&k=20&m=1323478460&s=170667a&w=0&h=0OABFia7yxpAugd36K-O616HIOW8X9HudQc34a3duzs="
        alt=""
      />
    </div>
  );
};

export default Header;
