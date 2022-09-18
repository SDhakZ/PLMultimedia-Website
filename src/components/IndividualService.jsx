import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import IndividualServiceCSS from "./CSSmodules/individualService.module.css";
import MainHeading from "./MainHeading";
import internalServiceData from "../Datas/servicesData";

function IndividualService() {
  const clickedLink = (toLoad) => {
    setInfo(internalServiceData[toLoad]);
    setClickNumber(toLoad + 1);
  };
  const location = useLocation();
  const { blogDetails } = location.state;
  const [info, setInfo] = useState({
    id: blogDetails.id,
    logo: blogDetails.logo,
    title: blogDetails.title,
    description: blogDetails.description,
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
              Advertisment
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
            <img src={info.logo} />
          </figure>
          <p className={IndividualServiceCSS["indService-para"]}>
            {/* It is a known fact that Website Development has the power to take an
            individual business higher. It will help any business of an
            organization or individual become available through the help of
            desktops, laptops, and smartphones. In addition to that, the
            platform also improves the services and increases the overall sales.
            We Subham Technology Pvt. Ltd carries the experience, skills, and
            talents to provide Website Development according to the needs and
            wants of our clients. Why take our Website Development services? We
            proudly say that our Website Development services will provide our
            customers with numerous advantages. We provide services that are the
            most practical alternative for those types of companies, which are
            settled in nations with a higher labor cost. We have the best and
            professional IT experts and programmers who will attend all the
            requirements of our interested clients. We will help in implementing
            on-the-go marketing and promote the products and services of our
            customers anywhere and at any time. No matter where the targeted
            audience of our customers is located, we will make sure that they
            get to access the advertisement provided by our clients from
            anywhere. Through our Website Development services, there will be an
            increase in customer engagement as there are many companies and
            organizations are need loyal customers. <br />
            Our team will work hard in creating online marketing strategies,
            which will in return attract the targeted audience. Our job is to
            make sure that our clients receive the most traffic on their website
            and perform much better than their competitors. We also provide
            services that will help our clients to perform direct communication
            with their customers. It will help them boost their brand in the
            fastest way possible. */}
            {info.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndividualService;
