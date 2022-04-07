import React, { useEffect, useState, useRef } from 'react';
import Compare from './Compare/Compare';
import './CompareList.scss';

const CompareList = ({ setSelect }) => {
  const [compareList, setCompareList] = useState([]);
  const [count, setCount] = useState(1);
  const contentsRef = useRef();

  function createRandom(n) {
    const randomIndexArray = [];
    for (let i = 0; i < n; i++) {
      const randomNum = -Math.floor(Math.random() * 10);
      if (compareList.findIndex(i => i.cart_id === randomNum) === -1) {
        randomIndexArray.push(randomNum);
      } else {
        i--;
      }
    }
    return randomIndexArray;
  }

  if (compareList.length !== 0 && compareList.length % 4 !== 0) {
    let randomNums = createRandom(4 - (compareList.length % 4));
    for (let i = 0; i < randomNums.length; i++) {
      setCompareList(compareList => [
        ...compareList,
        { cart_id: randomNums[i], product_name: 'none' },
      ]);
    }
  } else if (compareList.length === 8) {
    let cnt = 0;
    compareList.forEach(compare => {
      if (compare.product_name === 'none') {
        cnt++;
      }
    });
    if (cnt === 4) {
      setCompareList(
        compareList.filter(compare => compare.product_name !== 'none')
      );
      setCount(count - 1);
      contentsRef.current.style.transform = `translateX(-${
        760 * (count - 2)
      }px)`;
      alert('마지막 페이지 입니다.');
    }
  }

  useEffect(() => {
    const localCompareList = localStorage.getItem('compareList');
    if (localCompareList !== null) {
      setCompareList(JSON.parse(localCompareList));
    } else {
      setCompareList([
        { cart_id: -1, product_name: 'none' },
        { cart_id: -2, product_name: 'none' },
        { cart_id: -3, product_name: 'none' },
        { cart_id: -4, product_name: 'none' },
      ]);
    }
  }, []);

  useEffect(() => {
    setSelect('compare');
  }, [setSelect]);

  useEffect(() => {
    localStorage.setItem('compareList', JSON.stringify(compareList));
  }, [compareList]);

  const deleteCompareList = (e, cart_id) => {
    e.preventDefault();
    setCompareList(compareList.filter(product => product.cart_id !== cart_id));
  };
  const backContents = () => {
    if (count > 1) {
      setCount(count - 1);
      contentsRef.current.style.transform = `translateX(-${
        760 * (count - 2)
      }px)`;
    } else {
      alert('첫페이지입니다');
    }
  };
  const nextContents = () => {
    if (count < compareList.length / 4) {
      setCount(count + 1);
      contentsRef.current.style.transform = `translateX(-${760 * count}px)`;
    } else {
      alert('마지막 페이지입니다');
    }
  };
  return (
    <div className="compare-list">
      <h1>비교하기</h1>
      <div className="bar">
        <p />
      </div>
      <h2>제품 비교하기</h2>
      <div className="compare-main">
        <ul className="compare-column">
          {Compare_Columns.map((column, idx) => (
            <li key={idx} className={column.className}>
              {column.content}
            </li>
          ))}
        </ul>

        <div className="compare-slide">
          <button onClick={backContents}>
            <img src="/images/compare/back.png" alt="back.png" />
          </button>
          <div className="compare-slide-contents-wrap">
            <div className="compare-slide-contents" ref={contentsRef}>
              {compareList.map(compare => (
                <Compare
                  key={compare.cart_id}
                  compare={compare}
                  deleteCompareList={deleteCompareList}
                />
              ))}
            </div>
          </div>
          <button onClick={nextContents}>
            <img src="/images/compare/next.png" alt="next.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareList;

const Compare_Columns = [
  { className: 'compare-column-product', content: 'Product' },
  { className: '', content: '가격' },
  { className: '', content: 'Color' },
  { className: '', content: '용도' },
];
