import React from 'react';

const Test = ({
  product,
  colorIndex,
  imageIndex,
  setColorIndex,
  setImageIndex,
  addToCart,
  counter,
  increase,
  decrease,
}) => {
  return (
    <div className="product">
      <div className="detail-section">
        <div className="header-group">
          <div className="group-wrap">
            <div className="left-area">
              <div className="img-wrap">
                <img
                  className="img-thumb"
                  src={product[colorIndex].colors.images[imageIndex]}
                  alt="thumb"
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
  );
};

export default Test;
