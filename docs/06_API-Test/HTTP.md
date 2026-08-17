# HTTP

## HTTP의 의미

HTTP(HyperText Transfer Protocol)는 클라이언트와 서버가 데이터를 주고받기 위한 통신 규약(Protocol)이다.

## HTTP 동작 과정

```
클라이언트
      ↓
HTTP Request
      ↓
서버(Server)
      ↓
HTTP Response
      ↓
클라이언트
```

## HTTP Request

HTTP Request는 클라이언트가 서버에 보내는 요청이다.

예시

```http
GET /search?q=선풍기 HTTP/1.1
```

구성 요소

- **GET** : 요청 방식(Method)
- **/search** : 요청 주소(URL)
- **q=선풍기** : 검색어(Query Parameter)

## HTTP Response

HTTP Response는 서버가 요청을 처리한 후 클라이언트에게 반환하는 응답이다.

예시

```http
HTTP/1.1 200 OK
```

응답 데이터는 주로 JSON 형식으로 전달된다.

```json
{
  "name": "선풍기"
}
```

## QA에서 HTTP를 알아야 하는 이유

QA는 HTTP 요청과 응답을 확인하여 문제의 원인을 분석한다.

예를 들어 Postman에서 API를 테스트했을 때

- **404 Not Found** : 요청한 URL 또는 리소스를 찾을 수 없다.
- **500 Internal Server Error** : 서버 내부 오류가 발생했다.

HTTP를 이해하면 API 테스트 결과를 분석하고, 문제의 원인을 보다 정확하게 파악할 수 있다.

## 핵심 정리

- HTTP는 클라이언트와 서버가 데이터를 주고받기 위한 통신 규약이다.
- 클라이언트는 Request를 보내고 서버는 Response를 반환한다.
- Request에는 요청 방식, URL, Query Parameter 등이 포함될 수 있다.
- Response에는 상태 코드와 응답 데이터가 포함된다.
- QA는 HTTP 요청과 응답을 확인하여 문제의 원인을 분석한다.
