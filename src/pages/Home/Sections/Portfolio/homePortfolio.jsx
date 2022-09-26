import React from "react";
import HomePortfolioCSS from "./homePortfolio.module.css";
import MainHeading from "../../../../components/MainHeading/MainHeading";
import portfolioData from "../../../../data/portfolioData";
import { Link } from "react-router-dom";
function HomePortfolioCard(props) {
  return (
    <button className={HomePortfolioCSS["Home-Portfolio-Card"]}>
      <img
        className={HomePortfolioCSS["Home-Portfolio-Image"]}
        src={props.img}
        alt="image1"
      />
      <div className={HomePortfolioCSS["Home-Portfolio-body"]}>
        <div className={HomePortfolioCSS["Home-Portfolio-Title"]}>
          {props.Heading}
        </div>
        <div className={HomePortfolioCSS["Home-Portfolio-Brief"]}>
          {props.brief}
        </div>
      </div>
    </button>
  );
}

function HomePortfolio() {
  return (
    <div className={HomePortfolioCSS["Home-Portfolio-Container"]}>
      <MainHeading headingName="Our Recent Works" />
      <div className={HomePortfolioCSS["Home-Portfolio-Data"]}>
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
        className={HomePortfolioCSS["moreDetails"]}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        More Details...
      </Link>
    </div>
  );
}

export default HomePortfolio;
