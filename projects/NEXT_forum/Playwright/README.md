# Playwright

## 개요

Playwright는 웹 브라우저를 자동으로 제어하여 웹 애플리케이션의 기능과 UI를 테스트할 수 있는 자동화 테스트 도구이다.

NEXT_forum 프로젝트에서는 Playwright를 사용하여 페이지 이동, 로그인, 회원가입, 게시글 및 댓글 기능 등을 자동으로 검증했다.

## 학습 목표

- Playwright 테스트 코드의 기본 구조 이해
- 웹 페이지 요소를 탐색하고 사용자 동작을 자동화하는 방법 학습
- `expect()`를 사용한 테스트 결과 검증
- 실제 웹 애플리케이션의 주요 기능을 자동화 테스트로 검증
- 테스트 실행 결과를 확인하고 기존 Test Case 및 Bug Report와 연결

## 학습 내용

### 1. 테스트 코드 기본 구조

#### `test()`

개별 테스트 케이스를 정의한다.

```javascript
const { test, expect } = require('@playwright/test');

test('메인 페이지가 정상적으로 열리는지 테스트', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await expect(page).toHaveTitle(/yeonyforum/);
});
```

- `test()`: 테스트 케이스 정의
- `async`: 비동기 함수 선언
- `await`: 비동기 작업이 완료될 때까지 기다림
- `page`: 브라우저 페이지를 제어하는 객체

#### `test.beforeEach()`

각 테스트가 실행되기 전에 공통으로 수행할 작업을 정의한다.

```javascript
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
});
```

메인 페이지 접속처럼 여러 테스트에서 반복되는 작업을 공통으로 처리할 수 있다.

### 2. 페이지 이동

#### `page.goto()`

지정한 URL로 이동한다.

```javascript
await page.goto('http://localhost:3000');
```

#### `click()`

버튼이나 링크 등을 클릭한다.

```javascript
await page.getByRole('link', { name: 'List' }).click();
```

#### 페이지 이동 검증

```javascript
await expect(page).toHaveURL(/\/list$/);
```

페이지 이동 후 실제 URL이 기대한 주소와 일치하는지 확인한다.

### 3. 웹 페이지 요소 탐색

#### `getByRole()`

요소의 역할과 이름을 기준으로 탐색한다.

```javascript
page.getByRole('button', { name: '로그인' });
page.getByRole('link', { name: '회원가입' });
```

#### `getByText()`

화면에 표시된 텍스트를 기준으로 요소를 탐색한다.

```javascript
page.getByText('사과의 효능');
```

#### `locator()`

CSS 선택자 등을 이용하여 요소를 탐색한다.

```javascript
page.locator('.info');
page.locator('#input-id-for-credentials-provider');
```

- 클래스 선택자: `.클래스명`
- ID 선택자: `#아이디명`

요소를 정확하게 탐색하려면 실제 HTML 구조와 선택자의 범위를 고려해야 한다.

### 4. 사용자 입력 및 동작

#### `fill()`

입력창에 값을 입력한다.

```javascript
await page.locator('#input-id-for-credentials-provider').fill('test02');
```

#### `click()`

버튼이나 링크를 클릭한다.

```javascript
await page.getByRole('button', { name: '로그인' }).click();
```

로그인 및 회원가입 테스트에서 입력값을 설정하고 버튼을 클릭하는 방식으로 실제 사용자 동작을 재현했다.

### 5. 테스트 결과 검증

#### `toBeVisible()`

요소가 화면에 표시되는지 확인한다.

```javascript
await expect(page.getByRole('button', { name: '로그인' }))
    .toBeVisible();
```

#### `toHaveTitle()`

페이지 제목을 검증한다.

```javascript
await expect(page).toHaveTitle(/yeonyforum/);
```

#### `toHaveURL()`

현재 페이지 URL을 검증한다.

```javascript
await expect(page).toHaveURL(/\/list$/);
```

#### `toContainText()`

요소에 기대한 텍스트가 포함되어 있는지 확인한다.

```javascript
await expect(page.locator('.info')).toContainText('List');
```

#### `toHaveCount()`

조건에 맞는 요소의 개수를 검증한다.

```javascript
await expect(page.locator('.detail_box .comment'))
    .toHaveCount(2);
```

이러한 검증을 통해 테스트 결과가 기대 결과와 일치하는지 확인한다.

### 6. 테스트 그룹화

#### `test.describe()`

관련 테스트 케이스를 기능별로 그룹화한다.

```javascript
test.describe('게시글 테스트', () => {
    test('게시글 조회 테스트', async ({ page }) => {
        // 테스트 코드
    });
});
```

기능별로 테스트를 구분하면 테스트 코드의 구조를 파악하고 관리하기 쉽다.

### 7. 테스트 실행

프로젝트의 Playwright 폴더에서 테스트를 실행한다.

```bash
npx.cmd playwright test home.spec.js
```

특정 테스트 그룹을 선택하여 실행할 수도 있다.

```bash
npx.cmd playwright test home.spec.js -g "게시글 테스트"
```

테스트 실행 결과에서 다음 내용을 확인한다.

- 전체 테스트 개수
- PASS 및 FAIL 결과
- 실패한 테스트의 위치
- 오류 메시지와 실패 원인

테스트가 실패하면 오류 메시지와 실제 페이지 상태를 확인하여 원인을 파악한다.

## 실습 프로젝트

### NEXT_forum

- 테스트 환경: Windows 10 / Chrome / 로컬 개발 서버
- 테스트 코드: `Playwright/home.spec.js`
- 테스트 대상: 회원가입, 로그인, 게시글, 댓글 등 주요 웹 기능

#### 주요 테스트 항목

| 테스트 영역 | 테스트 내용 |
|---|---|
| 메인 페이지 | 페이지 접속 및 주요 UI 확인 |
| 페이지 이동 | List 메뉴 이동 및 URL 검증 |
| 로그인 | 정상 로그인 및 로그인 실패 검증 |
| 회원가입 | 정상 가입, 필수 입력값 검증 |
| 중복 아이디 | 기존 아이디로 중복 가입이 가능한 결함 재현 |
| 게시글 | 작성, 조회, 수정, 삭제 |
| 댓글 | 댓글 작성 및 좋아요 동작 |
| 빈 댓글 | 빈 댓글 전송 후 기존 댓글 개수 유지 여부 확인 |

#### 테스트 결과와 결함의 구분

테스트 실행 결과가 PASS라고 해서 해당 기능에 결함이 없다는 뜻은 아니다.

예를 들어 중복 아이디 가입 테스트는 중복 가입이 허용되는 결함을 재현하는 테스트다. 결함이 실제로 재현되었고 테스트 코드가 이를 확인했다면 테스트 자체는 PASS가 될 수 있지만, 제품 기능의 결과는 기대 결과와 다르므로 Test Case에서는 FAIL로 기록한다.

또한 자동화 테스트로 확인하지 못한 항목은 검증 완료로 간주하지 않는다. 로그아웃 자동화 검증 등 미검증 항목은 별도로 기록한다.

## 폴더 구조

```text
qa-study/
└── projects/
    └── NEXT_forum/
        ├── Test-Case/
        ├── Bug-Report/
        └── Playwright/
            └── home.spec.js
```
