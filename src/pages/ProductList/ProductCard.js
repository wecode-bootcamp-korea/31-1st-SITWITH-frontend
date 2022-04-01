import React, { useState } from 'react';
import './ProductCard.scss';

const ProductCard = ({ productData }) => {
  return (
    <ul className="list-table">
      {productData[0] ? (
        productData.map(list => (
          <li className="product-card" key={list.name}>
            <img alt="chair image" src={list.image_list[0].image} />
            <span className="product-name">{list.name}</span>
            <span className="product-price">{list.price}</span>
            <div className={`product-hover-box`}>
              <button className="btn-detail">상세정보</button>
              <button className="btn-cart">장바구니</button>
              <button className="btn-compare">비교하기</button>
            </div>
          </li>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </ul>
  );
};

export default ProductCard;
