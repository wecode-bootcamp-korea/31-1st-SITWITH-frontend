import React from 'react';
import './ProductImageContainer.scss';

const ProductImageContainer = () => {
  return (
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
  );
};

export default ProductImageContainer;
