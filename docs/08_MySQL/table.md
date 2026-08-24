# Table

## 개요

Table은 Database 안에서 실제 데이터를 저장하는 공간이다.

데이터를 행(Row)과 열(Column) 형태로 관리한다.

## 학습 목표

- Table의 개념을 이해한다.
- Row와 Column의 개념을 이해한다.
- Database와 Table의 관계를 이해한다.

## 학습 내용

### 1. Table

Database 안에는 여러 개의 Table을 만들 수 있다.

이번 실습에서는 회원 정보를 저장하기 위해 `users` Table을 사용한다.

### 2. Column

Column은 저장할 데이터의 종류를 정의한다.

`users` Table에는 다음과 같은 Column이 있다.

| Column | 설명 |
|---|---|
| `id` | 회원을 구분하는 고유 번호 |
| `username` | 사용자 아이디 |
| `password` | 비밀번호 |
| `email` | 이메일 |
| `created_at` | 데이터 생성 일시 |

### 3. Row

Row는 Table에 저장된 하나의 데이터이다.

예를 들어 `testuser01` 회원 한 명의 정보가 하나의 Row가 된다.

## 구조

```text
qa_practice
└── users
    ├── id
    ├── username
    ├── password
    ├── email
    └── created_at
```

## QA 활용

QA에서는 Table의 구조를 이해하면 테스트 데이터가 어떤 형태로 저장되는지 파악할 수 있다.

예를 들어 회원가입 테스트를 수행할 때 `users` Table의 `username`, `email` 등의 Column을 확인하여 회원 정보가 올바르게 저장되었는지 검증할 수 있다.
