# WHERE

## WHERE의 의미

WHERE는 조건에 맞는 데이터만 조회하기 위해 사용하는 SQL 문이다.

즉, 원하는 데이터만 선택하여 조회할 때 사용한다.

---

## 기본 문법

```sql
SELECT 컬럼명
FROM 테이블명
WHERE 조건;
```

또는

```sql
SELECT *
FROM 테이블명
WHERE 조건;
```

### 의미

- `SELECT` : 조회할 데이터를 선택한다.
- `FROM` : 조회할 테이블을 지정한다.
- `WHERE` : 조회할 조건을 지정한다.

---

## 예제 1. 특정 회원 조회

```sql
SELECT *
FROM users
WHERE id = 1;
```

위 SQL은 `id`가 1인 회원만 조회한다.

---

## 예제 2. 이메일로 조회

```sql
SELECT *
FROM users
WHERE email = 'test@test.com';
```

위 SQL은 `email`이 `test@test.com`인 회원만 조회한다.

---

## 예제 3. 이름으로 조회

```sql
SELECT *
FROM users
WHERE name = '김소연';
```

위 SQL은 `name`이 '김소연'인 회원만 조회한다.

---

## 비교 연산자

| 연산자 | 의미 | 예시 |
|--------|------|------|
| = | 같다 | id = 1 |
| != 또는 <> | 같지 않다 | id != 1 |
| > | 크다 | price > 10000 |
| >= | 크거나 같다 | price >= 10000 |
| < | 작다 | price < 10000 |
| <= | 작거나 같다 | price <= 10000 |

> SQL에서는 `!=`와 `<>` 모두 "같지 않다"를 의미하며, `!=`가 더 자주 사용된다.

---

## 여러 조건 사용

### AND

모든 조건을 만족하는 데이터를 조회한다.

```sql
SELECT *
FROM users
WHERE name = '김소연'
AND email = 'test@test.com';
```

위 SQL은 이름이 '김소연'이고 이메일이 `test@test.com`인 회원만 조회한다.

---

### OR

조건 중 하나라도 만족하는 데이터를 조회한다.

```sql
SELECT *
FROM users
WHERE name = '김소연'
OR name = '홍길동';
```

위 SQL은 이름이 '김소연' 또는 '홍길동'인 회원을 조회한다.

---

## QA에서 WHERE를 알아야 하는 이유

QA는 테스트 후 특정 데이터가 정상적으로 저장되었는지 확인해야 하는 경우가 많다.

예를 들어 회원가입 기능을 테스트한 후 회원가입에 사용한 이메일을 조건으로 데이터가 정상적으로 저장되었는지 확인할 수 있다.

```sql
SELECT *
FROM users
WHERE email = 'test@test.com';
```

---

## 핵심 정리

- WHERE는 조건에 맞는 데이터만 조회하기 위한 SQL 문이다.
- 비교 연산자를 이용하여 원하는 데이터를 조회할 수 있다.
- AND와 OR을 이용하여 여러 조건을 함께 사용할 수 있다.
- QA는 회원가입, 로그인 등 테스트 후 특정 데이터를 확인하기 위해 WHERE를 자주 사용한다.
