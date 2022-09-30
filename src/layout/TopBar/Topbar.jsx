import React from "react";
import TopbarCSS from "./topBar.module.css";

function Topbar() {
  return (
    <div className={TopbarCSS["topbar"]}>
      <div className={TopbarCSS["topbar-contactInfo"]}>
        <a href="tel:+9779860283950">
          <i className="fa-solid fa-phone"></i>+977 9860283950
        </a>
        <a href="mailto: info@plmultimediaservice.com" target="_blank">
          <i className="fa-solid fa-envelope"></i>
          info@plmultimediaservice.com
        </a>
        <a href="https://maps.app.goo.gl/xRCxzko2taU8FyWh9" target="_blank">
          <i className="fa-solid fa-location-dot"></i>Chitwan, Nepal
        </a>
      </div>
      <div className={TopbarCSS["social-icons"]}>
        <a href="https://twitter.com/MultimediaPvt" target="_blank">
          <i className={`${TopbarCSS.twitter} fa-brands fa-twitter`}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pl-multimedia-service-pvt-ltd-b06636251/"
          target="_blank"
        >
          <i className={`${TopbarCSS.linkedin} fa-brands fa-linkedin-in`}></i>
        </a>
        <a href="https://www.instagram.com/instagram/" target="_blank">
          <i className={`${TopbarCSS.instagram} fa-brands fa-instagram`}></i>
        </a>
        <a href="https://www.facebook.com/plmultimediaservice" target="_blank">
          <i className={`${TopbarCSS.facebook} fa-brands fa-facebook-f`}></i>
        </a>
      </div>
    </div>
  );
}

export default Topbar;
