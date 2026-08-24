# CREATE TABLE

## 개요

`CREATE TABLE`은 Database 안에 새로운 Table을 생성할 때 사용하는 SQL 명령어이다.

## 학습 목표

- Table을 생성할 수 있다.
- Column과 데이터 타입을 지정할 수 있다.
- Primary Key와 기본적인 제약 조건을 이해한다.

## 학습 내용

### 1. 기본 문법

```sql
CREATE TABLE 테이블명 (
    컬럼명 데이터타입,
    컬럼명 데이터타입
);
```

### 2. 실습

`qa_practice` Database에 회원 정보를 저장할 `users` Table을 생성했다.

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 3. 주요 설정

#### PRIMARY KEY

```sql
id INT AUTO_INCREMENT PRIMARY KEY
```

`id`를 각 데이터를 구분하는 고유한 값으로 사용한다.

#### AUTO_INCREMENT

새로운 데이터가 추가될 때 `id` 값이 자동으로 증가한다.

#### NOT NULL

해당 Column에 반드시 값이 입력되어야 한다.

#### DEFAULT

값을 따로 입력하지 않았을 때 기본값을 설정한다.

```sql
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
```

현재 시간이 자동으로 입력되도록 설정했다.

## QA 활용

테스트 데이터를 저장할 Table을 직접 구성하면 실제 서비스의 DB 구조를 이해하고 데이터 검증을 연습할 수 있다.
