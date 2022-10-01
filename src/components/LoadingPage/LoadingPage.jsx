import React from "react";
import LoadingPageCSS from "./loadingPage.module.css";

export const LoadingPage = () => {
  return (
    <div className={LoadingPageCSS["loadingPage"]}>
      <div className={LoadingPageCSS["loadingPage-text"]}>L</div>
      <span className={LoadingPageCSS["loadingPage-loader"]} />
      <div className={LoadingPageCSS["loadingPage-text"]}>ADING</div>
    </div>
  );
};
