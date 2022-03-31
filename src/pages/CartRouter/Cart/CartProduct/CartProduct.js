import React from 'react';
import './CartProduct.scss';

const CartProduct = ({ product, checkList, checkHandler, deleteHandler }) => {
  const { img, id, name, color, price, quantity } = product;

  return (
    <tr>
      <td className="tct">
        <input
          type="checkbox"
          className="checkbox"
          checked={checkList.indexOf(id) >= 0 ? true : false}
          onChange={e => checkHandler(e, id)}
        />
      </td>
      <td className="product-img">
        <div className="product-img-wrap">
          <img src={img} alt={`상품이미지${id}`} />
        </div>
      </td>
      <td className="product-name">
        <p>{name}</p>
      </td>
      <td className="tct">{color}</td>
      <td className="trt">
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </td>
      <td className="tct count">{quantity}</td>
      <td className="trt">
        {(quantity * price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </td>
      <td className="tct btn-list">
        <button className="order-btn">주문하기</button>
        <button onClick={deleteHandler}>삭제</button>
      </td>
    </tr>
  );
};

export default CartProduct;
