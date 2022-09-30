import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import IndividualServiceCSS from "./individualService.module.css";
import MainHeading from "../../components/MainHeading/MainHeading";
import internalServiceData from "../../data/servicesData";

function getDataFromPathType(path) {
  if (path === "advertisement") {
    return 0;
  } else if (path === "webDevelopment") {
    return 1;
  } else if (path === "webHosting") {
    return 2;
  } else if (path === "appDevelopment") {
    return 3;
  } else if (path === "seoOptimization") {
    return 4;
  } else if (path === "digitalMarketing") {
    return 5;
  } else if (path === "mediaProduction") {
    return 6;
  } else if (path === "eventManagement") {
    return 7;
  }
}

function IndividualService() {
  const history = useHistory();
  const clickedLink = (toLoad) => {
    history.push("/services/" + toLoad);
    const toLoadFromDataArrayNumber = getDataFromPathType(toLoad);
    setInfo(internalServiceData[toLoadFromDataArrayNumber]);
    setClickNumber(toLoadFromDataArrayNumber + 1);
    window.scrollTo({ top: 60, behavior: "smooth" });
  };
  const location = useLocation();
  const toLoadServiceArr = location.pathname.split("/");
  const toLoadService = toLoadServiceArr[toLoadServiceArr.length - 1];
  const blogDetails = internalServiceData[getDataFromPathType(toLoadService)];

  const [info, setInfo] = useState({
    id: blogDetails.id,
    image: blogDetails.image,
    title: blogDetails.title,
    moreDetails: blogDetails.moreDetails,
    credit: blogDetails.credit,
    creditLink: blogDetails.creditLink,
  });
  const [clickNumber, setClickNumber] = useState(blogDetails.id);
  return (
    <div className={IndividualServiceCSS["indService-container"]}>
      <div className={IndividualServiceCSS["indService-back-container"]}>
        <Link
          to={{ pathname: "/services" }}
          className={IndividualServiceCSS["indService-backBtn"]}
        >
          <i className="fa-sharp fa-solid fa-arrow-left"></i> Go Back
        </Link>
      </div>
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
              onClick={() => clickedLink("advertisement")}
            >
              Advertisement
            </a>
            <a
              className={`${
                clickNumber === 2 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("webDevelopment")}
            >
              Web Development
            </a>
            <a
              className={`${
                clickNumber === 3 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("webHosting")}
            >
              Web Hosting
            </a>
            <a
              className={`${
                clickNumber === 4 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("appDevelopment")}
            >
              App Development
            </a>
            <a
              className={`${
                clickNumber === 5 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("seoOptimization")}
            >
              SEO Optimization
            </a>
            <a
              className={`${
                clickNumber === 6 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("digitalMarketing")}
            >
              Digital Marketing
            </a>
            <a
              className={`${
                clickNumber === 7 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("mediaProduction")}
            >
              Media Production
            </a>
            <a
              className={`${
                clickNumber === 8 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("eventManagement")}
            >
              Event Management
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
            <a
              href={info.creditLink}
              className={IndividualServiceCSS["indService-attribution"]}
            >
              {info.credit}
            </a>
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
