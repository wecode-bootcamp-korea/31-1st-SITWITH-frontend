import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart/Cart';
import CompareList from './CompareList/CompareList';
import CartNav from './CartNav';
import './CartRouter.scss';

const CartRouter = () => {
  const [select, setSelect] = useState('');

  return (
    <>
      <CartNav select={select} />
      <div className="container">
        <div className="contents">
          <Routes>
            <Route path="/" element={<Cart setSelect={setSelect} />} />
            <Route
              path="/compare"
              element={<CompareList setSelect={setSelect} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default CartRouter;
