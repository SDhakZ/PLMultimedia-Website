/*This is the Services Component for PL. it calls all the necessary
Service components to form the Services page for PL Multimedia*/

import React from "react";
import { ServiceCard, MoreCard } from "../ServiceCard.jsx";
import ServicesCSS from "../CSSmodules/services.module.css";
import DomainSearch from "../DomainSearch.jsx";
import servicesData from "../../Datas/servicesData";
import MainHeading from "../MainHeading";
import { useSpring, animated, easings } from "react-spring";

function Services() {
  const style = useSpring({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 700, easing: easings.easeOutBack },
  });
  return (
    <div className={ServicesCSS["ServicesPage"]}>
      <MainHeading headingName="Our Services" />
      <animated.div style={style}>
        <DomainSearch />
      </animated.div>

      <div className={ServicesCSS["services-container"]}>
        <div className={ServicesCSS.serviceCardSection}>
          {servicesData.map((service) => {
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
