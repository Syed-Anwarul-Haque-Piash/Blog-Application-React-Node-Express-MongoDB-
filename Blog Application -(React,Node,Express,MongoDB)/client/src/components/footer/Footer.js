import React from "react";
import "./footer.css";
import blog from '../../images/blogtree.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="footerCenter">
        <h3>Copyright �Syed Anwarul Haque Piash 2022. All Rights Reserved.</h3>
      </div>
      <div className="footerRight">
        <img src={blog} alt="" />
      </div>
    </div>
  );
};

export default Footer;
