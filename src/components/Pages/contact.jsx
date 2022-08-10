import React from "react";
import "../contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <React.Fragment>
      <div className="column">
        <div className="column-left">
          <h1 className="get-in-touch">Get in touch</h1>
          <p className="paragraph">
            Want to get in touch? We’d love to hear from you. We’re here to help
            and answer any questions you might have. We often personally meet
            with clients; Drop us a line, or give us a heads up if
            you'reinterested in visiting us.
          </p>
          <h2 className="find-Us-At">You can also find us at</h2>
          <div className="icons">
            <a href="mailto:internships@plmultimediaservice.com">
              <span className="email-icon">
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </span>
              Internships@plmultimediaservice.com
            </a>
            <a href="https://goo.gl/maps/fNcZiCUYHxBAE4nj6" target="_blank">
              <span className="location-icon">
                <FontAwesomeIcon icon={faLocationDot} size="xl" />
              </span>
              <span className="location">Bharatpur-20, Chitwan</span>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <span className="linkedIn-icon">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </span>
              PL Multimedia Service
            </a>
            <a href="tel:+9779860283950">
              <span className="phone-icon">
                <FontAwesomeIcon icon={faPhone} size="xl" />
              </span>
              9860283950
            </a>
            <a href="https://www.instagram.com/instagram/" target="_blank">
              <span className="instagram-icon">
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </span>
              PLMultimediaService
            </a>
            <a
              href="https://www.facebook.com/plmultimediaservice"
              target="_blank"
            >
              <span className="facebook-icon">
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </span>
              PL Multimedia Service
            </a>
          </div>
        </div>
        <div className="column-right">
          <div className="content">
            <h2 className="sendMessage">Send message</h2>
            <div className="line"></div>
            <select>
              <option value="Advertisement">Advertisement</option>
              <option value="Web Development">Web Development</option>
              <option value="Web Hosting">Web Hosting</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="Digital Marketting">Digital Marketting</option>
              <option value="Media Production">Media Production</option>
            </select>
            <input type="text" placeholder="Full Name" />
            <div className="form-email-phone">
              <input type="email" placeholder="Email Address" />
              <input type="phone" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Message" className="textarea" />
            <button className="form-sendMessage">Send Message</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Contact;
