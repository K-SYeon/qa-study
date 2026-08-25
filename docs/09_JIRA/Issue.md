# Issue

## 개요

JIRA에서 Issue는 프로젝트에서 관리해야 하는 **작업이나 문제를 하나의 단위로 등록한 것**이다.

Issue는 Bug뿐만 아니라 다양한 작업과 문제를 관리하는 데 사용할 수 있다.

## 학습 목표

- JIRA Issue의 개념을 이해한다.
- Issue Type의 개념을 이해한다.
- Issue를 구성하는 주요 항목을 이해한다.
- QA에서 Issue를 활용하는 방법을 이해한다.
- Issue와 Status의 관계를 이해한다.
- JIRA에서 Issue를 생성하고 관리하는 방법을 경험한다.

## 학습 내용

### 1. Issue란?

JIRA에서 Issue는 프로젝트에서 관리해야 하는 작업이나 문제를 하나의 단위로 등록한 것이다.

예를 들어 다음과 같은 작업이나 문제를 Issue로 관리할 수 있다.

```text
Project

① 로그인 테스트 (Issue)
② 회원가입 테스트 (Issue)
③ 로그인 버그 (Issue)
④ 검색 기능 수정 (Issue)
```

따라서 **Issue가 반드시 Bug를 의미하는 것은 아니다.**

### 2. Issue Type

Issue Type은 Issue의 종류를 구분하기 위한 것이다.

대표적인 Issue Type에는 다음과 같은 종류가 있다.

- Bug
- Task
- Story

Issue Type에 따라 관리하는 작업의 성격이 달라질 수 있다.

### 3. Issue 구성

Issue에는 업무를 관리하기 위한 여러 정보가 포함된다.

| 항목 | 의미 |
|---|---|
| **Summary** | Issue 제목 |
| **Description** | Issue에 대한 상세 내용 |
| **Issue Type** | Issue의 종류 |
| **Assignee** | Issue를 담당하는 사람 |
| **Priority** | 처리 우선순위 |
| **Status** | 현재 진행 상태 |

Bug를 등록하는 경우 Description에 버그의 재현 방법, 기대 결과, 실제 결과 등의 상세 내용을 작성할 수 있다.

### 4. QA에서 Issue 활용

테스트 중 버그를 발견하면 Bug Report를 작성하고 이를 JIRA의 Bug Issue로 등록할 수 있다.

Issue를 통해 버그가 발견된 시점부터 수정되고 테스트가 완료될 때까지 진행 상황을 관리할 수 있다.

```text
버그 발견
    ↓
Bug Report 작성
    ↓
JIRA Issue 생성
    ↓
개발자에게 전달
    ↓
수정
    ↓
QA Retest
```

### 5. Issue와 Status

Issue에는 현재 진행 상태가 있으며, Status를 통해 Issue가 어느 단계에 있는지 확인할 수 있다.

대표적인 Status는 다음과 같다.

```text
To Do
  ↓
In Progress
  ↓
Done
```

예를 들어 로그인 버그 Issue의 상태가 다음과 같이 변경될 수 있다.

```text
To Do
└── 로그인 버튼 오류

    ↓ 개발자 작업 시작

In Progress
└── 로그인 버튼 오류

    ↓ 수정 완료 및 QA 확인

Done
└── 로그인 버튼 오류
```

Status의 종류와 상태 변경 과정은 이후 `Status.md`와 `Workflow.md`에서 자세히 학습한다.

### 6. Issue 생성 실습

JIRA의 `QA Testing` Project에서 새로운 Issue를 생성했다.

```text
Issue Type: 작업 (Task)
Summary: 로그인 기능 테스트
Status: To Do
```

생성한 Issue는 Project의 Board에서 `To Do` 상태로 확인할 수 있었다.

이를 통해 Project 안에서 Issue를 생성하고, Issue의 Status가 Board에 표시되는 과정을 확인했다.

## 핵심 정리

- Issue는 Project에서 관리해야 하는 작업이나 문제를 하나의 단위로 등록한 것이다.
- Issue는 Bug뿐만 아니라 Task, Story 등 다양한 형태로 관리할 수 있다.
- Issue에는 Summary, Description, Issue Type, Assignee, Priority, Status 등의 정보가 포함된다.
- QA는 발견한 버그를 Bug Issue로 등록하여 수정 및 재테스트 과정을 관리할 수 있다.
- Issue의 진행 상태는 Status를 통해 확인할 수 있다.
- Project의 Board에서는 Issue의 현재 Status를 한눈에 확인할 수 있다.
