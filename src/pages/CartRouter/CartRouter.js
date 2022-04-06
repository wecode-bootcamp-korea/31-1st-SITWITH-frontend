import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart/Cart';
import CompareList from './CompareList/CompareList';
import CartNav from './CartNav';
import './CartRouter.scss';

const CartRouter = () => {
  const [select, setSelect] = useState('');
  useEffect(() => {
    localStorage.setItem(
      'Authorization',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0OTMzMTc1NX0.NYTtNkfMXk3hYVh4kHriCv0UM5CvZQEAvK-DIQCLFWI'
    );
  }, []);
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
