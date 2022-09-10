import React from "react";
import ErrorPageCSS from "../components/CSSmodules/errorPage.module.css";

function ErrorPage(props) {
  return (
    <div className={ErrorPageCSS["ErrorPage-Container"]}>
      <div className={ErrorPageCSS["ErrorPage-box"]}>
        <h1 className={ErrorPageCSS["ErrorPage-503"]}>
          {props.code} <br />
          error!
        </h1>
        <p className={ErrorPageCSS["ErrorPage-message"]}>
          {props.errorMessage}
          <p className={ErrorPageCSS["ErrorPage-report"]}>
            If the problem persists, you can report a problem.
          </p>
        </p>
        <div className={ErrorPageCSS["ErrorPage-buttons"]}>
          <button className={ErrorPageCSS["Return-Home-Button"]}>
            Return Home
          </button>
          <button
            className={`${ErrorPageCSS["Report-Button"]} ${ErrorPageCSS["color-Report-Button"]}`}
          >
            Report Problem
          </button>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
