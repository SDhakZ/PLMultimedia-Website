import React, { useState } from "react";
import MainHeading from "../MainHeading";
import InternsCSS from "../CSSmodules/interns.module.css";
import InternCard from "../InternCard";
import internsData from "../../Datas/internsData";
import useFetch from "../../hooks/useFetch";

// http://localhost:1338/api/interns?populate=*&filters[field][$eq]=App Development
function Interns() {
  //Sorting According to dropdown
  const getInitialState = () => {
    const value = "All";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (dropdown) => {
    setValue(dropdown.target.value);
  };

  var path;
  if (value === "All") {
    path = "http://localhost:1338/api/interns?populate=*";
  } else {
    path =
      "http://localhost:1338/api/interns?populate=*&filters[field][$eq]=" +
      value;
  }

  const { loading, error, data } = useFetch(path);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <React.Fragment>
      <div className={InternsCSS["interns-container"]}>
        <MainHeading headingName="Interns Through Us" />
        <div className={InternsCSS["intern-categories"]}>
          <label for="fields" classname={InternsCSS["intern-label"]}>
            Sort By:
          </label>

          <select
            className={InternsCSS["intern-fieldDropdown"]}
            name="fields"
            id="field-names"
            value={value}
            onChange={handleChange}
          >
            <option value="All">Field: All</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Multimedia">Multimedia</option>
            <option value="Networking">Networking</option>
            <option value="Business">Business</option>
          </select>
        </div>
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
                email={intern.attributes.email}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Interns;
