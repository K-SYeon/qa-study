# MySQL

## 개요

QA 테스트에서 Database를 활용하여 테스트 결과를 검증하기 위한 기본적인 MySQL과 SQL을 학습한다.

MySQL Workbench를 사용하여 Database와 Table을 생성하고, 테스트 데이터를 직접 생성·조회·수정·삭제하는 과정을 실습한다.

## 학습 목표

- SQL과 MySQL의 차이를 이해한다.
- Database와 Table의 기본 개념을 이해한다.
- MySQL Workbench를 사용할 수 있다.
- 기본적인 SQL 문법을 이해하고 사용할 수 있다.
- CRUD 작업을 수행할 수 있다.
- SQL을 활용하여 Database의 데이터를 검증할 수 있다.
- QA 테스트에서 Database를 활용하는 방법을 이해한다.

## 학습 내용

### 1. MySQL 기본 개념

- SQL(Structured Query Language)
- MySQL
- DBMS(Database Management System)
- SQL과 MySQL의 차이
- MySQL의 기본 동작 과정
- QA에서 Database를 사용하는 이유

### 2. Database

- Database의 개념
- Database와 Table의 관계
- `USE`를 이용한 Database 선택

### 3. Table

- Table의 개념
- Row와 Column
- Primary Key
- 데이터 타입
- Table 생성

### 4. SQL 기본 문법

- `CREATE DATABASE`
- `CREATE TABLE`
- `INSERT`
- `SELECT`
- `UPDATE`
- `DELETE`
- `ORDER BY`

### 5. CRUD

- Create → `INSERT`
- Read → `SELECT`
- Update → `UPDATE`
- Delete → `DELETE`

### 6. QA Database 검증

SQL을 활용하여 기능 테스트 후 Database의 실제 데이터를 확인한다.

예를 들어 회원가입 테스트 후 다음과 같이 회원 정보가 정상적으로 저장되었는지 확인할 수 있다.

```sql
SELECT *
FROM users
WHERE email = 'test@test.com';
```

화면에서 확인한 결과뿐만 아니라 Database에 실제 데이터가 정상적으로 저장되었는지 확인함으로써 테스트 결과를 검증할 수 있다.

### 7. MySQL Workbench 실습

- Database 생성
- Table 생성
- 테스트 데이터 생성
- 데이터 조회
- 데이터 수정
- 데이터 삭제
- SQL 실행 결과 확인
- Safe Update Mode 오류 해결
- Database 미선택 오류 해결
- Table 이름 오류 해결

## 폴더 구조

```text
MySQL/
├── README.md
├── MySQL.md
├── Install.md
├── Database.md
├── Create-Database.md
├── Table.md
├── Create-Table.md
├── Insert.md
├── Select.md
├── Update.md
├── Delete.md
└── Order-By.md
```
