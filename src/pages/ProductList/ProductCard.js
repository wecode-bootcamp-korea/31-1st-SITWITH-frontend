import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ productData }) => {
  const { name, price, colors } = productData;

  const productPrice = price
    .split('.')[0]
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const addToCart = event => {
    event.preventDefault();
    fetch('http://10.58.0.27:8000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      body: JSON.stringify({
        color_id: productData.colors[0].id,
        quantity: 1,
      }),
    });
  };

  return (
    <li className="product-card">
      <img className="product-image" alt="chair" src={colors[0].image} />
      <span className="product-name">{name}</span>
      <span className="product-price">₩{productPrice}</span>
      <div className="product-hover-box">
        <button className="btn btn-detail">상세정보</button>
        <button className="btn btn-cart" onClick={event => addToCart(event)}>
          장바구니
        </button>
        <button className="btn btn-compare">비교하기</button>
      </div>
    </li>
  );
};

export default ProductCard;
