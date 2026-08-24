# SELECT

## 개요

`SELECT`는 Table에 저장된 데이터를 조회할 때 사용하는 SQL 명령어이다.

## 학습 목표

- `SELECT`를 사용하여 데이터를 조회할 수 있다.
- `WHERE`를 사용하여 특정 데이터를 조회할 수 있다.
- `AND`를 사용하여 여러 조건을 동시에 조회할 수 있다.
- 조회 결과를 QA 검증에 활용할 수 있다.

## 학습 내용

### 1. 전체 데이터 조회

```sql
SELECT *
FROM users;
```

`users` Table의 전체 데이터를 조회한다.

### 2. 존재하는 데이터 조회

```sql
SELECT *
FROM users
WHERE username = 'testuser01';
```

`username`이 `testuser01`인 데이터만 조회한다.

결과: 1건

### 3. 존재하지 않는 데이터 조회

```sql
SELECT *
FROM users
WHERE username = 'notexist';
```

존재하지 않는 사용자를 조회한다.

결과: 0건

### 4. 여러 조건으로 조회

`AND`를 사용하면 여러 조건을 동시에 만족하는 데이터를 조회할 수 있다.

```sql
SELECT *
FROM users
WHERE username = 'testuser01'
AND email = 'testuser@test.com';
```

두 조건을 모두 만족하는 데이터가 존재하면 1건이 조회된다.

### 5. 잘못된 조건으로 조회

```sql
SELECT *
FROM users
WHERE username = 'testuser01'
AND email = 'wrong@test.com';
```

아이디는 존재하지만 이메일이 일치하지 않으므로 0건이 조회된다.

## QA 활용

테스트한 데이터가 DB에 정확하게 저장되었는지 검증할 때 `SELECT`를 사용할 수 있다.

특정 테스트 데이터에 조건을 걸어 조회하면 예상한 값과 실제 DB의 값을 비교할 수 있다.

```text
테스트 실행
→ DB 데이터 조회
→ 실제 데이터 확인
→ 기대 결과와 비교
```
