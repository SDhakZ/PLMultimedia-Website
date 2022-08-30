import React from "react";
import portfolioCSS from "./CSSmodules/portfolio.module.css";

function PortfolioSection(props) {
  return (
    <React.Fragment>
      <section
        className={`${portfolioCSS.portfolioRow} ${
          portfolioCSS[props.addClass]
        }`}
      >
        <figure className={portfolioCSS["portfolio-imgContainer"]}>
          <img
            src={props.img}
            alt="image1"
            className={portfolioCSS["portfolio-image"]}
          />
        </figure>
        <div className={portfolioCSS["portfolio-content"]}>
          <div className={portfolioCSS["portfolio-heading-para"]}>
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
    </React.Fragment>
  );
}
export default PortfolioSection;
