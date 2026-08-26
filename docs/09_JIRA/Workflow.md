# Workflow

## 개요

JIRA에서 Workflow는 Issue가 여러 Status를 거쳐 이동하는 과정을 의미한다.

## 학습 목표

- Workflow의 개념을 이해한다.
- Transition의 개념을 이해한다.
- Workflow가 Status와 Transition으로 구성되는 것을 이해한다.
- QA에서 Workflow가 어떻게 활용되는지 이해한다.

## 학습 내용

### 1. Workflow란?

JIRA에서 Workflow는 **Issue가 여러 Status를 거쳐 이동하는 과정**을 의미한다.

### 2. Transition

Transition은 **Issue를 한 Status에서 다른 Status로 이동시키는 것**이다.

예를 들어:

```text
To Do → In Progress
```

라는 상태 변경 자체가 Transition이다.

### 3. Workflow 구성

Workflow는 **Status와 Transition으로 구성**되어 있으며, Issue가 어떤 Status에 있고 어떤 Transition을 통해 다른 Status로 이동할 수 있는지를 정의한 흐름이다.

프로젝트의 Workflow 설정에 따라 Status 간 이동 방법이 달라질 수 있으며, Issue가 어떤 방식으로 진행될 수 있는지 관리하는 역할을 한다.

### 4. QA에서 Workflow가 중요한 이유

QA에서는 Bug가 발견된 후 개발자가 수정하고 QA가 다시 확인하는 과정이 있기 때문에 Issue가 어떤 상태로 이동하는지 관리하는 것이 중요하다.

모든 프로젝트에서 반드시 동일한 Workflow를 사용하는 것은 아니며, 프로젝트의 설정에 따라 Workflow가 달라질 수 있다.

### 5. QA에서의 Workflow 활용

Bug가 발견된 후 다음과 같은 흐름으로 관리할 수 있다.

```text
Bug 발견
    ↓
Bug Report 작성
    ↓
JIRA Bug Issue 등록
    ↓
To Do
    ↓
개발자 수정 시작
    ↓
In Progress
    ↓
수정 완료
    ↓
QA Retest
    ↓
Done (PASS) 또는 In Progress (FAIL)
```

- **PASS** → 수정된 Bug가 정상적으로 동작하므로 Done
- **FAIL** → 문제가 해결되지 않았으므로 In Progress로 이동하여 재수정

## 핵심 정리

- Workflow는 Issue가 Status를 거쳐 이동하는 과정이다.
- Transition은 Issue를 한 Status에서 다른 Status로 이동시키는 것이다.
- Workflow는 Status와 Transition으로 구성된다.
- Workflow는 프로젝트의 설정에 따라 달라질 수 있다.
- QA에서는 Bug 수정과 재테스트 과정을 Workflow를 통해 관리할 수 있다.
