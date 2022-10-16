import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PaginationCSS from "./pagination.module.css";

const PaginationRaw = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfPages] = useState(Math.ceil(total / showPerPage));

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    //code
    window.scrollTo({ top: 0 });
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
      <button
        disabled={counter === 1}
        className={PaginationCSS["pagination-button"]}
        onClick={() => onButtonClick("prev")}
      >
        &lt;
      </button>
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

export default PaginationRaw;
