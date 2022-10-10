import React from "react";
import HomePortfolioCSS from "./homePortfolio.module.css";
import { SectionHeading } from "../../../../components/SectionHeading/SectionHeading";
import portfolioData from "../../../../data/portfolioData";
import { Link } from "react-router-dom";

function HomePortfolioCard(props) {
  return (
    <button className={HomePortfolioCSS["home-portfolio-card"]}>
      <figure className={HomePortfolioCSS["home-portfolio-image"]}>
        <img src={props.img} alt="Project" />
      </figure>

      <div className={HomePortfolioCSS["home-portfolio-body"]}>
        <div className={HomePortfolioCSS["home-portfolio-title"]}>
          {props.Heading}
        </div>
        <div className={HomePortfolioCSS["home-portfolio-brief"]}>
          {props.brief}
        </div>
      </div>
    </button>
  );
}

export const HomePortfolio = () => {
  return (
    <div className={HomePortfolioCSS["home-portfolio-container"]}>
      <SectionHeading sectionName="Our Recent Works" />
      <div className={HomePortfolioCSS["home-portfolio-data"]}>
        {portfolioData.slice(0, 3).map((portfolio) => {
          return (
            <HomePortfolioCard
              key={portfolio.id}
              img={portfolio.img}
              Heading={portfolio.Heading}
              brief={portfolio.brief}
            />
          );
        })}
      </div>
      <Link
        to={"/portfolio"}
        className={HomePortfolioCSS["home-portfolio-moreDetails"]}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        More Details...
      </Link>
    </div>
  );
};

export default HomePortfolio;
