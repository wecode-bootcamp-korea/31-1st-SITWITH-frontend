import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-banner">
        <Link to="/main">
          <img className="logo-img" alt="logo" src="/images/Footer/logo.svg" />
        </Link>
        <a
          href="https://github.com/wecode-bootcamp-korea/31-1st-SITWITH-frontend"
          className="link-github"
        >
          <img
            clssName="github-img"
            alt="github"
            src="/images/Footer/ico_github.png"
          />
        </a>
      </div>
      <div className="footer-main">
        <div className="inform">
          <div className="inform-title">(주) SITWITH </div>
          <br />
          <br />
          <div className="inform-main">
            대표 : 위코드 31기 SITWITH
            <br />
            주소 : 서울시 강남구 테헤란로 427 위워크 타워
            <br />
            <br />
            사업자 등록 번호 : 000-00-00000
            <br />
            통신판매신고번호
            <br />
            <br />
            FAX :02-0000-0000
          </div>
        </div>
        <div className="footer-category">
          <ul className="title-list">
            <li className="products-title">
              제품
              <ul className="products">
                <Link to="/product/category">
                  <li>사무용 의자</li>
                </Link>
                <Link to="/product/category">
                  <li>학생용 의자</li>
                </Link>
                <Link to="/product/category">
                  <li>유아용 의자</li>
                </Link>
                <Link to="/product/category">
                  <li>중역용 의자</li>
                </Link>
              </ul>
            </li>
            <li className="service-title">
              고객 센터
              <ul className="service">
                <li>FAQ</li>
                <li>품질 보증 서비스</li>
                <li>제품설명서 다운로드</li>
                <li>시디즈 서비스</li>
              </ul>
            </li>
            <li className="support-title">
              친절 상담
              <ul className="support">
                <li className="num">7777-7777</li>
                <li>평일 | 09:30 - 17:30</li>
                <li>토요일 | 09:30 - 12:30</li>
                <li>일요일, 공휴일 휴무</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
