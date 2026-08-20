# INSERT

## INSERT의 의미

INSERT는 데이터베이스(DB)에 새로운 데이터를 추가(생성)하는 SQL 문이다.

즉, 새로운 회원이나 상품, 주문 등의 데이터를 테이블에 저장할 때 사용한다.

---

## 기본 문법

```sql
INSERT INTO 테이블명 (컬럼1, 컬럼2, ...)
VALUES (값1, 값2, ...);
```

### 의미

- `INSERT INTO` : 데이터를 추가할 테이블을 지정한다.
- `(컬럼명)` : 데이터를 저장할 컬럼을 지정한다.
- `VALUES` : 저장할 값을 입력한다.

---

## 예제

### 회원 정보 추가

```sql
INSERT INTO users (name, email)
VALUES ('김소연', 'test@test.com');
```

위 SQL은 users 테이블에 새로운 회원 정보를 추가한다.

---

## 저장된 데이터 확인

```sql
SELECT *
FROM users
WHERE email = 'test@test.com';
```

### 조회 결과

| id | name | email |
|---:|------|----------------|
| 1 | 김소연 | test@test.com |

---

## INSERT 동작 과정

```text
INSERT 실행
        ↓
users 테이블에 데이터 저장
        ↓
SELECT로 저장 여부 확인
```

---

## QA에서 INSERT를 알아야 하는 이유

QA가 실무에서 INSERT를 직접 사용하는 경우는 많지 않지만, 테스트 데이터를 준비해야 하는 경우 사용할 수 있다.

예를 들어

- 테스트용 회원 생성
- 테스트용 상품 등록
- 테스트용 주문 데이터 생성

등에 활용할 수 있다.

```sql
INSERT INTO users (name, email)
VALUES ('테스트', 'qa@test.com');
```

위 SQL은 테스트용 회원 데이터를 생성하는 예시이다.

---

## API와 SQL 비교

| API | SQL | 의미 |
|------|------|------|
| POST | INSERT | 데이터 생성 |
| GET | SELECT | 데이터 조회 |
| PUT / PATCH | UPDATE | 데이터 수정 |
| DELETE | DELETE | 데이터 삭제 |

---

## 핵심 정리

- INSERT는 새로운 데이터를 추가하는 SQL 문이다.
- INSERT INTO는 데이터를 저장할 테이블을 지정한다.
- VALUES에는 저장할 값을 입력한다.
- QA는 테스트에 필요한 데이터를 준비할 때 INSERT를 사용할 수 있다.
- API의 POST와 SQL의 INSERT는 모두 데이터를 생성하는 역할을 한다.
