import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart/Cart';
import Compare from './Compare/Compare';
import CartNav from './CartNav';
import './CartRouter.scss';

const CartRouter = () => {
  return (
    <>
      <CartNav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </div>
    </>
  );
};

export default CartRouter;
