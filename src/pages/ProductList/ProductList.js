import React, { useEffect, useState } from 'react';
import './ProductList.scss';

const ProductList = () => {
  const [btnStatus, setBtnStatus] = useState('hide');
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/productListData/productListMockData.json')
      .then(response => response.json())
      .then(chairData => setProductData(chairData));
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
            <table className="list-table">
              <tbody>
                <tr>
                  {productData.map(list => (
                    <td
                      key={list.name}
                      onMouseEnter={() => {
                        setBtnStatus('show');
                      }}
                      onMouseLeave={() => {
                        setBtnStatus('hide');
                      }}
                    >
                      <img
                        alt="chair image"
                        src={list.name && list.image_list[0].image}
                      />
                      <span className="product-name">
                        {list.name && list.name}
                      </span>
                      <span className="product-price">
                        {list.name && list.price}
                      </span>
                      <div className={`product-hover-box-${btnStatus}`}>
                        <button className="btn-detail">상세정보</button>
                        <button className="btn-cart">장바구니</button>
                        <button className="btn-compare">비교하기</button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
