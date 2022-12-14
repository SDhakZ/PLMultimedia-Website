/* jsx for individual service page for the service that is clicked*/
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import IndividualServiceCSS from "./individualService.module.css";
import { MainHeading } from "../../components/MainHeading/MainHeading";
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

export const IndividualService = () => {
  const history = useHistory();
  const location = useLocation();
  let { loadedFrom } = location.state;
  const clickedLink = (toLoad) => {
    history.push({
      pathname: "/services/" + toLoad,
      state: { loadedFrom: loadedFrom },
    });
    const toLoadFromDataArrayNumber = getDataFromPathType(toLoad);
    setInfo(internalServiceData[toLoadFromDataArrayNumber]);
    setClickNumber(toLoadFromDataArrayNumber + 1);
    window.scrollTo({ top: 60, behavior: "smooth" });
  };
  //goes back a page according to the origin (Home/Services)page
  const goBackMethod = () => {
    if (loadedFrom === "home") {
      return "/";
    } else if (loadedFrom === "service") {
      return "/services";
    }

    return "/";
  };
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
          to={{ pathname: goBackMethod() }}
          className={IndividualServiceCSS["indService-backBtn"]}
        >
          <i className="fa-sharp fa-solid fa-arrow-left"></i> Go Back
        </Link>
      </div>
      <MainHeading headingName={info.title} />
      <div className={IndividualServiceCSS["indService-flexbox"]}>
        <div className={IndividualServiceCSS["indService-left"]}>
          <div className={IndividualServiceCSS["indService-links"]}>
            <h1 className={IndividualServiceCSS["indService-otherServices"]}>
              Our Services
            </h1>
            <button
              className={`${
                clickNumber === 1 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("advertisement")}
            >
              Advertisement
            </button>
            <button
              className={`${
                clickNumber === 2 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("webDevelopment")}
            >
              Web Development
            </button>
            <button
              className={`${
                clickNumber === 3 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("webHosting")}
            >
              Web Hosting
            </button>
            <button
              className={`${
                clickNumber === 4 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("appDevelopment")}
            >
              App Development
            </button>
            <button
              className={`${
                clickNumber === 5 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("seoOptimization")}
            >
              SEO Optimization
            </button>
            <button
              className={`${
                clickNumber === 6 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("digitalMarketing")}
            >
              Digital Marketing
            </button>
            <button
              className={`${
                clickNumber === 7 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("mediaProduction")}
            >
              Media Production
            </button>
            <button
              className={`${
                clickNumber === 8 ? IndividualServiceCSS.active : ""
              } ${IndividualServiceCSS["indService-link"]}`}
              onClick={() => clickedLink("eventManagement")}
            >
              Event Management
            </button>
          </div>
          <div className={IndividualServiceCSS["indService-contact"]}>
            <h2 className={IndividualServiceCSS["indService-needHelp"]}>
              Want this service?
            </h2>
            <p className={IndividualServiceCSS["indService-contactParagraph"]}>
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

        <div className={IndividualServiceCSS["indService-right"]}>
          <figure className={IndividualServiceCSS["indService-img"]}>
            <img src={info.image} alt="service pic" />
            <a
              href={info.creditLink}
              className={IndividualServiceCSS["indService-attribution"]}
            >
              {info.credit}
            </a>
          </figure>
          <p className={IndividualServiceCSS["indService-paragraph"]}>
            {info.moreDetails}
          </p>
        </div>
      </div>
    </div>
  );
};
