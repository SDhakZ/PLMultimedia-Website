import React from "react";
import ErrorPageCSS from "../components/CSSmodules/errorPage.module.css";
import { Link } from "react-router-dom";

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
          <Link
            to={{ pathname: "/" }}
            className={ErrorPageCSS["Return-Home-Button"]}
          >
            Return Home
          </Link>
          <Link
            to={{ pathname: "/contact", state: { toLoadNumber: 9 } }}
            className={`${ErrorPageCSS["Report-Button"]} ${ErrorPageCSS["color-Report-Button"]}`}
          >
            Report Problem
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
