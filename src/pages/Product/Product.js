import React from 'react';
import './Product.scss';

const Product = () => {
  return (
    <div className="product-page">
      <div className="product-order-container">
        <div className="product-order">
          <div className="product-order-image">
            <img
              className="product-image"
              alt="product-image"
              src="/images/product/unsplash-chair-image-1.jpg"
            />
          </div>
          <div className="product-order-information">
            <div className="product-order-name-price">
              <span className="product-name">T50AS23 짱 편한 의자</span>
              <span className="product-code">CODE # REAL1000</span>
              <span className="product-price">$1,000</span>
            </div>
            <div className="product-order-color">
              <h3>COLOR / 색상</h3>
              <ul className="product-color-select">
                <li>
                  <span className="color-box">color</span>
                  <span className="color-name">451AN</span>
                </li>
                <li>
                  <span className="color-box">color</span>
                  <span className="color-name">451AN</span>
                </li>
                <li>
                  <span className="color-box">color</span>
                  <span className="color-name">451AN</span>
                </li>
                <li>
                  <span className="color-box">color</span>
                  <span className="color-name">451AN</span>
                </li>
                <li>
                  <span className="color-box">color</span>
                  <span className="color-name">451AN</span>
                </li>
              </ul>
              <div className="product-color-show">452AF 다크그레이</div>
            </div>
            <form className="product-order-quantity">
              <span>QUANTITY / 수량</span>
              <div className="handleQuantity">
                <div className="quantity-btn-up">
                  <img alt="btn-up" src="images/product/btn_quantity_up.png" />
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
        </div>
      </div>
      <div className="product-images-container">
        <ul className="product-images-list">
          <li>
            <img
              className="produdct-image"
              alt="product-image"
              src="/images/product/unsplash-chair-image-1.jpg"
            />
          </li>
          <li>
            <img
              className="produdct-image"
              alt="product-image"
              src="/images/product/unsplash-chair-image-1.jpg"
            />
          </li>
          <li>
            <img
              className="produdct-image"
              alt="product-image"
              src="/images/product/unsplash-chair-image-1.jpg"
            />
          </li>
          <li>
            <img
              className="produdct-image"
              alt="product-image"
              src="/images/product/unsplash-chair-image-1.jpg"
            />
          </li>
          <li>
            <img
              className="produdct-image"
              alt="product-image"
              src="/images/product/unsplash-chair-image-1.jpg"
            />
          </li>
        </ul>
      </div>
      <div className="product-detail">
        <div className="product-detail-basic-information">
          basic-information
        </div>
        <div className="product-detail-function-material">
          function material
        </div>
        <div className="product-detail-story">story</div>
        <div className="product-detail-dimension">dimension</div>
        <div className="product-detail-delivery">
          <img
            alt="delivery details"
            src="/images/product/delivery-detail.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
