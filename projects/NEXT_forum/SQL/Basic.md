
# SQL Basic

## 1. 데이터 조회

### SELECT
테이블에서 필요한 데이터를 조회한다.

```sql
select name, age
from users;
```

### WHERE
조건에 맞는 데이터를 조회한다.

```sql
select *
from users
where age >= 28;
```

### AND / OR
여러 조건을 결합한다.

```sql
select *
from users
where age >= 26 and age <= 30;
```

### ORDER BY / LIMIT
조회 결과를 정렬하거나 결과 개수를 제한한다.

```sql
select *
from users
order by age desc
limit 3;
```

## 2. 조건 및 중복 처리

### IN / BETWEEN / LIKE
- `IN`: 여러 값 중 일치하는 값 조회
- `BETWEEN`: 범위에 포함되는 값 조회
- `LIKE`: 특정 패턴과 일치하는 값 조회

### NULL 처리
NULL은 일반적인 비교 연산자 대신 `IS NULL`, `IS NOT NULL`로 확인한다.

### DISTINCT
중복을 제거한 값을 조회한다.

## 3. 집계 함수 및 그룹화

### 주요 집계 함수
- `COUNT()`: 개수
- `SUM()`: 합계
- `AVG()`: 평균
- `MAX()`: 최댓값
- `MIN()`: 최솟값

### GROUP BY
특정 기준으로 데이터를 그룹화한다.

### HAVING
그룹화한 결과에 조건을 적용한다.

### WHERE와 HAVING
- `WHERE`: 그룹화 전 개별 행 필터링
- `HAVING`: 그룹화 후 집계 결과 필터링

## 4. JOIN

### INNER JOIN
두 테이블에서 조인 조건이 일치하는 데이터만 조회한다.

### LEFT JOIN
왼쪽 테이블의 데이터를 모두 조회하고, 오른쪽 테이블의 일치하는 데이터를 연결한다.

## 5. 서브쿼리

쿼리 안에 다른 쿼리를 작성하여 조회 결과를 조건이나 데이터로 활용한다.

- 단일 값 비교
- `IN`을 이용한 여러 값 비교
- `EXISTS` / `NOT EXISTS`를 이용한 데이터 존재 여부 확인

## 6. 조건문 및 NULL 처리

### CASE WHEN
조건에 따라 서로 다른 값을 반환한다.

### IF()
조건에 따라 두 값 중 하나를 반환한다.

### IFNULL()
값이 NULL이면 지정한 대체값을 반환한다.

### COALESCE()
인수 중 NULL이 아닌 첫 번째 값을 반환한다.

### NULLIF()
두 값이 같으면 NULL을 반환한다.

## 7. 문자열 함수

- `UPPER()` / `LOWER()`: 대소문자 변환
- `LENGTH()` / `CHAR_LENGTH()`: 문자열 길이 확인
- `SUBSTRING_INDEX()`: 구분자를 기준으로 문자열 추출
- `REPLACE()`: 문자열 치환
- `CONCAT()`: 문자열 연결

## 8. 숫자 함수 및 형 변환

- `ROUND()`: 반올림
- `CEIL()` / `FLOOR()`: 올림 / 내림
- `TRUNCATE()`: 지정한 자릿수 이하 절삭
- `ABS()`: 절댓값
- `MOD()`: 나머지
- `POWER()` / `SQRT()`: 거듭제곱 / 제곱근
- `CAST()`: 데이터 형 변환

## 9. 날짜 함수

- `YEAR()` / `MONTH()` / `DAY()`: 연·월·일 추출
- `DATEDIFF()`: 두 날짜 사이의 일수 차이 계산
- `DATE_FORMAT()`: 날짜 형식 지정

## 10. 윈도우 함수

### ROW_NUMBER()
조회 결과에 순번을 부여한다.

### PARTITION BY
그룹별로 윈도우 함수의 계산 범위를 나눈다.

## 11. 집합 연산

### UNION
여러 조회 결과를 결합하고 중복 행을 제거한다.

### UNION ALL
여러 조회 결과를 중복 제거 없이 결합한다.
