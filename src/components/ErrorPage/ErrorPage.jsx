import React from "react";
import ErrorPageCSS from "./errorPage.module.css";
import { Link } from "react-router-dom";

export const ErrorPage = (props) => {
  return (
    <div className={ErrorPageCSS["errorPage"]}>
      <div className={ErrorPageCSS["errorPage-container"]}>
        <h1 className={ErrorPageCSS["errorPage-errorCode"]}>
          {props.code} <br />
          error!
        </h1>
        <p className={ErrorPageCSS["errorPage-message"]}>
          {props.errorMessage}
          <p className={ErrorPageCSS["errorPage-report"]}>
            If the problem persists, you can report a problem.
          </p>
        </p>
        <div className={ErrorPageCSS["errorPage-buttons"]}>
          <Link
            to={{ pathname: "/" }}
            className={ErrorPageCSS["errorPage-returnHomeButton"]}
          >
            Return Home
          </Link>
          <Link
            to={{ pathname: "/contact", state: { toLoadNumber: 9 } }}
            className={`${ErrorPageCSS["errorPage-reportButton"]} ${ErrorPageCSS["errorPage-color-reportButton"]}`}
          >
            Report Problem
          </Link>
        </div>
      </div>
    </div>
  );
};
