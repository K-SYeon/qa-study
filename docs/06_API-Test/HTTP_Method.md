# HTTP Method

## HTTP Method의 의미

HTTP Method는 클라이언트가 서버에 어떤 작업을 요청하는지 나타내는 방식이다.

예를 들어 상품 데이터를 관리하는 경우 다음과 같이 사용된다.

| Method | 기능 |
| ------- | ---- |
| GET | 조회 |
| POST | 생성 |
| PUT | 전체 수정 |
| PATCH | 일부 수정 |
| DELETE | 삭제 |

---

## GET (조회)

서버에 있는 데이터를 조회할 때 사용한다.

예시

```http
GET /products
```

상품 목록 조회

```http
GET /products/123
```

특정 상품 조회

### QA에서 알아야 하는 이유

- 데이터가 정상적으로 조회되는지 확인한다.
- 존재하지 않는 데이터를 요청했을 때의 응답을 확인한다.
- 잘못된 Parameter를 전달했을 때의 응답을 확인한다.

---

## POST (생성)

서버에 새로운 데이터를 생성할 때 사용한다.

예시

```http
POST /users
```

```json
{
  "name": "김소연",
  "email": "example@email.com"
}
```

### QA에서 알아야 하는 이유

- 필수 입력값이 누락되었을 때를 확인한다.
- 잘못된 형식의 데이터를 입력했을 때를 확인한다.
- 정상적인 데이터를 입력했을 때 정상적으로 생성되는지 확인한다.

---

## PUT (전체 수정)

기존 데이터를 전체적으로 수정할 때 사용한다.

예시

```http
PUT /users/123
```

```json
{
  "name": "김소연",
  "email": "new@email.com",
  "phone": "01012345678"
}
```

---

## PATCH (일부 수정)

기존 데이터의 일부만 수정할 때 사용한다.

예시

```http
PATCH /users/123
```

```json
{
  "name": "소여니"
}
```

### PUT과 PATCH의 차이

| Method | 의미 |
| ------- | ---- |
| PUT | 전체 수정 |
| PATCH | 일부 수정 |

---

## DELETE (삭제)

데이터를 삭제할 때 사용한다.

예시

```http
DELETE /users/123
```

### QA에서 주의해야 할 점

실제 데이터를 삭제하는 테스트는 주의가 필요하므로 테스트 환경(Test Environment)이나 테스트 계정을 사용하여 검증하는 경우가 많다.

---

## QA 실무 적용

API 테스트에서는 URL만 확인하는 것이 아니라 HTTP Method도 함께 확인한다.

```
Method + URL + Request
          ↓
       Response
```

예시

```http
GET /products
```

→ 상품 목록 조회 API

```http
POST /users
```

→ 회원 생성 API

---

## 한눈에 정리

| Method | 목적 | 예시 |
| ------- | ---- | ---- |
| GET | 조회 | 상품 조회 |
| POST | 생성 | 회원가입 |
| PUT | 전체 수정 | 회원 정보 전체 수정 |
| PATCH | 일부 수정 | 회원 이름만 수정 |
| DELETE | 삭제 | 회원 삭제 |

---

## 핵심 정리

- HTTP Method는 서버에 어떤 작업을 요청하는지 나타낸다.
- GET은 조회, POST는 생성, PUT은 전체 수정, PATCH는 일부 수정, DELETE는 삭제에 사용된다.
- QA는 Method와 URL, Request, Response를 함께 확인하여 API를 테스트한다.
