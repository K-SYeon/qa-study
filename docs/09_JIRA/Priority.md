# Priority

## 개요

Priority는 JIRA에서 Issue를 **얼마나 우선적으로 처리해야 하는지**를 나타낸다.

QA에서 발견된 Bug뿐만 아니라 프로젝트에서 관리하는 다양한 Issue의 처리 순서를 결정하는 데 활용할 수 있다.

## 학습 목표

- Priority의 개념을 이해한다.
- Issue의 우선순위를 결정하는 기준을 이해한다.
- Priority와 Severity의 차이를 이해한다.
- QA에서 Priority를 어떻게 활용하는지 이해한다.

## 학습 내용

### 1. Priority란?

Priority는 Issue를 **얼마나 빨리 처리해야 하는지**를 나타내는 기준이다.

Priority가 높을수록 다른 Issue보다 우선적으로 처리해야 한다는 의미이다.

```text
Priority
= 얼마나 빨리 처리해야 하는가?
```

### 2. Priority를 결정하는 기준

Priority는 단순히 Bug가 심각한지 여부만으로 결정하는 것이 아니다.

다음과 같은 요소를 종합하여 결정할 수 있다.

- 사용자에게 미치는 영향
- 서비스에 미치는 영향
- 업무의 긴급성
- 다른 기능에 미치는 영향
- 출시 일정
- 비즈니스 중요도

따라서 같은 정도의 결함이라도 프로젝트 상황에 따라 Priority가 달라질 수 있다.

### 3. Priority와 Severity의 차이

Priority와 Severity는 서로 다른 개념이다.

| 구분 | 의미 |
|---|---|
| **Priority** | 얼마나 빨리 처리해야 하는가 |
| **Severity** | 문제가 얼마나 심각한가 |

쉽게 구분하면 다음과 같다.

```text
Priority
→ 처리의 우선순위

Severity
→ 결함의 심각도
```

따라서 **Severity가 높다고 해서 반드시 Priority가 높은 것은 아니며, Severity가 낮다고 해서 반드시 Priority가 낮은 것도 아니다.**

### 4. Priority와 Severity 예시

#### 예시 1. 로그인 기능 전체 장애

```text
문제:
로그인 버튼이 모든 사용자에게 작동하지 않는다.

Severity:
높음

Priority:
높음
```

서비스의 핵심 기능이 정상적으로 동작하지 않고 많은 사용자에게 영향을 주기 때문에 Severity와 Priority가 모두 높게 설정될 가능성이 크다.

#### 예시 2. 화면의 버튼 글자가 잘림

```text
문제:
특정 화면에서 버튼의 글자가 일부 잘려 보인다.

Severity:
낮음

Priority:
상황에 따라 높을 수 있음
```

기능 자체에는 큰 문제가 없기 때문에 Severity는 낮을 수 있다.

하지만 해당 화면이 출시 예정인 주요 기능이거나 중요한 이벤트 페이지라면 빠른 수정이 필요할 수 있으므로 Priority를 높게 설정할 수 있다.

### 5. QA에서 Priority를 사용하는 이유

QA에서 발견한 Bug가 많을 경우 모든 Bug를 동시에 처리하기 어렵다.

Priority를 설정하면 여러 Issue 중 **어떤 Issue를 먼저 처리해야 하는지 판단**할 수 있다.

예를 들어:

```text
Priority 높음
└── 로그인 기능 전체 장애

Priority 중간
└── 검색 결과 일부 오류

Priority 낮음
└── 특정 화면의 문구 정렬 문제
```

이처럼 Priority를 통해 개발팀이 처리 순서를 판단하고 업무를 효율적으로 진행할 수 있다.

## 핵심 정리

- Priority는 Issue를 얼마나 빨리 처리해야 하는지를 나타낸다.
- Priority는 사용자 영향, 업무 긴급성, 출시 일정, 비즈니스 중요도 등을 고려하여 결정할 수 있다.
- Severity는 결함의 심각도를 의미하고, Priority는 처리의 우선순위를 의미한다.
- Severity와 Priority는 서로 다른 기준이므로 항상 같은 수준으로 설정되는 것은 아니다.
- QA에서는 Priority를 통해 여러 Issue의 처리 순서를 결정할 수 있다.
