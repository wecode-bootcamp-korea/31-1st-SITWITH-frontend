import React, { useState } from 'react';
import './ProductList.scss';

const ProductList = () => {
  const [style, setStyle] = useState('');

  const priceList = [0, 10, 20, 30, 40];

  const category = [
    '사무용의자',
    '학생용의자',
    '유아용의자',
    '중역용의자',
    '인테리어의자',
  ];

  const colorObject = [
    { Black: 'black' },
    { Gray: 'gray' },
    { Red: 'red' },
    { Blue: 'blue' },
    { Green: 'green' },
    { Pink: 'pink' },
    { Orange: 'orange' },
    { Yellow: 'yellow' },
    { Beige: 'beige' },
    { White: 'white' },
  ];

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <h1 className="product-list-title">모든제품보기</h1>
        <div className="separate-bar"></div>
        <div className="smart-finder-container">
          <h2>SMART FINDER</h2>

          <div className="smart-finder">
            {/* 가격파트 */}
            <div className="finder-price-container">
              <span className="finder-title">가격(만원)</span>

              <div className="finder-price">
                {priceList.map(price => (
                  <div key={price} className={`price price-${price}`}>
                    <label>
                      <input type="checkbox" name="color" value="blue" />
                    </label>
                    <div className="finder-select-bar"></div>
                    <span>{price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 카테고리 */}
            <div className="finder-category-container">
              <span className="finder-title">카테고리</span>
              <div className="finder-category">
                {category.map(categories => (
                  <div
                    key={categories}
                    className={`category category-${categories}`}
                  >
                    <div className="finder-select-bar"></div>
                    <span>{categories}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 색상 */}
            <div className="finder-color-container">
              <span className="finder-title">색상</span>
              <div className="finder-color">
                {colorObject.map(colors => (
                  <div
                    key={Object.keys(colors)}
                    className={`color color-${Object.values(colors)}`}
                  >
                    <div
                      className={`finder-color-bar ${Object.values(colors)}`}
                    ></div>
                    <span>{Object.keys(colors)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 검색결과 */}
            <div className="search-result">{}개의 제품이 검색되었습니다.</div>
          </div>
        </div>
        <div className="product-list"></div>
      </div>
    </div>
  );
};

export default ProductList;
