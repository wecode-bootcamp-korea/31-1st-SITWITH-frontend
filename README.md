# Sit With

<pre>
  Sit With는 시디즈 사이트를 모티브로 하여 진행한 프로젝트로 소비자의 용도에 딱 맞는 의자를 판매하는 사이트 입니다. Sit With 사이트에서 원하는 의자들을 한 눈에 비교해보고 구매할 수 있습니다.
</pre>

## Stack

### Frontend

- React.js (v18.0)
- Sass
- JavaScript(ES6)
- HTML5/CSS3

### Backend

[Backend github 링크 ](https://github.com/wecode-bootcamp-korea/31-1st-SITWITH-backend)

- Django Web Framework
- Pyhton
- Mysql
- AWS
- Bcrypt
- JWT

### Collaboration tool

- git, github
- Trello
- Notion
- Slack

## Product

[데모 영상](https://www.youtube.com/watch?v=zA0YaKIcKtw)

## 개발 기간 및 인원

개발기간 : 2022.03.28~2022.04.10

### FE Member

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/kjd3495"
        ><img
          src="https://avatars.githubusercontent.com/kjd3495"
          width="100px;"
          alt=""
        /><br /><sub><b>김재도</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/hyunshiness"
        ><img
          src="https://avatars.githubusercontent.com/hyunshiness"
          width="100px;"
          alt=""
        /><br /><sub><b>김경현</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/bonirun"
        ><img
          src="https://avatars.githubusercontent.com/bonirun"
          width="100px;"
          alt=""
        /><br /><sub><b>구본희</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/SloSte34"
        ><img
          src="https://avatars.githubusercontent.com/SloSte34"
          width="100px;"
          alt=""
        /><br /><sub><b>김민수</b></sub></a
      ><br />
    </td>
  </tr>
</table>

### BE Member

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/angrybirdpark"
        ><img
          src="https://avatars.githubusercontent.com/angrybirdpark"
          width="100px;"
          alt=""
        /><br /><sub><b>박지훈</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/JeongHyeon-01"
        ><img
          src="https://avatars.githubusercontent.com/JeongHyeon-01"
          width="100px;"
          alt=""
        /><br /><sub><b>황정현</b></sub></a
      ><br />
    </td>
  </tr>
</table>

## 구현 기능

| 이름       | pages                                  |
| ---------- | -------------------------------------- |
| **김재도** | 장바구니 페이지, 비교하기 페이지       |
| **김경현** | 회원가입 페이지, 로그인 페이지, Footer |
| **구본희** | 메인 페이지, GNB, 상품 상세페이지      |
| **김민수** | 상품 리스트 페이지, 상품 상세페이지    |

# 상세 기능

<h2> 김재도 </h2>
<h3>장바구니 페이지</h3>

- 중첩라우팅을 사용하여서 메뉴 탭을 통해서 메뉴 탭 하단의 내용이 바뀌도록 구현했습니다.
- 데이터베이스에 저장된 회원별 장바구니 정보를 받아와서 출력해줍니다.
- 기존에 장바구니 리스트에 존재하던 제품이 중복 추가되면 수량이 증가됩니다.
- 장바구니 리스트에서 체크박스를 통해 원하는 상품을 선택할 수 있습니다.
- 삭제 기능을 통해 장바구니에서 없애고 싶은 품목을 삭제할 수 있게 했습니다.
- 제품 수량에 따라 금액이 바뀌도록 구현했습니다.
- 총 합계 금액이 출력되도록 구현했습니다.
- 장바구니에서 비교하기 버튼을 클릭 하면 해당 품목이 로컬스토리지에 compareList에 저장되도록 구현했습니다.

<br/>

<table>
  <tr>
    <td align="center">
        <img
          src="https://user-images.githubusercontent.com/92558372/170866177-479a05ba-f000-43b8-9430-0b8cae2e3092.gif"
          width="600px"
        />
        <br/>
        <sub>
        <b>장바구니 등록</b>
        </sub>
        <br />
    </td>
  </tr>
</table>

<br/>

<table>
  <tr>
    <td align="center">
        <img
          src="https://user-images.githubusercontent.com/92558372/170866516-e8b57092-8257-4709-95d4-e9ff209a8245.gif"
          width="600px"
        />
        <br/>
        <sub>
        <b>장바구니 등록 및 비교하기 등록</b>
        </sub>
        <br />
    </td>
  </tr>
</table>

<h3>비교하기 페이지</h3>
<br/>

- 로컬스트리지에 저장된 compareList 가져와서 비교하기 리스트에 추가해줍니다.
- 비교하기 리스트는 4개의 제품 정보 박스가 출력이 되고 슬라이드 형식으로 다음 페이지로 넘어갈 수 있습니다.
- 비교하기 리스트는 항상 한 페이지당 4개의 제품 정보 박스가 출력이 됩니다. 예시로 1개의 상품만 비교하기 리스트에 존재할 경우 3개의 데이터 없음 박스가 생성되어 4개의 박스가 출력됩니다.
- x버튼을 눌러 비교하기 리스트에서 제품을 제거할 수 있습니다.

<br/>

<table>
  <tr>
    <td align="center">
        <img
          src="https://user-images.githubusercontent.com/92558372/170866947-4b6151c5-f864-4e74-adf1-cc72e62e80ab.gif"
          width="600px"
        />
        <br/>
        <sub>
        <b>비교하기 기능</b>
        </sub>
        <br />
    </td>
  </tr>
</table>
<br/>

---

<h2> 김경현 </h2>

---

<h2> 구본희 </h2>

---

<h2> 김민수 </h2>

---

## Reference

- 이 프로젝트는 [시디즈](https://www.sidiz.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
