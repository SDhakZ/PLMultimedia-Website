import React from "react";
import portfolioCSS from "./portfolio.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GoToTop } from "../../components/GoToTop/GoToTop";

export const PortfolioSection = (props) => {
  useEffect(() => {
    Aos.init({
      offset: "50",
      Delay: "200",
      duration: "1000",
      easing: "ease-in-out",
      anchorPlacement: "top",
      once: true,
    });
  }, []);
  return (
    <React.Fragment>
      <section
        className={`${portfolioCSS.portfolioRow} ${
          portfolioCSS[props.addClass]
        }`}
      >
        <figure
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-offset="200"
          className={portfolioCSS["portfolio-imgContainer"]}
        >
          <img
            src={props.img}
            alt="project"
            className={portfolioCSS["portfolio-image"]}
          />
        </figure>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          className={portfolioCSS["portfolio-content"]}
        >
          <div className={portfolioCSS["portfolio-details"]}>
            <h2 className={portfolioCSS["portfolio-heading"]}>
              {props.Heading}
            </h2>
            <p className={portfolioCSS["portfolio-paragraph"]}>
              {props.Description}
            </p>
          </div>
          <button className={portfolioCSS["portfolio-button"]}>
            View Project
          </button>
        </div>
      </section>
      <GoToTop />
    </React.Fragment>
  );
};
