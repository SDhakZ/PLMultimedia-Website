import React from "react";
import portfolioCSS from "../CSSmodules/portfolio.module.css";
import portfolioData from "../../Datas/portfolioData";
import PortfolioSection from "../PortfolioSection";
import MainHeading from "../MainHeading";

export const Portfolio = () => {
  return (
    <div className={portfolioCSS["portfolio-container"]}>
      <MainHeading headingName="Our Recent Works" />
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
