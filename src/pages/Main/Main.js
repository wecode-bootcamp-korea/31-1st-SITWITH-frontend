import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Main.scss';

const Main = () => {
  const [banner, setBanner] = useState([]);
  const [babyChair, setBabyChair] = useState([]);
  const [officeChair, setOfficeChair] = useState([]);

  useEffect(() => {
    fetch('/data/mainBanner.json')
      .then(res => res.json())
      .then(res => setBanner(res));
  });
  return (
    <main className="main">
      <section className="carousel-section">
        <Carousel slides={banner} />
      </section>
      <section className="product-section">
        <article className="section-inner">
          <div className="section-header">
            <h2 className="section-title">TASK CHAIR</h2>
            <a className="link-more" href="#;">
              ALL PRODUCTS
            </a>
          </div>
          <div className="section-body">
            <ul className="menu-list col-2">
              <li className="menu-item">
                <div className="img-wrap">
                  <img
                    className="img-thumb"
                    src="images/main/task_chair_1.jpeg"
                    alt="제품이미지"
                  />
                </div>
                <h3 className="item-title">T80</h3>
                <p className="item-desc">ULTIMATE CHAIR</p>
              </li>
              <li className="menu-item">
                <div className="img-wrap">
                  <img
                    className="img-thumb"
                    src="images/main/task_chair_2.jpeg"
                    alt="제품이미지"
                  />
                </div>
                <h3 className="item-title">T50</h3>
                <p className="item-desc">좋은 의자의 기본</p>
              </li>
            </ul>
          </div>
        </article>
      </section>
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
                <div className="img-wrap">
                  <img
                    className="img-thumb"
                    src="images/main/kids_chair_1.jpeg"
                    alt="제품이미지"
                  />
                </div>
                <h3 className="item-title">molti</h3>
                <p className="item-desc">앉음마부터 좋은 자세로</p>
              </li>
              <li className="menu-item">
                <div className="img-wrap">
                  <img
                    className="img-thumb"
                    src="images/main/kids_chair_2.jpeg"
                    alt="제품이미지"
                  />
                </div>
                <h3 className="item-title">atti</h3>
                <p className="item-desc">플레이 체어</p>
              </li>
              <li className="menu-item">
                <div className="img-wrap">
                  <img
                    className="img-thumb"
                    src="images/main/kids_chair_3.jpeg"
                    alt="제품이미지"
                  />
                </div>
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
