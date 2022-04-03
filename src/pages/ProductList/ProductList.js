import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import './ProductList.scss';

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  // Pagination 관련 state
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);

  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch('http://10.58.2.66:8000/products')
      .then(res => {
        if (res.status == '200') return res.json();
      })
      .then(chairData => setProductData(chairData.result));
  }, []);

  console.log(productData);

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <div className="product-list-title">
          {/* 의자 이름 표시  */}
          <h1>T50</h1>
        </div>

        <div className="separate-border">
          <div></div>
        </div>

        <div className="product-list-series-feature">
          <h3 className="series-feature-title">SERIES FEATURE</h3>
          <div className="series-feature-image">
            <img
              alt="T50 chair image"
              src="/images/productList/product-list-chair-image.jpeg"
            ></img>
          </div>
        </div>
        <div className="product-list">
          <div className="product-list-btns">
            <button>인기순</button>
            <button>신상품순</button>
            <button>높은가격순</button>
            <button>낮은가격순</button>
          </div>

          <div className="separate-border">
            <div></div>
          </div>

          <h3 className="series-list-title">Product List</h3>

          <div className="product-list-show">
            {productData[0] ? (
              productData
                .slice(offset, offset + limit)
                .map(list => (
                  <ProductCard key={list.primary_key} productData={list} />
                ))
            ) : (
              <h1>Loading...</h1>
            )}
            {/* {productData.map(product => (
              <ProductCard
                productData={product}
                offset={offset}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            ))} */}
            <Pagination
              total={productData.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
