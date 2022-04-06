import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import './ProductList.scss';

const ProductList = () => {
  const [productsData, setProductsData] = useState([]);
  const [totalNum, setTotalNum] = useState([]);
  const [page, setPage] = useState();
  // localStorage.getItem('pageNum') !== null
  //   ? JSON.parse(localStorage.getItem('pageNum'))
  //   : 1
  const offset = (page - 1) * PAGINATION_LIMIT;

  const navigate = useNavigate();
  const location = useLocation();

  const updateOffset = buttonIndex => {
    // 각각 버튼마다 보이는 갯수
    const limit = 6;
    const offset = buttonIndex * limit;
    const queryString = `?offset=${offset}&limit=${limit}`;
    navigate(queryString);
  };

  useEffect(() => {
    fetch('http://10.58.2.32:8000/products')
      .then(res => {
        return res.json();
      })
      .then(chairData => {
        setTotalNum(chairData.result);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://10.58.2.32:8000/products${location.search || `?offset=0&limit=3`}`
    )
      .then(res => {
        return res.json();
      })
      .then(chairData => {
        setProductsData(chairData.result);
      });
  }, [location.search]);

  // useEffect(() => {
  //   localStorage.setItem(
  //     'Authorization',
  //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY0OTI0NjY4N30.Mz4_jvVlpGrxE4b0EKx2KoF3pHwxlDXs4RaiFQnfdPk'
  //   );
  // }, []);

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <div className="product-list-title-wrap">
          <h1 className="product-list-title">Title</h1>
        </div>

        <div className="separate-border">
          <div />
        </div>

        <div className="product-list-series-feature">
          <h3 className="series-feature-title">SERIES FEATURE</h3>
          <div className="series-feature-image-wrap">
            <img
              className="series-feature-image"
              alt="T50 chair"
              src="/images/productList/product-list-chair-image.jpeg"
            />
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
            <div />
          </div>
          <h3 className="series-list-title">Product List</h3>
          <div className="product-list-show">
            <ul className="product-list-wrap">
              {productsData[0] ? (
                productsData.map(productData => (
                  <ProductCard
                    key={productData.name}
                    productData={productData}
                  />
                ))
              ) : (
                <div className="product-list-loading-container">
                  <div className="product-loading-circle" />
                  <h1 className="product-list-loading">
                    리스트를 불러오는 중입니다...
                  </h1>
                </div>
              )}
              {/* {productsData[0] ? (
                productsData
                  .slice(offset, offset + PAGINATION_LIMIT)
                  .map(productData => (
                    <ProductCard
                      key={productData.name}
                      productData={productData}
                      addCompareList={addCompareList}
                    />
                  ))
              ) : (
                <div className="product-list-loading-container">
                  <div className="product-loading-circle" />
                  <h1 className="product-list-loading">
                    리스트를 불러오는 중입니다...
                  </h1>
                </div>
              )} */}
            </ul>
            <Pagination
              total={totalNum.length}
              limit={PAGINATION_LIMIT}
              page={page}
              setPage={setPage}
              updateOffset={updateOffset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const PAGINATION_LIMIT = 6;

export default ProductList;
