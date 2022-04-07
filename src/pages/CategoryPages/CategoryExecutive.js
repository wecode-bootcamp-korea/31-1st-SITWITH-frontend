import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductList/ProductCard';
import './CategoryExecutive.scss';

const CategoryExecutive = () => {
  const [productData, setProductData] = useState([]);
  const categoryId = 4;

  useEffect(() => {
    localStorage.setItem('pageNum', 1);
  }, []);

  useEffect(() => {
    fetch('http://10.58.4.226:8000/products')
      .then(res => {
        return res.json();
      })
      .then(chairData => {
        setProductData(chairData.result);
      });
  }, []);

  const executiveChair = productData.filter(
    category => category.category === categoryId
  );

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <div className="product-list-title-wrap">
          <h1 className="product-list-title">중역용의자</h1>
        </div>
        <div className="separate-border">
          <div />
        </div>
        <div className="product-list-series-feature">
          <h3 className="series-feature-title">EXECUTIVE CHAIRS</h3>
          <div className="series-feature-image-wrap">
            <img
              className="series-feature-image"
              alt="executive"
              src="/images/category/category-executive.jpg"
            />
          </div>
        </div>
        <div className="product-list">
          <div className="separate-border">
            <div />
          </div>
          <h3 className="series-list-title">Product List</h3>
          <div className="product-list-show">
            <ul className="product-list-wrap">
              {executiveChair[0] ? (
                executiveChair.map(Data => (
                  <ProductCard key={Data.name} productData={Data} />
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryExecutive;
