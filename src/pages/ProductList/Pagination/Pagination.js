import React from 'react';
import './Pagination.scss';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  localStorage.setItem('pageNum', page);

  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(numPages);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPrevPage = () => {
    setPage(page - 1);
  };

  return (
    <nav className="pagination-nav">
      <button
        className="nav-first-btn"
        onClick={goToFirstPage}
        disabled={page === 1}
      >
        FIRST
      </button>
      <button
        className="nav-prev-btn"
        onClick={goToPrevPage}
        disabled={page === 1}
      >
        &lt; PREV
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className="nav-page-btn"
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </button>
        ))}

      <button
        className="nav-next-btn"
        onClick={goToNextPage}
        disabled={page === numPages}
      >
        NEXT &gt;
      </button>
      <button
        className="nav-last-btn"
        onClick={goToLastPage}
        disabled={page === numPages}
      >
        LAST
      </button>
    </nav>
  );
};

export default Pagination;
