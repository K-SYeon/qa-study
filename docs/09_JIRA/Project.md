# Project

## 개요

JIRA에서 Project는 **특정 업무를 관리하기 위한 공간**이다.

Project 안에서 Issue를 생성하여 개별 작업이나 문제를 관리하고, 보드를 통해 Issue의 진행 상태를 확인할 수 있다.

## 학습 목표

- JIRA Project의 개념을 이해한다.
- Project와 Issue의 관계를 이해한다.
- Project에서 보드를 활용하는 방법을 이해한다.

## 학습 내용

### 1. Project란?

JIRA에서 Project는 **특정 업무를 관리하기 위한 공간**이다.

Project 안에서 여러 Issue를 생성하여 프로젝트에서 발생하는 작업이나 문제를 관리한다.

예를 들어 QA 업무를 관리하는 `QA Testing` Project를 만들 수 있다.

```text
QA Testing
```

### 2. Project와 Issue

Project 안에서는 개별 작업이나 문제를 Issue로 관리한다.

예를 들어 `QA Testing` Project에서 다음과 같은 Issue를 관리할 수 있다.

```text
QA Testing

① 로그인 테스트
② 회원가입 테스트
③ 검색 테스트
④ 로그인 버그
⑤ 회원가입 버그
```

즉,

```text
Project
   ↓
Issue
```

의 구조로 업무를 관리한다.

### 3. Project와 Board

Project에 포함된 Board에서는 Issue가 현재 어떤 상태인지 한눈에 확인할 수 있다.

예를 들어 Issue의 상태에 따라 다음과 같이 구분하여 확인할 수 있다.

```text
To Do
   ↓
In Progress
   ↓
Done
```

따라서 Board를 통해 Project에서 관리하는 Issue의 진행 상황을 쉽게 확인할 수 있다.

## 핵심 정리

- Project는 특정 업무를 관리하기 위한 공간이다.
- Project 안에서 Issue를 통해 개별 작업이나 문제를 관리한다.
- Board에서는 Issue의 현재 상태와 진행 상황을 한눈에 확인할 수 있다.
- QA에서는 테스트 업무와 발견된 버그 등을 Project 안에서 Issue로 관리할 수 있다.
