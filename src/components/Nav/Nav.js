import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-top">
        <ul className="sub-menu-list">
          {MENU_DATA.service.map(menu => (
            <li className="sub-menu-item" key={menu.title}>
              <Link className="link-menu" to={menu.link}>
                <i className={`ico-nav ico-nav-${menu.icon}`} />
                <span className="txt">{menu.title}</span>
              </Link>
            </li>
          ))}
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
              {MENU_DATA.product.map(menu => (
                <li className="product-menu-item" key={menu.title}>
                  <Link className="link-product" to={menu.link}>
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MENU_DATA = {
  service: [
    { title: '로그인', link: '/Login' },
    { title: '회원가입', link: '/Join' },
    { title: '비교하기', link: '/Compare', icon: 'compare' },
    { title: '장바구니', link: '/Cart', icon: 'cart' },
  ],
  product: [
    { title: '모든 제품보기', link: '/ProductList' },
    { title: '사무용 의자', link: '/ProductList/category/office' },
    { title: '학생용 의자', link: '/ProductList/category/study' },
    { title: '유아용 의자', link: '/ProductList/category/baby' },
    { title: '중역용 의자', link: '/ProductList/category/executive' },
  ],
};

export default Nav;
