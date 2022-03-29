import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      {/* carousel-seciton */}
      <section className="carousel-section"></section>
      {/* taskchair-section */}
      <section className="product-section">
        <article className="section-inner">
          <div className="section-header">
            <h2 className="section-title">TASK CHAIR</h2>
            <a className="link-more">ALL PRODUCTS</a>
          </div>
          <div className="section-body">
            <ul className="menu-list col-2">
              <li className="menu-item">
                <img
                  className="img-thumb"
                  src="images/main/task_chair_1.jpeg"
                />
                <h3 className="item-title">T80</h3>
                <p className="item-desc">ULTIMATE CHAIR</p>
              </li>
              <li className="menu-item">
                <img
                  className="img-thumb"
                  src="images/main/task_chair_2.jpeg"
                />
                <h3 className="item-title">T50</h3>
                <p className="item-desc">좋은 의자의 기본</p>
              </li>
            </ul>
          </div>
        </article>
      </section>
      {/* kidschair-section */}
      <section className="product-section">
        <article className="section-inner">
          <div className="section-header">
            <h2 className="section-title">KIDS CHAIR</h2>
            <a href="#;" className="link-more">
              ALL PRODUCTS
            </a>
          </div>
          <div className="section-body">
            <ul className="menu-list col-3">
              <li className="menu-item">
                <img
                  className="img-thumb"
                  src="images/main/kids_chair_1.jpeg"
                />
                <h3 className="item-title">molti</h3>
                <p className="item-desc">앉음마부터 좋은 자세로</p>
              </li>
              <li className="menu-item">
                <img
                  className="img-thumb"
                  src="images/main/kids_chair_2.jpeg"
                />
                <div className="img-wrap"></div>
                <h3 className="item-title">atti</h3>
                <p className="item-desc">플레이 체어</p>
              </li>
              <li className="menu-item">
                <img
                  className="img-thumb"
                  src="images/main/kids_chair_3.jpeg"
                />
                <h3 className="item-title">ringo</h3>
                <p className="item-desc">생각이 자라는 의자</p>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
