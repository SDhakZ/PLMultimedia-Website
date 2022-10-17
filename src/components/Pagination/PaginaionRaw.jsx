import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PaginationCSS from "./pagination.module.css";
import { PreviousButton, NextButton } from "./button";

const PaginationRaw = ({ showPerPage, onPaginationChange, total }) => {
  const [currentPage, setCounter] = useState(1);
  const [totalPage] = useState(Math.ceil(total / showPerPage));

  useEffect(() => {
    const value = showPerPage * currentPage;
    onPaginationChange(value - showPerPage, value);
  }, [currentPage, onPaginationChange, showPerPage]);

  const changePage = (type) => {
    //code
    window.scrollTo({ top: 0 });
    if (type === "prev") {
      setCounter(currentPage - 1);
    } else if (type === "next") {
      setCounter(currentPage + 1);
    }
  };
  return (
    <>
      <div className={PaginationCSS["pagination-container"]}>
        <PreviousButton currentPage={currentPage} changePage={changePage} />
        <ul className={PaginationCSS["pagination-list"]}>
          {new Array(totalPage).fill("").map((element, index) => (
            <li
              key={index + 1}
              className={PaginationCSS["pagination-page-item"]}
            >
              <a
                onClick={() => setCounter(index + 1)}
                href="# "
                className={
                  index + 1 === currentPage
                    ? `${PaginationCSS["pagination-page-activeLink"]}`
                    : `${PaginationCSS["pagination-page-link"]}`
                }
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
        <NextButton
          currentPage={currentPage}
          changePage={changePage}
          totalPage={totalPage}
        ></NextButton>
      </div>
    </>
  );
};

export default PaginationRaw;
