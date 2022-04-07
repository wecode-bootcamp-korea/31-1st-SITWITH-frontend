import React from 'react';
import { Link } from 'react-router-dom';

const ProductMenu = () => {
  return (
    <ul className="product-menu-list">
      {MENU_DATA.map((menu, index) => (
        <li className="product-menu-item" key={index}>
          <Link className="link-product" to={menu.link}>
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MENU_DATA = [
  { title: '모든 제품보기', link: '/ProductList' },
  { title: '사무용 의자', link: '/ProductList/category/office' },
  { title: '학생용 의자', link: '/ProductList/category/study' },
  { title: '유아용 의자', link: '/ProductList/category/baby' },
  { title: '중역용 의자', link: '/ProductList/category/executive' },
];

export default ProductMenu;
