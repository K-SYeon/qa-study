# Collection

## 개요

Postman에서 API 요청(Request)을 하나의 그룹으로 묶어서 관리하는 기능이다.

## 학습 목표

- Collection의 개념을 이해한다.
- Collection을 생성할 수 있다.
- Collection 안에 Request를 생성할 수 있다.
- Request를 통해 API를 호출하고 Response를 확인할 수 있다.

## 학습 내용

### 1. Collection이란?

API 요청(Request)을 하나의 그룹으로 묶어서 관리하는 기능이다.

예를 들어 회원 API를 테스트한다면 관련된 API 요청을 하나의 Collection으로 묶어서 관리할 수 있다.

```text
API 테스트
└── 회원 API
    ├── 회원 가입
    ├── 로그인
    ├── 회원 정보 조회
    └── 회원 정보 수정
```

### 2. QA에서 사용하는 이유

API 테스트 요청이 여러 개인 경우 Collection으로 묶어두면 관련 API 요청을 한 곳에서 관리하고 다시 실행하기 편하다.

예를 들어 로그인 기능을 테스트할 때 하나의 로그인 API에 대해 여러 가지 테스트 요청을 관리할 수 있다.

```text
로그인 기능 테스트
└── 로그인 API
    ├── 정상적인 이메일 + 비밀번호
    ├── 잘못된 비밀번호
    ├── 존재하지 않는 이메일
    └── 필수 값 누락
```

## 실습 내용

### 1. Collection 생성

Postman에서 `QA-API-Test`라는 이름의 Collection을 생성했다.

### 2. Request 생성

생성한 Collection 안에 `Login`이라는 Request를 생성했다.

```text
QA-API-Test
└── Login
```

### 3. API Request 설정 및 실행

`Login` Request에서 다음과 같이 설정했다.

```text
Method: GET
URL: https://jsonplaceholder.typicode.com/posts/1
```

`Send`를 클릭하여 API Request를 실행했다.

### 4. Response 확인

API Request를 실행한 후 Response를 확인했다.

다음 항목을 확인할 수 있었다.

- Status
- Time
- Size
- Response Body

실습에서는 `200 OK` 응답과 JSON 형태의 Response Body를 확인했다.

### 5. 실습 흐름

```text
Collection 생성
    ↓
Request 생성
    ↓
Method와 URL 설정
    ↓
Send
    ↓
Response 확인
```
