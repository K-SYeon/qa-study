# UPDATE

## UPDATE의 의미

UPDATE는 데이터베이스(DB)에 저장된 기존 데이터를 수정하는 SQL 문이다.

회원 정보, 주문 상태, 상품 정보 등 이미 저장된 데이터를 변경할 때 사용한다.

---

## 기본 문법

```sql
UPDATE 테이블명
SET 컬럼명 = 값
WHERE 조건;
```

### 의미

- `UPDATE` : 수정할 테이블을 지정한다.
- `SET` : 수정할 컬럼과 값을 지정한다.
- `WHERE` : 수정할 데이터를 선택한다.

---

## 예제

### 이름 수정

```sql
UPDATE users
SET name = '여니'
WHERE id = 1;
```

위 SQL은 `id`가 1인 회원의 이름을 **'여니'**로 수정한다.

---

### 이메일 수정

```sql
UPDATE users
SET email = 'soyeon@test.com'
WHERE id = 1;
```

위 SQL은 `id`가 1인 회원의 이메일을 **'soyeon@test.com'**으로 수정한다.

---

### 여러 컬럼 수정

```sql
UPDATE users
SET
    name = '여니',
    email = 'soyeon@test.com'
WHERE id = 1;
```

위 SQL은 `id`가 1인 회원의 이름과 이메일을 함께 수정한다.

---

## 수정 결과 확인

```sql
SELECT *
FROM users
WHERE id = 1;
```

### 조회 결과

| id | name | email |
|---:|------|------------------|
| 1 | 여니 | soyeon@test.com |

---

## UPDATE 동작 과정

```text
UPDATE 실행
        ↓
users 테이블 데이터 수정
        ↓
SELECT로 수정 여부 확인
```

---

## QA에서 UPDATE를 알아야 하는 이유

QA는 테스트 데이터를 원하는 상태로 변경해야 하는 경우가 있다.

예를 들어

- 회원 이름 변경
- 회원 등급 변경
- 주문 상태 변경

등의 작업을 위해 UPDATE를 사용할 수 있다.

```sql
UPDATE users
SET grade = 'VIP'
WHERE id = 1;
```

위 SQL은 회원 등급을 **VIP**로 변경하는 예시이다.

---

## 주의 사항

`WHERE` 없이 UPDATE를 실행하면 **모든 데이터가 수정될 수 있다.**

```sql
UPDATE users
SET grade = 'VIP';
```

위 SQL은 users 테이블의 **모든 회원 등급을 VIP로 변경**하므로 주의해야 한다.

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

- UPDATE는 기존 데이터를 수정하는 SQL 문이다.
- SET으로 수정할 값을 지정한다.
- WHERE로 수정할 데이터를 선택한다.
- UPDATE 후에는 SELECT로 수정 여부를 확인한다.
- WHERE 없이 UPDATE를 실행하면 모든 데이터가 수정될 수 있으므로 주의해야 한다.
- API의 PUT/PATCH와 SQL의 UPDATE는 모두 데이터를 수정하는 역할을 한다.
