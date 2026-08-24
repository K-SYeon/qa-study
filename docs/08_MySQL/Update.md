# UPDATE

## 개요

`UPDATE`는 Table에 저장된 기존 데이터를 수정할 때 사용하는 SQL 명령어이다.

## 학습 목표

- `UPDATE`를 사용하여 데이터를 수정할 수 있다.
- `WHERE`를 사용하여 수정할 대상을 지정할 수 있다.
- 수정 전과 수정 후의 데이터를 비교할 수 있다.
- MySQL Workbench의 Safe Update Mode를 이해한다.

## 학습 내용

### 1. 기본 문법

```sql
UPDATE 테이블명
SET 컬럼명 = 변경할 값
WHERE 조건;
```

### 2. 수정 전 데이터 확인

데이터를 수정하기 전에 현재 값을 먼저 확인한다.

```sql
SELECT *
FROM users
WHERE username = 'testuser01';
```

수정 전 이메일:

```text
testuser@test.com
```

### 3. 데이터 수정

처음에는 `username`을 조건으로 사용하여 데이터를 수정하려고 했다.

```sql
UPDATE users
SET email = 'testuser2@test.com'
WHERE username = 'testuser01';
```

하지만 MySQL Workbench의 Safe Update Mode에 의해 다음 오류가 발생했다.

```text
Error Code: 1175
```

Safe Update Mode는 실수로 많은 데이터를 한꺼번에 수정하는 것을 방지하기 위한 기능이다.

이번 실습에서는 `id`가 PRIMARY KEY이므로 `id`를 조건으로 사용하여 수정했다.

```sql
UPDATE users
SET email = 'testuser2@test.com'
WHERE id = 1;
```

### 4. 수정 후 확인

수정이 완료된 후 실제 데이터가 변경되었는지 확인한다.

```sql
SELECT *
FROM users
WHERE id = 1;
```

조회 결과 이메일이 다음과 같이 변경된 것을 확인했다.

```text
testuser2@test.com
```

## QA 활용

회원정보 수정 기능을 테스트할 때 다음과 같이 DB에서 결과를 검증할 수 있다.

```text
회원정보 수정
→ UPDATE
→ SELECT
→ 변경된 데이터 확인
```

화면에서 수정 성공 메시지가 표시되는 것뿐만 아니라 실제 DB에도 데이터가 정상적으로 반영되었는지 확인할 수 있다.
