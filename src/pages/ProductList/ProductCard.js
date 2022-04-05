import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ productData }) => {
  const { name, price, colors } = productData;
  const productPrice = price
    .split('.')[0]
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <li className="product-card">
      <img className="product-image" alt="chair" src={colors[0].image} />
      <span className="product-name">{name}</span>
      <span className="product-price">₩{productPrice}</span>
      <div className="product-hover-box">
        <button className="btn btn-detail">상세정보</button>
        <button className="btn btn-cart">장바구니</button>
        <button className="btn btn-compare">비교하기</button>
      </div>
    </li>
  );
};

export default ProductCard;
