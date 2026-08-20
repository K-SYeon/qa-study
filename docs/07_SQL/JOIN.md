# JOIN

## JOIN의 의미

JOIN은 여러 테이블에 저장된 데이터를 서로 연결하여 조회하는 SQL 문이다.

즉, 하나의 테이블만으로는 확인할 수 없는 정보를 여러 테이블에서 함께 조회할 때 사용한다.

---

## JOIN이 필요한 이유

예를 들어 쇼핑몰에는 다음과 같은 테이블이 있다.

### users 테이블

| id | name | email |
|---:|------|-------|
| 1 | 김소연 | test@test.com |
| 2 | 홍길동 | hong@test.com |

### orders 테이블

| order_id | user_id | product |
|---------:|--------:|---------|
| 101 | 1 | 노트북 |
| 102 | 2 | 키보드 |
| 103 | 1 | 마우스 |

`orders` 테이블에는 회원 이름이 없고 `user_id`만 저장되어 있다.

따라서 어떤 회원이 어떤 상품을 주문했는지 확인하려면 `users` 테이블과 `orders` 테이블을 연결해야 한다.

이때 사용하는 것이 **JOIN**이다.

---

## INNER JOIN

INNER JOIN은 가장 많이 사용하는 JOIN이다.

두 테이블에서 연결되는 데이터만 조회한다.

---

## 기본 문법

```sql
SELECT 컬럼명
FROM 테이블1
INNER JOIN 테이블2
ON 연결조건;
```

### 의미

- `INNER JOIN` : 두 테이블을 연결한다.
- `ON` : 두 테이블을 연결할 기준을 지정한다.

---

## 예제

```sql
SELECT users.name, orders.product
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

위 SQL은 회원 이름과 주문한 상품을 함께 조회한다.

### JOIN 연결 과정

| users.id | users.name | orders.user_id | orders.product | 연결 여부 |
|---------:|------------|---------------:|----------------|----------|
| 1 | 김소연 | 1 | 노트북 | ✅ |
| 2 | 홍길동 | 2 | 키보드 | ✅ |
| 1 | 김소연 | 1 | 마우스 | ✅ |

`users.id`와 `orders.user_id`의 값이 같은 데이터끼리 연결된다.

### 조회 결과

| name | product |
|------|---------|
| 김소연 | 노트북 |
| 홍길동 | 키보드 |
| 김소연 | 마우스 |

---

## JOIN 동작 과정

```text
users 테이블
        +
orders 테이블
        ↓
users.id = orders.user_id
        ↓
JOIN
        ↓
회원 이름 + 주문 상품 조회
```

---

## QA에서 JOIN을 알아야 하는 이유

QA는 여러 테이블에 저장된 데이터가 서로 올바르게 연결되어 있는지 확인해야 하는 경우가 많다.

예를 들어 회원가입 → 로그인 → 상품 주문 기능을 테스트한 후 회원 정보와 주문 정보가 정상적으로 연결되었는지 확인할 수 있다.

```sql
SELECT users.name, orders.product
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

위 SQL은 주문한 회원과 상품 정보를 함께 조회하여 데이터가 올바르게 저장되었는지 확인할 수 있다.

또한 게시판 서비스에서는 게시글과 작성자 정보를 함께 조회하는 경우에도 JOIN을 사용할 수 있다.

---

## 핵심 정리

- JOIN은 여러 테이블의 데이터를 연결하여 조회하는 SQL 문이다.
- 가장 많이 사용하는 JOIN은 INNER JOIN이다.
- ON은 두 테이블을 연결하는 기준을 지정한다.
- QA는 여러 테이블의 데이터를 함께 검증할 때 JOIN을 자주 사용한다.
