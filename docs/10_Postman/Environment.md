# Environment

## 1. Environment란?

Postman에서 Environment는 API 테스트에 필요한 여러 값을 하나의 환경으로 묶어서 관리하는 기능이다.

API 테스트에서는 개발 환경, 테스트 환경, 운영 환경 등 서로 다른 서버 환경을 사용할 수 있다.

예를 들어 서버 URL이 환경마다 다를 수 있다.

```text
Development → https://dev.example.com
Production  → https://www.example.com
```

Environment를 사용하면 환경에 따라 달라지는 값을 관리할 수 있다.

## 2. QA에서 왜 필요한가?

실제 API 테스트에서는 개발 환경, 테스트 환경, 운영 환경처럼 서로 다른 서버 환경을 사용할 수 있다.

Environment를 사용하면 환경에 따라 달라지는 값을 관리하기 편하기 때문에 같은 API Request를 여러 환경에서 테스트할 때 유용하다.

## 3. Environment 생성

Postman에서 테스트에 사용할 환경을 생성할 수 있다.

실습에서는 다음과 같이 Environment를 생성했다.

```text
Environment: QA-Test
```

## 4. Environment와 Variable

Environment 안에 API 테스트에 필요한 Variable을 등록하여 사용할 수 있다.

실습에서는 다음과 같은 Variable을 생성했다.

```text
QA-Test

baseUrl → https://jsonplaceholder.typicode.com
userId  → 1
```

Request에서는 Variable을 사용하여 다음과 같이 작성할 수 있다.

```text
{{baseUrl}}/posts/{{userId}}
```

## 5. Variable 값 저장

Environment의 Variable에는 Local Value와 Share 기능이 있다.

실습에서는 Variable의 Value 옆에 있는 구름 모양 `Share`를 사용하여 값을 저장했다.

Share한 후 Postman에서 로그아웃했다가 다시 로그인해도 Variable의 값이 유지되는 것을 확인했다.

```text
baseUrl → https://jsonplaceholder.typicode.com
userId  → 1
```

또한 저장된 Environment Variable을 사용하여 API Request를 다시 실행했을 때 `200 OK` 응답이 정상적으로 반환되는 것을 확인했다.
