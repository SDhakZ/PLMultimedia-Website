import React from "react";
import MainHeading from "../MainHeading";
import InternsCSS from "../CSSmodules/Interns.module.css";

function Interns() {
  return (
    <React.Fragment>
      <div className={InternsCSS["interns-container"]}>
        <MainHeading headingName="Interns Through Us" />
        <div className={InternsCSS["interns-flexbox"]}>
          <div className={InternsCSS["intern-card"]}>
            <div className={InternsCSS["intern-lft"]}>
              <figure className={InternsCSS["interns-picContainer"]}>
                <img
                  className={InternsCSS["interns-picture"]}
                  src={require("../../images/stock.jpg").default}
                ></img>
              </figure>
              <div className={InternsCSS["interns-detailsContainer"]}>
                <h2 className={InternsCSS["intern-name"]}>Anna Lewndowski</h2>
                <div className={InternsCSS["interns-detail"]}>
                  <p>Company: PL Multimedia</p>
                  <p>Field: Web Development</p>
                  <p>Position: Front End</p>
                </div>
              </div>
            </div>
            <h3 className={InternsCSS["intern-date"]}>Year: 2022</h3>
          </div>
          <div className={InternsCSS["intern-card"]}>
            <div className={InternsCSS["intern-lft"]}>
              <figure className={InternsCSS["interns-picContainer"]}>
                <img
                  className={InternsCSS["interns-picture"]}
                  src={require("../../images/stock.jpg").default}
                ></img>
              </figure>
              <div className={InternsCSS["interns-detailsContainer"]}>
                <h2 className={InternsCSS["intern-name"]}>Anna Lewndowski</h2>
                <div className={InternsCSS["interns-detail"]}>
                  <p>Company: PL Multimedia</p>
                  <p>Field: Web Development</p>
                  <p>Position: Front End</p>
                </div>
              </div>
            </div>
            <h3 className={InternsCSS["intern-date"]}>Year: 2022</h3>
          </div>
          <div className={InternsCSS["intern-card"]}>
            <div className={InternsCSS["intern-lft"]}>
              <figure className={InternsCSS["interns-picContainer"]}>
                <img
                  className={InternsCSS["interns-picture"]}
                  src={require("../../images/stock.jpg").default}
                ></img>
              </figure>
              <div className={InternsCSS["interns-detailsContainer"]}>
                <h2 className={InternsCSS["intern-name"]}>Anna Lewndowski</h2>
                <div className={InternsCSS["interns-detail"]}>
                  <p>Company: PL Multimedia</p>
                  <p>Field: Web Development</p>
                  <p>Position: Front End</p>
                </div>
              </div>
            </div>
            <h3 className={InternsCSS["intern-date"]}>Year: 2022</h3>
          </div>
          <div className={InternsCSS["intern-card"]}>
            <div className={InternsCSS["intern-lft"]}>
              <figure className={InternsCSS["interns-picContainer"]}>
                <img
                  className={InternsCSS["interns-picture"]}
                  src={require("../../images/stock.jpg").default}
                ></img>
              </figure>
              <div className={InternsCSS["interns-detailsContainer"]}>
                <h2 className={InternsCSS["intern-name"]}>Anna Lewndowski</h2>
                <div className={InternsCSS["interns-detail"]}>
                  <p>Company: PL Multimedia</p>
                  <p>Field: Web Development</p>
                  <p>Position: Front End</p>
                </div>
              </div>
            </div>
            <h3 className={InternsCSS["intern-date"]}>Year: 2022</h3>
          </div>
          <div className={InternsCSS["intern-card"]}>
            <div className={InternsCSS["intern-lft"]}>
              <figure className={InternsCSS["interns-picContainer"]}>
                <img
                  className={InternsCSS["interns-picture"]}
                  src={require("../../images/stock.jpg").default}
                ></img>
              </figure>
              <div className={InternsCSS["interns-detailsContainer"]}>
                <h2 className={InternsCSS["intern-name"]}>Anna Lewndowski</h2>
                <div className={InternsCSS["interns-detail"]}>
                  <p>Company: PL Multimedia</p>
                  <p>Field: Web Development</p>
                  <p>Position: Front End</p>
                </div>
              </div>
            </div>
            <h3 className={InternsCSS["intern-date"]}>Year: 2022</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Interns;
