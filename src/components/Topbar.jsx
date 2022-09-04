import React from "react";
import TopbarCSS from "./CSSmodules/topBar.module.css";

function Topbar() {
  return (
    <div className={TopbarCSS["topbar"]}>
      <div className={TopbarCSS["topbar-contactInfo"]}>
        <a href="#">
          <i className="fa-solid fa-phone"></i>+977 9860283950
        </a>
        <a href="mailto:internships@plmultimediaservice.com">
          <i className="fa-solid fa-envelope"></i>
          internships@plmultimediaservice.com
        </a>
        <a href="https://goo.gl/maps/47BJnRvNCWqCdfkQ6">
          <i className="fa-solid fa-location-dot"></i>Chitwan, Nepal
        </a>
      </div>
      <div className={TopbarCSS["social-icons"]}>
        <a href="https://twitter.com/">
          <i className={`${TopbarCSS.twitter} fa-brands fa-twitter`}></i>
        </a>
        <a href="https://www.linkedin.com/feed/">
          <i className={`${TopbarCSS.linkedin} fa-brands fa-linkedin-in`}></i>
        </a>
        <a href="https://www.instagram.com/instagram/">
          <i className={`${TopbarCSS.instagram} fa-brands fa-instagram`}></i>
        </a>
        <a href="https://www.facebook.com/plmultimediaservice">
          <i className={`${TopbarCSS.facebook} fa-brands fa-facebook-f`}></i>
        </a>
      </div>
    </div>
  );
}

export default Topbar;
