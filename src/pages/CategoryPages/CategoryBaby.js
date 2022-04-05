import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import './ProductList.scss';

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(
    localStorage.getItem('pageNum') !== null
      ? JSON.parse(localStorage.getItem('pageNum'))
      : 1
  );
  const offset = (page - 1) * PAGINATION_LIMIT;

  // useEffect(() => {
  //   fetch('http://10.58.3.140:8000/products')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(chairData => {
  //       setProductData(chairData.result);
  //     });
  // }, []);

  // console.log('productList 부분' + productData);

  //[comment]Down is Mock Data Fetch
  // useEffect(() => {
  //   fetch('/data/productListData/productData.json')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(chairData => {
  //       setProductData(chairData.result);
  //     });
  // }, []);

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <div className="product-list-title-wrap">
          <h1 className="product-list-title">T50</h1>
        </div>

        <div className="separate-border">
          <div />
        </div>

        <div className="product-list-series-feature">
          <h3 className="series-feature-title">SERIES FEATURE</h3>
          <div className="series-feature-image-wrap">
            <img
              className="series-feature-image"
              alt="T50 chair"
              src="/images/productList/product-list-chair-image.jpeg"
            />
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
            <div />
          </div>
          <h3 className="series-list-title">Product List</h3>
          <div className="product-list-show">
            <ul className="product-list-wrap">
              {productData[0] ? (
                productData
                  .slice(offset, offset + PAGINATION_LIMIT)
                  .map(productData => (
                    <ProductCard
                      key={productData.primary_key}
                      productData={productData}
                    />
                  ))
              ) : (
                <div className="product-list-loading-container">
                  <div className="product-loading-circle" />
                  <h1 className="product-list-loading">
                    리스트를 불러오는 중입니다...
                  </h1>
                </div>
              )}
            </ul>
            <Pagination
              total={productData.length}
              limit={PAGINATION_LIMIT}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const PAGINATION_LIMIT = 6;

export default ProductList;
