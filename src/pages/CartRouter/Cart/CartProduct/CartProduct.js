import React from 'react';
import './CartProduct.scss';

const CartProduct = ({
  product,
  checkList,
  checkHandler,
  cartDelete,
  addCompareList,
}) => {
  const {
    image_url,
    cart_id,
    product_name,
    color_name,
    product_price,
    quantity,
  } = product;
  return (
    <tr className="cartProduct">
      <td className="tct">
        <input
          type="checkbox"
          className="checkbox"
          checked={checkList.includes(cart_id)}
          onChange={e => checkHandler(e, cart_id)}
        />
      </td>
      <td className="product">
        <div className="product-img">
          <img src={image_url} alt={`상품이미지${cart_id}`} />
        </div>
        <p>{product_name.replace(/\\n/g, '\n')}</p>
      </td>
      <td className="tct">{color_name}</td>
      <td className="trt">
        {Math.floor(product_price)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </td>
      <td className="tct count">{quantity}</td>
      <td className="trt">
        {(quantity * product_price)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </td>
      <td className="tct btn-list">
        <button className="order-btn">주문하기</button>
        <button onClick={e => cartDelete(e, cart_id)}>삭제</button>
        <button onClick={e => addCompareList(e, product)}>비교하기</button>
      </td>
    </tr>
  );
};

export default CartProduct;
