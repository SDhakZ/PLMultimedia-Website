import React from "react";
import MainHeading from "../MainHeading";
import InternsCSS from "../CSSmodules/interns.module.css";
import InternCard from "../InternCard";
import internsData from "../../Datas/internsData";

function Interns() {
  return (
    <React.Fragment>
      <div className={InternsCSS["interns-container"]}>
        <MainHeading headingName="Interns Through Us" />
        <div className={InternsCSS["interns-flexbox"]}>
          {internsData.map((intern) => {
            return (
              <InternCard
                key={intern.id}
                img={intern.img}
                name={intern.name}
                company={intern.company}
                field={intern.field}
                position={intern.position}
                year={intern.year}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Interns;
