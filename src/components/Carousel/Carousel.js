import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="carousel">
      <ul className="carousel-list">
        {slides.map((slide, index) => {
          return (
            <>
              {index === current && (
                <li className="carousel-item" key={index}>
                  <div className="img-area">
                    <img className="img-thumb" src={slide.image} alt="" />
                  </div>
                  <div className="txt-area">
                    <div className="sub-txt">{slide.sub}</div>
                    <div className="title-txt">{slide.title}</div>
                  </div>
                </li>
              )}
            </>
          );
        })}
      </ul>
      <div className="carousel-nav">
        <button className="btn-prev" onClick={prevSlide}>
          PREV
        </button>
        <button className="btn-next" onClick={nextSlide}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Carousel;
