import React from "react";
import { useSpring, animated, easings } from "react-spring";
import HomeAboutUsCSS from "./HomeCSSmodules/homeAboutUs.module.css";
function HomeAboutUs() {
  const stylesection = useSpring({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 700, easing: easings.easeOutBack },
  });

  //animation for who are we
  const styleleft = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 700 },
    delay: 700,
  });
  const styleright = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 700 },
    delay: 1500,
  });
  return (
    <animated.div style={stylesection}>
      <div className={HomeAboutUsCSS["Home-aboutUs-WhoAreWe"]}>
        <div className={HomeAboutUsCSS["Home-aboutUs-images"]}>
          <animated.div style={styleleft}>
            <img
              className={HomeAboutUsCSS["leftgirl"]}
              src={require("../../images/leftgirl.png")}
            />
          </animated.div>
          <animated.div style={styleright}>
            <img
              className={HomeAboutUsCSS["rightgroup"]}
              src={require("../../images/rightgroup.png")}
            />
          </animated.div>
        </div>
        <div className={HomeAboutUsCSS["Home-aboutUs-Text"]}>
          <h2 className={HomeAboutUsCSS["Home-aboutUs-Title"]}>Who Are We?</h2>
          <p className={HomeAboutUsCSS["Home-aboutUs-Paragraph"]}>
            We are a dedicated team of IT and multimedia professionals based in
            Nepal delivering web-related services and customized media. Our
            company delivers custom fit products with ease of use and maximum
            return of value for both consumers and businesses in mind. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <p className={HomeAboutUsCSS["Home-aboutUs-Paragraph"]}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </animated.div>
  );
}
export default HomeAboutUs;
