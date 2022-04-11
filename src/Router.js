import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import CartRouter from './pages/CartRouter/CartRouter';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import ProductsRouter from './pages/ProductList/ProductsRouter';
import Product from './pages/Product/Product';
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/carts/*" element={<CartRouter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/products/*" element={<ProductsRouter />} />
        <Route path="/info/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
