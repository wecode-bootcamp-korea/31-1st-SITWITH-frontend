import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/productListData/productListMockData.json')
      .then(response => response.json())
      .then(chairData => setProductData(chairData));
  }, []);

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <div className="product-list-title">
          {/* 의자 이름 표시  */}
          <h1>T50</h1>
        </div>

        <div className="separate-border">
          <div></div>
        </div>

        <div className="product-list-series-feature">
          <h3 className="series-feature-title">SERIES FEATURE</h3>
          <div className="series-feature-image">
            <img
              alt="T50 chair image"
              src="/images/productList/product-list-chair-image.jpeg"
            ></img>
          </div>
        </div>
        <div className="product-list">
          <div className="product-list-btns">
            <button>인기순</button>
            <button>신상품순</button>
            <button>높은가격순</button>
            <button>낮은가격순</button>
          </div>

          <div className="separate-border">
            <div></div>
          </div>

          <h3 className="series-list-title">Product List</h3>

          <div className="product-list-show">
            <ProductCard productData={productData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
