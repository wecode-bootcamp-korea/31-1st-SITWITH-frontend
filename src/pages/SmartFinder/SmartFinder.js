import React, { useEffect, useState } from 'react';
import './SmartFinder.scss';

const SmartFinder = () => {
  const [chairs, setChairs] = useState([]);
  const [usetSearchInput, setUserSearchInput] = useState('');
  const [selected, setSelected] = useState('selected');

  const handleUserSearch = event => {
    setUserSearchInput(event.target.value);
  };

  useEffect(() => {
    fetch('/data/productListData/productMockData.json')
      .then(res => res.json())
      .then(res => console.log(res));
  }, []);

  const priceList = [0, 10, 20, 30, 40];

  const category = ['office', 'student', 'child', 'executive', 'interior'];

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
                className={`category category-${categories} ${selected}`}
                onClick={() => {
                  selected == 'selected'
                    ? setSelected('notSelected')
                    : setSelected('selected');
                }}
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
  );
};

export default SmartFinder;
