import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import '../../styles/common.scss';
import '../../styles/reset.scss';

const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/Main/Main.');
  };
  return (
    <div className="login">
      <h1 className="login-title">LOGIN</h1>

      <div className="bar">
        <p />
      </div>

      <div className="member-login">
        <div className="member-login-title">회원 로그인</div>
        <div className="login-container">
          <form className="id-box">
            <span className="id-title">아이디</span>
            <input type="text" />
            <span className="pw-title">비밀번호</span>
            <input type="password" />
            <button onClick={onLogin} className="login-button">
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
