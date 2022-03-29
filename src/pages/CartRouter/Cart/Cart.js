import React, { useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <div className="contents">
      <h1>장바구니</h1>
      <div className="bar">
        <p />
      </div>
      <div className="process-bar">
        <div className="cart-bar">
          <div className="process-bar-img">
            <img src="/images/shopping-bag.png" alt="shopping-bag" />
          </div>
          <span>1. 장바구니</span>
        </div>
        <div className="order-bar">
          <div className="process-bar-img">
            <img src="/images/credit-card.png" alt="credit-card" />
          </div>
          <span>2. 주문하기</span>
        </div>
      </div>
      <div className="input-cart">
        <form className="cart-form">
          <table className="cart-table">
            <thead>
              <tr>
                <th className="width-50">
                  <input type="checkbox" className="check-all" />
                </th>
                <th colSpan={2}>제품명</th>
                <th className="width-100">색상</th>
                <th className="width-90">판매가격</th>
                <th className="width-80">수량</th>
                <th className="width-90">주문금액</th>
                <th className="width-100">&nbsp;</th>
              </tr>
            </thead>
            {cartList.length !== 0 ? (
              <tbody>
                {cartList.map(product => (
                  <tr key={product.id}>
                    <td>
                      <input type="checkbox" className="check-{product.id}" />
                    </td>
                    <td className="tct wide-100">
                      <div className="product-img">
                        <img
                          src="/img/credit-card"
                          alt="상품이미지{product.id}"
                        />
                      </div>
                    </td>
                    <td>
                      <p>{product.name}</p>
                    </td>
                    <td>{product.color}</td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={8} className="tct height-150">
                    <span>장바구니에 담긴 품목이 없습니다.</span>
                  </td>
                </tr>
              </tbody>
            )}

            <tfoot>
              <tr>
                <th colSpan={6} className="height-40">
                  &nbsp;
                </th>
                <th className="tct">총 결제금액</th>
                <th className="tct">{total}원</th>
              </tr>
            </tfoot>
          </table>
        </form>
      </div>
      <div className="button-list">
        <ul>
          <li>
            <button>계속쇼핑하기</button>
          </li>
          <li>
            <button>선택상품 삭제하기</button>
          </li>
          <li>
            <button>선택상품 주문하기</button>
          </li>
          <li>
            <button className="order-all">전체상품 주문하기</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
