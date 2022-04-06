import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import ProductsRouter from './pages/ProductList/ProductsRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/cart/*" element={<CartRouter />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/products/*" element={<ProductsRouter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
