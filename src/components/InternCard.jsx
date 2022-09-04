import React from "react";
import InternsCSS from "../components/CSSmodules/Interns.module.css";
function InternCard(props) {
  return (
    <>
      <div className={InternsCSS["intern-card"]}>
        <div className={InternsCSS["intern-lft"]}>
          <figure className={InternsCSS["interns-picContainer"]}>
            <img
              className={InternsCSS["interns-picture"]}
              src={props.img}
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
        <h3 className={InternsCSS["intern-date"]}>Year: {props.year}</h3>
      </div>
    </>
  );
}

export default InternCard;
