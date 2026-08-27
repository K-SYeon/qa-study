# Test Script

## 1. Test Script란?

Postman에서 API의 Response를 자동으로 검증하기 위해 작성하는 JavaScript 코드다.

API 요청 후 Response를 직접 확인하지 않고, Test Script를 통해 예상한 결과와 일치하는지 자동으로 확인할 수 있다.

```text
API 요청
   ↓
Response
   ↓
Test Script 실행
   ↓
조건 확인
   ↓
PASS / FAIL
```

## 2. QA에서 사용하는 이유

API 테스트를 여러 번 실행하거나 여러 API를 테스트할 때 매번 Response를 직접 확인하는 것은 번거로울 수 있다.

Test Script를 사용하면 Response가 예상한 결과인지 자동으로 확인할 수 있다.

예를 들어 HTTP Status가 `200`인지 자동으로 검사할 수 있다.

## 3. Status 검증

`pm.test()`를 사용하여 테스트를 작성할 수 있다.

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

위 코드는 API Response의 HTTP Status가 `200`인지 검사한다.

`200`이면 테스트 결과가 `PASS`로 표시되고, 예상한 값과 다르면 `FAIL`로 표시된다.

## 4. Response 데이터 검증

Response Body의 특정 데이터를 가져와 원하는 값인지 검사할 수도 있다.

```javascript
const jsonData = pm.response.json();
pm.expect(jsonData.id).to.eql(1);
```

각 부분의 의미는 다음과 같다.

* `pm.response.json()` → Response Body를 JSON 데이터로 가져온다.
* `jsonData` → 가져온 JSON 데이터를 저장하는 변수다.
* `jsonData.id` → JSON 데이터에서 `id` 값을 가져온다.
* `pm.expect()` → 해당 값을 검증한다.
* `.to.eql(1)` → 값이 `1`과 같은지 확인한다.

따라서 위 코드는 다음과 같은 의미이다.

```text
Response의 JSON 데이터
        ↓
id 값 가져오기
        ↓
id가 1인지 확인
        ↓
PASS / FAIL
```

## 5. Response 전체와 특정 데이터 검증의 차이

Response Body 전체를 특정 문자열과 비교할 수도 있다.

```javascript
pm.response.to.have.body('{"id":1}');
```

하지만 실제 Response Body에 `id` 외에 다른 데이터가 포함되어 있다면 전체 내용이 일치하지 않아 테스트가 실패할 수 있다.

예를 들어 다음과 같은 Response가 있다면:

```json
{
    "userId": 1,
    "id": 1,
    "title": "...",
    "body": "..."
}
```

전체 Body가 `{"id":1}`과 일치하지 않기 때문에 테스트가 실패한다.

이 경우 Response 전체가 아니라 특정 값만 검증하려면 JSON 데이터를 가져온 후 원하는 값을 확인할 수 있다.

```javascript
const jsonData = pm.response.json();
pm.expect(jsonData.id).to.eql(1);
```

## 6. Test Script의 기본 흐름

```text
API Request
   ↓
Response 수신
   ↓
Test Script 실행
   ↓
Response의 Status 또는 데이터 검증
   ↓
PASS / FAIL
```

Test Script를 사용하면 API Response를 사람이 직접 확인하는 것뿐만 아니라, 정해진 조건에 따라 자동으로 검증할 수 있다.
