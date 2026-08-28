# 11_API-Test-Project

## 개요

Postman을 사용하여 API 요청과 Response를 확인하고, 직접 구축한 Express API Server와 MongoDB를 연동하여 CRUD API를 구현하고 테스트한다.

이번 프로젝트에서는 Postman에서 API를 호출하는 것뿐만 아니라, 직접 API Server를 구축하고 실제 MongoDB에 데이터를 저장·조회·수정·삭제하는 과정을 실습한다.

---

## 학습 목표

* Postman을 활용한 API 요청 및 Response 확인
* HTTP Method별 API 동작 이해
* Express를 활용한 API Server 구축
* MongoDB 연동 및 데이터 처리
* CRUD API 구현 및 테스트
* HTTP Status Code를 활용한 예외 상황 확인
* PUT과 PATCH의 차이 이해

---

## 학습 내용

### 1. Postman API 테스트

Postman을 사용하여 API 요청을 보내고 Response를 확인한다.

* GET
* POST
* PUT
* PATCH
* DELETE
* HTTP Status Code 확인
* Response 데이터 확인
* 간단한 Postman Test Script 작성

---

### 2. Express API Server 구축

Node.js와 Express를 사용하여 직접 API Server를 구축한다.

Server 실행:

```bash
node server.js
```

Server가 정상적으로 실행되면 다음과 같이 확인할 수 있다.

```text
MongoDB connected
Server is running on http://localhost:3000
```

---

### 3. MongoDB 연동

MongoDB Atlas를 사용하여 API Server와 데이터베이스를 연결한다.

환경변수는 `.env` 파일에 저장하고 `.gitignore`를 사용하여 GitHub에 업로드되지 않도록 설정한다.

```text
.env
node_modules/
```

MongoDB의 `posts` Collection을 사용하여 게시글 데이터를 저장하고 관리한다.

---

### 4. CRUD API 구현

#### GET - 전체 게시글 조회

```http
GET /posts
```

MongoDB의 `posts` Collection에 저장된 게시글 목록을 조회한다.

---

#### GET - 특정 게시글 조회

```http
GET /posts/:id
```

게시글의 `_id`를 사용하여 특정 Document를 조회한다.

존재하지 않는 `_id`를 요청했을 때 `404 Not Found`가 반환되는 것도 확인했다.

---

#### POST - 게시글 생성

```http
POST /posts
```

Request Body:

```json
{
    "title": "Second Post",
    "body": "QA POST Test",
    "userId": 2
}
```

게시글을 생성하고 MongoDB에 실제로 저장되는 것을 확인했다.

생성된 게시글은 GET 요청을 통해 정상적으로 조회되는 것도 확인했다.

---

#### PUT - 게시글 전체 수정

```http
PUT /posts/:id
```

`replaceOne()`을 사용하여 기존 Document를 새로운 데이터로 교체한다.

```javascript
replaceOne(
    { _id: new ObjectId(req.params.id) },
    req.body
);
```

일부 필드만 전달했을 경우 기존 Document의 전체 내용이 교체되어 전달하지 않은 필드가 사라지는 것을 확인했다.

이를 통해 PUT의 전체 수정 특성을 확인했다.

---

#### PATCH - 게시글 일부 수정

```http
PATCH /posts/:id
```

`updateOne()`과 `$set`을 사용하여 필요한 필드만 수정한다.

```javascript
updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
);
```

`body`만 수정했을 때 기존 `title`은 유지되고 `body`만 수정되는 것을 확인했다.

이를 통해 PUT과 PATCH의 차이를 확인했다.

---

#### DELETE - 게시글 삭제

```http
DELETE /posts/:id
```

`deleteOne()`을 사용하여 특정 Document를 삭제한다.

삭제 후 MongoDB에서 해당 Document가 실제로 삭제되는 것을 확인했다.

삭제한 `_id`로 다시 GET 요청을 보냈을 때 `404 Not Found`가 반환되는 것도 확인했다.

---

## API 목록

| Method | Endpoint     | 설명        |
| ------ | ------------ | --------- |
| GET    | `/posts`     | 전체 게시글 조회 |
| GET    | `/posts/:id` | 특정 게시글 조회 |
| POST   | `/posts`     | 게시글 생성    |
| PUT    | `/posts/:id` | 게시글 전체 수정 |
| PATCH  | `/posts/:id` | 게시글 일부 수정 |
| DELETE | `/posts/:id` | 게시글 삭제    |

---

## 테스트 결과

| 항목             | 결과                 |
| -------------- | ------------------ |
| 전체 게시글 조회      | 정상 확인              |
| 특정 게시글 조회      | 정상 확인              |
| 존재하지 않는 게시글 조회 | `404 Not Found` 확인 |
| 게시글 생성         | 정상 확인              |
| MongoDB 데이터 저장 | 정상 확인              |
| 생성된 게시글 GET 조회 | 정상 확인              |
| PUT 전체 수정      | 정상 확인              |
| PATCH 부분 수정    | 정상 확인              |
| DELETE 삭제      | 정상 확인              |
| 삭제된 게시글 GET 조회 | `404 Not Found` 확인 |

---

## 폴더 구조

```text
11_API-Test-Project/
├── README.md
├── Postman/
│   └── QA-API-Test.postman_collection.json
└── API-Server/
    ├── server.js
    ├── package.json
    ├── package-lock.json
    └── .gitignore
```

### 주요 파일

* `README.md` : 프로젝트 및 학습 내용 정리
* `Postman/QA-API-Test.postman_collection.json` : Postman API 요청 Collection
* `API-Server/server.js` : Express API Server 및 CRUD API 구현
* `API-Server/package.json` : 프로젝트 의존성 및 실행 설정
* `API-Server/.gitignore` : `.env`, `node_modules` 등 Git 제외 설정
