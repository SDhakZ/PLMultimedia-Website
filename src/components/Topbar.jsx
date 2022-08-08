import React from "react";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="contact-info">
        <a href="#">
          <i class="fa-solid fa-phone"></i>+977 9860283950
        </a>
        <a href="internships@plmultimediaservice.com">
          <i class="fa-solid fa-envelope"></i>
          internships@plmultimediaservice.com
        </a>
        <a href="#">
          <i class="fa-solid fa-location-dot"></i>Chitwan, Nepal
        </a>
      </div>
      <div className="social-icons">
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>
    </div>
  );
}

export default Topbar;
