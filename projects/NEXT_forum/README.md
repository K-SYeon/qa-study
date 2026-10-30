# NEXT_forum QA 프로젝트

## 프로젝트 개요

NEXT_forum 웹 애플리케이션을 대상으로 주요 기능과 사용자 흐름을 검증한 QA 프로젝트입니다.

테스트 시나리오 및 테스트 케이스를 작성하고, 수동 테스트와 자동화 테스트를 수행했습니다. 또한 API 테스트를 진행하고, 발견한 결함을 문서화하여 JIRA로 관리했습니다.

## 프로젝트 목표

- 주요 기능 및 사용자 흐름 검증
- 테스트 시나리오 및 테스트 케이스 작성
- Playwright를 활용한 테스트 자동화
- Postman을 활용한 API 테스트
- 테스트 결과를 바탕으로 QA 산출물 작성 및 관리
- 결함 기록 및 JIRA를 활용한 이슈 관리

## 테스트 환경

- OS : Windows 10
- Browser : Google Chrome
- Test Application : NEXT_forum
- Test URL : http://localhost:3000

## 테스트 범위

- 회원가입
- 로그인 / 로그아웃
- 게시글 작성 / 조회 / 수정 / 삭제
- 댓글 작성 및 좋아요
- 관리자 기능
- 화면 구성 및 UI
- 페이지 이동 및 사용자 흐름

## 테스트 수행 방법

1. 테스트 시나리오 작성
2. 테스트 케이스 및 테스트 데이터 작성
3. 수동 테스트 수행 및 실제 결과 기록
4. 발견한 결함을 Bug Report로 작성
5. JIRA를 활용한 결함 등록 및 관리
6. Postman을 활용한 API 테스트
7. Playwright를 활용한 테스트 자동화
8. 테스트 결과 정리 및 검토

## 테스트 결과

- Playwright 자동화 테스트 : 18 Passed / 0 Failed
- 주요 기능에 대한 테스트 수행 및 결과 확인
- 테스트 과정에서 총 6건의 결함 발견 및 문서화
- 발견한 결함을 Bug Report와 JIRA에 등록하여 관리

※ Passed는 자동화 테스트 코드가 정상적으로 실행되고 검증 절차를 통과했다는 의미이며, 애플리케이션에 결함이 없다는 의미는 아닙니다.

## 주요 발견 결함

| Bug ID | 결함 내용 |
|---|---|
| BUG-001 | 중복 아이디로 회원가입 가능 |
| BUG-002 | 로그인 후 이전 페이지로 이동 |
| BUG-003 | GitHub 로그인 후 이전 페이지로 이동 |
| BUG-004 | 로그아웃 후 이전 페이지로 이동 |
| BUG-005 | 관리자가 다른 사용자의 게시글 수정 불가 |
| BUG-006 | 관리자가 다른 사용자의 게시글 삭제 불가 |

## 사용 기술 및 도구

- **Language & Query**
  - JavaScript
  - SQL (별도 MySQL 실습)
- **Database**
  - MongoDB (NEXT_forum)
  - MySQL (SQL 실습)
- **Testing Tools**
  - Playwright
  - Postman
- **Issue Tracking**
  - JIRA
- **Documentation & Version Control**
  - Microsoft Excel
  - Markdown
  - Git
  - GitHub

## 프로젝트 산출물

| 폴더 | 주요 산출물 |
|---|---|
| Bug-Report | 결함 보고서 |
| JIRA | 결함 등록 및 관리 내역, 화면 캡처 |
| Playwright | 자동화 테스트 코드 및 실행 관련 문서 |
| Postman | API 테스트 컬렉션 및 테스트 결과 |
| SQL | SQL 기초 및 실습 내용 |
| Test-Case | 테스트 시나리오 및 테스트 케이스 |

### GitHub 폴더 구조

```text
NEXT_forum/
├── README.md
├── Bug-Report/
│   └── NEXT-forum_Bug-Report.xlsx
├── JIRA/
│   ├── JIRA.md
│   └── images/
│       ├── JIRA-BUG-001.jpg
│       ├── JIRA-BUG-002.jpg
│       ├── JIRA-BUG-003.jpg
│       ├── JIRA-BUG-004.jpg
│       ├── JIRA-BUG-005.jpg
│       ├── JIRA-BUG-006.jpg
│       └── JIRA-Board.jpg
├── Playwright/
│   ├── README.md
│   ├── home.spec.js
│   ├── package-lock.json
│   └── package.json
├── Postman/
│   ├── NEXT-forum-API-TEST.postman_collection.json
│   ├── README.md
│   └── Test-Result.md
├── SQL/
│   ├── Basic.md
│   ├── Practice.md
│   └── README.md
└── Test-Case/
    └── NEXT-forum_Test-Case.xlsx
```

## 프로젝트 회고

이번 프로젝트를 통해 QA 업무의 전반적인 흐름을 경험했습니다.

테스트 시나리오와 테스트 케이스 작성부터 수동 테스트, API 테스트, 자동화 테스트까지 다양한 테스트 방법을 학습하고 적용했습니다.

또한 실제 테스트 과정에서 발견한 결함을 재현 가능한 형태로 기록하고, Bug Report와 JIRA를 활용해 관리하면서 기대 결과와 실제 결과를 비교하고 결함을 구체적으로 문서화하는 과정의 중요성을 배웠습니다.
