# MySQL

## 개요

MySQL은 SQL을 사용하여 데이터를 저장하고 관리할 수 있는 관계형 데이터베이스 관리 시스템(RDBMS)이다.

QA에서는 MySQL을 이용하여 애플리케이션의 기능 동작뿐만 아니라 실제 Database에 데이터가 정상적으로 저장, 조회, 수정, 삭제되었는지 검증할 수 있다.

## 학습 목표

- SQL과 MySQL의 차이를 이해한다.
- DB, DBMS, MySQL의 관계를 이해한다.
- SQL이 어떻게 Database에 전달되고 실행되는지 이해한다.
- QA에서 Database를 활용하는 이유를 이해한다.

## 학습 내용

### 1. SQL(Structured Query Language)이란?

SQL은 **Structured Query Language**의 약자로, Database를 다루기 위한 언어이다.

SQL을 사용하면 Database의 데이터를 조회, 생성, 수정, 삭제할 수 있다.

대표적인 SQL 명령어는 다음과 같다.

| SQL | 역할 |
|---|---|
| `SELECT` | 데이터 조회 |
| `INSERT` | 데이터 생성 |
| `UPDATE` | 데이터 수정 |
| `DELETE` | 데이터 삭제 |

### 2. MySQL이란?

MySQL은 SQL을 사용할 수 있도록 해주는 **관계형 데이터베이스 관리 시스템(RDBMS)**이다.

SQL이라는 언어를 사용하여 Database에 저장된 데이터를 관리한다.

### 3. DBMS란?

DBMS는 **Database Management System**의 약자로, Database를 생성하고 관리하는 프로그램이다.

대표적인 DBMS는 다음과 같다.

- MySQL
- MariaDB
- Oracle Database
- Microsoft SQL Server(MSSQL)
- PostgreSQL

### 4. SQL과 MySQL의 차이

SQL과 MySQL은 같은 개념이 아니다.

| 구분 | SQL | MySQL |
|---|---|---|
| 의미 | Database를 다루기 위한 언어 | Database 관리 시스템(DBMS) |
| 역할 | 데이터를 조회, 생성, 수정, 삭제 | SQL을 실행하고 Database를 관리 |
| 예시 | `SELECT`, `INSERT`, `UPDATE`, `DELETE` | MySQL Server |

즉, **SQL은 언어이고 MySQL은 그 SQL을 사용하여 Database를 관리하는 시스템**이다.

> 참고: MySQL Workbench는 MySQL Server 자체가 아니라 MySQL Database를 GUI 환경에서 관리하고 SQL을 실행할 수 있도록 도와주는 도구이다.

### 5. SQL과 MySQL의 동작 과정

기본적인 동작 과정은 다음과 같다.

```text
사용자
  ↓
SQL 작성
  ↓
MySQL
  ↓
Database
  ↓
결과 반환
```

예를 들어 다음 SQL을 실행한다고 가정한다.

```sql
SELECT *
FROM users;
```

실행 과정은 다음과 같다.

```text
사용자
  ↓
SELECT 실행
  ↓
MySQL
  ↓
users Table 조회
  ↓
조회 결과 반환
```

### 6. QA가 MySQL을 알아야 하는 이유

QA는 화면에서 기능이 정상적으로 동작하는지만 확인하는 것이 아니라, 실제 Database에 데이터가 정상적으로 처리되었는지도 검증할 수 있다.

예를 들어 회원가입이 성공했다고 가정한다.

```text
회원가입
  ↓
API 요청
  ↓
MySQL
  ↓
Database에 회원 정보 저장
```

화면에서는 회원가입 성공 메시지가 표시되었더라도 실제 Database에 회원 정보가 정상적으로 저장되었는지는 별도로 확인할 필요가 있다.

다음과 같이 SQL을 실행하여 확인할 수 있다.

```sql
SELECT *
FROM users
WHERE email = 'test@test.com';
```

조회 결과가 정상적으로 반환되면 회원가입 과정에서 Database에 회원 정보가 저장되었는지 확인할 수 있다.

### 7. QA에서 Database를 활용한 검증

Database를 활용하면 기능 테스트의 결과를 데이터 관점에서도 검증할 수 있다.

예를 들어 회원정보 수정 기능을 테스트한 경우:

```text
회원정보 수정
  ↓
API 요청
  ↓
Database 데이터 수정
  ↓
SELECT로 데이터 조회
  ↓
수정 결과 검증
```

회원 탈퇴 기능이라면:

```text
회원 탈퇴
  ↓
API 요청
  ↓
Database 데이터 삭제
  ↓
SELECT로 데이터 조회
  ↓
삭제 결과 검증
```

따라서 QA에서는 화면의 결과와 Database의 실제 데이터를 함께 확인하면 보다 정확하게 기능을 검증할 수 있다.

## 핵심 정리

- SQL은 Database를 다루기 위한 언어이다.
- MySQL은 SQL을 사용하여 Database를 관리하는 DBMS이다.
- DBMS는 Database를 생성하고 관리하는 시스템이다.
- SQL과 MySQL은 서로 다른 개념이지만 함께 사용된다.
- `SELECT`, `INSERT`, `UPDATE`, `DELETE`는 Database의 데이터를 다루는 대표적인 SQL 명령어이다.
- QA는 MySQL을 활용하여 기능 실행 후 실제 Database에 데이터가 정상적으로 처리되었는지 검증할 수 있다.
