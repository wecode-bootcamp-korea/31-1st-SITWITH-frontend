import React, { useEffect, useState } from 'react';
import './SmartFinder.scss';
import SmartFinderColorSelection from './SmartFinderColorSelection';
import SmartFinderSelection from './SmartFinderSelection';

const SmartFinder = () => {
  // useEffect(() => {
  //   fetch('API ADDRESS')
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // }, []);

  return (
    <div className="smart-finder-container">
      <h2>SMART FINDER</h2>

      <div className="smart-finder">
        {/* 가격파트 */}
        <div className="finder-price-container">
          <span className="finder-title">가격(만원)</span>

          <div className="finder-price">
            {PRICE_LIST.map(prices => (
              <SmartFinderSelection sort={prices} />
            ))}
          </div>
        </div>

        {/* 카테고리 */}
        <div className="finder-category-container">
          <span className="finder-title">카테고리</span>
          <div className="finder-category">
            {CATEGORY.map(categories => (
              <SmartFinderSelection sort={categories} />
            ))}
          </div>
        </div>

        {/* 색상 */}
        <div className="finder-color-container">
          <span className="finder-title">색상</span>
          <div className="finder-color">
            {COLOR_OBJECT.map(colors => (
              <SmartFinderColorSelection sort={colors} />
            ))}
          </div>
        </div>

        {/* 검색결과 */}
        <div className="search-result">{}개의 제품이 검색되었습니다.</div>
        <div className="smart-finder-btns">
          <button className="finder-btn-initial">초기화하기</button>
          <button className="finder-btn-apply">적용하기</button>
        </div>
      </div>
    </div>
  );
};

const PRICE_LIST = [0, 10, 20, 30, 40];

const CATEGORY = ['office', 'student', 'child', 'executive', 'interior'];

const COLOR_OBJECT = [
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
export default SmartFinder;
