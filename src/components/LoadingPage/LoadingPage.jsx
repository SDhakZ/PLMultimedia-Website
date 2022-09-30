import React from "react";
import LoadingPageCSS from "./loadingPage.module.css";

function LoadingPage() {
  return (
    <div className={LoadingPageCSS["LoadingPage-Container"]}>
      <div className={LoadingPageCSS["LoadingPage-text"]}>L</div>
      <span className={LoadingPageCSS["LoadingPage-loader"]} />
      <div className={LoadingPageCSS["LoadingPage-text"]}>ADING</div>
    </div>
  );
}

export default LoadingPage;
