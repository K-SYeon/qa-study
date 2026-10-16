# SQL Practice

## 1. 실습 개요

- DBMS: MySQL
- 실습 도구: MySQL Workbench
- 실습 목적: SQL을 활용하여 데이터 조회, 조건 검색, 데이터 관계 확인 및 결과 검증을 수행한다.

## 2. 실습 테이블

### users

회원 정보를 저장하는 테이블이다.

| 컬럼 | 설명 |
|---|---|
| `id` | 회원 ID |
| `name` | 회원 이름 |
| `email` | 이메일 |
| `age` | 나이 |

### orders

주문 정보를 저장하는 테이블이다.

| 컬럼 | 설명 |
|---|---|
| `order_id` | 주문 ID |
| `user_id` | 주문한 회원 ID |
| `product` | 상품명 |
| `price` | 주문 금액 |
| `order_date` | 주문 날짜 |

## 3. 회원 데이터 검증

### 3-1. 회원가입 데이터 확인

**목적:** ID가 4인 회원의 가입 데이터가 정상적으로 저장되었는지 확인한다.

```sql
select *
from users
where id = 4;
```

### 3-2. 전체 회원 수 확인

**목적:** 회원 테이블에 저장된 전체 회원 수를 확인한다.

```sql
select count(*) as user_count
from users;
```

### 3-3. 특정 회원 정보 확인

**목적:** ID가 4인 회원의 이름과 이메일이 올바르게 저장되었는지 확인한다.

```sql
select name, email
from users
where id = 4;
```

## 4. 중복 데이터 검증

### 4-1. 중복 이름 확인

**목적:** 같은 이름을 가진 회원이 여러 명 존재하는지 확인한다.

```sql
select name, count(*) as user_count
from users
group by name
having count(*) > 1;
```

### 4-2. 데이터 추가 후 중복 여부 재검증

**목적:** 테스트 데이터를 추가한 뒤 중복 이름이 정상적으로 탐지되는지 확인한다.

```sql
insert into users (id, name, email, age)
values (5, 'Jung', 'jung2@test.com', 29);
```

추가된 데이터 확인:

```sql
select *
from users;
```

중복 이름 재확인:

```sql
select name, count(*) as user_count
from users
group by name
having count(*) > 1;
```

**확인 사항**
- 테스트 데이터가 정상적으로 추가되었는지 확인한다.
- 동일한 이름을 가진 회원이 중복 데이터 조회 결과에 나타나는지 확인한다.

> 참고: 같은 ID의 데이터가 이미 존재하면 INSERT가 실패할 수 있으므로, 재실행할 때는 해당 데이터의 존재 여부를 먼저 확인한다.

## 5. JOIN을 활용한 데이터 검증

### 5-1. 주문 회원과 주문 상품 확인

**목적:** 주문 데이터의 회원 ID가 회원 테이블의 ID와 연결되는지 확인한다.

```sql
select u.name, o.product
from users as u
inner join orders as o
on u.id = o.user_id;
```

**확인 사항**
- 회원과 주문 데이터가 일치하는 조건으로 연결되는지 확인한다.
- 회원과 연결된 주문 데이터만 조회되는지 확인한다.

### 5-2. 주문이 없는 회원도 포함하여 조회

**목적:** 주문 여부와 관계없이 전체 회원을 기준으로 주문 정보를 확인한다.

```sql
select u.name, o.product
from users as u
left join orders as o
on u.id = o.user_id;
```

**확인 사항**
- 주문이 있는 회원은 주문 정보와 함께 조회되는지 확인한다.
- 주문이 없는 회원은 회원 정보가 유지되고 주문 컬럼은 NULL로 표시되는지 확인한다.

## 6. 주문 금액 및 회원별 주문 검증

### 6-1. 특정 금액 이상의 주문 확인

**목적:** 주문 금액이 200,000원 이상인 데이터가 있는지 확인한다.

```sql
select *
from orders
where price >= 200000;
```

### 6-2. 특정 회원의 조건별 주문 확인

**목적:** ID가 1인 회원 중 주문 금액이 40,000원 이상인 주문을 조회한다.

```sql
select u.name, o.product, o.price
from users as u
inner join orders as o
on u.id = o.user_id
where o.price >= 40000
and u.name = 'kim';
```

**확인 사항**
- 회원 이름과 주문 금액 조건이 모두 적용되는지 확인한다.

### 6-3. 특정 회원의 총 주문 금액 확인

**목적:** ID가 1인 회원이 주문한 상품들의 총금액을 계산한다.

```sql
select u.name, sum(o.price) as total_price
from users as u
inner join orders as o
on u.id = o.user_id
where u.id = 1
group by u.id;
```

**확인 사항**
- 해당 회원의 주문 금액이 합산되는지 확인한다.
- INNER JOIN을 사용하므로 주문이 없는 회원은 결과에서 제외된다.

### 6-4. 주문이 없는 회원의 총 주문 금액 처리

**목적:** 주문이 없는 회원도 조회하고 총 주문 금액을 0으로 표시한다.

```sql
select u.name, coalesce(sum(o.price), 0) as total_price
from users as u
left join orders as o
on u.id = o.user_id
group by u.id;
```

**확인 사항**
- LEFT JOIN으로 전체 회원을 유지하는지 확인한다.
- COALESCE를 사용해 NULL인 총 주문 금액을 0으로 표시하는지 확인한다.

### 6-5. 주문이 없는 회원 찾기

**목적:** 주문 데이터가 연결되지 않는 회원을 조회한다.

```sql
select u.name, o.product
from users as u
left join orders as o
on u.id = o.user_id
where o.product is null;
```

**확인 사항**
- 주문이 없는 회원이 조회되는지 확인한다.

### 6-6. 회원별 주문 개수 확인

**목적:** 회원별 주문 건수를 계산하고 주문 여부를 확인한다.

```sql
select u.name, count(o.order_id) as order_count
from users as u
left join orders as o
on u.id = o.user_id
group by u.id;
```

**확인 사항**
- 회원별 주문 건수가 계산되는지 확인한다.
- 주문이 없는 회원의 주문 건수가 0으로 표시되는지 확인한다.
- COUNT(o.order_id)는 NULL인 주문 ID를 개수에 포함하지 않는다.

### 6-7. 개별 주문 금액 조건을 적용한 회원별 주문 금액 계산

**목적:** 주문 금액이 50,000원 이상인 개별 주문만 대상으로 회원별 주문 금액 합계를 계산한다.

```sql
select u.name, sum(o.price) as price_total
from users as u
inner join orders as o
on u.id = o.user_id
where o.price >= 50000
group by u.id;
```

**확인 사항**
- 개별 주문 금액에 WHERE 조건이 적용되는지 확인한다.
- 조건에 맞는 주문이 없는 회원은 결과에서 제외된다.
- 계산된 합계는 전체 주문 금액이 아니라 조건에 맞는 주문 금액의 합계다.

## 7. 서브쿼리를 활용한 데이터 검증

### 7-1. 평균 주문 금액보다 큰 주문 찾기

**목적:** 전체 주문의 평균 금액보다 높은 주문을 조회한다.

```sql
select u.name, o.price
from users as u
inner join orders as o
on u.id = o.user_id
where o.price > (
    select avg(price)
    from orders
);
```

**확인 사항**
- 서브쿼리에서 계산한 평균 주문 금액이 바깥 쿼리의 조건으로 사용되는지 확인한다.

### 7-2. 회원별 총 주문 금액 조건 확인

**목적:** 회원별 주문 금액 합계를 계산한 뒤, 총액이 100,000원 이상인 회원만 조회한다.

```sql
select u.name, sum(o.price) as price_total
from users as u
inner join orders as o
on u.id = o.user_id
group by u.id
having sum(o.price) >= 100000;
```

**확인 사항**
- 회원별 총 주문 금액이 계산되는지 확인한다.
- HAVING 조건으로 집계 결과가 필터링되는지 확인한다.

### 7-3. 평균 주문 금액보다 비싼 주문의 회원과 상품 확인

**목적:** 평균 주문 금액보다 비싼 주문을 한 회원의 이름과 상품명을 조회한다.

```sql
select u.name, o.product
from users as u
inner join orders as o
on u.id = o.user_id
where o.price > (
    select avg(price)
    from orders
);
```

**확인 사항**
- 평균 주문 금액보다 비싼 주문의 회원과 상품 정보가 조회되는지 확인한다.

### 7-4. 가장 높은 주문 금액 확인

**목적:** 주문을 한 회원 중 가장 높은 주문 금액과 해당 회원의 이름을 조회한다.

```sql
select u.name, o.price
from users as u
inner join orders as o
on u.id = o.user_id
where o.price = (
    select max(price)
    from orders
);
```

**확인 사항**
- 서브쿼리에서 가장 높은 주문 금액을 계산하는지 확인한다.
- 해당 금액과 일치하는 주문의 회원 이름과 금액이 조회되는지 확인한다.
- 최고 금액이 동일한 주문이 여러 건이면 여러 행이 조회될 수 있다.

### 7-5. 주문이 없는 회원 찾기 - NOT EXISTS

**목적:** 주문 테이블에 연결된 데이터가 없는 회원을 조회한다.

```sql
select u.name
from users as u
where not exists (
    select 1
    from orders as o
    where o.user_id = u.id
);
```

**확인 사항**
- 회원 ID와 일치하는 주문이 없을 때 해당 회원이 조회되는지 확인한다.
- EXISTS는 조건에 맞는 행의 존재 여부를 판단하며, NOT EXISTS는 해당 행이 없을 때 참이 된다.

다음 쿼리도 동일한 조건을 검증하는 대체 표현이다.

```sql
select u.name
from users as u
where not exists (
    select *
    from orders as o
    where o.user_id = u.id
);
```

두 쿼리는 이 실습에서 동일한 존재 여부를 확인한다. `SELECT 1`은 존재 여부만 확인한다는 의도를 간결하게 표현하는 방식이다.

## 8. CASE WHEN을 활용한 조건별 결과 분류

### 8-1. 나이에 따른 회원 분류

**목적:** 나이가 30 이상인지에 따라 회원을 분류한다.

```sql
select name, age,
    case
        when age >= 30 then '30대 이상'
        else '30대 미만'
    end as age_group
from users;
```

### 8-2. 주문 금액에 따른 PASS / FAIL 판정

**목적:** 주문 금액이 50,000원 이상인지에 따라 결과를 구분한다.

```sql
select product, price,
    case
        when price >= 50000 then 'pass'
        else 'fail'
    end as test_result
from orders;
```

### 8-3. 주문 금액에 따른 등급 분류

**목적:** 주문 금액에 따라 High, Medium, Low 등급을 부여한다.

```sql
select product, price,
    case
        when price >= 100000 then 'High'
        when price >= 50000 then 'Medium'
        else 'Low'
    end as price_grade
from orders;
```

**확인 사항**
- CASE WHEN 조건이 위에서부터 순서대로 평가되는지 확인한다.
- 높은 금액 조건을 먼저 작성하여 등급이 올바르게 분류되는지 확인한다.

### 8-4. 회원별 주문 건수에 따른 등급 분류

**목적:** 주문 건수에 따라 회원을 VIP, Normal, None으로 분류한다.

```sql
select u.name, count(o.order_id) as order_count,
    case
        when count(o.order_id) >= 2 then 'VIP'
        when count(o.order_id) = 1 then 'Normal'
        else 'None'
    end as grade
from users as u
left join orders as o
on u.id = o.user_id
group by u.id;
```

**확인 사항**
- 주문 건수가 2건 이상이면 VIP로 분류되는지 확인한다.
- 주문 건수가 1건이면 Normal, 0건이면 None으로 분류되는지 확인한다.
- LEFT JOIN을 사용하여 주문이 없는 회원도 결과에 포함한다.

### 8-5. 회원별 총 주문 금액에 따른 PASS / FAIL 판정

**목적:** 회원별 총 주문 금액이 100,000원 이상인지 판정하고, 주문이 없는 회원도 결과에 포함한다.

```sql
select u.name, coalesce(sum(o.price), 0) as total,
    case
        when sum(o.price) >= 100000 then 'pass'
        else 'fail'
    end as test_result
from users as u
left join orders as o
on u.id = o.user_id
group by u.id;
```

**확인 사항**
- 회원별 총 주문 금액이 계산되는지 확인한다.
- 주문이 없는 회원도 조회되며 총액은 0으로 표시되는지 확인한다.
- 총액이 100,000원 이상인 회원은 pass, 그 미만은 fail로 분류되는지 확인한다.

### 8-6. 주문이 있는 회원의 총 주문 금액 판정

**목적:** 주문이 있는 회원만 대상으로 총 주문 금액이 50,000원 이상인지 판정한다.

```sql
select u.name, sum(o.price) as total,
    case
        when sum(o.price) >= 50000 then 'pass'
        else 'fail'
    end as test_result
from users as u
inner join orders as o
on u.id = o.user_id
group by u.id;
```

**확인 사항**
- INNER JOIN으로 주문이 있는 회원만 조회되는지 확인한다.
- 회원별 주문 금액 합계를 기준으로 pass 또는 fail이 결정되는지 확인한다.

## 9. 실습 정리

이번 실습에서는 다음 SQL 활용 방법을 연습했다.

- 조건에 따른 데이터 조회 및 회원 데이터 확인
- GROUP BY와 HAVING을 활용한 중복 및 집계 결과 검증
- INNER JOIN과 LEFT JOIN을 활용한 테이블 간 데이터 연결
- COUNT, SUM, AVG, MAX를 활용한 집계
- COALESCE를 활용한 NULL 대체
- 서브쿼리를 활용한 평균 및 최댓값 비교
- EXISTS와 NOT EXISTS를 활용한 데이터 존재 여부 확인
- CASE WHEN을 활용한 조건별 분류 및 판정

실행 결과는 실제로 확인한 내용을 기준으로 기록한다. 이 문서의 users와 orders는 MySQL 학습용 실습 테이블이며, NEXT_forum에서 사용하는 MongoDB 데이터와는 별개다.
