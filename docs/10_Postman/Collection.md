# Collection

## 개요

Postman에서 관련된 API Request를 하나의 그룹으로 묶어 관리하는 기능이다.

## 학습 목표

- Collection의 개념을 이해한다.
- Collection 안에 Request를 생성할 수 있다.
- Request를 통해 API를 호출하고 Response를 확인할 수 있다.

## 학습 내용

### 1. Collection이란?

Postman에서 관련된 API Request를 하나의 그룹으로 묶어 관리하는 기능이다.

예를 들어 회원 관련 API를 테스트한다면 여러 Request를 하나의 Collection에 모아 관리할 수 있다.

```text
QA-API-Test
├── Login
├── Signup
├── User-Info
└── User-Update
```

### 2. Collection 생성

Postman에서 `QA-API-Test`라는 이름의 Collection을 생성했다.

### 3. Request 생성

생성한 Collection 안에 `Login`이라는 Request를 생성했다.

```text
QA-API-Test
└── Login
```

### 4. API Request 설정 및 실행

`Login` Request에서 다음과 같이 설정했다.

```text
Method: GET
URL: https://jsonplaceholder.typicode.com/posts/1
```

`Send`를 클릭하여 API Request를 실행했다.

### 5. Response 확인

API Request를 실행한 후 Response를 확인했다.

다음 항목을 확인할 수 있었다.

- Status
- Time
- Size
- Response Body

실습에서는 `200 OK` 응답과 JSON 형태의 Response Body를 확인했다.

### 6. 실습 흐름

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
