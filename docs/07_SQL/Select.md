# SELECT

## SELECT의 의미

SELECT는 데이터베이스(DB)에 저장된 데이터를 조회(검색)하는 SQL 명령어이다.

즉, 저장되어 있는 데이터를 확인할 때 사용한다.

---

## 기본 문법

```sql
SELECT 컬럼명
FROM 테이블명;
```

또는

```sql
SELECT *
FROM 테이블명;
```

### 의미

- `SELECT` : 조회할 데이터를 선택한다.
- `FROM` : 조회할 테이블을 지정한다.
- `*` : 모든 컬럼을 조회한다.

---

## 예제 1. 모든 데이터 조회

```sql
SELECT *
FROM users;
```

위 SQL은 `users` 테이블의 모든 컬럼과 모든 데이터를 조회한다.

---

## 예제 2. 특정 컬럼만 조회

```sql
SELECT name, email
FROM users;
```

위 SQL은 `users` 테이블에서 `name`과 `email` 컬럼만 조회한다.

---

## QA에서 SELECT를 알아야 하는 이유

QA는 테스트 후 데이터가 정상적으로 저장되었는지 확인하기 위해 SELECT를 사용한다.

예를 들어 회원가입 기능을 테스트한 후 데이터가 정상적으로 저장되었는지 확인할 수 있다.

```sql
SELECT *
FROM users;
```

또는 필요한 정보만 조회할 수도 있다.

```sql
SELECT name, email
FROM users;
```

---

## 핵심 정리

- SELECT는 데이터를 조회하는 SQL 명령어이다.
- FROM은 조회할 테이블을 지정한다.
- `*`는 모든 컬럼을 조회한다.
- 필요한 컬럼만 선택하여 조회할 수도 있다.
- QA는 SELECT를 사용하여 테스트 결과를 데이터베이스(DB)에서 직접 확인한다.
