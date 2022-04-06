import React, { useEffect, useState } from 'react';
import './Product.scss';

const Product = () => {
  const [chairData, setChairData] = useState([]);

  useEffect(() => {
    fetch('/data/Product/PRODUCT_DATA.json')
      .then(response => response.json())
      .then(data => setChairData(data));
  }, []);

  let chairColor = [];

  chairData.message && (chairColor = chairData.colorproductlist[0].image_list);

  chairData.message && console.log(chairColor);

  return (
    <div className="product">
      <div className="detail-section">
        <div className="header-group">
          <div className="group-wrap">
            <div className="left-area">
              <div className="img-wrap">
                <img className="img-thumb" src="" alt=""></img>
              </div>
            </div>
            <div className="right-area">
              <div className="txt-group">
                <div className="name">T80</div>
                <div className="price">￦1,999,000</div>
              </div>
              <div className="color-group">
                <div className="group-title">color / 색상</div>
                <ul className="color-list">
                  <li className="color-item Green active" name="Green" />
                  <li className="color-item Red" />
                  <li className="color-item" />
                  <li className="color-item" />
                  <li className="color-item" />
                  <li className="color-item" />
                </ul>
                <div className="color-name">그린</div>
              </div>
              <div className="count-group">
                <div className="group-title">QUANTITY / 수량</div>
                <div className="counter">
                  <button className="btn-dec" />
                  <input className="inpt-count" type={Number} value={0} />
                  <button className="btn-inc" />
                </div>
              </div>
              <div className="btn-group">
                <button className="btn-purchase">
                  <i className="ico-product ico-product-credit" />
                  <span className="btn-txt">구매하기</span>
                </button>
                <button className="btn-cart">
                  <i className="ico-product ico-product-cart" />
                  <span className="btn-txt">장바구니</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-group">
          <div className="group-wrap">
            <div className="img-select">
              <ul className="img-list">
                <li className="img-item active">
                  <img src="" alt="" />
                </li>
                <li className="img-item">
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="group-wrap">
          <img
            className="img-info"
            src="../../public/images/productDetail/img-chair-info.jpg"
            alt=""
          />
          <img className="img-info" src="" alt="" />
          <img className="img-info" src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
