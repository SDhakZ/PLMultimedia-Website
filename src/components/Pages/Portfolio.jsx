import React from "react";
import portfolioCSS from "../CSSmodules/portfolio.module.css";
import portfolioData from "../../Datas/portfolioData";
import PortfolioSection from "../PortfolioSection";
import MainHeading from "../MainHeading";
import { useSpring, animated, easings } from "react-spring";

export const Portfolio = () => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, easing: easings.easeInOutQuad },
  });
  return (
    <div className={portfolioCSS["portfolio-container"]}>
      <MainHeading headingName="Our Recent Works" />
      <animated.div style={style}>
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
      </animated.div>
    </div>
  );
};
