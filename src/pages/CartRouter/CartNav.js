import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartNav.scss';

const CartNav = () => {
  const [select, setSelect] = useState(true);

  const handleSelect = () => {
    setSelect(!select);
  };
  return (
    <div className="cart-nav">
      <dl>
        <dt>
          <Link to="/">
            <button>HOME</button>
          </Link>
        </dt>
        <dd className={select ? 'selected' : ''} onClick={handleSelect}>
          <Link to="/cart">
            <button>장바구니</button>
          </Link>
        </dd>
        <dd className={select ? '' : 'selected'} onClick={handleSelect}>
          <Link to="/cart/compare">
            <button>비교하기</button>
          </Link>
        </dd>
      </dl>
    </div>
  );
};

export default CartNav;
