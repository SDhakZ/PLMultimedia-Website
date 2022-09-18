// this is the service card component.
// it is basically a function which takes logo,title,& description parameters to generate a service card.

import React from "react";
import { Link } from "react-router-dom";
import ServicesCSS from "../components/CSSmodules/services.module.css";

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
          pathname: "/individualService",
          state: { blogDetails: props.serviceDetails },
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
