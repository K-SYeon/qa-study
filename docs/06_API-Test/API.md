# API란?

## API의 의미

API(Application Programming Interface)는 클라이언트와 서버가 데이터를 주고받기 위한 통신 규칙(인터페이스)이다.

사용자가 애플리케이션이나 웹에서 요청을 보내면 API를 통해 서버와 통신하고, 서버는 처리 결과를 응답으로 반환한다.

## API 동작 과정

네이버에서 **'선풍기'**를 검색하는 과정을 예로 들면 다음과 같다.

```
사용자
    ↓
검색 버튼 클릭
    ↓
네이버 웹(클라이언트)
    ↓
API 요청(Request)
    ↓
네이버 서버(Server)
    ↓
검색 결과 생성
    ↓
API 응답(Response)
    ↓
검색 결과 화면 표시
```

## Request와 Response

API 통신은 **Request(요청)** 와 **Response(응답)** 로 이루어진다.

- **Request** : 클라이언트가 서버에 데이터를 요청한다.
- **Response** : 서버가 요청을 처리한 후 결과를 반환한다.

## QA에서 API를 알아야 하는 이유

QA는 API의 요청(Request)과 응답(Response)을 확인하여 문제의 원인을 분석한다.

예를 들어 검색 결과가 표시되지 않는 경우

### Case 1. API는 정상 동작하는 경우

```
검색 버튼 클릭
        ↓
API 요청 성공
        ↓
200 OK
        ↓
데이터 존재
        ↓
화면에 표시되지 않음
```

→ API는 정상적으로 동작했으므로 **프론트엔드(UI) 문제**일 가능성이 높다.

### Case 2. API 오류가 발생한 경우

```
검색 버튼 클릭
        ↓
API 요청
        ↓
500 Internal Server Error
```

→ **서버(API) 문제**일 가능성이 높다.

## API 데이터 형식(JSON)

API는 주로 **JSON(JavaScript Object Notation)** 형식으로 데이터를 주고받는다.

예시

```json
{
  "name": "선풍기",
  "price": 39000,
  "brand": "삼성"
}
```

## 핵심 정리

- API는 클라이언트와 서버가 데이터를 주고받기 위한 통신 규칙이다.
- 클라이언트는 Request를 보내고 서버는 Response를 반환한다.
- QA는 API의 요청과 응답을 확인하여 문제의 원인을 분석한다.
- API는 주로 JSON 형식으로 데이터를 주고받는다.
