import React from "react";
import IndividualServiceCSS from "./CSSmodules/individualService.module.css";
import MainHeading from "./MainHeading";

function IndividualService() {
  return (
    <div className={IndividualServiceCSS["indService-container"]}>
      <MainHeading headingName="Web Development" />
      <div className={IndividualServiceCSS["indService-flexbox"]}>
        <div className={IndividualServiceCSS["indService-lft"]}>
          <div className={IndividualServiceCSS["indService-links"]}>
            <h1 className={IndividualServiceCSS["indService-otherServices"]}>
              Other Services
            </h1>
            <a className={IndividualServiceCSS["indService-link"]}>
              Advertisement
            </a>
            <a
              className={`${IndividualServiceCSS.active} ${IndividualServiceCSS["indService-link"]}`}
            >
              Web Development
            </a>
            <a className={IndividualServiceCSS["indService-link"]}>
              Web Hosting
            </a>
            <a className={IndividualServiceCSS["indService-link"]}>
              App Development
            </a>
            <a className={IndividualServiceCSS["indService-link"]}>
              SEO Optimization
            </a>
            <a className={IndividualServiceCSS["indService-link"]}>
              Digital Marketing
            </a>
            <a className={IndividualServiceCSS["indService-link"]}>
              Medial Production
            </a>
          </div>
          <div className={IndividualServiceCSS["indService-contact"]}>
            <h2 className={IndividualServiceCSS["indService-needHelp"]}>
              Need Any Help?
            </h2>
            <p className={IndividualServiceCSS["indService-contactpara"]}>
              We are always ready to help you if you have any problems or
              enquiries.
            </p>
            <button
              className={IndividualServiceCSS["indService-contactButton"]}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className={IndividualServiceCSS["indService-rt"]}>
          <figure className={IndividualServiceCSS["indService-img"]}>
            <img src={require("../images/soundBeamprj.png")} />
          </figure>
          <p className={IndividualServiceCSS["indService-para"]}>
            It is a known fact that Website Development has the power to take an
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
            fastest way possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndividualService;
