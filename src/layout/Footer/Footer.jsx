// footer page to create the footer of the website
import React from "react";
import FooterCSS from "./footer.module.css";
import KhaltiCheckout from "khalti-checkout-web";
import config from "../../components/Khalti/khaltiConfig";

// function to create the structure of footer page
export const Footer = () => {
  let checkout = new KhaltiCheckout(config);
  function goToEsewa() {
    return;
  }
  return (
    // start of footersection
    <div className={FooterCSS.footer}>
      <div className={FooterCSS["footer-row"]}>
        {/* for columns of footer */}
        <div className={FooterCSS["footer-companyDetail-container"]}>
          <div className={FooterCSS["footer-companyName-container"]}>
            <img
              src={require("../../assets/Logo/companyLogo.png")}
              alt="company logo"
            />
            <span className={FooterCSS["footer-companyName"]}>
              PLMultimedia
            </span>
          </div>
          <p>
            We are a complete Multimedia and IT Service provider agency. We are
            collaborating with various service providers to meet the requirement
            of our esteemed clients. We work from digital to outdoor marketing.
          </p>
        </div>

        <div
          className={`${FooterCSS["footer-column"]} ${FooterCSS["footer-services"]}`}
        >
          <h4>Our services</h4>
          <ul>
            <li>
              <a href="/services">Advertisment</a>
            </li>
            <li>
              <a href="/services">Media production</a>
            </li>
            <li>
              <a href="/services">Web Development</a>
            </li>
            <li>
              <a href="/services">Mobile App Development</a>
            </li>
            <li>
              <a href="/services">Web Hosting</a>
            </li>
            <li>
              <a href="/services">SEO Optimization</a>
            </li>
            <li>
              <a href="/services">Digital Marketing</a>
            </li>
          </ul>
        </div>

        <div className={FooterCSS["footer-column"]}>
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/contact">Partner with us</a>
            </li>
            <li>
              <a href="/FAQpage">FAQ</a>
            </li>
            <li>
              <a href="/blog">Our Blogs</a>
            </li>
            <li>
              <a href="/credentials">Credentials</a>
            </li>
          </ul>
        </div>

        {/* start of touch column */}
        <div
          className={`${FooterCSS["footer-column"]} ${FooterCSS["footer-getInTouch"]}`}
        >
          <h4>Get In Touch</h4>
          <p>Question or Feedback</p>
          <p>We would love to hear suggestions from you</p>
          <div className={FooterCSS["footer-icons"]}>
            <a
              href="mailto: info@plmultimediaservice.com"
              rel="noreferrer"
              target="_blank"
            >
              <i className={`${FooterCSS.envelope} fa-solid fa-envelope`}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pl-multimedia-service-pvt-ltd-b06636251/"
              rel="noreferrer"
              target="_blank"
            >
              <i
                className={`${FooterCSS.linkedin} fa-brands fa-linkedin-in`}
              ></i>
            </a>
            <a
              href="https://www.facebook.com/plmultimediaservice"
              rel="noreferrer"
              target="_blank"
            >
              <i
                className={`${FooterCSS.facebook} fa-brands fa-facebook-f`}
              ></i>
            </a>
          </div>
          <div className={FooterCSS["footer-payment"]}>
            We also accept payment through:
            <div className={FooterCSS["footer-logo"]}>
              <button onClick={() => checkout.show({ amount: 10000 })}>
                <img
                  src={require("../../assets/Logo/khaltiLogo.png")}
                  className={FooterCSS["footer-khaltiLogo"]}
                  alt="Khalti Logo"
                />
              </button>
              <button onClick={goToEsewa}>
                <img
                  src={require("../../assets/Logo/esewaLogo.png")}
                  className={FooterCSS["footer-esewaLogo"]}
                  alt="esewa Logo"
                />
              </button>
            </div>
          </div>
        </div>

        {/*copyright*/}
      </div>
      <div className={FooterCSS["footer-copyright"]}>
        <span className={FooterCSS["footer-copyrightSymbol"]}>??</span>
        <p>2022, PL multimedia, rights reserved</p>
      </div>
    </div>
  );
};
