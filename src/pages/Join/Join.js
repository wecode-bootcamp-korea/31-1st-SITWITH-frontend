import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join.scss';

const Join = () => {
  const [joinValue, setJoinValue] = useState({
    id: '',
    pw: '',
    email: '',
  });

  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const onJoin = () => {
    const { id, pw, email } = joinValue;
    const validId = id !== '' && 2 < id.length < 16;
    const validPw = pw !== '' && 7 < pw.length < 16;
    const validEmail = email !== '' && pw.includes('@', '.');

    if (!checked) {
      alert('이용약관은 필수 동의 사항입니다.');
    } else if (!validId) {
      alert(
        '[ 아이디 ] 는(은) 공백없는 3~15자의 소문자와 숫자를 조합하여 입력해주세요.'
      );
    } else if (!validPw) {
      alert(
        '[ 비밀번호 ] 는(은) 공백없는 8~15자의 영문/특수문자/숫자를 조합하여 입력해야 합니다.'
      );
    } else if (!validEmail) {
      alert('[ 이메일 ] 은(는) 공백없이 @/. 을 조합하여 입력해야 합니다');
    } else {
      fetch('http://10.58.0.27:8000/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          username: id,
          password: pw,
          email: email,
        }),
      })
        .then(res => res.json())
        .then(res => {
          const { message } = res;
          if (res.message === 'Success') {
            navigate('/login');
          } else {
            alert(LOGIN_MESSAGE[`${message}`]);
          }
        });
    }
  };

  function handleJoinValue(e) {
    const { name, value } = e.target;
    setJoinValue(joinValue => ({ ...joinValue, [name]: value }));
  }

  function handleCheckbox(e) {
    setChecked(e.target.checked);
  }

  return (
    <div className="join">
      <h1 className="join-title">통합회원가입</h1>
      <div className="bar">
        <div className="bar-line" />
      </div>
      <div className="agreement">
        <h3 className="section-title">약관동의</h3>
        <div className="check-terms-use">
          <input type="checkbox" onChange={handleCheckbox} />
          <span className="terms-use-title">이용약관</span>
        </div>
        <div className="terms-use">
          <p>{TERMS_USE_MESSAGE}</p>
        </div>
      </div>
      <div className="bar">
        <div className="bar-line" />
      </div>
      <div className="member-data">
        <h3 className="section-title">회원정보 입력</h3>
        <div className="member-data-container">
          <form className="member-data-box">
            <table className="member-data-table">
              <tbody>
                <tr className="member-id-box">
                  <th className="member-id-title">아이디</th>
                  <td className="member-id-message">
                    <input
                      onChange={handleJoinValue}
                      className="member-id-input"
                      type="text"
                      name="id"
                    />
                    공백없는 3~15자의 소문자와 숫자를 조합하여 입력해주세요.
                  </td>
                </tr>

                <tr className="member-pw-box">
                  <th className="member-pw-title">비밀번호</th>
                  <td className="member-pw-message">
                    <input
                      onChange={handleJoinValue}
                      className="member-pw-input"
                      name="pw"
                      type="password"
                    />
                    <p>
                      공백없는 8~15자의 영문/특수문자/숫자를 조합하여 입력해야
                      합니다.
                    </p>
                  </td>
                </tr>
                <tr className="member-email-box">
                  <th className="member-email-title">이메일</th>
                  <td className="member-email-message">
                    <input
                      onChange={handleJoinValue}
                      className="member-email-input"
                      name="email"
                      type="email"
                    />
                    <p>공백없이 @/. 을 조합하여 입력해야 합니다.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={onJoin}
              type="button"
              className="member-data-button"
            >
              확인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;

const LOGIN_MESSAGE = {
  'Invalid username':
    '아이디는 공백없는 3~15자의 소문자와 숫자를 조합하여 입력해주세요.',
  'Invalid password':
    '비밀번호는 8~15자의 영문/특수문자/숫자를 조합하여 입력해야 합니다.',
  'Invalid email': '이메일은 공백없이 @/. 을 조합하여 입력해야 합니다',
  'Username already exists': '이미 존재하는 아이디입니다.',
  'Email already exists': '이미 존재하는 이메일입니다.',
};

const TERMS_USE_MESSAGE =
  "제1조(목적) 본 회원약관은 (이하 '갑'라 한다)이 운영하는 인터넷관련 서비스(이하 '서비스'라 한다)를 이용함에 있어 관리자와 이용자(이하'회원'라 한다)의 권리, 의무 및 책임사항을 규정함을 목적으로 한다.제2조 (약관의 효력) 1.본 약관은 '갑'에 회원 가입 시 회원들에게통지함으로써 효력을 발생합니다. 2.'갑'은 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다. 3.약관의 변경사항 및 내용은 '갑'의 홈페이지에 게시하는 방법으로 공시합니다. 제3조 (약관 이외의 준칙) 이 약관에 명시되지 않은 사항이 전기 통신 기본법, 전기통신 사업법, 기타 관련 법령에 규정되어 있는 경우 그 규정에 따릅니다. 제4조 (이용계약의 체결) 회원 가입 시 회원 약관 밑에 있는 동의버튼을 누르면 약관에 동의하여 이 계약이 체결된 것으로 간주한다.제5조 (용어의 정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 1.회원: '갑'과 서비스 이용에 관한 계약을 체결한 자 2.아이디(ID): 회원 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 '갑'이 승인하는 문자와 숫자의 조합 3.비밀번호: 회원이 통신상의 자신의 비밀을 보호하기 위해 선정한 문자와 숫자의 조합 제6조 (이용신청) 1.회원 가입은 온라인으로 가입신청 양식에 기록하여 '갑'에 제출함으로써 이용신청을 할 수 있습니다. 2.가입희망 회원은 반드시 자신의 본명 및 주민등록번호로 이용신청을 하여야 하며, 1개의 ID만 신청을 할 수 있습니다. 제7조(회원가입의 승낙) '갑'의 회원 가입 신청 양식에 가입 희망 회원이 인터넷으로 제6조와 같이 신청하면 '갑'은 바로 가입을 승인하여 서비스를 이용할 수 있다.제8조(회원가입 신청거절 및 강제 탈퇴) 1.'갑'은 타인의 명의나 주민등록번호를 도용하여 회원가입신청을 할 경우 회원가입신청을 거절할 수 있다. 2. 회원가입신청이 승인이 된 후에도 허위사실의 기재가 발각되거나 '갑'의 명예를 회손시키거나 음란물이나 불건전한 내용을 게재할 경우 회원의 자격을 강제 탈퇴시킬 수 있다. 제9조 (서비스 제공의 중지) '갑'은 다음 각 호의 1에 해당하는 경우 서비스의 제공을 중지할 수 있습니다 1.설비의 보수 등을 위하여 부득이한 경우 2.전기통신사업법에 규정된 기간통신사업자가 전기통신서비스를 중지하는 경우 3.기타 '갑'이 서비스를 제공할 수 없는 사유가 발생한 경우. 제10조 ('갑'의 의무) 1. '갑'은 계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을 다하여야 합니다. 2.'갑'은 항상 회원의 신용정보를 포함한 개인신상정보의 보안에 대하여 관리에 만전을 기함으로서 회원의 정보보안에 최선을 다하여야 합니다. 제11조 (개인정보보호) 1.'갑'은 이용자의 정보수집시 서비스의 제공에 필요한 최소한의 정보를 수집합니다. 2.제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 '갑'이 집니다. 다만, 다음의 경우에는 예외로 합니다.①통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정개인을 식별할 수 없는 형태로 제공하는 경우 ②전기통신기본법 등 법률의규정에 의해 국가기관의 요구가 있는 경우 ③범죄에 대한 수사상의 목적이있거나 정보통신윤리 위원회의 요청이 있는 경우 ④기타 관계법령에서정한 절차에 따른 요청이 있는 경우 3.회원은 언제든지 '갑'이 가지고있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며'갑'은 이에 대해 지체없이 처리합니다.";
