import React from 'react';
import './Product.scss';

const Product = () => {
  return (
    <div className="product-page">
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
            <div className="product-name">짱 편한 의자</div>
            <div className="product-code">CODE # REAL1000</div>
            <div className="product-price">$ 1,000</div>
          </div>
          <div className="product-order-color">
            <span>COLOR / 색상</span>
            <div className="product-color-select">
              <div>색1</div>
              <div>색2</div>
              <div>색3</div>
              <div>색4</div>
              <div>색5</div>
              <div>색6</div>
            </div>
            <div className="product-color-show">452AF 다크그레이</div>
          </div>
          <div className="product-order-quantity">
            <span>QUANTITY / 수량</span>
            <div>3</div>
          </div>
          <div className="product-order-btns">
            <form>
              <button>구매하기</button>
              <button>장바구니</button>
            </form>
          </div>
          <div className="product-order-detail-btns">
            <button className="product-magnify">돋보기</button>
            <button className="product-share">공유하기</button>
            <button className="product-manual">매뉴얼</button>
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
        <div className="product-detail-delivery">
          <img
            alt="delivery details"
            src="/images/product/product-delivery-details.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
