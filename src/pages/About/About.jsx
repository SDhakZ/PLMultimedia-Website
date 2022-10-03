import React, { useEffect } from "react";
import AboutCSS from "./aboutUs.module.css";
import { MainHeading } from "../../components/MainHeading/MainHeading";
import { useSpring, animated, easings } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    Aos.init({
      offset: "50",
      Delay: "200",
      duration: "1000",
      easing: "ease-in-out",
      anchorPlacement: "top",
      once: true,
    });
  }, []);
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, easing: easings.easeInOutQuad },
  });
  return (
    <animated.div style={style}>
      <div className={AboutCSS["aboutUs-container"]}>
        <MainHeading headingName="About Us" />
        <div className={AboutCSS["aboutUs-section1"]}>
          <figure>
            <img
              data-aos="fade-in"
              src={require("../../assets/Images/AboutUs-Image/meeting.png")}
              className={AboutCSS["aboutUs-section1-img"]}
              alt="people in meeting"
            />
          </figure>
          <div data-aos="flip-down" className={AboutCSS["aboutUs-text"]}>
            <h2 className={AboutCSS["aboutUs-title"]}>Who Are We?</h2>
            <p className={AboutCSS["aboutUs-paragraph"]}>
              We are a dedicated team of IT and multimedia professionals based
              in Nepal delivering web-related services and customized media. Our
              company delivers custom fit products with ease of use and maximum
              return of value for both consumers and businesses in mind.
              <br />
              We communicate with our clients for their best suitable needs. We
              also make sure that they get what they visioned for their company.
              We will also make sure there is proper troubleshooting methods for
              any problems that may arrise in the present changing world.
            </p>
          </div>
        </div>

        <div className={AboutCSS["aboutUs-section2"]}>
          <div
            data-aos="flip-down"
            data-aos-offset="200"
            className={AboutCSS["aboutUs-text"]}
          >
            <h2 className={AboutCSS["aboutUs-title"]}>What we aim for?</h2>
            <p className={AboutCSS["aboutUs-paragraph"]}>
              We aim to deliver complete and functional product for our clients
              that has the latest trends and technologies involved. Our team
              will ensure that our client is well satisfied from what we deliver
              to them.
              <br />
              We vision ourself to be a well rounded company that is able to
              deliver quality product following the latest technological trends
              to ensure that our client will have great business. We will solve
              any problems and will also adapt to the changing world
              accordingly.
            </p>
          </div>
          <figure>
            <img
              data-aos="fade-in"
              data-aos-offset="300"
              src={require("../../assets/Images/AboutUs-Image/writing.png")}
              className={AboutCSS["aboutUs-section2-img"]}
              alt="writing"
            />
          </figure>
        </div>
      </div>
    </animated.div>
  );
};
