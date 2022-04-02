import React from 'react';
import './Pagination.scss';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <nav className="pagination-nav">
      <button
        className="nav-prev-btn"
        onClick={() => setPage(page - 1)}
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
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        NEXT &gt;
      </button>
    </nav>
  );
};

export default Pagination;
