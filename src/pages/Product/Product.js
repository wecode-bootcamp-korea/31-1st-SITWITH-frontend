import React, { useEffect, useState } from 'react';
import './Product.scss';
import ProductDetail from './ProductDetail';
import ProductImageContainer from './ProductImageContainer';

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
    <div className="product-page">
      <div className="product-order-container">
        <div className="product-order">
          <div className="product-order-image">
            {chairData.message == 'Success' ? (
              <img
                className="product-image"
                alt="product-image"
                src={chairData.colorproductlist[0].image_url}
              />
            ) : (
              <div>Image Loading...</div>
            )}
          </div>
          {chairData.message && (
            <div className="product-order-information">
              <div className="product-order-name-price">
                <span className="product-name">
                  {chairData.colorproductlist[0].name}
                </span>
                <span className="product-code">
                  CODE #{chairData.colorproductlist[0].code}
                </span>
                <span className="product-price">
                  {chairData.colorproductlist[0].price}
                </span>
              </div>
              <div className="product-order-color">
                <h3>COLOR / 색상</h3>
                <ul className="product-color-select">
                  {chairColor.map(colors => (
                    <li key={colors} className="color-list">
                      <span className="color-box">{colors}</span>
                      <span className="color-name">{colors}</span>
                    </li>
                  ))}
                </ul>
                <div className="product-color-show">color</div>
              </div>
              <form className="product-order-quantity">
                <span>QUANTITY / 수량</span>
                <div className="handleQuantity">
                  <div className="quantity-btn-up">
                    <img
                      alt="btn-up"
                      src="images/product/btn_quantity_up.png"
                    />
                  </div>
                  <div className="quantity-input">
                    <input type="text" />
                  </div>
                  <div className="quantity-btn-down">
                    <img
                      alt="btn-down"
                      src="images/product/btn_quantity_down.png"
                    />
                  </div>
                </div>
                <div className="product-order-btns">
                  <button className="order-btn-buy" type="submit">
                    <img alt="card" src="/images/product/credit-card.png" />
                    <span>구매하기</span>
                  </button>
                  <button className="order-btn-cart" type="submit">
                    <img alt="card" src="/images/product/shopping-cart.png" />
                    <span>장바구니</span>
                  </button>
                </div>
              </form>

              <div className="product-order-detail-btns">
                <button type="button" className="product-magnify">
                  <span>돋보기</span>
                </button>
                <button type="button" className="product-share">
                  <span>공유</span>
                </button>
                <button type="button" className="product-manual">
                  <span>설명서</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ProductImageContainer />
      <div className="separate-border"></div>
      <ProductDetail />
    </div>
  );
};

export default Product;
