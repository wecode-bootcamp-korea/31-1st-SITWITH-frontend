import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductList/ProductCard';
import './CategoryOffice.scss';

const CategoryOffice = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    localStorage.setItem('pageNum', 1);
  }, []);

  const officeChair = productData.filter(
    category => category.category === STUDY_CHAIR_CATEGORY_ID
  );

  useEffect(() => {
    fetch('http://10.58.2.32:8000/products')
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
          <h1 className="product-list-title">사무용의자</h1>
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
const STUDY_CHAIR_CATEGORY_ID = 1;
export default CategoryOffice;
