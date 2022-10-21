/* this pagination component can be used for strapi mapped data */
import { PreviousButton, NextButton } from "./button";
import PaginationCSS from "./pagination.module.css";

const Pagination = ({ currentPage, totalPage, paginate }) => {
  const pageNumbers = [];
  //creates number of pagination
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  //changes page when next or previous button is clicked and scrolls to top
  function changePage(type) {
    window.scrollTo({ top: 0 });
    if (type === "next") {
      paginate(currentPage + 1);
    } else if (type === "prev") {
      paginate(currentPage - 1);
    }
  }
  //returns pagination structure design
  return (
    <>
      <div className={PaginationCSS["pagination-container"]}>
        <PreviousButton currentPage={currentPage} changePage={changePage} />
        <ul className={PaginationCSS["pagination-list"]}>
          {pageNumbers.map((number) => (
            <li key={number} className={PaginationCSS["pagination-page-item"]}>
              <a
                onClick={() => paginate(number)}
                href="# "
                className={
                  number === currentPage
                    ? `${PaginationCSS["pagination-page-activeLink"]}`
                    : `${PaginationCSS["pagination-page-link"]}`
                }
              >
                {number}
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

export default Pagination;
