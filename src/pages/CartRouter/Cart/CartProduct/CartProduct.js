import React, { useState } from 'react';
import './CartProduct.scss';

const CartProduct = ({ product, checkList, checkHandler, deleteHandler }) => {
  const { img, id, name, color, price, quantity } = product;
  const [count, setCount] = useState(1);

  // decrease, increase 추가 기능 구현 때 사용
  const decrease = e => {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increase = e => {
    e.preventDefault();
    setCount(count + 1);
  };
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
      <td className="trt">{price}</td>
      <td className="tct count">
        <button onClick={decrease}>
          <p>-</p>
        </button>
        {quantity}
        <button onClick={increase}>
          <p>+</p>
        </button>
      </td>
      <td className="trt">{quantity * price}</td>
      <td className="tct btn-list">
        <button className="order-btn">주문하기</button>
        <button onClick={e => deleteHandler(e, id)}>삭제</button>
      </td>
    </tr>
  );
};

export default CartProduct;
