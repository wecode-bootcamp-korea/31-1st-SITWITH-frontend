import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../../config';
import './Product.scss';
import Test from './Test';

const Product = () => {
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
      fetch('http://10.58.4.226:8000/carts', {
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

  const params = useParams();

  useEffect(() => {
    fetch(`${API.products}/${params.id}`)
      .then(res => res.json())
      .then(res => setProduct(res.result));
  }, [params.id]);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(count => count - 1);
    }
  };
  console.log(product);

  return (
    <div className="product-wrap">
      {product.length > 0 && (
        <Test
          product={product.result}
          colorIndex={colorIndex}
          imageIndex={imageIndex}
          setColorIndex={setColorIndex}
          setImageIndex={setImageIndex}
          addToCart={addToCart}
          counter={counter}
          increase={increase}
          decrease={decrease}
        />
      )}
    </div>
  );
};

export default Product;
