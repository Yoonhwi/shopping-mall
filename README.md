## 🛒 Simple Shopping Mall Project

React, TypeScript, TailwindCSS, and ShadCN UI를 활용하여 제작한 쇼핑몰 프로젝트입니다.

### Features

- **다크 모드**: 사용자의 편의를 위한 다크 모드 지원
- **반응형 웹**: 다양한 디바이스 크기에 적합한 레이아웃 제공
- **Firebase Authentication**: Firebase를 이용한 회원 인증 기능 구현
- **장바구니 관리**: Context API로 전역 상태 관리 및 로컬스토리지로 데이터 유지

### ️ 기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![ShadCN_UI](https://img.shields.io/badge/ShadCN_UI-FF4C61?style=for-the-badge&logo=ui&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)

### 실행 방법

```
git clone https://github.com/Yoonhwi/shopping-mall.git
```

```
yarn 또는 npm install  의존성 패키지 설치 후,
```

```
Firebase 프로젝트와 연동하기 위해 .env파일을 생성한 후 아래의 내용을 추가해야합니다.
VITE_API_KEY = "Your API Key"
VITE_AUTH_DOMAIN = "Your Auth Domain"
VITE_PROJECT_ID = "Your Project ID"
VITE_STORAGE_BUCKET = "Your Storage Bucket"
VITE_MESSAGING_SENDER_ID = "Your Messaging Sender ID"
VITE_APP_ID = "Your App ID"
VITE_MEASUREMENT_ID = "Your Measurement ID"
```

```
yarn dev 또는 npm run dev 실행합니다.
```
