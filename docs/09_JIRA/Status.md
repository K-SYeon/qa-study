# Status

## 개요

JIRA에서 **Status는 Issue가 현재 어떤 진행 상태에 있는지** 나타내는 것이다.

Status와 Workflow의 차이를 이해하는 것이 중요하다.

- **Status**: Issue가 현재 어떤 상태인지
- **Workflow**: Issue가 어떤 상태를 거쳐 이동하는지

## 학습 목표

- Status의 개념을 이해한다.
- 대표적인 Status를 이해한다.
- Issue의 진행에 따라 Status가 변경되는 과정을 이해한다.
- Status와 Workflow의 차이를 이해한다.

## 학습 내용

### 1. Status란?

Status는 Issue가 현재 어떤 진행 상태에 있는지 나타내는 것이다.

예를 들어 작업을 시작하기 전인지, 작업을 진행하고 있는지, 작업이 완료되었는지를 Status로 확인할 수 있다.

### 2. 대표적인 Status

대표적으로 다음과 같은 Status를 사용할 수 있다.

| Status | 의미 |
|---|---|
| **To Do** | 아직 작업을 시작하지 않은 상태 |
| **In Progress** | 현재 작업을 진행하고 있는 상태 |
| **Done** | 해당 Issue의 작업이 완료된 상태 |

프로젝트의 Workflow에 따라 여러 상태를 사용할 수 있다.

### 3. Status의 흐름

작업의 진행에 따라 Issue의 Status를 변경할 수 있다.

```text
To Do
  ↓
In Progress
  ↓
Done
```

#### 예시 1. QA 로그인 기능 테스트 Issue

```text
To Do
→ 로그인 기능 테스트를 아직 시작하지 않음

↓

In Progress
→ 로그인 기능 테스트를 진행 중

↓

Done
→ 로그인 기능 테스트 완료
```

#### 예시 2. Bug Issue

```text
To Do
→ Bug 수정 작업 전

↓

In Progress
→ 개발자가 Bug 수정 중

↓

Done
→ 수정 작업 완료
```

## 핵심 정리

- Status는 Issue의 현재 진행 상태를 나타낸다.
- 대표적인 Status에는 To Do, In Progress, Done이 있다.
- Issue의 작업 진행에 따라 Status를 변경할 수 있다.
- Status와 Workflow는 서로 다른 개념이다.
