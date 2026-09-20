# Postman

## 개요

Postman을 활용하여 `NEXT_forum` 프로젝트의 주요 API를 테스트하였다.

회원가입, 로그인, 로그아웃, 게시글, 댓글 관련 API를 대상으로 정상 및 예외 상황을 검증하였다.

## 테스트 환경

* OS: Windows 10
* Browser: Chrome
* API Test Tool: Postman
* Server: Next.js
* Database: MongoDB

## Collection 구성

```text
NEXT_forum-API-TEST
├── Auth
│   ├── Signup
│   │   ├── 정상 회원가입
│   │   ├── 중복 아이디
│   │   └── 아이디 또는 비밀번호 미입력
│   ├── Login
│   │   ├── 정상 로그인
│   │   ├── 존재하지 않는 아이디
│   │   ├── 잘못된 비밀번호
│   │   └── 아이디 또는 비밀번호 미입력
│   └── Logout
│       └── 정상 로그아웃
│
├── Post
│   ├── New
│   │   ├── 정상 글 작성
│   │   ├── 제목 또는 내용 미입력
│   │   └── 로그인 하지 않은 상태에서 글 작성
│   ├── Edit
│   │   ├── 작성자 본인 글 수정
│   │   ├── 관리자 다른 사용자 글 수정
│   │   ├── 일반 사용자 다른 사용자 글 수정
│   │   └── 수정 시 제목 또는 내용 미입력
│   ├── Delete
│   │   ├── 작성자 본인 글 삭제
│   │   ├── 관리자 다른 사용자 글 삭제
│   │   └── 일반 사용자 다른 사용자 글 삭제
│   └── Image
│       └── 이미지 업로드 URL 생성
│
└── Comment
    ├── New
    │   ├── 댓글 작성
    │   └── 댓글 미입력
    ├── Like
    │   └── 댓글 좋아요
    └── List
        └── 댓글 목록 조회

```

## 테스트 범위

* 회원가입 API
* 로그인 API
* 로그아웃 API
* 게시글 작성 API
* 게시글 수정 API
* 게시글 삭제 API
* 이미지 업로드용 Presigned URL 생성 API
* 댓글 작성 API
* 댓글 좋아요 API
* 댓글 목록 조회 API

## 결과

총 **22개 API 테스트 항목**을 수행하였다.

* PASS: 21개
* FAIL: 1개
* 관련 Bug: `BUG-001`

중복 아이디 회원가입 테스트에서 기존 아이디로 회원가입이 처리되는 문제를 확인하였으며, 해당 결함을 Bug Report와 JIRA에 등록하였다.

상세 테스트 결과는 `Test-Result.md`에서 확인할 수 있다.

## 파일

* `NEXT_forum-API-TEST.postman_collection.json` : Postman API 테스트 Collection
* `Test-Result.md` : API 테스트 결과 및 Bug 연계 내용
