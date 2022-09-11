import React from "react";
import LoadingPageCSS from "../components/CSSmodules/loadingPage.module.css";

function LoadingPage() {
  return (
    <div class={LoadingPageCSS["LoadingPage-Container"]}>
      <div className={LoadingPageCSS["LoadingPage-text"]}>L</div>
      <span className={LoadingPageCSS["LoadingPage-loader"]} />
      <div className={LoadingPageCSS["LoadingPage-text"]}>ADING</div>
    </div>
  );
}

export default LoadingPage;
