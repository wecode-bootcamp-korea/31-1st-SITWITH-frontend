import React from 'react';
import { Link } from 'react-router-dom';
import './CartNav.scss';

const CartNav = () => {
  return (
    <div className="CartNav">
      <dl>
        <dt>
          <Link to="/">
            <span>HOME</span>
          </Link>
        </dt>
        <dd>
          <Link to="/cart">
            <span>장바구니</span>
          </Link>
        </dd>
        <dd>
          <Link to="/cart/compare">
            <span>비교하기</span>
          </Link>
        </dd>
      </dl>
    </div>
  );
};

export default CartNav;
