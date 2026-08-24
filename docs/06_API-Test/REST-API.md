# REST API

## REST API의 의미

REST는 API를 설계하는 방식(규칙)이며, REST API는 REST 원칙을 따라 설계된 API를 말한다.

REST(Representational State Transfer)는 웹에서 자원을 효율적으로 관리하기 위한 API 설계 방식이다.

REST API에서는 **URL은 자원(Resource)을 나타내고, HTTP Method는 수행할 작업(Action)을 나타낸다.**

---

## REST API 예시

회원 정보를 관리하는 API를 예로 들면 다음과 같다.

### 회원 조회

```http
GET /users
```

### 회원 생성

```http
POST /users
```

### 회원 정보 전체 수정

```http
PUT /users/1
```

### 회원 정보 일부 수정

```http
PATCH /users/1
```

### 회원 삭제

```http
DELETE /users/1
```

---

## REST API 설계 원칙

### 1. URL에는 동사를 사용하지 않는다.

좋은 예

```http
GET /users
```

나쁜 예

```http
GET /getUsers
```

---

### 2. URL은 자원(Resource)을 나타낸다.

URL은 동사가 아닌 **명사**로 작성한다.

예시

```text
/users
/products
/orders
```

---

### 3. 작업은 HTTP Method로 구분한다.

조회

```http
GET /users
```

생성

```http
POST /users
```

삭제

```http
DELETE /users/1
```

---

## QA에서 REST API를 알아야 하는 이유

QA는 API를 테스트할 때 REST API 구조를 이해해야 한다.

예를 들어

```http
GET /users
```

를 테스트한다면 다음과 같은 항목을 확인한다.

- URL이 올바른가?
- HTTP Method(GET)를 올바르게 사용했는가?
- 응답 상태 코드(Status Code)가 올바른가?
- 응답 데이터(JSON)가 올바른가?

REST API를 이해하면 API 명세서를 읽고 테스트하는 것이 훨씬 쉬워진다.

---

## REST API 예시 정리

| Method | URL | 의미 |
| ------- | --- | ---- |
| GET | /users | 회원 조회 |
| POST | /users | 회원 생성 |
| PUT | /users/1 | 회원 전체 수정 |
| PATCH | /users/1 | 회원 일부 수정 |
| DELETE | /users/1 | 회원 삭제 |

---

## 핵심 정리

- REST는 API를 설계하는 방식(규칙)이다.
- REST API는 REST 원칙을 따라 설계된 API이다.
- URL은 자원(Resource)을 나타내고, HTTP Method는 수행할 작업(Action)을 나타낸다.
- URL은 명사로 작성하고, 작업은 HTTP Method로 구분한다.
- QA는 REST API를 이해해야 API 명세서를 읽고 테스트를 수행할 수 있다.
