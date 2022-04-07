import React from 'react';
import { Link } from 'react-router-dom';

const ServiceMenu = () => {
  return (
    <ul className="sub-menu-list">
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
  { title: '로그인', link: '/Login' },
  { title: '회원가입', link: '/Join' },
  { title: '비교하기', link: '/Compare', icon: 'compare' },
  { title: '장바구니', link: '/Cart', icon: 'cart' },
];

export default ServiceMenu;
