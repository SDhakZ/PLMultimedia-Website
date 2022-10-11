import InternsCSS from "./interns.module.css";
const Pagination = ({ currentPage, totalPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={InternsCSS["interns-pagination"]}>
        {pageNumbers.map((number) => (
          <li key={number} className={InternsCSS["interns-page-item"]}>
            <a
              onClick={() => paginate(number)}
              href="# "
              className={InternsCSS["interns-page-link"]}
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
