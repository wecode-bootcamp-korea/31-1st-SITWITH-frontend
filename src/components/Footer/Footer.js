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
            className="github"
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
                {PRODUCT_DATA.map((data, index) => (
                  <li key={index}>
                    <Link to={data.link}>{data.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="service-title">
              고객 센터
              <ul className="service">
                {SERVICE_DATA.map(data => (
                  <li key={data.id}>{data.list}</li>
                ))}
              </ul>
            </li>
            <li className="support-title">
              친절 상담
              <ul className="support">
                {SUPPORT_DATA.map(data => (
                  <li key={data.id}>{data.list}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const PRODUCT_DATA = [
  { title: '사무용 의자', link: '/products/office' },
  { title: '학생용 의자', link: '/products/study' },
  { title: '유아용 의자', link: '/products/baby' },
  { title: '중역용 의자', link: '/products/executive' },
];
const SERVICE_DATA = [
  { id: 1, list: 'FAQ' },
  { id: 2, list: '품질 보증 서비스' },
  { id: 3, list: '제품설명서 다운로드' },
  { id: 4, list: '시디즈 서비스' },
];
const SUPPORT_DATA = [
  { id: 1, list: '7777-7777' },
  { id: 2, list: '평일 | 09:30 - 17:30' },
  { id: 3, list: '토요일 | 09:30 - 12:30' },
  { id: 4, list: '일요일, 공휴일 휴무' },
];
