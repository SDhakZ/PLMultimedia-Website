import React, { useEffect } from "react";
import "aos/dist/aos.css";
import HomeAboutUsCSS from "./homeAboutUs.module.css";
import Aos from "aos";

export const HomeAboutUs = () => {
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
    <div className={HomeAboutUsCSS["home-aboutUs-WhoAreWe"]}>
      <div className={HomeAboutUsCSS["home-aboutUs-images"]}>
        <img
          data-aos="zoom-out-down"
          data-aos-delay="600"
          className={HomeAboutUsCSS["home-aboutUs-leftgirl"]}
          src={require("../../../../assets/Images/Home-Image/leftGirl.png")}
          alt="girl"
        />
        <img
          data-aos="zoom-out-up"
          data-aos-delay="1100"
          className={HomeAboutUsCSS["home-aboutUs-rightgroup"]}
          src={require("../../../../assets/Images/Home-Image/rightGroup.png")}
          alt="group"
        />
      </div>
      <div data-aos="fade-left" className={HomeAboutUsCSS["home-aboutUs-text"]}>
        <h2 className={HomeAboutUsCSS["home-aboutUs-title"]}>Who Are We?</h2>
        <p className={HomeAboutUsCSS["home-aboutUs-paragraph"]}>
          We are a dedicated team of IT and multimedia professionals based in
          Nepal delivering web-related services and customized media. Our
          company delivers custom fit products with ease of use and maximum
          return of value for both consumers and businesses in mind.
        </p>
        <p className={HomeAboutUsCSS["home-aboutUs-paragraph"]}>
          We communicate with our clients for their best suitable needs. We also
          make sure that they get what they visioned for their company. We will
          also make sure there is proper troubleshooting methods for any
          problems that may arrise in the present changing world.
        </p>
      </div>
    </div>
  );
};
