import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-top">
        <ul className="sub-menu-list">
          <li className="sub-menu-item">
            <Link className="link-menu" to="/Login">
              <span className="txt">로그인</span>
            </Link>
          </li>
          <li className="sub-menu-item">
            <Link className="link-menu" to="/Join">
              <span className="txt">회원가입</span>
            </Link>
          </li>
          <li className="sub-menu-item">
            <Link className="link-menu" to="/Compare">
              <i className="ico-nav ico-nav-compare" />
              <span className="txt">비교하기</span>
            </Link>
          </li>
          <li className="sub-menu-item">
            <Link className="link-menu" to="/Cart">
              <i className="ico-nav ico-nav-cart" />
              <span className="txt">장바구니</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-bottom">
        <div className="left-area">
          <Link className="link-logo" to="/">
            <img className="img-logo" src="images/nav/logo.svg" alt="SITWITH" />
          </Link>
        </div>
        <div className="right-area">
          <div className="product-menu">
            <div className="menu-title">PRODUCTS</div>
            <ul className="product-menu-list">
              <li className="product-menu-item product-all">
                <Link className="link-product" to="/Product">
                  모든 제품보기
                </Link>
              </li>
              <li className="product-menu-item">
                <Link className="link-product" to="/Product">
                  사무용 의자
                </Link>
              </li>
              <li className="product-menu-item">
                <Link className="link-product" to="/Product">
                  학생용 의자
                </Link>
              </li>
              <li className="product-menu-item">
                <Link className="link-product" to="/Product">
                  유아용 의자
                </Link>
              </li>
              <li className="product-menu-item">
                <Link className="link-product" to="/Product">
                  중역용 의자
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
