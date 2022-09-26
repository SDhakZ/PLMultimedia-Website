import React, { useEffect } from "react";
import "aos/dist/aos.css";
import HomeAboutUsCSS from "./homeAboutUs.module.css";
import Aos from "aos";

function HomeAboutUs() {
  //animation for who are we
  useEffect(() => {
    Aos.init({
      offset: "50",
      duration: "1000",
      easing: "ease-in-out",
      anchorPlacement: "top",
      once: true,
    });
  }, []);

  return (
    <div className={HomeAboutUsCSS["Home-aboutUs-WhoAreWe"]}>
      <div className={HomeAboutUsCSS["Home-aboutUs-images"]}>
        <img
          data-aos="zoom-out-down"
          data-aos-delay="600"
          className={HomeAboutUsCSS["leftgirl"]}
          src={require("../../../../assets/Images/Home-Image/leftGirl.png")}
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="1100"
          className={HomeAboutUsCSS["rightgroup"]}
          src={require("../../../../assets/Images/Home-Image/rightGroup.png")}
        />
      </div>
      <div data-aos="fade-left" className={HomeAboutUsCSS["Home-aboutUs-Text"]}>
        <h2 className={HomeAboutUsCSS["Home-aboutUs-Title"]}>Who Are We?</h2>
        <p className={HomeAboutUsCSS["Home-aboutUs-Paragraph"]}>
          We are a dedicated team of IT and multimedia professionals based in
          Nepal delivering web-related services and customized media. Our
          company delivers custom fit products with ease of use and maximum
          return of value for both consumers and businesses in mind. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do
        </p>
        <p className={HomeAboutUsCSS["Home-aboutUs-Paragraph"]}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
}
export default HomeAboutUs;
