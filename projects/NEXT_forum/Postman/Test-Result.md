# Postman Test Result

## 개요

Postman을 활용하여 `NEXT_forum` 프로젝트의 주요 API를 테스트하였다.

회원가입, 로그인, 로그아웃, 게시글, 댓글 관련 API를 대상으로 정상 및 예외 상황을 확인하였다.

## 테스트 환경

* OS: Windows 10
* Browser: Chrome
* API Test Tool: Postman
* Server: Next.js
* Database: MongoDB

## 테스트 결과

| 테스트 영역       | 테스트 내용                    | 결과       |
| ------------ | ------------------------- | -------- |
| Signup       | 정상 회원가입                   | PASS     |
| Signup       | 중복 아이디 회원가입               | **FAIL** |
| Signup       | 아이디 또는 비밀번호 미입력           | PASS     |
| Login        | 정상 로그인                    | PASS     |
| Login        | 존재하지 않는 아이디               | PASS     |
| Login        | 잘못된 비밀번호                  | PASS     |
| Login        | 아이디 또는 비밀번호 미입력           | PASS     |
| Logout       | 정상 로그아웃                   | PASS     |
| Post New     | 정상 게시글 작성                 | PASS     |
| Post New     | 제목 또는 내용 미입력              | PASS     |
| Post New     | 비로그인 상태 게시글 작성            | PASS     |
| Post Edit    | 작성자 본인 게시글 수정             | PASS     |
| Post Edit    | admin 게시글 수정              | PASS     |
| Post Edit    | 다른 사용자 게시글 수정             | PASS     |
| Post Edit    | 제목 또는 내용 미입력              | PASS     |
| Post Delete  | 작성자 본인 게시글 삭제             | PASS     |
| Post Delete  | admin 게시글 삭제              | PASS     |
| Post Delete  | 다른 사용자 게시글 삭제             | PASS     |
| Post Image   | 이미지 업로드용 Presigned URL 생성 | PASS     |
| Comment New  | 댓글 작성                     | PASS     |
| Comment Like | 댓글 좋아요 변경                 | PASS     |
| Comment List | 댓글 목록 조회                  | PASS     |

## FAIL 결과

### BUG-001

**테스트 항목**

* 중복 아이디 회원가입

**실제 결과**

이미 가입된 아이디를 사용하여 회원가입을 요청했을 때 `200` 응답과 함께 `가입성공`이 반환되었다.

**기대 결과**

이미 가입된 아이디인 경우 회원가입이 처리되지 않아야 한다.

**관련 Bug**

* Bug ID: `BUG-001`
* Severity: High
* Priority: High
* JIRA Status: To Do

## API 테스트와 UI Bug의 구분

Postman API 테스트 결과와 기존 UI 테스트에서 발견한 Bug는 별도로 관리하였다.

### UI 테스트에서 발견한 Bug

* `BUG-002`: 정상 로그인 후 이전 페이지로 이동
* `BUG-003`: GitHub 로그인 후 이전 페이지로 이동
* `BUG-004`: 정상 로그아웃 후 이전 페이지로 이동
* `BUG-005`: admin이 다른 사용자의 게시글을 수정할 수 없음
* `BUG-006`: admin이 다른 사용자의 게시글을 삭제할 수 없음

위 Bug들은 UI 테스트에서 발견한 문제이며, Postman API 테스트의 실패 결과로 기록하지 않았다.

특히 게시글 수정 및 삭제 API의 권한 테스트에서는 admin의 수정 및 삭제가 정상적으로 처리되는 것을 확인하였다.

## 테스트 결과 요약

* 총 API 테스트 항목: **22개**
* PASS: **21개**
* FAIL: **1개**
* 관련 Bug: **BUG-001**

Postman을 활용하여 주요 API의 정상 동작과 예외 상황을 검증하고, 발견된 결함은 기존 Bug Report 및 JIRA Issue와 연결하여 관리하였다.
