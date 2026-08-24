# CREATE DATABASE

## 개요

`CREATE DATABASE`는 새로운 Database를 생성할 때 사용하는 SQL 명령어이다.

## 학습 목표

- Database를 생성할 수 있다.
- `CREATE DATABASE`의 기본 문법을 이해한다.
- Database 이름을 정확하게 지정할 수 있다.

## 학습 내용

### 1. 기본 문법

```sql
CREATE DATABASE 데이터베이스명;
```

### 2. 실습

QA 실습용 Database를 생성했다.

```sql
CREATE DATABASE qa_practice;
```

생성 후 MySQL Workbench의 `SCHEMAS` 영역을 새로고침하여 `qa_practice` Database가 생성된 것을 확인했다.

### 3. Database 이름 오타 수정

실습 과정에서 `qa_pratice`라는 이름으로 잘못 생성한 Database가 있었다.

잘못 생성한 Database를 삭제한 후 올바른 이름으로 다시 생성했다.

```sql
DROP DATABASE qa_pratice;

CREATE DATABASE qa_practice;
```

`DROP DATABASE`는 Database 자체를 삭제하는 명령어이므로 실제 사용 시 주의해야 한다.

## QA 활용

테스트 환경에서는 별도의 Database를 만들어 테스트 데이터를 관리할 수 있다.

이번 실습에서는 `qa_practice` Database를 생성하여 QA용 데이터를 저장했다.
