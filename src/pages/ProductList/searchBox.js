import React from 'react';
import './searchBox.scss';

const SearchBox = props => {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onChange={props.userSearch}
    />
  );
};

export default SearchBox;
