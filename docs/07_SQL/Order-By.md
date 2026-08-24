# ORDER BY

## ORDER BY의 의미

ORDER BY는 조회한 데이터를 원하는 기준으로 정렬하는 SQL 문이다.

즉, 조회 결과를 오름차순 또는 내림차순으로 정렬할 때 사용한다.

---

## 기본 문법

```sql
SELECT 컬럼명
FROM 테이블명
ORDER BY 컬럼명;
```

또는

```sql
SELECT *
FROM 테이블명
ORDER BY 컬럼명;
```

### 의미

- `SELECT` : 조회할 데이터를 선택한다.
- `FROM` : 조회할 테이블을 지정한다.
- `ORDER BY` : 조회 결과를 정렬할 기준을 지정한다.

---

## 오름차순(ASC)

ASC(Ascending)는 작은 값에서 큰 값 순으로 정렬한다.

`ASC`를 생략하면 기본값으로 적용된다.

예시

```sql
SELECT *
FROM users
ORDER BY id ASC;
```

또는

```sql
SELECT *
FROM users
ORDER BY id;
```

위 SQL은 `id`를 기준으로 작은 번호부터 조회한다.

### 조회 결과

| id | name |
|---:|------|
| 1 | 김소연 |
| 2 | 홍길동 |
| 3 | 이영희 |

---

## 내림차순(DESC)

DESC(Descending)는 큰 값에서 작은 값 순으로 정렬한다.

예시

```sql
SELECT *
FROM users
ORDER BY id DESC;
```

위 SQL은 `id`를 기준으로 큰 번호부터 조회한다.

### 조회 결과

| id | name |
|---:|------|
| 3 | 이영희 |
| 2 | 홍길동 |
| 1 | 김소연 |

---

## 문자열도 정렬 가능

문자열도 오름차순 또는 내림차순으로 정렬할 수 있다.

```sql
SELECT *
FROM users
ORDER BY name ASC;
```

위 SQL은 `name`을 가나다순(알파벳순)으로 조회한다.

### 조회 결과

| name |
|------|
| 김소연 |
| 박민수 |
| 이영희 |
| 홍길동 |

---

## WHERE와 함께 사용

실무에서는 WHERE와 함께 사용하는 경우가 많다.

```sql
SELECT *
FROM users
WHERE name = '김소연'
ORDER BY id DESC;
```

위 SQL은 이름이 '김소연'인 회원을 `id`가 큰 순서대로 조회한다.

---

## QA에서 ORDER BY를 알아야 하는 이유

QA는 조회 결과가 올바른 순서로 정렬되는지 확인해야 한다.

예를 들어 다음과 같은 항목을 테스트할 수 있다.

- 최신 회원이 가장 먼저 조회되는가?
- 최신 게시글이 가장 위에 표시되는가?
- 가격이 높은 상품부터 표시되는가?

```sql
SELECT *
FROM users
ORDER BY id DESC;
```

위 SQL은 회원 번호(`id`)를 기준으로 내림차순 정렬하므로 최근에 등록된 회원부터 조회할 수 있다.

---

## 핵심 정리

- ORDER BY는 조회한 데이터를 원하는 기준으로 정렬하는 SQL 문이다.
- ASC는 오름차순이며 생략하면 기본값으로 적용된다.
- DESC는 내림차순으로 정렬한다.
- 문자열도 정렬할 수 있다.
- WHERE와 함께 사용하여 조건에 맞는 데이터를 원하는 순서로 조회할 수 있다.
- QA는 ORDER BY를 사용하여 조회 결과가 올바른 순서로 정렬되는지 확인한다.
