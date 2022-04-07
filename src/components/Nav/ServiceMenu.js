import React from 'react';
import { Link } from 'react-router-dom';

const ServiceMenu = () => {
  return (
    <ul className="sub-menu-list">
      <li className="sub-menu-item">
        <Link className="link-menu" to="/Login">
          {localStorage.getItem('Authorization') === null ? (
            <span className="txt">로그인</span>
          ) : (
            <span
              className="txt"
              onClick={() => localStorage.removeItem('Authorization')}
            >
              로그아웃
            </span>
          )}
        </Link>
      </li>
      {MENU_DATA.map(menu => (
        <li className="sub-menu-item" key={menu.title}>
          <Link className="link-menu" to={menu.link}>
            <i className={`ico-nav ico-nav-${menu.icon}`} />
            <span className="txt">{menu.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MENU_DATA = [
  { title: '회원가입', link: '/Join' },
  { title: '비교하기', link: '/carts/compare', icon: 'compare' },
  { title: '장바구니', link: '/carts', icon: 'cart' },
];

export default ServiceMenu;
