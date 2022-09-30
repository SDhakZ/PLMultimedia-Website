import React from "react";
import InternsCSS from "./interns.module.css";

export const InternCard = (props) => {
  var mail = "mailto:" + props.email;
  return (
    <div className={InternsCSS["interns-card"]}>
      <div className={InternsCSS["interns-left"]}>
        <figure className={InternsCSS["interns-picContainer"]}>
          <img
            className={InternsCSS["interns-picture"]}
            src={props.img}
            alt="intern"
          ></img>
        </figure>
        <div className={InternsCSS["interns-detailsContainer"]}>
          <h2 className={InternsCSS["interns-name"]}>{props.name}</h2>
          <div className={InternsCSS["interns-detail"]}>
            <p>Company: {props.company}</p>
            <p>Field: {props.field}</p>
            <p>Position: {props.position}</p>
          </div>
        </div>
      </div>
      <div className={InternsCSS["interns-right"]}>
        <a className={InternsCSS["interns-mail"]} href={mail}>
          <i className={`${InternsCSS.mail} fa-solid fa-envelope`} />
        </a>
        <h3 className={InternsCSS["interns-date"]}>Date: {props.year}</h3>
      </div>
    </div>
  );
};
