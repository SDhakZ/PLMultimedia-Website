// topbar page to create the top bar for the website
import React from "react";
import TopbarCSS from "./topBar.module.css";

// function to create structure for topbar
export const Topbar = () => {
  return (
    <div className={TopbarCSS["topbar"]}>
      <div className={TopbarCSS["topbar-contactInfo"]}>
        <a href="# ">
          <i className="fa-solid fa-phone"></i>056-537276, 9860283950,
          9849970333
        </a>

        <a
          href="mailto: info@plmultimediaservice.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-solid fa-envelope"></i>
          info@plmultimediaservice.com
        </a>
        <a
          href="https://maps.app.goo.gl/xRCxzko2taU8FyWh9"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-solid fa-location-dot"></i>Chitwan, Nepal
        </a>
      </div>
      <div className={TopbarCSS["topbar-socialIcons"]}>
        <a
          href="https://twitter.com/MultimediaPvt"
          rel="noreferrer"
          target="_blank"
        >
          <i className={`${TopbarCSS.twitter} fa-brands fa-twitter`}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pl-multimedia-service-pvt-ltd-b06636251/"
          rel="noreferrer"
          target="_blank"
        >
          <i className={`${TopbarCSS.linkedin} fa-brands fa-linkedin-in`}></i>
        </a>
        <a
          href="https://www.instagram.com/instagram/"
          rel="noreferrer"
          target="_blank"
        >
          <i className={`${TopbarCSS.instagram} fa-brands fa-instagram`}></i>
        </a>
        <a
          href="https://www.facebook.com/plmultimediaservice"
          rel="noreferrer"
          target="_blank"
        >
          <i className={`${TopbarCSS.facebook} fa-brands fa-facebook-f`}></i>
        </a>
      </div>
    </div>
  );
};
