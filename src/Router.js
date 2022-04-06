import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
// import CartRouter from './pages/CartRouter/CartRouter';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import ProductList from './pages/ProductList/ProductList';
import CategoryOffice from './pages/CategoryPages/CategoryOffice';
import CategoryBaby from './pages/CategoryPages/CategoryBaby';
import CategoryStudy from './pages/CategoryPages/CategoryStudy';
import CategoryExecutive from './pages/CategoryPages/CategoryExecutive';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/cart/*" element={<CartRouter />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/office" element={<CategoryOffice />} />
        <Route path="/products/baby" element={<CategoryBaby />} />
        <Route path="/products/study" element={<CategoryStudy />} />
        <Route path="/products/executive" element={<CategoryExecutive />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
