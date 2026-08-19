# Postman

## Postman이란?

Postman은 API를 테스트하기 위한 도구이다.

개발자는 프로그램을 만들기 전에도 API를 테스트할 수 있으며,
QA는 화면(UI)을 거치지 않고 서버(API)를 직접 테스트할 수 있다.

### 기본 동작 과정

```
웹 화면 → 검색 버튼 클릭 → API 호출
```

Postman에서는 화면을 거치지 않고 API를 직접 호출할 수 있다.

```http
GET /users
```

### Postman에서 가장 많이 사용하는 기능

| 항목 | 설명 |
|------|------|
| Method | GET, POST, PUT, PATCH, DELETE 등을 선택 |
| URL | 요청할 API 주소 |
| Send | API 요청 전송 |
| Response | 서버 응답 확인 |

---

## 설치

1. Postman 공식 홈페이지에서 설치한다.

   https://www.postman.com/downloads/

2. 설치 후 실행한다.

3. 로그인하거나 무료 계정을 생성한다.

4. 개인 Workspace로 이동한다.

5. 새로운 HTTP Request 탭을 생성한다.

---

## GET 요청

### Method

```text
GET
```

### URL

```text
https://jsonplaceholder.typicode.com/users
```

### Response

**Status Code**

```text
200 OK
```

**Body(JSON)**

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  }
]
```

사용자 목록이 JSON 형식으로 반환되는 것을 확인할 수 있다.

---

## POST 요청

### Method

```text
POST
```

### URL

```text
https://jsonplaceholder.typicode.com/users
```

### Body (raw → JSON)

```json
{
  "name": "김소연",
  "email": "test@test.com"
}
```

### Response

**Status Code**

```text
201 Created
```

**Body(JSON)**

```json
{
  "name": "김소연",
  "email": "test@test.com",
  "id": 11
}
```

요청한 데이터가 생성되었으며 **201 Created** 상태 코드가 반환되는 것을 확인할 수 있다.

---

## PUT 요청

### Method

```text
PUT
```

### URL

```text
https://jsonplaceholder.typicode.com/users/1
```

### Body (raw → JSON)

```json
{
  "name": "김소연",
  "email": "soyeon@test.com",
  "username": "soyeon"
}
```

### Response

**Status Code**

```text
200 OK
```

**Body(JSON)**

```json
{
  "name": "김소연",
  "email": "soyeon@test.com",
  "username": "soyeon",
  "id": 1
}
```

요청한 데이터로 전체 수정되었으며 **200 OK** 상태 코드가 반환되는 것을 확인할 수 있다.

---

## PATCH 요청

### Method

```text
PATCH
```

### URL

```text
https://jsonplaceholder.typicode.com/users/1
```

### Body (raw → JSON)

```json
{
  "name": "여니"
}
```

### Response

**Status Code**

```text
200 OK
```

**Body(JSON)**

```json
{
  "id": 1,
  "name": "여니"
}
```

요청한 데이터만 일부 수정되었으며 **200 OK** 상태 코드가 반환되는 것을 확인할 수 있다.

---

## DELETE 요청

### Method

```text
DELETE
```

### URL

```text
https://jsonplaceholder.typicode.com/users/1
```

### Response

**Status Code**

```text
200 OK
```

**Body(JSON)**

```json
{}
```

삭제 요청이 정상 처리되었으며 **200 OK** 상태 코드가 반환되는 것을 확인할 수 있다.

> **참고**
>
> JSONPlaceholder는 연습용 API이므로 실제 데이터베이스의 데이터가 삭제되거나 수정되지는 않는다.

---

## Header와 Body

### Header

요청(Request) 또는 응답(Response)에 대한 부가 정보를 담는 영역이다.

예시

```http
Content-Type: application/json
```

→ 서버에 JSON 형식의 데이터를 전송한다는 의미이다.

### Body

실제 데이터를 담는 영역이다.

예시

```json
{
  "name": "김소연",
  "email": "test@test.com"
}
```

---

## QA에서 Postman을 사용하는 이유

QA는 Postman을 이용하여 다음 항목을 확인하면서 API를 테스트한다.

- API 요청(Request)
- API 응답(Response)
- HTTP Status Code
- Request Header
- Request Body
- Response Body(JSON)

예를 들어 회원가입 API를 테스트하는 경우

```http
POST /users
```

```json
{
  "name": "김소연",
  "email": "test@test.com"
}
```

다음 사항을 확인한다.

- 정상적으로 생성되는가?
- 필수 값이 누락되면 오류가 발생하는가?
- 이메일 형식이 올바르지 않으면 오류가 발생하는가?
- Status Code가 올바른가?
- Response Body가 올바른가?
