/* Component for data mapping for Portfolio Page from portfolio Section
   Includes Pagination */
import React from "react";
import portfolioCSS from "./portfolio.module.css";
import portfolioData from "../../data/portfolioData";
import { PortfolioSection } from "./PortfolioSection";
import { MainHeading } from "../../components/MainHeading/MainHeading";
import { useSpring, animated, easings } from "react-spring";
import PaginationRaw from "../../components/Pagination/PaginationRaw.jsx";
import { useState } from "react";

//animation settings
export const Portfolio = () => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, easing: easings.easeInOutQuad },
  });
  //pagination settings
  const [portData] = useState(portfolioData);
  const [showPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  //returns mapped data of portfolio
  return (
    <div className={portfolioCSS["portfolio-container"]}>
      <MainHeading headingName="Our Recent Works" />
      <animated.div style={style}>
        {portData.slice(pagination.start, pagination.end).map((portfolio) => {
          return (
            <PortfolioSection
              key={portfolio.id}
              img={portfolio.img}
              addClass={portfolio.addClass}
              Heading={portfolio.Heading}
              Description={portfolio.Description}
              Link={portfolio.Link}
            />
          );
        })}
      </animated.div>
      <PaginationRaw
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={portData.length}
      />
    </div>
  );
};
