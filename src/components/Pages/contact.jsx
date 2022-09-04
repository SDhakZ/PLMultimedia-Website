import React, { useRef, useState, useEffect } from "react";
import ContactCSS from "../CSSmodules/contact.module.css";
import emailjs from "@emailjs/browser";
import MainHeading from "../MainHeading";

function Contact() {
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
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!value.name) {
      errors.name = "Please Enter Name!!";
    } else if (!namePattern.test(value.name)) {
      errors.name =
        "Please Enter Your Full Name without Numbers or Special Characters.";
    }

    if (!value.email) {
      errors.email = "Please Enter Email!!";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "Please Enter a Valid Email.";
    }
    if (!value.contact) {
      errors.contact = "Please Enter Phone Number!!";
    } else if (!phonePattern.test(value.contact)) {
      errors.contact = "Please Enter a Valid Phone Number.";
    }
    if (!value.message) {
      errors.message = "Please Enter a Message.";
    } else {
      alert("Thank you. Your message has been sent.");
    }
    return errors;
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

      setTimeout(() => {
        setSubmit("");
        setFormvalue({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      }, 10);
    }
  }, [formerror, formvalue, issubmit]);

  return (
    <React.Fragment>
      <div className={ContactCSS["contact-Container"]}>
        <MainHeading headingName="Contact Us" />
        <div className={ContactCSS["contact-Column"]}>
          <div className={ContactCSS["contact-Column-left"]}>
            <h1 className={ContactCSS["contact-Get-in-touch"]}>Get in touch</h1>
            <p className={ContactCSS["contact-Paragraph"]}>
              Want to get in touch? We’d love to hear from you. We’re here to
              help and answer any questions you might have. We often personally
              meet with clients; Drop us a line, or give us a heads up if
              you'reinterested in visiting us.
            </p>
            <h2 className={ContactCSS["contact-find-Us-At"]}>
              You can also find us at
            </h2>
            <div className={ContactCSS["contact-socials"]}>
              <div className={ContactCSS["links"]}>
                <div className={ContactCSS["icons"]}>
                  <i
                    className={`${ContactCSS.envelope} fa-solid fa-envelope`}
                  />
                </div>
                <a
                  href="mailto:internships@plmultimediaservice.com"
                  target="_blank"
                  className={ContactCSS["text"]}
                >
                  plmultimediaservice@gmail.com
                </a>
              </div>
              <div className={ContactCSS["links"]}>
                <div className={ContactCSS["icons"]}>
                  <i
                    className={`${ContactCSS.location} fa-solid fa-location-dot`}
                  />
                </div>
                <a href="https://goo.gl/maps/fNcZiCUYHxBAE4nj6" target="_blank">
                  Bharatpur-20, Chitwan
                </a>
              </div>

              <div className={ContactCSS["links"]}>
                <div className={ContactCSS["icons"]}>
                  <i
                    className={`${ContactCSS.linkedin} fa-brands fa-linkedin-in`}
                  />
                </div>
                <a href="https://www.linkedin.com/feed/" target="_blank">
                  PL Multimedia Service
                </a>
              </div>

              <div className={ContactCSS["links"]}>
                <div className={ContactCSS["icons"]}>
                  <i className={`${ContactCSS.phone} fa-solid fa-phone`} />
                </div>
                <a href="tel:+9779860283950">9860283950</a>
              </div>

              <div className={ContactCSS["links"]}>
                <div className={ContactCSS["icons"]}>
                  <i
                    className={`${ContactCSS.instagram} fa-brands fa-instagram `}
                  />
                </div>
                <a href="https://www.instagram.com/instagram/" target="_blank">
                  PLMultimediaService
                </a>
              </div>

              <div className={ContactCSS["links"]}>
                <div className={ContactCSS["icons"]}>
                  <i
                    className={`${ContactCSS.facebook} fa-brands fa-facebook-f`}
                  />
                </div>
                <a
                  href="https://www.facebook.com/plmultimediaservice"
                  target="_blank"
                >
                  PL Multimedia Service
                </a>
              </div>

              <div className={ContactCSS["links"]}>
                <div className={ContactCSS["icons"]}>
                  <i className={`${ContactCSS.twitter} fa-brands fa-twitter`} />
                </div>
                <a href="https://twitter.com/" target="_blank">
                  PL Multimedia Service
                </a>
              </div>
            </div>
          </div>

          <div className={ContactCSS["contact-Column-right"]}>
            <div className={ContactCSS["contact-Content"]}>
              <form ref={formRef} onSubmit={handleSubmit}>
                <h2 className={ContactCSS["contact-SendMessage"]}>
                  Send message
                </h2>
                <div className={ContactCSS["contact-Line"]}></div>
                <select
                  className={ContactCSS["contact-Drop-down"]}
                  name="subject"
                >
                  <option
                    value="Advertisement"
                    className={ContactCSS["contact-Options"]}
                  >
                    Advertisement
                  </option>
                  <option
                    value="WebDevelopment"
                    className={ContactCSS["contact-WebDevelopment"]}
                  >
                    Web Development
                  </option>
                  <option
                    value="WebHosting"
                    className={ContactCSS["contact-Options"]}
                  >
                    Web Hosting
                  </option>
                  <option
                    value="MobileAppDevelopment"
                    className={ContactCSS["contact-Options"]}
                  >
                    Mobile App Development
                  </option>
                  <option
                    value="SEO Optimization"
                    className={ContactCSS["contact-Options"]}
                  >
                    SEO Optimization
                  </option>
                  <option
                    value="Digital Marketting"
                    className={ContactCSS["contact-Options"]}
                  >
                    Digital Marketting
                  </option>
                  <option
                    value="Media Production"
                    className={ContactCSS["contact-Options"]}
                  >
                    Media Production
                  </option>
                </select>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formvalue.name}
                    onChange={handlevalidation}
                    required="true"
                  />
                  <div className={ContactCSS["text-danger"]}>
                    {formerror.name}{" "}
                  </div>
                </div>
                <div className={ContactCSS["contact-Form-email-phone"]}>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formvalue.email}
                      onChange={handlevalidation}
                      required="true"
                    />
                    <span className={ContactCSS["text-danger"]}>
                      {formerror.email}{" "}
                    </span>
                  </div>
                  <div>
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      name="contact"
                      value={formvalue.contact}
                      onChange={handlevalidation}
                      required="true"
                    />
                    <div className={ContactCSS["text-danger"]}>
                      {formerror.contact}{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className={ContactCSS["contact-Textarea"]}
                    name="message"
                    value={formvalue.message}
                    onChange={handlevalidation}
                    required="true"
                  />
                  <span className={ContactCSS["text-danger"]}>
                    {formerror.message}{" "}
                  </span>
                </div>
                <button
                  className={`${ContactCSS["contact-Message-Button"]} ${ContactCSS["color-Clear-Button"]}`}
                >
                  Clear
                </button>
                <button className={ContactCSS["contact-Message-Button"]}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Contact;
