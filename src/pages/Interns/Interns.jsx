/*Component for intern page where all interns are showed*/
import React, { useState } from "react";
import { MainHeading } from "../../components/MainHeading/MainHeading";
import InternsCSS from "./interns.module.css";
import { InternCard } from "./InternCard";
import useFetch from "../../hooks/useFetch";
import { ErrorPage } from "../../components/ErrorPage/ErrorPage";
import { LoadingPage } from "../../components/LoadingPage/LoadingPage";
import { useSpring, animated, easings } from "react-spring";
import PaginationStrapi from "../../components/Pagination/PaginationStrapi";

//maps data of interns
export const Interns = () => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, easing: easings.easeInOutQuad },
  });
  //pagination settings//
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [currentPage, setCurrentPage] = useState(1);

  //sorting According to dropdown while fetching Strapi data
  const getInitialState = () => {
    const value = "All";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (dropdown) => {
    setValue(dropdown.target.value);
  };
  const host = process.env.REACT_APP_STRAPI_HOST;
  var path;
  if (value === "All") {
    path = `${host}/api/interns?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=9`;
  } else {
    path = `${host}/api/interns?populate=*&filters[field][$eq]=${value}&pagination[page]=1&pagination[pageSize]=9`;
  }

  const { loading, error, data } = useFetch(path);
  if (loading) return <LoadingPage />;
  if (error)
    return (
      <ErrorPage
        code="503"
        errorMessage="Server is temporarily unable to respond to your request"
      />
    );
  //returns intern cards with mapped data
  return (
    <animated.div style={style}>
      <div className={InternsCSS["interns-container"]}>
        <MainHeading headingName="Interns Through Us" />
        <div className={InternsCSS["interns-categories"]}>
          <label for="fields">Sort By:</label>

          <select
            className={InternsCSS["interns-fieldDropdown"]}
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
            const image = intern.attributes.img.data.attributes.url;
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
        <PaginationStrapi
          currentPage={currentPage}
          totalPage={data && data.meta.pagination.pageCount}
          paginate={paginate}
        />
      </div>
    </animated.div>
  );
};
