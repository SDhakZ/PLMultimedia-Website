import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactCSS from "./contact.module.css";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { MainHeading } from "../../components/MainHeading/MainHeading";
import { useSpring, animated, easings } from "react-spring";

export const Contact = () => {
  useEffect(() => {
    // Anything in here is fired on component mount.
    return () => {
      // Anything in here is fired on component unmount.
      toLoadNumber = 0;
    };
  }, []);
  const location = useLocation();
  let { toLoadNumber } = location.state || 0;
  const formRef = useRef(null);
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
  };

  const validationform = (value) => {
    const errors = {};
    const namePattern = /([A-Z][a-z]{3,} )([A-Z][a-z]{3,} )?([A-Z][a-z]{3,})/;
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /* eslint-disable-line */
    const phonePattern =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; /* eslint-disable-line */
    if (!value.name) {
      return errors.name;
    } else if (!namePattern.test(value.name)) {
      return errors.name;
    }
    if (!value.email) {
      return errors.email;
    } else if (!emailPattern.test(value.email)) {
      return errors.email;
    }
    if (!value.contact) {
      return errors.contact;
    } else if (!phonePattern.test(value.contact)) {
      return errors.contact;
    }
    if (!value.message) {
      return errors.message;
    }
    return errors;
  };

  const mapNumberToValue = {
    1: "Advertisement",
    2: "WebDevelopment",
    3: "WebHosting",
    4: "MobileAppDevelopment",
    5: "SEO Optimization",
    6: "Digital Marketting",
    7: "Media Production",
    8: "Job and Internship",
    9: "Problems",
    10: "Other",
  };

  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue);
      emailjs
        .sendForm(
          "service_l43jr5i",
          "template_7n5kswn",
          formRef.current,
          "H4TRK-LowEhYemmhU"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("mail sent");
          },
          (error) => {
            console.log(error.text);
          }
        );

      swal({
        title: "Thank You",
        text: "Your message has been submitted",
        icon: "success",
        button: "Ok",
      });

      setTimeout(() => {
        setSubmit("");
        setFormvalue({
          name: "",
          email: "",
          contact: "",
          message: "",
          subject: "",
        });
      }, 10);
    }
  }, [formerror, formvalue, issubmit]);

  const clear = (e) => {
    e.preventDefault();
    setFormvalue({
      name: "",
      email: "",
      contact: "",
      message: "",
      subject: "",
    });
  };

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, easing: easings.easeInOutQuad },
  });

  return (
    <React.Fragment>
      <div className={ContactCSS["contactPage"]}>
        <MainHeading headingName="Contact Us" />
        <animated.div style={style}>
          <div className={ContactCSS["contact-container"]}>
            <div className={ContactCSS["contact-column-left"]}>
              <h1 className={ContactCSS["contact-get-in-touch"]}>
                Get in touch
              </h1>
              <p className={ContactCSS["contact-paragraph"]}>
                Want to get in touch? We’d love to hear from you. We’re here to
                help and answer any questions you might have. We often
                personally meet with clients; Drop us a line, or give us a heads
                up if you'reinterested in visiting us.
              </p>
              <h2 className={ContactCSS["contact-findUsAt"]}>
                You can also find us at
              </h2>
              <div className={ContactCSS["contact-socials"]}>
                <div className={ContactCSS["contact-links"]}>
                  <div className={ContactCSS["contact-icons"]}>
                    <i
                      className={`${ContactCSS.envelope} fa-solid fa-envelope`}
                    />
                  </div>
                  <a
                    href="mailto:internships@plmultimediaservice.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    plmultimediaservice@gmail.com
                  </a>
                </div>
                <div className={ContactCSS["contact-links"]}>
                  <div className={ContactCSS["contact-icons"]}>
                    <i
                      className={`${ContactCSS.location} fa-solid fa-location-dot`}
                    />
                  </div>
                  <a
                    href="https://goo.gl/maps/fNcZiCUYHxBAE4nj6"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Bharatpur-20, Chitwan
                  </a>
                </div>

                <div className={ContactCSS["contact-links"]}>
                  <div className={ContactCSS["contact-icons"]}>
                    <i
                      className={`${ContactCSS.linkedin} fa-brands fa-linkedin-in`}
                    />
                  </div>
                  <a
                    href="https://www.linkedin.com/feed/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    PL Multimedia Service
                  </a>
                </div>

                <div className={ContactCSS["contact-links"]}>
                  <div className={ContactCSS["contact-icons"]}>
                    <i className={`${ContactCSS.phone} fa-solid fa-phone`} />
                  </div>
                  <a href="tel:+9779860283950">9860283950</a>
                </div>

                <div className={ContactCSS["contact-links"]}>
                  <div className={ContactCSS["contact-icons"]}>
                    <i
                      className={`${ContactCSS.instagram} fa-brands fa-instagram `}
                    />
                  </div>
                  <a
                    href="https://www.instagram.com/instagram/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    PLMultimediaService
                  </a>
                </div>

                <div className={ContactCSS["contact-links"]}>
                  <div className={ContactCSS["contact-icons"]}>
                    <i
                      className={`${ContactCSS.facebook} fa-brands fa-facebook-f`}
                    />
                  </div>
                  <a
                    href="https://www.facebook.com/plmultimediaservice"
                    rel="noreferrer"
                    target="_blank"
                  >
                    PL Multimedia Service
                  </a>
                </div>

                <div className={ContactCSS["contact-links"]}>
                  <div className={ContactCSS["contact-icons"]}>
                    <i
                      className={`${ContactCSS.twitter} fa-brands fa-twitter`}
                    />
                  </div>
                  <a
                    href="https://twitter.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    PL Multimedia Service
                  </a>
                </div>
              </div>
            </div>

            <div className={ContactCSS["contact-column-right"]}>
              <div className={ContactCSS["contact-content"]}>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <h2 className={ContactCSS["contact-sendMessage"]}>
                    Send message
                  </h2>
                  <div className={ContactCSS["contact-line"]}></div>
                  <select
                    className={ContactCSS["contact-drop-down"]}
                    name="subject"
                    required="true"
                    // value={formvalue.subject}
                    // value="webHosting"
                    onChange={handlevalidation}
                    onKeyDown={handleEnter}
                  >
                    <option value="" disabled selected hidden>
                      --Choose the Subject--
                    </option>
                    <option
                      value="Advertisement"
                      className={ContactCSS["contact-options"]}
                      selected={toLoadNumber === 1 ? true : false}
                    >
                      Advertisement
                    </option>
                    <option
                      value="WebDevelopment"
                      className={ContactCSS["contact-webDevelopment"]}
                      selected={toLoadNumber === 2 ? true : false}
                    >
                      Web Development
                    </option>
                    <option
                      value="WebHosting"
                      className={ContactCSS["contact-options"]}
                      selected={toLoadNumber === 3 ? true : false}
                    >
                      Web Hosting
                    </option>
                    <option
                      value="MobileAppDevelopment"
                      className={ContactCSS["contact-options"]}
                      selected={toLoadNumber === 4 ? true : false}
                    >
                      Mobile App Development
                    </option>
                    <option
                      value="SEO Optimization"
                      className={ContactCSS["contact-options"]}
                      selected={toLoadNumber === 5 ? true : false}
                    >
                      SEO Optimization
                    </option>
                    <option
                      value="Digital Marketting"
                      className={ContactCSS["contact-options"]}
                      selected={toLoadNumber === 6 ? true : false}
                    >
                      Digital Marketting
                    </option>
                    <option
                      value="Media Production"
                      className={ContactCSS["contact-options"]}
                      selected={toLoadNumber === 7 ? true : false}
                    >
                      Media Production
                    </option>
                    <option
                      value="Job and Internship"
                      className={ContactCSS["contact-options"]}
                      selected={toLoadNumber === 8 ? true : false}
                    >
                      Job and Internship
                    </option>
                    <option
                      value="Problems"
                      className={ContactCSS["contact-options"]}
                      selected={toLoadNumber === 9 ? true : false}
                    >
                      Problems
                    </option>
                    <option
                      value="Other"
                      className={ContactCSS["contact-options"]}
                      selected={toLoadNumber === 10 ? true : false}
                    >
                      Other
                    </option>
                  </select>

                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formvalue.name}
                    pattern="([A-Z][a-z]{3,} )([A-Z][a-z]{3,} )?([A-Z][a-z]{3,})"
                    onChange={handlevalidation}
                    title="Please insert your full name using only letters"
                    required="true"
                    onKeyDown={handleEnter}
                  />

                  <div className={ContactCSS["contact-form-email-phone"]}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formvalue.email}
                      onChange={handlevalidation}
                      required="true"
                      onKeyDown={handleEnter}
                    />

                    <input
                      type="phone"
                      placeholder="Phone Number"
                      name="contact"
                      value={formvalue.contact}
                      onChange={handlevalidation}
                      pattern="[0-9]{10}"
                      title="Please insert valid phone number, i.e. Phone number must be in number format, include 10 digits"
                      required="true"
                      onKeyDown={handleEnter}
                    />
                  </div>

                  <textarea
                    placeholder="Message"
                    className={ContactCSS["contact-textarea"]}
                    name="message"
                    value={formvalue.message}
                    onChange={handlevalidation}
                    required="true"
                  />

                  <button
                    className={`${ContactCSS["contact-message-button"]} ${ContactCSS["color-clear-button"]}`}
                    onClick={clear}
                  >
                    Clear
                  </button>
                  <button className={ContactCSS["contact-message-button"]}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </React.Fragment>
  );
};
