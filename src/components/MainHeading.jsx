import React from "react";
import MainHeadingCSS from "./CSSmodules/MainHeadingCSS.module.css";
import { useSpring, animated, easings } from "react-spring";

function MainHeading(props) {
  const style = useSpring({
    from: { opacity: 0, marginLeft: -100 },
    to: { opacity: 1, marginLeft: 0 },
    config: { duration: 1000, easing: easings.easeOutBack },
  });

  return (
    <animated.div style={style}>
      <h1 className={MainHeadingCSS["mainHeading"]}>{props.headingName}</h1>
    </animated.div>
  );
}
export default MainHeading;
