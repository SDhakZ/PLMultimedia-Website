/* page change button component */
import React from "react";
import PaginationCSS from "./pagination.module.css";

// previous button for the pagination components
export const PreviousButton = ({ currentPage, changePage }) => {
  return (
    <>
      <button
        disabled={currentPage === 1}
        onClick={() => changePage("prev")}
        className={PaginationCSS["pagination-button"]}
      >
        &lt;
      </button>
    </>
  );
};

// next button for the pagination components
export const NextButton = ({ currentPage, changePage, totalPage }) => {
  return (
    <>
      <button
        disabled={currentPage === totalPage}
        onClick={() => changePage("next")}
        className={PaginationCSS["pagination-button"]}
      >
        &gt;
      </button>
    </>
  );
};
