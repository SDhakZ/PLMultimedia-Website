import PaginationCSS from "./pagination.module.css";
const Pagination = ({ currentPage, totalPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className={PaginationCSS["pagination-container"]}>
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
          className={PaginationCSS["pagination-button"]}
        >
          &lt;
        </button>
        <ul className={PaginationCSS["pagination-list"]}>
          {pageNumbers.map((number) => (
            <li key={number} className={PaginationCSS["pagination-page-item"]}>
              <a
                onClick={() => paginate(number)}
                href="# "
                className={
                  number == currentPage
                    ? `${PaginationCSS["pagination-page-activeLink"]}`
                    : `${PaginationCSS["pagination-page-link"]}`
                }
              >
                {number}
              </a>
            </li>
          ))}
        </ul>

        <button
          disabled={currentPage === totalPage}
          onClick={() => paginate(currentPage + 1)}
          className={PaginationCSS["pagination-button"]}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Pagination;
