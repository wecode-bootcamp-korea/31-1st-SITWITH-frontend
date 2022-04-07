import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import './Login.scss';

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    id: '',
    pw: '',
  });

  const navigate = useNavigate();
  const onLogin = () => {
    const { id, pw } = loginValue;
    const emptyIdInput = id.trim() === '';
    const emptyPwInput = pw.trim() === '';
    const emptyLoginInput = emptyIdInput && emptyPwInput;
    if (emptyIdInput) {
      alert('[ 아이디 ] 는(은) 필수항목입니다.');
    } else if (emptyPwInput) {
      alert('[ 비밀번호 ] 는(은) 필수항목입니다.');
    } else if (!emptyLoginInput) {
      fetch(`${API.login}`, {
        method: 'POST',
        body: JSON.stringify({
          username: id,
          password: pw,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'User does not exist') {
            alert('존재하지 않는 아이디입니다.');
          } else if (res.message === 'Password does not match') {
            alert('비밀번호가 일치하지 않습니다.');
          } else if (res.token) {
            localStorage.setItem('Authorization', res.token);
            navigate('/');
          }
        });
    }
  };

  function handleInputValue(e) {
    const { name, value } = e.target;
    setLoginValue(loginValue => ({ ...loginValue, [name]: value }));
  }

  return (
    <div className="login">
      <h1 className="login-title">LOGIN</h1>
      <div className="bar">
        <div className="bar-line" />
      </div>
      <div className="member-login">
        <h2 className="member-login-title">회원 로그인</h2>
        <div className="login-container">
          <form className="login-table">
            <table className="table-box">
              <tbody>
                <tr className="id-box">
                  <th className="id-title">아이디</th>
                  <td>
                    <input
                      className="id-input"
                      type="text"
                      name="id"
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr className="pw-box">
                  <th className="pw-title">비밀번호</th>
                  <td>
                    <input
                      className="pw-input"
                      name="pw"
                      type="password"
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr className="button-box">
                  <th />
                  <td className="button-title">
                    <button
                      type="button"
                      onClick={onLogin}
                      className="login-button"
                    >
                      로그인
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
