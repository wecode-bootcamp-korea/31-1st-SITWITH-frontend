import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryBaby from '../CategoryPages/CategoryBaby';
import CategoryExecutive from '../CategoryPages/CategoryExecutive';
import CategoryOffice from '../CategoryPages/CategoryOffice';
import CategoryStudy from '../CategoryPages/CategoryStudy';
import CategoryNav from './Nav/CategoryNav';
import ProductList from './ProductList';

const ProductsRouter = () => {
  // const [compareList, setCompareList] = useState([]);

  // useEffect(() => {
  //   const localCompareList = localStorage.getItem('compareList');
  //   if (localCompareList !== null) {
  //     setCompareList(JSON.parse(localCompareList));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('compareList', JSON.stringify(compareList));
  // }, [compareList]);

  // const addCompareList = (e, product) => {
  //   e.preventDefault();
  //   if (compareList.findIndex(i => i.product_name === 'none') !== -1) {
  //     setCompareList(
  //       compareList.filter(compare => compare.product_name !== 'none')
  //     );
  //   }
  //   if (compareList.findIndex(i => i.cart_id === product.cart_id) === -1) {
  //     setCompareList(compareList => [...compareList, product]);
  //   } else {
  //     alert('이미 비교하기에 있는 상품입니다.');
  //   }
  // };

  return (
    <div className="product-router">
      <CategoryNav />
      <Routes>
        <Route
          path="/"
          element={<ProductList />}
          // addCompareList={addCompareList}
        />
        <Route
          path="/baby"
          element={<CategoryBaby />}
          // addCompareList={addCompareList}
        />
        <Route
          path="/office"
          element={<CategoryOffice />}
          // addCompareList={addCompareList}
        />
        <Route
          path="/study"
          element={<CategoryStudy />}
          // addCompareList={addCompareList}
        />
        <Route
          path="/executive"
          element={<CategoryExecutive />}
          // addCompareList={addCompareList}
        />
      </Routes>
    </div>
  );
};

export default ProductsRouter;
