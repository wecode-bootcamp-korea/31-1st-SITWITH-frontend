import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductList/ProductCard';
import './CategoryOffice.scss';
import { API } from '../../config';

const CategoryOffice = () => {
  const [productData, setProductData] = useState([]);
  const categoryId = 4;

  useEffect(() => {
    localStorage.setItem('pageNum', 1);
  }, []);

  const officeChair = productData.filter(
    category => category.category === categoryId
  );

  useEffect(() => {
    fetch(API.products)
      .then(res => {
        return res.json();
      })
      .then(chairData => {
        setProductData(chairData.result);
      });
  }, []);

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <div className="product-list-title-wrap">
          <h1 className="product-list-title">SW OFFICE</h1>
        </div>
        <div className="separate-border">
          <div />
        </div>
        <div className="product-list-series-feature">
          <h3 className="series-feature-title">OFFICE CHAIRS</h3>
          <div className="series-feature-image-wrap">
            <img
              className="series-feature-image"
              alt="office"
              src="/images/category/category-office.jpg"
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
              {officeChair[0] ? (
                officeChair.map(Data => (
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

export default CategoryOffice;
