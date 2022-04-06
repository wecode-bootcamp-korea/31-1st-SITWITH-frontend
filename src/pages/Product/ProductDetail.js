import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="border">
        <div></div>
      </div>

      <div className="product-detail-basic-information">
        <h2>basic-information</h2>
      </div>
      <div className="border">
        <div></div>
      </div>
      <div className="product-detail-function-material">
        <h2>function material</h2>
      </div>
      <div className="border">
        <div></div>
      </div>
      <div className="product-detail-story">
        <h2>story</h2>
      </div>
      <div className="border">
        <div></div>
      </div>
      <div className="product-detail-dimension">
        <h2>dimension</h2>
      </div>
      <div className="border">
        <div></div>
      </div>
      <div className="product-detail-delivery">
        <h2>배송시 유의사항</h2>
        <img alt="delivery details" src="/images/product/delivery-detail.jpg" />
      </div>
    </div>
  );
};

export default ProductDetail;
