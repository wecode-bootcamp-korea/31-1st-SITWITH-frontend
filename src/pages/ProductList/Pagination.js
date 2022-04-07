import React from 'react';
import './Pagination.scss';

const Pagination = ({ limit, updateOffset }) => {
  return (
    <nav className="pagination-nav">
      <button onClick={() => updateOffset(0)}>1</button>
      <button onClick={() => updateOffset(1)}>2</button>
    </nav>
  );
};

export default Pagination;
