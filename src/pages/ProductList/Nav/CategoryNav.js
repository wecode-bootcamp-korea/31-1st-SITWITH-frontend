import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNav.scss';

const CategoryNav = () => {
  const categoryPages = [
    { id: 1, link: '/baby', category: 'BABY CHAIR' },
    { id: 2, link: '/executive', category: 'EXECUTIVE CHAIR' },
    { id: 3, link: '/office', category: 'OFFICE CHAIR' },
    { id: 4, link: '/study', category: 'STUDY CHAIR' },
  ];

  return (
    <div className="category-nav">
      <dl>
        <dt>
          <Link to="/products">
            <span>ALL</span>
          </Link>
        </dt>
        {categoryPages.map(list => (
          <dd key={list.id}>
            <Link to={`/products${list.link}`}>
              <span>{list.category}</span>
            </Link>
          </dd>
        ))}
      </dl>
    </div>
  );
};

export default CategoryNav;
