# GROUP BY

## GROUP BY의 의미

GROUP BY는 같은 값을 가진 데이터를 하나의 그룹으로 묶는 SQL 문이다.

주로 데이터를 집계(개수, 합계, 평균 등)할 때 사용한다.

---

## 기본 문법

```sql
SELECT 컬럼명, 집계함수
FROM 테이블명
GROUP BY 컬럼명;
```

예를 들어 그룹별 데이터 개수를 조회할 때는 다음과 같이 사용한다.

```sql
SELECT department, COUNT(*)
FROM users
GROUP BY department;
```

### 의미

- `GROUP BY` : 같은 값을 가진 데이터를 하나의 그룹으로 묶는다.
- `COUNT(*)` : 각 그룹의 데이터 개수를 계산한다.

---

## 예제

### users 테이블

| id | name | department |
|---:|------|------------|
| 1 | 김철수 | 개발 |
| 2 | 이영희 | QA |
| 3 | 박민수 | 개발 |
| 4 | 김소연 | QA |
| 5 | 홍길동 | QA |

```sql
SELECT department, COUNT(*)
FROM users
GROUP BY department;
```

위 SQL은 부서(`department`)가 같은 데이터를 하나의 그룹으로 묶고, 각 부서의 인원 수를 조회한다.

### 조회 결과

| department | COUNT(*) |
|------------|---------:|
| 개발 | 2 |
| QA | 3 |

---

## 자주 사용하는 집계 함수

| 함수 | 의미 |
|------|------|
| COUNT() | 개수 |
| SUM() | 합계 |
| AVG() | 평균 |
| MAX() | 최대값 |
| MIN() | 최소값 |

예를 들어 전체 회원 수를 조회하려면 다음과 같이 사용할 수 있다.

```sql
SELECT COUNT(*)
FROM users;
```

위 SQL은 users 테이블의 전체 회원 수를 조회한다.

---

## QA에서 GROUP BY를 알아야 하는 이유

QA가 직접 GROUP BY를 작성하는 경우는 많지 않지만, 데이터를 그룹별로 집계하여 확인해야 하는 경우가 있다.

예를 들어

- 상태(Status)별 주문 건수
- 회원 등급별 인원 수
- 상품 카테고리별 등록 개수

등을 확인할 수 있다.

```sql
SELECT status, COUNT(*)
FROM orders
GROUP BY status;
```

위 SQL은 주문 상태(`status`)별 주문 건수를 조회한다.

### 조회 결과

| status | COUNT(*) |
|--------|---------:|
| 완료 | 120 |
| 배송중 | 35 |
| 취소 | 8 |

---

## 핵심 정리

- GROUP BY는 같은 값을 가진 데이터를 하나의 그룹으로 묶는 SQL 문이다.
- 주로 COUNT(), SUM(), AVG()와 같은 집계 함수와 함께 사용한다.
- QA는 상태별 건수나 회원 등급별 인원 수 등을 확인할 때 사용할 수 있다.
- 신입 QA는 GROUP BY의 기본 개념을 이해하는 정도면 충분하며, JOIN을 더 중요하게 공부하는 것이 좋다.
