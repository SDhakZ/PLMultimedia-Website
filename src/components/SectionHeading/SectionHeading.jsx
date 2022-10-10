import React from "react";
import SectionHeadingCSS from "./sectionHeadingCSS.module.css";
import { useSpring, animated, easings } from "react-spring";

export const SectionHeading = (props) => {
  const style = useSpring({
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 800, easing: easings.easeOutBack },
  });

  return (
    <animated.div style={style}>
      <h1 className={SectionHeadingCSS["sectionHeading"]}>
        {props.sectionName}
      </h1>
    </animated.div>
  );
};
