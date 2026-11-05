# 01. Forum Project

## 1. 프로젝트 개요

Next.js를 활용해 직접 구현한 웹 게시판 서비스인 NEXT_forum을 대상으로 진행한 QA 프로젝트이다.

회원가입, 로그인, 게시글 관리, 댓글 등의 주요 기능과 사용자 권한에 따른 기능 접근을 테스트하고, 발견한 결함을 재현 및 분석하여 기록하였다.

## 2. 테스트 목적

- 웹 서비스의 주요 기능 정상 동작 여부 검증
- 로그인 상태 및 사용자 권한에 따른 기능 접근 검증
- 예외 상황 및 비정상적인 사용자 흐름 확인
- 발견된 결함의 재현 및 분석을 위한 근거 수집
- 다양한 QA 도구를 활용한 테스트 수행 경험 확보

## 3. 테스트 환경

- OS: Windows 10
- Browser: Chrome
- Application: NEXT_forum
- Local Server: localhost:3000
- Database: MongoDB Atlas

## 4. 테스트 범위

- 회원가입
- 일반 로그인 및 GitHub 로그인
- 로그아웃
- 게시글 작성, 조회, 수정, 삭제
- 댓글 작성 및 좋아요
- 일반 사용자 및 관리자 권한별 기능 접근

## 5. 테스트 수행 방법

- Test Case를 활용한 테스트 조건 및 기대 결과 정의
- Postman을 활용한 API 요청 및 응답 검증
- Playwright를 활용한 주요 기능 자동화 테스트
- MongoDB Compass 및 MongoDB Shell을 활용한 DB 데이터 조회 및 변경 여부 검증
- JIRA를 활용한 결함 등록 및 관리

## 6. 테스트 결과

- 주요 기능 및 사용자 권한 관련 결함 6건 발견
- 발견된 결함을 Bug Report 및 JIRA에 등록하고 관리
- Postman, Playwright, MongoDB를 활용하여 결함 재현 및 데이터 검증

## 7. 사용 기술 및 도구

- Language: JavaScript, MQL
- Framework: Next.js
- Automation: Playwright
- API Testing: Postman
- Database: MongoDB Atlas, MongoDB Compass, MongoDB Shell
- Bug Tracking: JIRA
- Documentation: Excel, Markdown
- Version Control: Git, GitHub

## 8. 주요 결함 사례

| Bug ID | 결함 내용 |
|---|---|
| BUG-001 | 중복 아이디로 회원가입 가능 |
| BUG-002 | 일반 로그인 후 회원가입 페이지로 돌아가며, 로그인 상태에서도 신규 계정 생성 가능 |
| BUG-003 | GitHub 로그인 후에도 회원가입 페이지로 돌아가며, 로그인 상태에서도 신규 계정 생성 가능 |
| BUG-004 | 로그아웃 후에도 게시글 수정 페이지가 유지되며, 로그아웃 상태에서 수정 시도 시 오류 발생 |
| BUG-005 | 관리자가 다른 사용자의 게시글 수정 기능을 이용할 수 없음 |
| BUG-006 | 관리자가 다른 사용자의 게시글 삭제 기능을 이용할 수 없음 |
