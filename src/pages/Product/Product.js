import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = props => {
  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(1);
  const [colorIndex, setColorIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const navigate = useNavigate();

  const addToCart = event => {
    event.preventDefault();
    if (localStorage.getItem('Authorization')) {
      alert(
        '장바구니 등록은 로그인이 필요합니다.\n로그인 페이지로 이동합니다.'
      );
      navigate('/login');
    } else {
      fetch('http://13.125.108.50:8000/carts', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
        body: JSON.stringify({
          productcolor_id: product[colorIndex].colors.id,
          quantity: counter,
        }),
      });
    }
  };

  // const [colorRadio, setColorRadio] = useState([]);
  // const handleCheckedColor = e => {
  //   setColorRadio(e.target.value);
  // };

  const params = useParams();

  useEffect(() => {
    fetch(`http://13.125.108.50:8000/products/${params.id}`)
      .then(res => res.json())
      .then(res => setProduct(res.result));
    localStorage.setItem(
      'Authorization',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjQ5NTc3NzAxfQ.UD3o8LP7yTx5uLU3ZuWD1UUST3iJJMy8wF16yYG4vXA'
    );
  }, []);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(count => count - 1);
    }
  };

  return (
    <>
      {product.length !== 0 && (
        <div className="product">
          <div className="detail-section">
            <div className="header-group">
              <div className="group-wrap">
                <div className="left-area">
                  <div className="img-wrap">
                    <img
                      className="img-thumb"
                      src={product[colorIndex].colors.images[imageIndex]}
                      alt=""
                    />
                  </div>
                </div>
                <div className="right-area">
                  <div className="txt-group">
                    <div className="name">{product[colorIndex].name}</div>
                    <div className="price">￦{product[colorIndex].price}</div>
                  </div>
                  <div className="color-group">
                    <div className="group-title">color / 색상</div>
                    <ul className="color-list">
                      {product.map((product, index) => (
                        <li className="color-item" key={index}>
                          <input
                            type="radio"
                            onClick={() => setColorIndex(index)}
                            name="color"
                            value={product.colors.color}
                            id={product.colors.color}
                            defaultChecked={index === 0}
                          />
                          <label
                            htmlFor={product.colors.color}
                            className={product.colors.color}
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="color-name">
                      {product[colorIndex].colors.color}
                    </div>
                  </div>
                  <div className="count-group">
                    <div className="group-title">QUANTITY / 수량</div>
                    <div className="counter">
                      <button className="btn-dec" onClick={decrease} />
                      <div className="inpt-count">{counter}</div>
                      <button className="btn-inc" onClick={increase} />
                    </div>
                  </div>
                  <div className="btn-group">
                    <button className="btn-purchase">
                      <i className="ico-product ico-product-credit" />
                      <span className="btn-txt">구매하기</span>
                    </button>
                    <button
                      className="btn-cart"
                      onClick={event => addToCart(event)}
                    >
                      <i className="ico-product ico-product-cart" />
                      <span className="btn-txt">장바구니</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-group">
              <div className="group-wrap">
                <div className="img-select">
                  <ul className="img-list">
                    {product[colorIndex].colors.images.map((image, index) => (
                      <li className="img-item" key={index}>
                        <input
                          type="radio"
                          name="image"
                          defaultValue={index}
                          id={index}
                          defaultChecked={index === 0}
                        />
                        <label
                          htmlFor={index}
                          onClick={() => setImageIndex(index)}
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        >
                          <img src={image} alt="" />
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="info-section">
            <div className="group-wrap">
              <img
                className="img-info"
                src="../images/productDetail/img-chair-info.jpg"
                alt=""
              />
              {product[colorIndex].colors.images.map((image, index) => (
                <img className="img-info" key={index} src={image} alt="" />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
