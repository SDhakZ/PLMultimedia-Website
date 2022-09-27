import { React } from "react";
import HomeTopCSS from "./homeTop.module.css";
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
              "Solve Your Problems",
              2500,
              "Accelerate Your Growth",
              2000, // Waits 2s
              "Create Your Dreams",
              2000, // Waits 2s
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
            src={require("../../../../assets/Images/Home-Image/leftBg.png")}
            alt="background"
          />
          <img
            className={HomeTopCSS["rightbg"]}
            src={require("../../../../assets/Images/Home-Image/rightBg.png")}
            alt="background"
          />
          <animated.div style={floatingManEnter}>
            <img
              className={HomeTopCSS["floatingman"]}
              src={require("../../../../assets/Images/Home-Image/floatingMan.png")}
              alt="floating man"
            />
          </animated.div>
          <animated.div style={planetEnter}>
            <img
              className={HomeTopCSS["planet"]}
              src={require("../../../../assets/Images/Home-Image/planet.png")}
              alt="planet"
            />
          </animated.div>
          <animated.div style={rocketEnter}>
            <img
              className={HomeTopCSS["rocket"]}
              src={require("../../../../assets/Images/Home-Image/rocket.png")}
              alt="rocket"
            />
          </animated.div>
        </figure>
      </div>
    </div>
  );
}

export default HomeTop;
