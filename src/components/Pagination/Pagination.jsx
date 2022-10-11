import PaginationCSS from "./pagination.module.css";
const Pagination = ({ currentPage, totalPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={PaginationCSS["pagination-pagination"]}>
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
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
      >
        previous
      </button>
      <button
        disabled={currentPage === totalPage}
        onClick={() => paginate(currentPage + 1)}
      >
        next
      </button>
      <span>{`${currentPage} of ${totalPage}`}</span>
    </nav>
  );
};

export default Pagination;
