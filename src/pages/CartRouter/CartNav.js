import React from 'react';
import { Link } from 'react-router-dom';
import './CartNav.scss';

const CartNav = ({ select }) => {
  return (
    <div className="cart-nav">
      <dl>
        <dt>
          <Link to="/">
            <button>HOME</button>
          </Link>
        </dt>
        <dd className={select === 'cart' ? 'selected' : ''}>
          <Link to="/carts">
            <button>장바구니</button>
          </Link>
        </dd>
        <dd className={select === 'compare' ? 'selected' : ''}>
          <Link to="/carts/compare">
            <button>비교하기</button>
          </Link>
        </dd>
      </dl>
    </div>
  );
};

export default CartNav;
