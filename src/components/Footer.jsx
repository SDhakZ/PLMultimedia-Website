import React, { Component } from "react";
import FooterCSS from "./CSSmodules/footer.module.css";

class Footer extends Component {
  render() {
    return (
      // start of footersection//
      <div className={FooterCSS.footerSection}>
        <div className={FooterCSS["footer-row"]}>
          {/* for columns of footer */}
          <div className={FooterCSS["footer-col1"]}>
            <h4>
              PL
              <span className={FooterCSS["footer-companyName"]}>
                Pl Multimedia
              </span>
            </h4>

            <p>
              Changing the way, we work, live, play and learn.The Network Works.
              No Excuses Tomorrow Starts Here
            </p>
          </div>

          <div
            className={`${FooterCSS["footer-col"]} ${FooterCSS["footer-services"]}`}
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

          <div className={FooterCSS["footer-col"]}>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Our team</a>
              </li>
              <li>
                <a href="#">Partner with us</a>
              </li>
              <li>
                <a href="/FAQpage">FAQ</a>
              </li>
              <li>
                <a href="/blog">Our Blog</a>
              </li>
            </ul>
          </div>

          {/* start of touch column */}
          <div
            className={`${FooterCSS["footer-col"]} ${FooterCSS["footer-colt"]}`}
          >
            <h4>Get In Touch</h4>
            <p>Question or Feedback</p>
            <p>We would love to hear suggestions from you</p>
            <div className={FooterCSS["footer-icons"]}>
              <a href="#">
                <i className={`${FooterCSS.twitter} fa-brands fa-twitter`}></i>
              </a>
              <a href="https://www.linkedin.com/feed/">
                <i
                  className={`${FooterCSS.linkedin} fa-brands fa-linkedin-in`}
                ></i>
              </a>
              <a href="https://www.instagram.com/instagram/">
                <i
                  className={`${FooterCSS.instagram} fa-brands fa-instagram`}
                ></i>
              </a>
              <a href="https://www.facebook.com/plmultimediaservice">
                <i
                  className={`${FooterCSS.facebook} fa-brands fa-facebook-f`}
                ></i>
              </a>
            </div>
          </div>

          {/*copyright*/}
        </div>
        <div className={FooterCSS["footer-copyright"]}>
          <span className={FooterCSS["footer-copyrightSymbol"]}>©</span>
          <p>2022, PL multimedia, rights reserved</p>
        </div>
      </div>
    );
  }
}

export default Footer;
