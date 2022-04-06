import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductList/ProductCard';
import './CategoryBaby.scss';

const CategoryBaby = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    localStorage.setItem('pageNum', 1);
  }, []);

  useEffect(() => {
    fetch('http://10.58.2.32:8000/products')
      .then(res => {
        return res.json();
      })
      .then(chairData => {
        setProductData(chairData.result);
      });
  }, []);

  const babyChair = productData.filter(
    category => category.category === BABY_CHAIR_CATEGORY_ID
  );

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <div className="product-list-title-wrap">
          <h1 className="product-list-title">유아용의자</h1>
        </div>

        <div className="separate-border">
          <div />
        </div>

        <div className="product-list-series-feature">
          <h3 className="series-feature-title">BABY CHAIRS</h3>
          <div className="series-feature-image-wrap">
            <img
              className="series-feature-image"
              alt="baby"
              src="/images/category/category-baby.jpg"
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
              {babyChair[0] ? (
                babyChair.map(Data => (
                  <ProductCard key={Data.name} productData={Data} />
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
          </div>
        </div>
      </div>
    </div>
  );
};
const BABY_CHAIR_CATEGORY_ID = 3;
export default CategoryBaby;
