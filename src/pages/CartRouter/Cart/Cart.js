import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct/CartProduct';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [total, setTotal] = useState(0);

  const sum = data => {
    let totalList = data.result.map(
      product => product.quantity * product.price
    );

    let sum = 0;
    for (let i of totalList) {
      sum += i;
    }
    setTotal(sum);
  };
  // FIXME : useEffect 내부 장바구니 api 완성되면 수정
  useEffect(() => {
    fetch('/data/cart.json')
      .then(res => res.json())
      .then(data => {
        setCartList(data.result);
        sum(data);
      });
  }, []);

  const checkAllHandler = e => {
    if (e.target.checked) {
      setCheckList(cartList.map(product => product.id));
    } else {
      setCheckList([]);
    }
  };
  const checkHandler = (e, id) => {
    if (e.target.checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter(checkId => checkId !== id));
    }
  };
  // FIXME :  deleteHandler 내부 장바구니 api 완성되면 수정
  const deleteHandler = e => {
    e.preventDefault();
    fetch('/data/cart.json').then(res => {
      if (res.status === 200) {
        fetch('/data/updateCart.json')
          .then(res => res.json())
          .then(data => {
            setCartList(data.result);
            sum(data);
          });
      }
    });

    // TODO : 선택항목 삭제 함수 구현
  };
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
                  <input
                    type="checkbox"
                    className="check-all"
                    onChange={checkAllHandler}
                  />
                </th>
                <th colSpan={2}>제품정보</th>
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
                  <CartProduct
                    key={product.id}
                    product={product}
                    checkList={checkList}
                    checkHandler={checkHandler}
                    deleteHandler={deleteHandler}
                  />
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
                <th className="tct">
                  {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </th>
              </tr>
            </tfoot>
          </table>
        </form>
      </div>
      <div className="button-list">
        <ul>
          <li>
            <Link to="/">
              <button>계속쇼핑하기</button>
            </Link>
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
