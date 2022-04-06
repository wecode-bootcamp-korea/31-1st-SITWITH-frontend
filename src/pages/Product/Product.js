import React, { useState } from 'react';
import './Product.scss';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(count => count - 1);
    }
  };

  return (
    <div className="product">
      <div className="detail-section">
        <div className="header-group">
          <div className="group-wrap">
            <div className="left-area">
              <div className="img-wrap">
                <img
                  className="img-thumb"
                  src="../images/KakaoTalk_20220328_182759320.jpg"
                  alt=""
                ></img>
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
                  <button className="btn-dec" onClick={decrease} />
                  <input className="inpt-count" type={Number} value={counter} />
                  <button className="btn-inc" onClick={increase} />
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
                  <img
                    src="../images/KakaoTalk_20220328_182759320.jpg"
                    alt=""
                  />
                </li>
                <li className="img-item">
                  <img
                    src="../images/KakaoTalk_20220328_182759320.jpg"
                    alt=""
                  />
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
            src="../images/productDetail/img-chair-info.jpg"
            alt=""
          />
          <img
            className="img-info"
            src="../images/KakaoTalk_20220328_182759320.jpg"
            alt=""
          />
          <img
            className="img-info"
            src="../images/KakaoTalk_20220328_182759320.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
