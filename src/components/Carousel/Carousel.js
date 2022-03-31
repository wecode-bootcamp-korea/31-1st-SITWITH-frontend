import React, { useState, useEffect, useRef } from 'react';
import './Carousel.scss';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useInterval(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 4000);
  return (
    <div className="carousel">
      {slides.map((slide, index) => {
        return (
          <div className="carousel-display">
            {index === current && (
              <div className="carousel-item" key={index}>
                <div className="img-area">
                  <img
                    className="img-thumb"
                    src={slide.image}
                    alt={slide.alt}
                  />
                </div>
                <div className="txt-area">
                  <div className="sub-txt">{slide.sub}</div>
                  <div className="title-txt">{slide.title}</div>
                </div>
              </div>
            )}
          </div>
        );
      })}
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
