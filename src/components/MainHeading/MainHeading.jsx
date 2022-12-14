/* component for the design of the main headings */
import React from "react";
import MainHeadingCSS from "./mainHeadingCSS.module.css";
import { useSpring, animated, easings } from "react-spring";

// animation used in the main heading
export const MainHeading = (props) => {
  const style = useSpring({
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 800, easing: easings.easeOutBack },
  });

  //structure
  return (
    <animated.div style={style}>
      <h1 className={MainHeadingCSS["mainHeading"]}>{props.headingName}</h1>
    </animated.div>
  );
};
