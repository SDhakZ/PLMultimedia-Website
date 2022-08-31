import React from "react";
import MainHeadingCSS from "./CSSmodules/MainHeadingCSS.module.css";
function MainHeading(props) {
  return (
    <>
      <h1 className={MainHeadingCSS["mainHeading"]}>{props.headingName}</h1>
    </>
  );
}
export default MainHeading;
