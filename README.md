# 원티드 프리온보딩 4주차 과제

## 🤝 과제 
- API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현
- 기간: 2023.01.16 - 01.19

## ⚡️ 프로젝트 실행 방법

```
npm install
npm run api
num start
```


## 🎬 기능 소개

![week4](https://user-images.githubusercontent.com/56163157/213098737-d46e4e47-dc53-4877-9a56-39abcad11f85.gif)
## 💡Best Practice 및 협업 과정

#### [협업과정](https://github.com/pre-onboading-eleven/pre-onboarding-8th-4-11/wiki)
#### [1. Redux Saga를 이용한 비동기 호출](https://github.com/pre-onboading-eleven/pre-onboarding-8th-4-11/wiki/1.-Redux-Saga%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%98%B8%EC%B6%9C)
#### [2. 페이지네이션](https://github.com/pre-onboading-eleven/pre-onboarding-8th-4-11/wiki/2.-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98)
#### [3. CRUD](https://github.com/pre-onboading-eleven/pre-onboarding-8th-4-11/wiki/3.-CRUD)


## 👨‍👩‍👧‍👦 팀 소개

<table>
<tr>
    <td align="center">
        <a href="https://github.com/hozunlee">
        <img src="https://avatars.githubusercontent.com/u/60101732?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@hozunlee</b></sub>
        <br />
        <sub><b>이호준(팀장)</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/8dong">
        <img src="https://avatars.githubusercontent.com/u/96307662?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@8dong</b></sub>
        <br />
        <sub><b>김동현</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/yesharry">
        <img src="https://avatars.githubusercontent.com/u/101863209?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@yesharry</b></sub>
        <br />
        <sub><b>노해리</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/blan19">
        <img src="https://avatars.githubusercontent.com/u/66871265?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@blan19</b></sub>
        <br />
        <sub><b>박준서</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center">
        <a href="https://github.com/gandy818">
        <img src="https://avatars.githubusercontent.com/u/67881881?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@gandy818</b></sub>
        <br />
        <sub><b>유나영</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/perago">
        <img src="https://avatars.githubusercontent.com/u/99804262?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@perago</b></sub>
        <br />
        <sub><b>장태경</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/homile">
        <img src="https://avatars.githubusercontent.com/u/56163157?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@homile</b></sub>
        <br />
        <sub><b>조민우</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ALSRUD29">
        <img src="https://avatars.githubusercontent.com/u/107922059?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@ALSRUD29</b></sub>
        <br />
        <sub><b>박민경</b></sub>
        </a>
    </td>
</tr>
</table>



## 🌲 src 폴더 구조
```
src
 ┣ apis
 ┃ ┗ apis.js
 ┣ components
 ┃ ┣ CommentList.js
 ┃ ┣ Form.js
 ┃ ┗ PageList.js
 ┣ containers
 ┃ ┣ CommentListContainer.js
 ┃ ┣ FormContainer.js
 ┃ ┗ PageListContainer.js
 ┣ redux
 ┃ ┣ reducers
 ┃ ┃ ┗ comments.js
 ┃ ┣ sagas
 ┃ ┃ ┗ commentsSaga.js
 ┃ ┗ store.js
 ┣ App.js
 ┣ App.test.js
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js
 
```


## ⚒️ 기술 스택 / 라이브러리

JavaScript, React, Styled Component, Redux, React Redux, Redux Toolkit, Redux Saga

## 📝 Commit message Convention & branch 전략

- commit message


| Type             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| feat             | 새로운 기능 추가                                             |
| fix              | 버그 수정                                                    |
| docs             | 문서 수정                                                    |
| style            | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우     |
| refactor         | 코드 리팩터링                                                |
| test             | 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X) |
| merge            | 브랜치간 병합, 충돌 해결 |
| chore            | 빌드 업무 수정, 패키지 매니저 수정(프로덕션 코드 변경 X)     |
| design           | CSS 등 사용자 UI 디자인 변경                                 |
| comment          | 필요한 주석 추가 및 변경                                     |
| rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| remove           | 파일을 삭제하는 작업만 수행한 경우                           |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                       |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야 하는 경우                      |

- branch 전략

| Branch Name | Description                                                        |
| ----------- | ----------------------------------------------------------------- |
|    main     | 배포 및 최종본, 출시 버전 브랜치                                    |
|     dev     | 개발 단계 브랜치. dev 브랜치에서 에러가 안 날 경우에만 최종적으로 main으로 push 가능 |
|    feat/    | 세부 기능 개발 단계 브랜치                                          |
|   design/   | 디자인 작업 단계 브랜치                                             |
|    docs/    | 문서 작업 브랜치                                                    |

