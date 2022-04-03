import React, { useState } from 'react';
import Pagination from './Pagination';
import './ProductCard.scss';

const ProductCard = ({ productData, limit, page, setPage }) => {
  console.log(productData.primary_key);
  return (
    <>
      <ul className="list-table">
        <li className="product-card">
          <img alt="chair image" />
          <span className="product-name"></span>
          <span className="product-price"></span>
          <div className={`product-hover-box`}>
            <button className="btn-detail">상세정보</button>
            <button className="btn-cart">장바구니</button>
            <button className="btn-compare">비교하기</button>
          </div>
        </li>
        {/* {productData[0] ? (
          productData.slice(offset, offset + limit).map(list => (
            <li className="product-card" key={list}>
              <img alt="chair image" src={list} />
              <span className="product-name">{list}</span>
              <span className="product-price">{list}</span>
              <div className={`product-hover-box`}>
                <button className="btn-detail">상세정보</button>
                <button className="btn-cart">장바구니</button>
                <button className="btn-compare">비교하기</button>
              </div>
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )} */}
      </ul>
    </>
  );
};

export default ProductCard;
