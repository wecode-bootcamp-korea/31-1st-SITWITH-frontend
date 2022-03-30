import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import '../../styles/common.scss';
import '../../styles/reset.scss';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const navigate = useNavigate();
  const onLogin = () => {
    fetch('http://10.58.0.163:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: inputValue.id,
        password: inputValue.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          navigate('/Main/Main');
        } else {
          alert(res);
        }
      });
  };

  // function handlePwInput(event) {
  //   const { value } = event.target;
  //   console.log(value);
  //   setPw(value);
  // setPw(event.target.value);
  //}

  function handleInputValue(e) {
    const { name, value } = e.target;
    setInputValue(inputValue => ({ ...inputValue, [name]: value }));
  }

  return (
    <div className="login">
      <h1 className="login-title">LOGIN</h1>

      <div className="bar">
        <p />
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
                <tr>
                  <td>
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
