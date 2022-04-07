import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';
import { API } from '../../config';

const ProductCard = ({ productData }) => {
  const { name, price, colors, product_id } = productData;
  const navigate = useNavigate();
  const productPrice = price
    .split('.')[0]
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const goToInfo = (event, productId) => {
    event.preventDefault();
    navigate(`/info/${productId}`);
  };

  const addToCart = event => {
    event.preventDefault();
    if (localStorage.getItem('Authorization') == null) {
      alert(
        '장바구니 등록은 로그인이 필요합니다.\n로그인 페이지로 이동합니다.'
      );
      navigate('/login');
    } else {
      fetch(API.carts, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
        body: JSON.stringify({
          productcolor_id: productData.colors[0].id,
          quantity: 1,
        }),
      }).then(res => {
        if (res.status === 200) {
          alert('장바구니 등록완료');
        } else {
          alert('에러 발생');
        }
      });
    }
  };

  return (
    <li className="product-card">
      <img className="product-image" alt="chair" src={colors[0].image} />
      <span className="product-name">{name}</span>
      <span className="product-price">₩{productPrice}</span>
      <div className="product-hover-box">
        <button
          className="btn btn-detail"
          onClick={event => goToInfo(event, product_id)}
        >
          상세정보
        </button>
        <button className="btn btn-cart" onClick={event => addToCart(event)}>
          장바구니
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
