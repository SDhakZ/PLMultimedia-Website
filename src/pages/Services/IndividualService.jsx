import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import IndividualServiceCSS from "./individualService.module.css";
import MainHeading from "../../components/MainHeading/MainHeading";
import internalServiceData from "../../datas/servicesData";

function IndividualService() {
  const clickedLink = (toLoad) => {
    setInfo(internalServiceData[toLoad]);
    setClickNumber(toLoad + 1);
    window.scrollTo({ top: 60, behavior: "smooth" });
  };
  const location = useLocation();
  const { blogDetails } = location.state;
  const [info, setInfo] = useState({
    id: blogDetails.id,
    image: blogDetails.image,
    title: blogDetails.title,
    moreDetails: blogDetails.moreDetails,
  });
  const [clickNumber, setClickNumber] = useState(blogDetails.id);
  return (
    <div className={IndividualServiceCSS["indService-container"]}>
      <MainHeading headingName={info.title} />
      <div className={IndividualServiceCSS["indService-flexbox"]}>
        <div className={IndividualServiceCSS["indService-lft"]}>
          <div className={IndividualServiceCSS["indService-links"]}>
            <h1 className={IndividualServiceCSS["indService-otherServices"]}>
              Our Services
            </h1>
            <a
              className={`${
                clickNumber === 1 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink(0)}
            >
              Advertisement
            </a>
            <a
              className={`${
                clickNumber === 2 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink(1)}
            >
              Web Development
            </a>
            <a
              className={`${
                clickNumber === 3 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink(2)}
            >
              Web Hosting
            </a>
            <a
              className={`${
                clickNumber === 4 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink(3)}
            >
              App Development
            </a>
            <a
              className={`${
                clickNumber === 5 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink(4)}
            >
              SEO Optimization
            </a>
            <a
              className={`${
                clickNumber === 6 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink(5)}
            >
              Digital Marketing
            </a>
            <a
              className={`${
                clickNumber === 7 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink(6)}
            >
              Media Production
            </a>
          </div>
          <div className={IndividualServiceCSS["indService-contact"]}>
            <h2 className={IndividualServiceCSS["indService-needHelp"]}>
              Want this service?
            </h2>
            <p className={IndividualServiceCSS["indService-contactpara"]}>
              We are always ready to help you if you have any problems or
              enquiries regarding the service.
            </p>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
              to={{
                pathname: "/contact",
                state: { toLoadNumber: clickNumber },
              }}
              className={IndividualServiceCSS["indService-contactButton"]}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className={IndividualServiceCSS["indService-rt"]}>
          <figure className={IndividualServiceCSS["indService-img"]}>
            <img src={info.image} />
          </figure>
          <p className={IndividualServiceCSS["indService-para"]}>
            {info.moreDetails}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndividualService;
