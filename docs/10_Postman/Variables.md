# Variables

## 1. Variable이란?

Variable(변수)은 자주 변경되거나 반복해서 사용하는 값을 저장해두고 필요할 때 불러와 사용하는 것이다.

## 2. 왜 사용하는가?

API 테스트를 하다 보면 같은 값을 여러 Request에서 반복해서 사용해야 하는 경우가 있다.

예를 들어 서버 주소가 여러 Request에 들어간다면 각각의 URL에 서버 주소를 직접 입력해야 한다.

```text
Request 1
https://example.com/users

Request 2
https://example.com/login

Request 3
https://example.com/orders
```

서버 주소가 변경되면 각각의 Request URL을 수정해야 한다.

Variable을 사용하면 서버 주소를 변수로 관리할 수 있다.

```text
{{baseUrl}}/users
{{baseUrl}}/login
{{baseUrl}}/orders
```

서버 주소가 변경되더라도 Variable의 값만 변경하면 해당 Variable을 사용하는 Request에 적용할 수 있다.

## 3. Variable 사용 방법

Variable은 `{{변수명}}` 형태로 사용한다.

실습에서는 `baseUrl`과 `userId` Variable을 생성했다.

```text
baseUrl → https://jsonplaceholder.typicode.com
userId  → 1
```

Request에서는 다음과 같이 사용할 수 있다.

```text
{{baseUrl}}/posts/{{userId}}
```

실제 요청 시에는 Variable의 값이 적용되어 다음과 같은 URL로 요청된다.

```text
https://jsonplaceholder.typicode.com/posts/1
```

하나의 Request에서 여러 Variable을 함께 사용할 수도 있다.
