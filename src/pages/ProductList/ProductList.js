import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import './ProductList.scss';
import { API } from '../../config';

const ProductList = () => {
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const paginationLimit = 6;

  const updateOffset = buttonIndex => {
    const offset = buttonIndex * paginationLimit;
    const queryString = `?offset=${offset}&limit=${paginationLimit}`;
    navigate(queryString);
  };

  useEffect(() => {
    fetch(
      `${API.products}${
        location.search || `?offset=0&limit=${paginationLimit}`
      }`
    )
      .then(res => {
        return res.json();
      })
      .then(chairData => {
        setProductsData(chairData.result);
      });
  }, [location.search]);

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <div className="product-list-title-wrap">
          <h1 className="product-list-title">SW ALL</h1>
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
              {productsData[0] ? (
                productsData.map(productData => (
                  <ProductCard
                    key={productData.product_id}
                    productData={productData}
                  />
                ))
              ) : (
                <div className="product-list-loading-container">
                  <div className="product-loading-circle" />
                  <h1 className="product-list-loading">
                    상품 리스트를 불러오는 중입니다...
                  </h1>
                </div>
              )}
            </ul>
            {productsData[0] && <Pagination updateOffset={updateOffset} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
