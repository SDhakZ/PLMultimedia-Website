import React from "react";
import TopbarCSS from "./CSSmodules/Topbar.module.css";

function Topbar() {
  return (
    <div className={TopbarCSS["topbar"]}>
      <div className={TopbarCSS["contact-info"]}>
        <a href="#">
          <i class="fa-solid fa-phone"></i>+977 9860283950
        </a>
        <a href="mailto:internships@plmultimediaservice.com">
          <i class="fa-solid fa-envelope"></i>
          internships@plmultimediaservice.com
        </a>
        <a href="#">
          <i class="fa-solid fa-location-dot"></i>Chitwan, Nepal
        </a>
      </div>
      <div className={TopbarCSS["social-icons"]}>
        <a href="#">
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
