import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Main.scss';

const Main = () => {
  const ImageData = [
    {
      image: '/images/main/img_slide_01.jpeg',
      sub: '의자 위 인생은\n진행중',
      title: 'SIDIZ',
      alt: 'SIDIZ',
    },
    {
      image: '/images/main/img_slide_02.jpeg',
      sub: '유니크한 감각의\n인테리어체어',
      title: 'WINDEN',
      alt: 'WINDEN',
    },
    {
      image: '/images/main/img_slide_03.jpeg',
      sub: '바퀴는 빼고\n집중력은 더하다',
      title: 'ible',
      alt: 'ible',
    },
  ];
  return (
    <main className="main">
      <div className="carousel-section">
        <Carousel slides={ImageData} />
      </div>
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
