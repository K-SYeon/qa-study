# Bug Report

## 개요

Bug는 테스트 중 발견한 결함 자체를 의미하고, Bug Report는 해당 결함을 개발자가 재현하고 수정할 수 있도록 상세하게 기록한 내용이다.

QA에서는 Bug Report를 작성한 후 JIRA의 Bug Issue로 등록하여 결함의 수정 과정을 관리할 수 있다.

## 학습 목표

- Bug와 Bug Report의 차이를 이해한다.
- Bug Report에 포함되는 주요 내용을 이해한다.
- Bug Report와 JIRA Bug Issue의 관계를 이해한다.
- QA에서 Bug가 발견된 후 수정 및 재테스트까지의 과정을 이해한다.

## 학습 내용

### 1. Bug와 Bug Report의 차이

**Bug**는 테스트 중 발견한 **결함 자체**를 의미한다.

**Bug Report**는 해당 결함을 개발자가 재현하고 수정할 수 있도록 **상세하게 기록한 내용**이다.

예를 들어 로그인 버튼이 작동하지 않는 결함을 발견한 경우 다음과 같이 구분할 수 있다.

```text
Bug
└── 로그인 버튼 클릭 시 로그인되지 않음
```

해당 Bug를 개발자에게 전달하기 위해 다음과 같은 내용을 포함하여 Bug Report를 작성할 수 있다.

```text
Bug Report
├── 제목
├── 재현 절차
├── 기대 결과
├── 실제 결과
├── 테스트 환경
├── 심각도
└── 우선순위
```

### 2. Bug Report와 JIRA Bug Issue

QA에서 Bug를 발견하면 Bug Report를 작성한 후 JIRA의 Bug Issue로 등록하여 관리할 수 있다.

JIRA에 Bug Issue를 등록하면 개발자에게 결함을 전달하고 수정 상태를 추적할 수 있으며, 수정이 완료된 후 QA가 재테스트할 수 있다.

### 3. QA에서 Bug Report를 JIRA Bug Issue로 연결하는 과정

```text
테스트 실행
    ↓
Bug 발견
    ↓
Bug Report 작성
    ↓
JIRA Bug Issue 등록
    ↓
개발자 수정
    ↓
QA Retest
    ↓
PASS → 완료
FAIL → 재오픈
```

이 과정을 통해 Bug가 발견된 시점부터 수정 및 재테스트가 완료될 때까지 결함의 진행 상황을 관리할 수 있다.

### 4. QA에서 JIRA를 활용하는 이유

Bug Report를 별도의 문서로만 전달하는 것이 아니라 JIRA의 Bug Issue로 등록하면 개발자와 QA가 하나의 Issue를 기준으로 결함을 함께 관리할 수 있다.

JIRA를 통해 다음과 같은 내용을 추적할 수 있다.

- 담당자
- 우선순위
- 현재 상태
- 수정 내용
- 댓글 및 변경 이력
- 재테스트 결과

## 핵심 정리

- Bug는 테스트 중 발견한 결함 자체를 의미한다.
- Bug Report는 결함을 재현하고 수정할 수 있도록 상세하게 기록한 내용이다.
- QA는 Bug Report를 작성한 후 JIRA의 Bug Issue로 등록하여 결함을 관리할 수 있다.
- JIRA를 이용하면 Bug의 담당자, 우선순위, 상태 및 수정 과정을 추적할 수 있다.
- Bug 수정 후 QA가 재테스트하고, 테스트 결과에 따라 완료하거나 Issue를 재오픈할 수 있다.
