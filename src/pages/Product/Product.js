import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.scss';

const Product = props => {
  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(0);

  // const index = setProduct;

  const params = useParams();
  // console.log(params);

  useEffect(() => {
    fetch(`http://10.58.5.32:8000/products/${params.id}`)
      .then(res => res.json())
      .then(res => console.log(res));
    // .then(res => setProduct(res.result));
  }, []);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(count => count - 1);
    }
  };

  console.log(product);

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
                />
              </div>
            </div>
            <div className="right-area">
              <div className="txt-group">
                <div className="name">{product.name}</div>
                <div className="price">￦{product[0].price}</div>
              </div>
              <div className="color-group">
                <div className="group-title">color / 색상</div>
                <ul className="color-list">
                  <li className="color-item">
                    <input
                      type="radio"
                      name="color"
                      defaultValue="Green"
                      id="Green"
                    />
                    <label htmlFor="Green" className="Green" />
                  </li>
                  <li className="color-item">
                    <input
                      type="radio"
                      name="color"
                      defaultValue="Red"
                      id="Red"
                    />
                    <label htmlFor="Red" className="Red" />
                  </li>

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
                  <input className="inpt-count" defaultValue={counter} />
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
                  <input
                    type="radio"
                    name="color"
                    defaultValue="Green"
                    id="Green"
                  />
                  <label
                    htmlFor="Green"
                    className="Green"
                    style={{
                      backgroundImage:
                        'url(' +
                        '../images/KakaoTalk_20220328_182759320.jpg' +
                        ')',
                    }}
                  />
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
