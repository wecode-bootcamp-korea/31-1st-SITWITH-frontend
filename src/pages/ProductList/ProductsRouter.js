import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryBaby from '../CategoryPages/CategoryBaby';
import CategoryExecutive from '../CategoryPages/CategoryExecutive';
import CategoryOffice from '../CategoryPages/CategoryOffice';
import CategoryStudy from '../CategoryPages/CategoryStudy';
import CategoryNav from './Nav/CategoryNav';
import ProductList from './ProductList';

const ProductsRouter = () => {
  return (
    <div className="product-router">
      <CategoryNav />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/baby" element={<CategoryBaby />} />
        <Route path="/office" element={<CategoryOffice />} />
        <Route path="/study" element={<CategoryStudy />} />
        <Route path="/executive" element={<CategoryExecutive />} />
      </Routes>
    </div>
  );
};

export default ProductsRouter;
