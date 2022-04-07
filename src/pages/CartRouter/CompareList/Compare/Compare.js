import React from 'react';
import './Compare.scss';
const Compare = ({ compare, deleteCompareList }) => {
  const {
    image_url,
    product_name,
    product_price,
    color_name,
    cart_id,
    category_name,
  } = compare;
  return (
    <ul className="compare">
      {product_name !== 'none' ? (
        <>
          <li className="compare-product">
            <button onClick={e => deleteCompareList(e, cart_id)}>x</button>
            <div className="compare-img">
              <img src={image_url} alt="product-img" />
            </div>
            <p>{product_name}</p>
          </li>
          <li>
            {Math.floor(product_price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </li>
          <li>{color_name}</li>
          <li>{category_name}</li>
        </>
      ) : (
        <li className="none">
          <p>데이터 없음</p>
        </li>
      )}
    </ul>
  );
};

export default Compare;
