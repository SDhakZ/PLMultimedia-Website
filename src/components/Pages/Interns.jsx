import React from "react";
import MainHeading from "../MainHeading";
import InternsCSS from "../CSSmodules/interns.module.css";
import InternCard from "../InternCard";
import internsData from "../../Datas/internsData";
import useFetch from "../../hooks/useFetch";

function Interns() {
  const { loading, error, data } = useFetch(
    "http://localhost:1338/api/interns?populate=*"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <React.Fragment>
      <div className={InternsCSS["interns-container"]}>
        <MainHeading headingName="Interns Through Us" />
        <div className={InternsCSS["interns-flexbox"]}>
          {data.data.map((intern) => {
            const url = intern.attributes.img.data.attributes.url;
            const image = "http://localhost:1338" + url;
            return (
              <InternCard
                key={intern.attributes.id}
                img={image}
                name={intern.attributes.name}
                company={intern.attributes.company}
                field={intern.attributes.field}
                position={intern.attributes.position}
                year={intern.attributes.date}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Interns;
