// this is the service card component.
// it is basically a function which takes logo,title,& description parameters to generate a service card.

import React from "react";
import { Link } from "react-router-dom";
import ServicesCSS from "./services.module.css";

function getPathSuffix(serviceNumber) {
  let path = "/services/";
  if (serviceNumber === 1) {
    path += "advertisement";
  } else if (serviceNumber === 2) {
    path += "webDevelopment";
  } else if (serviceNumber === 3) {
    path += "webHosting";
  } else if (serviceNumber === 4) {
    path += "mobileAppDevelopment";
  } else if (serviceNumber === 5) {
    path += "seoOptimization";
  } else if (serviceNumber === 6) {
    path += "digitalMarketing";
  } else if (serviceNumber === 7) {
    path += "mediaProduction";
  } else if (serviceNumber === 8) {
    path += "socialMediaMarketing";
  } else if (serviceNumber === 9) {
    path += "eventManagement";
  } else {
    path = "/";
  }
  return path;
}

function ServiceCard(props) {
  return (
    <div className={ServicesCSS.serviceCard}>
      <img
        className={ServicesCSS.logo}
        src={props.logo}
        alt="services logo"
      ></img>
      <div className={ServicesCSS.aboutLogo}>
        <p className={ServicesCSS.cardName}>
          <b>{props.title}</b>
        </p>
        <p className={ServicesCSS.cardDescription}>{props.description}</p>
      </div>
      <Link
        className={ServicesCSS.contactButton}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
        to={{
          pathname: getPathSuffix(props.serviceDetails.id),
        }}
      >
        View Details
      </Link>
    </div>
  );
}

function MoreCard(props) {
  return (
    <div className={ServicesCSS.serviceCard}>
      <p className={ServicesCSS.moreDetails}>{props.moreDetails}</p>
    </div>
  );
}

export { ServiceCard, MoreCard };
