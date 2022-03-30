import React, { useEffect, useState } from 'react';
import './Cart.scss';
import CartProduct from './CartProduct/CartProduct';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setCartList(data.result);
        let totalList = data.result.map(
          product => product.quantity * product.price
        );

        let sum = 0;
        for (let i of totalList) {
          sum += i;
        }
        setTotal(sum);
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
  const deleteHandler = (e /*, id*/) => {
    e.preventDefault();
    fetch('/data/data.json').then(res => {
      if (res.status === 200) {
        fetch('/data/data2.json')
          .then(res => res.json())
          .then(data => {
            setCartList(data.result);
            let totalList = data.result.map(
              product => product.quantity * product.price
            );

            let sum = 0;
            for (let i of totalList) {
              sum += i;
            }
            setTotal(sum);
          });
      }
    });
    //  APi 사용 때 수정
    /*
    fetch('http://주소/삭제/id', {
      method: 'delete',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    }).then(res => {
      if (res.status === 204) {
        fetch('http://주소/장바구니', {
          headers: {
            Authorization: localStorage.getItem('Authorization'),
          },
        })
          .then(res.json())
          .then(data => {
            setCartList(data.result);
            let totalList = data.result.map(
              product => product.quantity * product.price
            );

            let sum = 0;
            for (let i of totalList) {
              sum += i;
            }
            setTotal(sum);
          });
      }
    });
    */
  };
  // APi 사용 때 수정
  /*
  const deleteCheckHandler = e => {
    e.preventDefault();
    fetch('http://주소/삭제', {
      method: 'delete',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      body: JSON.stringify({
        cart_id: checkList,
      }),
    }).then(res => {
      if (res.statusCode === 204) {
        fetch('http://주소/장바구니', {
          headers: {
            Authorization: localStorage.getItem('Authorization'),
          },
        })
          .then(res.json())
          .then(data => {
            setCartList(data.result);
            let totalList = data.result.map(
              product => product.quantity * product.price
            );
            let sum = 0;
            for (let i of totalList) {
              sum += i;
            }
            setTotal(sum);
          });
      }
    });
  };*/
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
