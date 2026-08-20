# DELETE

## DELETE의 의미

DELETE는 데이터베이스(DB)에 저장된 데이터를 삭제하는 SQL 문이다.

회원 정보, 주문 정보, 상품 정보 등 기존 데이터를 제거할 때 사용한다.

---

## 기본 문법

```sql
DELETE FROM 테이블명
WHERE 조건;
```

### 의미

- `DELETE FROM` : 데이터를 삭제할 테이블을 지정한다.
- `WHERE` : 삭제할 데이터를 선택한다.

---

## 예제

### 특정 회원 삭제

```sql
DELETE FROM users
WHERE id = 1;
```

위 SQL은 `id`가 1인 회원의 데이터를 삭제한다.

---

### 이메일로 삭제

```sql
DELETE FROM users
WHERE email = 'test@test.com';
```

위 SQL은 `email`이 **test@test.com**인 회원의 데이터를 삭제한다.

---

## 삭제 결과 확인

```sql
SELECT *
FROM users
WHERE id = 1;
```

### 조회 결과

```
0 Rows
```

또는

```
조회 결과 없음
```

삭제된 데이터는 더 이상 조회되지 않는다.

---

## DELETE 동작 과정

```text
DELETE 실행
        ↓
users 테이블 데이터 삭제
        ↓
SELECT로 삭제 여부 확인
```

---

## QA에서 DELETE를 알아야 하는 이유

QA는 테스트가 끝난 후 테스트 데이터를 삭제해야 하는 경우가 있다.

예를 들어

- 테스트용 회원 삭제
- 테스트용 주문 삭제
- 테스트용 상품 삭제

등의 작업을 위해 DELETE를 사용할 수 있다.

```sql
DELETE FROM users
WHERE email = 'qa@test.com';
```

위 SQL은 테스트용으로 생성한 회원만 삭제하는 예시이다.

---

## 주의 사항

`WHERE` 없이 DELETE를 실행하면 **테이블의 모든 데이터가 삭제될 수 있다.**

```sql
DELETE FROM users;
```

위 SQL은 users 테이블의 **모든 데이터를 삭제**하므로 주의해야 한다.

---

## API와 SQL 비교

| API | SQL | 의미 |
|------|------|------|
| POST | INSERT | 데이터 생성 |
| GET | SELECT | 데이터 조회 |
| PUT / PATCH | UPDATE | 데이터 수정 |
| DELETE | DELETE | 데이터 삭제 |

---

## 핵심 정리

- DELETE는 데이터를 삭제하는 SQL 문이다.
- DELETE FROM으로 삭제할 테이블을 지정한다.
- WHERE로 삭제할 데이터를 선택한다.
- DELETE 후에는 SELECT로 삭제 여부를 확인한다.
- WHERE 없이 DELETE를 실행하면 모든 데이터가 삭제될 수 있으므로 주의해야 한다.
- API의 DELETE와 SQL의 DELETE는 모두 데이터를 삭제하는 역할을 한다.
