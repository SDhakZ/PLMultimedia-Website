import { React } from "react";
import HomeTopCSS from "./HomeCSSmodules/homeTop.module.css";
import { TypeAnimation } from "react-type-animation";
import { useSpring, animated, easings } from "react-spring";
function HomeTop() {
  const rocketEnter = useSpring({
    from: { opacity: 0.3, x: -550, y: 600 },
    to: { opacity: 1, x: -20, y: 80 },
    config: { duration: 2000, easing: easings.easeInOutQuart },
  });
  const planetEnter = useSpring({
    from: { opacity: 0.3, y: -200 },
    to: { opacity: 1, y: 40 },
    config: { duration: 2000, easing: easings.easeInOutCubic },
  });
  const floatingManEnter = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000, easing: easings.easeInOutBack },
  });
  return (
    <div className={HomeTopCSS["Home-top"]}>
      <div className={HomeTopCSS["Home-main"]}>
        <div className={HomeTopCSS["Home-text"]}>
          Let Us
          <TypeAnimation
            sequence={[
              "I like to move it move it",
              2500,
              "Accelerate Your Growth",
              2000, // Waits 2s
              "Create Your Dreams",
              2000, // Waits 2s
              "I like to move it move it",
              2500,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            speed={15}
          />
        </div>
        <figure className={HomeTopCSS["Home-img-collection"]}>
          <img
            className={HomeTopCSS["leftbg"]}
            src={require("../../images/leftbg.png")}
          />
          <img
            className={HomeTopCSS["rightbg"]}
            src={require("../../images/rightbg.png")}
          />
          <animated.div style={floatingManEnter}>
            <img
              className={HomeTopCSS["floatingman"]}
              src={require("../../images/floatingman.png")}
            />
          </animated.div>
          <animated.div style={planetEnter}>
            <img
              className={HomeTopCSS["planet"]}
              src={require("../../images/planet.png")}
            />
          </animated.div>
          <animated.div style={rocketEnter}>
            <img
              className={HomeTopCSS["rocket"]}
              src={require("../../images/rocket.png")}
            />
          </animated.div>
        </figure>
      </div>
    </div>
  );
}

export default HomeTop;
