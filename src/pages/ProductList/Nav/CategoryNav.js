import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNav.scss';

const CategoryNav = () => {
  return (
    <div className="category-nav">
      <dl>
        <dt>
          <Link to="/products">
            <span>모든제품</span>
          </Link>
        </dt>
        <dd>
          <Link to="/products/baby">
            <span>BABY CHAIR</span>
          </Link>
        </dd>
        <dd>
          <Link to="/products/executive">
            <span>EXECUTIVE CHAIR</span>
          </Link>
        </dd>
        <dd>
          <Link to="/products/office">
            <span>OFFICE CHAIR</span>
          </Link>
        </dd>
        <dd>
          <Link to="/products/study">
            <span>STUDY CHAIR</span>
          </Link>
        </dd>
      </dl>
    </div>
  );
};
export default CategoryNav;
