import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = BANNER_DATA.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useInterval(() => {
    nextSlide();
  }, 4000);
  return (
    <div className="carousel">
      <div className="carousel-display">
        {BANNER_DATA.map((slide, index) => {
          return (
            <div className="carousel-item" key={index}>
              {index === current && (
                <div className="carousel-inner" key={index}>
                  <div className="img-area">
                    <Link
                      className="link-category"
                      to={`/category/${slide.url}`}
                    >
                      <img
                        className="img-thumb"
                        src={`/images/main/img_slide_${slide.id}.jpeg`}
                        alt={slide.alt}
                      />
                    </Link>
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
      </div>
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

const BANNER_DATA = [
  {
    id: '1',
    sub: '함께 앉아\n스터디',
    title: 'SW-STUDY',
    alt: 'SW-STUDY',
    url: 'study',
  },
  {
    id: '2',
    sub: '함께 앉아서\n성장하는 아이들',
    title: 'SW-BABY',
    alt: 'SW-BABY',
    url: 'baby',
  },
  {
    id: '3',
    sub: '함께 앉아\n정년퇴직',
    title: 'SW-EXECUTIVE',
    alt: 'SW-EXECUTIVE',
    url: 'executive',
  },
  {
    id: '4',
    sub: '모두 함께\n칼퇴근',
    title: 'SW-OFFICE',
    alt: 'SW-OFFICE',
    url: 'office',
  },
];

export default Carousel;
