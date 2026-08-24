# INSERT

## 개요

`INSERT`는 Table에 새로운 데이터를 추가할 때 사용하는 SQL 명령어이다.

## 학습 목표

- `INSERT`의 기본 문법을 이해한다.
- Table에 테스트 데이터를 추가할 수 있다.
- 데이터 생성 후 저장 결과를 확인할 수 있다.

## 학습 내용

### 1. 기본 문법

```sql
INSERT INTO 테이블명 (컬럼1, 컬럼2)
VALUES (값1, 값2);
```

### 2. 실습

`users` Table에 테스트 회원 데이터를 추가했다.

```sql
INSERT INTO users (username, password, email)
VALUES ('testuser01', 'Test1234!', 'testuser@test.com');
```

실행 후 `1 row(s) affected`가 표시되면 데이터가 정상적으로 추가된 것이다.

### 3. 생성 후 확인

```sql
SELECT *
FROM users;
```

실행하면 생성된 회원 데이터를 확인할 수 있다.

실습에서 생성한 데이터는 다음과 같다.

| Column | Value |
|---|---|
| `username` | `testuser01` |
| `password` | `Test1234!` |
| `email` | `testuser@test.com` |

## QA 활용

회원가입 테스트에서 회원가입이 정상적으로 완료된 후 DB에 회원 데이터가 생성되었는지 확인할 수 있다.

```text
회원가입 성공
→ INSERT
→ 회원 데이터 생성
→ SELECT
→ DB 저장 결과 확인
```
