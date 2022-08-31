/*This is the Services Component for PL. it calls all the necessary
Service components to form the Services page for PL Multimedia*/

import React from "react";
import { ServiceCard, MoreCard } from "../ServiceCard.jsx";
import ServicesCSS from "../CSSmodules/Services.module.css";
import DomainSearch from "../DomainSearch.jsx";
import serviceData from "../../serviceData";
import MainHeading from "../MainHeading";

function Services() {
  return (
    <div className={ServicesCSS["ServicesPage"]}>
      <MainHeading headingName="Our Services" />
      <DomainSearch />

      <div className={ServicesCSS["services-container"]}>
        <div className={ServicesCSS.serviceCardSection}>
          {serviceData.map((service) => {
            return (
              <ServiceCard
                key={service.id}
                logo={service.logo}
                title={service.title}
                description={service.description}
              />
            );
          })}

          <MoreCard moreDetails="AND MANY MORE ..." />
        </div>
      </div>
    </div>
  );
}

export default Services;
