import React from "react";
import InternsCSS from "../components/CSSmodules/interns.module.css";

function InternCard(props) {
  var mail = "mailto:" + props.email;
  return (
    <div className={InternsCSS["intern-card"]} href={mail}>
      <div className={InternsCSS["intern-lft"]}>
        <figure className={InternsCSS["interns-picContainer"]}>
          <img
            className={InternsCSS["interns-picture"]}
            src={props.img}
            alt="../"
          ></img>
        </figure>
        <div className={InternsCSS["interns-detailsContainer"]}>
          <h2 className={InternsCSS["intern-name"]}>{props.name}</h2>
          <div className={InternsCSS["interns-detail"]}>
            <p>Company: {props.company}</p>
            <p>Field: {props.field}</p>
            <p>Position: {props.position}</p>
          </div>
        </div>
      </div>
      <div className={InternsCSS["interns-rt"]}>
        <a className={InternsCSS["interns-mail"]} href={mail}>
          <i className={`${InternsCSS.mail} fa-solid fa-envelope`} />
        </a>
        <h3 className={InternsCSS["intern-date"]}>Date: {props.year}</h3>
      </div>
    </div>
  );
}

export default InternCard;
