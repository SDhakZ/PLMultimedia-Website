import React from "react";
import portfolioCSS from "../CSSmodules/portfolio.module.css";
import portfolioData from "../../portfolioData";
import PortfolioSection from "../PortfolioSection";

export const Portfolio = () => {
  return (
    <div className={portfolioCSS["portfolio-container"]}>
      <h1 className={portfolioCSS["portfolio-mainHeading"]}>
        Our Recent Works
      </h1>
      {portfolioData.map((portfolio) => {
        return (
          <PortfolioSection
            key={portfolio.id}
            img={portfolio.img}
            addClass={portfolio.addClass}
            Heading={portfolio.Heading}
            Description={portfolio.Description}
          />
        );
      })}
    </div>
  );
};
