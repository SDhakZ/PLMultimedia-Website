import React, { useEffect } from "react";
import AboutCSS from "./aboutUs.module.css";
import MainHeading from "../../components/MainHeading/MainHeading";
import { useSpring, animated, easings } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
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
      <div className={AboutCSS["aboutUs-Container"]}>
        <MainHeading headingName="About Us" />
        <div className={AboutCSS["aboutUs-WhoAreWe"]}>
          <figure>
            <img
              data-aos="fade-in"
              src={require("../../assets/Images/AboutUs-Image/meeting.png")}
              className={AboutCSS["aboutUs-WhoAreWeImg"]}
              alt="meeting"
            />
          </figure>
          <div data-aos="flip-down" className={AboutCSS["aboutUs-Text"]}>
            <h2 className={AboutCSS["aboutUs-Title"]}>Who Are We?</h2>
            <p className={AboutCSS["aboutUs-Paragraph"]}>
              We are a dedicated team of IT and multimedia professionals based
              in Nepal delivering web-related services and customized media. Our
              company delivers custom fit products with ease of use and maximum
              return of value for both consumers and businesses in mind. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <p className={AboutCSS["aboutUs-Paragraph"]}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>

        <div className={AboutCSS["aboutUs-Aim"]}>
          <div
            data-aos="flip-down"
            data-aos-offset="200"
            className={AboutCSS["aboutUs-Text"]}
          >
            <h2 className={AboutCSS["aboutUs-Title"]}>What we aim for?</h2>
            <p className={AboutCSS["aboutUs-Paragraph"]}>
              lets ask what we should write in this section because its their
              business. lLorem Ipsum is simply dummy text of the printing and
              typesetting industry. when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <p className={AboutCSS["aboutUs-Paragraph"]}>
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <figure>
            <img
              data-aos="fade-in"
              data-aos-offset="300"
              src={require("../../assets/Images/AboutUs-Image/writing.png")}
              className={AboutCSS["aboutUs-AimImg"]}
              alt="writing"
            />
          </figure>
        </div>
      </div>
    </animated.div>
  );
}

export default About;