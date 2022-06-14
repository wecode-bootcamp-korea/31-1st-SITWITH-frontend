import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ServiceMenu = () => {
  const [loginInfo, setLoginInfo] = useState('로그인');
  let Authorization = localStorage.getItem('Authorization');
  const navigate = useNavigate();

  useEffect(() => {
    if (Authorization === null) {
      setLoginInfo('로그인');
    } else {
      setLoginInfo('로그아웃');
    }
  }, [Authorization]);

  const loginClick = () => {
    if (loginInfo === '로그인') {
      navigate('/Login');
    } else {
      localStorage.removeItem('Authorization');
      localStorage.removeItem('compareList');
      alert('로그아웃 되었습니다.');
      navigate('/');
      setLoginInfo('로그인');
    }
  };
  const goToCompare = () => {
    if (Authorization !== null) {
      navigate('/carts/compare');
    } else {
      alert('로그인 후 사용 가능합니다.');
      navigate('/Login');
    }
  };

  const goToCart = () => {
    if (Authorization !== null) {
      navigate('/carts');
    } else {
      alert('로그인 후 사용 가능합니다.');
      navigate('/Login');
    }
  };
  return (
    <ul className="sub-menu-list">
      <li className="sub-menu-item">
        <div className="link-menu" style={{ cursor: 'pointer' }}>
          <span className="txt" onClick={loginClick}>
            {loginInfo}
          </span>
        </div>
      </li>
      <li className="sub-menu-item">
        <Link className="link-menu" to="/join">
          <span className="txt">회원가입</span>
        </Link>
      </li>
      <li className="sub-menu-item">
        <div
          className="link-menu"
          style={{ cursor: 'pointer' }}
          onClick={goToCompare}
        >
          <i className="ico-nav ico-nav-compare" />
          <span className="txt">비교하기</span>
        </div>
      </li>
      <li className="sub-menu-item">
        <div
          className="link-menu"
          style={{ cursor: 'pointer' }}
          onClick={goToCart}
        >
          <i className="ico-nav ico-nav-cart" />
          <span className="txt">장바구니</span>
        </div>
      </li>
    </ul>
  );
};
export default ServiceMenu;
