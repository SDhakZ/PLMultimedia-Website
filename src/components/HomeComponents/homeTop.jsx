import React from "react";
import HomeTopCSS from "./HomeCSSmodules/homeTop.module.css";
function homeTop() {
  return (
    <div className={HomeTopCSS["Home-top"]}>
      <figure className={HomeTopCSS["Home-img-collection"]}>
        <img
          className={HomeTopCSS["leftbg"]}
          src={require("../../images/leftbg.png")}
        />
        <img
          className={HomeTopCSS["rightbg"]}
          src={require("../../images/rightbg.png")}
        />
        <img
          className={HomeTopCSS["floatingman"]}
          src={require("../../images/floatingman.png")}
        />
        <img
          className={HomeTopCSS["planet"]}
          src={require("../../images/planet.png")}
        />
        <img
          className={HomeTopCSS["rocket"]}
          src={require("../../images/rocket.png")}
        />
      </figure>
    </div>
  );
}

export default homeTop;
