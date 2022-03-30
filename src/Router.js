import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import SmartFinder from './pages/ProductList/SmartFinder';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/category" element={<ProductList />} />
        <Route path="/smartfinder" element={<SmartFinder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
