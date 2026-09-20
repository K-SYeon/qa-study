# JIRA

## 개요

JIRA를 활용하여 테스트 과정에서 발견한 버그를 등록하고 관리하였다.

Test Case 수행 중 발견한 결함을 JIRA에 Bug Issue로 등록하고, Priority와 Status를 관리하였다.

## 프로젝트 환경

* 프로젝트: QA Testing
* Board: To Do / In Progress / Done
* Issue Type: Bug
* 테스트 환경: Windows 10 / Chrome

## Bug 등록

Test Case 수행 중 발견한 6개의 결함을 JIRA에 Bug Issue로 등록하였다.

| Bug ID  | 제목                                        | Priority | Status |
| ------- | ----------------------------------------- | -------- | ------ |
| BUG-001 | 중복된 아이디 입력시 회원가입 완료됨                      | High     | To Do  |
| BUG-002 | 아이디, 비밀번호 입력하여 정상적으로 로그인 후 이전 페이지로 이동됨    | Critical | To Do  |
| BUG-003 | GitHub 계정 정보 입력하여 정상적으로 로그인 후 이전 페이지로 이동됨 | Critical | To Do  |
| BUG-004 | 정상적으로 로그아웃 후 이전 페이지로 이동됨                  | High     | To Do  |
| BUG-005 | admin이 다른 사용자의 게시글을 수정할 수 없음              | Medium   | To Do  |
| BUG-006 | admin이 다른 사용자의 게시글을 삭제할 수 없음              | Medium   | To Do  |

## Bug 관리

등록한 Bug Issue는 JIRA Board에서 상태를 관리하였다.

현재 테스트 단계에서는 발견된 버그를 수정하기 전 상태이므로 모든 Bug를 `To Do` 상태로 등록하였다.

향후 버그 수정이 진행되면 `In Progress`로 이동하고, 수정 완료 후 재테스트를 통해 `Done`으로 상태를 변경할 수 있다.

## 결과

JIRA를 활용하여 Test Case에서 발견한 결함을 Bug Issue로 등록하고, Priority와 Status를 관리하였다.

Bug Report에서는 별도로 Severity와 Priority를 기록하여 결함의 심각도와 우선순위를 관리하였다.

### 참고 화면

* JIRA Board: `images/JIRA-Board.png`
* BUG-001: `images/BUG-001.png`
* BUG-002: `images/BUG-002.png`
* BUG-003: `images/BUG-003.png`
* BUG-004: `images/BUG-004.png`
* BUG-005: `images/BUG-005.png`
* BUG-006: `images/BUG-006.png`
