import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SmartFinder from './pages/SmartFinder/SmartFinder';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/smart-finder" element={<SmartFinder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
