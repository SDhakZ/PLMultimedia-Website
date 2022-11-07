/* This is the component for skeleton structure of the section of portfolio page */
import React from "react";
import portfolioCSS from "./portfolio.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GoToTop } from "../../components/GoToTop/GoToTop";

//Portfolio Section backbone
export const PortfolioSection = (props) => {
  //animation settings
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
  //returns the backbone structure of portfolio section where data can be mapped
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
          <a
            href={props.Link}
            className={portfolioCSS["portfolio-button"]}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </section>
      <GoToTop />
    </React.Fragment>
  );
};
