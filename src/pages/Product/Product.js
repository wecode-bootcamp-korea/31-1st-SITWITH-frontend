import React from 'react';
import './Product.scss';

const Product = () => {
  return (
    <>
      <div className="productOrder">
        <div></div>
      </div>
      <div className="productImages"></div>
      <div className="productDescription">
        <div className="basicInformation"></div>
        <div className="fuctionMaterial"></div>
        <div className="story"></div>
        <div className="dimension"></div>
        <div className="deliveryInfo"></div>
      </div>
    </>
  );
};

export default Product;
