import React from 'react';
import { Link } from 'react-router-dom';
import ProductMenu from './ProductMenu';
import ServiceMenu from './ServiceMenu';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-top">
        <ServiceMenu />
      </div>
      <div className="nav-bottom">
        <div className="left-area">
          <Link className="link-logo" to="/">
            <img className="img-logo" src="images/nav/logo.svg" alt="SITWITH" />
          </Link>
        </div>
        <div className="right-area">
          <div className="product-menu">
            <div className="menu-title">PRODUCT</div>
            <ProductMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
