import React from 'react';
import ProductCard from './ProductCard';
import './ProductListShow.scss';
import SearchBox from './SearchBox';

const ProductListShow = props => {
  return (
    <div>
      ProductListShow Test
      <SearchBox userSearch={props.userSearch} />
      {/* <div className="product-list-show-page">
        {props.monsters.map(monster => {
          return <ProductCard />;
        })}
      </div> */}
    </div>
  );
};

export default ProductListShow;
