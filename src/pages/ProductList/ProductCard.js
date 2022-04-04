import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ productData }) => {
  const { name, price, image } = productData;
  const productPrice = price
    .split('.')[0]
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <li className="product-card">
      <img alt="chair" src={image[0]} />
      <span className="product-name">{name}</span>
      <span className="product-price">₩ {productPrice}</span>
      <div className="product-hover-box">
        <button className="btn-detail">상세정보</button>
        <button className="btn-cart">장바구니</button>
        <button className="btn-compare">비교하기</button>
      </div>
    </li>
  );
};

export default ProductCard;
