import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PaginationCSS from "./pagination.module.css";

const PortfolioPagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfPages, SetNumberOfPages] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    //code
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfPages === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className={PaginationCSS["pagination-container"]}>
      {/* <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" 
            onClick={() => onButtonClick('prev')}>
              &lt;
            </a></li>
          {new Array(numberOfPages).fill("ss").map((element, index) =>(
            <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
              <a class="page-link" href="#" onClick={() => setCounter(index + 1)}>
              {index + 1}
              </a>
            </li>
            ))}
          <li class="page-item">
            <a class="page-link" href="#"
            onClick={() => onButtonClick('next')}>
              &gt;
            </a></li>
        </ul> */}
      <button
        disabled={counter === 1}
        className={PaginationCSS["pagination-button"]}
        onClick={() => onButtonClick("prev")}
      >
        &lt;
      </button>
      {/* element = 1 2 3 4 5  && index = 0*/}
      <ul className={PaginationCSS["pagination-list"]}>
        {new Array(numberOfPages).fill("").map((element, index) => (
          <li key={index + 1} className={PaginationCSS["pagination-page-item"]}>
            <a
              onClick={() => setCounter(index + 1)}
              href="# "
              className={
                index + 1 == counter
                  ? `${PaginationCSS["pagination-page-activeLink"]}`
                  : `${PaginationCSS["pagination-page-link"]}`
              }
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
      <button
        disabled={counter === numberOfPages}
        className={PaginationCSS["pagination-button"]}
        onClick={() => onButtonClick("next")}
      >
        &gt;
      </button>
    </div>
  );
};

export default PortfolioPagination;
