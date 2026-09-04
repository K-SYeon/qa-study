import { test, expect } from '@playwright/test';

// 페이지 접속 -> 제목 검증
test('Playwright 홈페이지 접속 테스트', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

// 페이지 접속 -> 링크 찾기 -> 클릭 -> Installation 확인
test('Get started 링크 클릭 테스트', async({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(
        page.getByRole('heading', {name: 'Installation'})
    ).toBeVisible();
});

test('텍스트로 요소 찾기', async({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByText('Playwright enables reliable web automation for testing, scripting, and AI agents.')
    ).toBeVisible();
    // page.getByText(): 페이지에서 해당 텍스트를 가지고 있는 요소를 찾아라
    // toBeVisible: 실제 화면에 보이는지 검증
});

test('placeholder를 이용해서 입력창을 찾는 방법', async({ page }) => {
    await page.goto('https://www.naver.com/');

    await page.getByPlaceholder('검색어를 입력해 주세요.').fill('test');

    await expect(
        page.getByPlaceholder('검색어를 입력해 주세요.')
    ).toHaveValue('test');
});

test('data-testid를 통해서 locator 찾기', async({ page }) => {
    await page.goto('http://localhost:3000/test.html');

    await page.getByTestId('submit-button').click();
    // 의미를 기준으로 요소를 찾지 못할 경우에는 css 선택자 사용
    // 클래스 
    // await page.locator('.login-button').click();
    // 아이디
    // await page.locator('#login-button').click();
});

test('CSS 선택자로 검색창 찾기', async( {page} ) => {
    await page.goto('https://www.naver.com/');

    await page.locator('.search_input').fill('test');

    await expect(
        page.locator('.search_input')
    ).toHaveValue('test');
});

// test1. 검색어를 입력하고 검색했을때 검색 결과가 정상적으로 표시되는지 확인한다.
// 시나리오: 네이버 접속 -> 검색창 찾기 -> 검색어 입력 -> 검색 버튼 클릭 -> 검색 결과 페이지 확인
test('검색어를 입력하고 검색했을때 검색 결과가 정상적으로 표시되는지 확인', async( {page} ) => {
    await page.goto('https://www.naver.com/');

    await page.locator('.search_input').fill('test');
    await page.getByRole('button', {name: '검색'}).click();

    await expect(page).toHaveURL(/search\.naver\.com/);
});

test('요소의 텍스트를 확인하는 테스트', async({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('link', {name: 'Get started'})
    ).toHaveText('Get started');
    // await expect(
    //     page.getByRole('heading', {name: /testing/})
    // ).toHaveText('testing')
});

// test2. Locator+Action+Assertion
// 시나리오: 검색 페이지 접속 -> 검색어 입력 -> 검색 실행 -> url 검증 -> 결과 요소 확인 -> 결과 텍스트 검증
test('Locator+Action+Assertion', async( {page} ) => {
    await page.goto('https://www.naver.com/');

    await page.getByPlaceholder('검색어를 입력해 주세요.').fill('QA');
    await page.getByRole('button', {name: '검색'}).click();
    
    await expect(page).toHaveURL(/search\.naver\.com/);
});

// beforeEach
test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

test('페이지 제목 확인', async({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
});

test('텍스트 확인', async({ page }) => {
    await expect(
        page.getByRole('link', {name: 'Get started'})
    ).toHaveText('Get started');
});

// describe, beforeAll, afterAll, beforeEach, afterEach
test.describe('playwright test', () => {
    test.beforeAll(async () => {
        console.log('테스트 시작');
    });

    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
    });

    test.afterEach(async ({ page }) => {
        console.log('테스트 하나 종료');
    });

    test('페이지 제목 확인', async({ page }) => {
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('텍스트 확인', async({ page }) => {
        await expect(
            page.getByRole('link', {name: 'Get started'})
        ).toHaveText('Get started');
    });

    test.afterAll(async () => {
        console.log('테스트 종료');
    });
});

test('여러 요소 중 첫 번째 요소 찾기 - playwright', async({page}) => {
    page.goto('https://playwright.dev/');

    const links = page.getByRole('link', {name: 'Get started'});

    await expect(links.first()).toBeVisible();
});

test('여러 링크의 개수 확인', async({ page }) => {
    await page.goto('https://www.naver.com/');

    const links = page.getByRole('link');

    console.log(await links.count())
});

test('여러 요소 중 첫 번째 요소 찾기 - naver', async({ page }) => {
    await page.goto('https://www.naver.com/');

    const links = page.getByRole('link');

    await expect(links.first()).toBeVisible();
});

test('여러 요소 중 마지막 요소 찾기', async({ page }) => {
    await page.goto('https://www.naver.com/');

    const links = page.getByRole('link');

    await expect(links.last()).toBeVisible();
});

test('여러 요소 중 특정 요소 찾기', async({ page }) => {
    await page.goto('https://www.naver.com/');

    const links = page.getByRole('link');

    await expect(links.nth(7)).toBeVisible();
});

test('특정 텍스트를 포함하는 링크 찾기', async({ page }) => {
    await page.goto('https://www.naver.com/');

    const links = page.getByRole('link');

    const target = links.filter({ hasText: '전체보기'});
});

test('특정 요소를 포함하는 링크 찾기', async({ page }) => {
    await page.goto('https://www.naver.com/');

    const links = page.getByRole('link');

    const target = links.filter({
        // has: page.locator('span')
        has: page.getByText('페이 바로가기'), // 페이 바로가기를 가진 요소를 내부에 포함하고 있는 link
        // hasText: '페이 바로가기' // 내부 텍스트에 페이 바로가기가 포함되어 있는 link
    })

    console.log(await target.count())
});

test('이름 입력 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await page.getByPlaceholder('이름').fill('김소연')

    await expect(
        page.getByPlaceholder('이름')
    ).toHaveValue('김소연')
});

test('체크박스 선택 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await page.locator('#agree').check();

    await expect(
        page.locator('#agree')
    ).toBeChecked();
});

test('체크박스 해제 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await page.locator('#agree').check();
    await page.locator('#agree').uncheck();

    await expect(
        page.locator('#agree')
    ).not.toBeChecked();
});

test('드롭다운 선택 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);
    
    await page.locator('#country').selectOption('us');

    await expect(
        page.locator('#country')
    ).toHaveValue('us');
});

test('제출 전에 메시지가 숨겨져 있는지 확인', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await expect(
        page.locator('#message')
    ).toBeHidden();
});

test('제출 버튼 클릭 후 메시지 표시 확인1', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);
    
    await page.getByPlaceholder('이름').fill('김소연');

    await page.getByRole('button', {name: '제출'}).click();

    // await page.waitForTimeout(1000);

    await expect(
        page.locator('#message')
    ).toBeVisible();
});

test('제출 버튼 클릭 후 메시지 표시 확인2', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await page.getByRole('button', {name: '제출'}).click();

    await expect(
        page.locator('#message')
    ).toHaveText('제출되었습니다.');
});

// test('제출 버튼이 비활성화 상태인지 확인', async({ page }) => {
//     await page.goto(`http://localhost:3000/test.html`);

//     await expect(
//         page.getByRole('button', {name: '제출'})
//     ).toBeDisabled();
// });

test('제출 버튼이 활성화 상태인지 확인', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await expect(
        page.getByRole('button', {name: '제출'})
    ).toBeEnabled();
});

test('요소의 속성 확인1', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await expect(
        page.locator('#agree')
    ).toHaveAttribute('id', 'agree')
});

test('요소의 속성 확인2', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await expect(
        page.getByPlaceholder('이름')
    ).toHaveAttribute('placeholder', '이름');
});

test('회원 가입 폼 입력 및 제출 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await page.getByPlaceholder('이름').fill('김소연');
    await page.locator('#agree').check();
    await page.locator('#country').selectOption('kr');
    await page.getByRole('button', {name: '제출'}).click();

    await expect(
        page.locator('#message')
    ).toBeVisible();
});

test('회원 가입 폼 입력 및 제출 검사 테스트 ', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await page.getByPlaceholder('이름').fill('김소연');
    await expect(
        page.getByPlaceholder('이름')
    ).toHaveValue('김소연');

    await page.locator('#agree').check();
    await expect(
        page.locator('#agree')
    ).toBeChecked();

    await page.locator('#country').selectOption('kr');
    await expect(
        page.locator('#country')
    ).toHaveValue('kr');

    await page.getByRole('button', {name: '제출'}).click();

    await expect(
        page.locator('#message')
    ).toBeVisible();
});

test('이름을 입력하지 않고 제출했을 때 alert 확인', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    page.on('dialog', async dialog => {
        expect(
            dialog.message()
        ).toBe('이름을 입력해 주세요.')
        await dialog.accept();
    });

    await page.getByRole('button', {name: '제출'}).click();
});

test('정확한 텍스트를 가진 요소 찾기', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await expect(
        page.getByText('제출', {exact: true})
    ).toBeVisible();
});

test('정규식으로 요소 찾기', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    // const buttons = page.getByRole('button', {name: /제출/});
    // console.log(await buttons.count()) // 2

    const buttons = page.getByRole('button', {name: '제출', exact: true})
    // console.log(await buttons.count()) // 1
});

test('검색 후 URL 변경 대기', async({ page }) => {
    await page.goto('https://www.naver.com/');

    await page.getByPlaceholder('검색어를 입력해 주세요.').fill('QA');

    await page.getByRole('button', {name: '검색'}).click();

    await page.waitForURL(/search\.naver\.com/);

    console.log(page.url())
});

test('동적으로 나타나는 요소 확인', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await page.waitForTimeout(1000);

    await expect(
        page.locator('#delayed-message')
    ).toBeVisible();
});

test('동적으로 활성화되는 버튼 클릭 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await page.locator('#delayed-button').click();
});

test('waitForSelector로 동적 요소 대기', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await page.waitForSelector('#delayed-message'); // DOM에 존재하는 순간 바로 통과 가능

    console.log('waitForSelector 통과')

    await expect(
        page.locator('#delayed-message')
    ).toBeVisible();

    console.log('toBeVisible 통과')
});

test('toBeVisible로 동적 요소 확인', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    await expect(
        page.locator('#delayed-message')
    ).toBeVisible(); // 실제로 보일 때까지 기다림

    console.log('toBeVisible 통과')
});

// test('Timeout 확인', async({ page }) => {
//     await page.goto(`http://localhost:3000/test.html`);

//     await expect(
//         page.locator('#없는요소')
//     ).toBeVisible({timeout: 3000}); // 기본 5초
// });

// test('Assertion timeout', async({ page }) => {
//     await page.goto(`http://localhost:3000/test.html`);

//     await expect(
//         page.locator('#delayed-message')
//     ).toBeVisible({ timeout: 12000 });
// });

test('페이지 뒤로가기 테스트', async({ page }) => {
    await page.goto('https://www.naver.com/');
    await page.goto('https://www.google.com/');

    await page.goBack();

    await expect(page).toHaveURL(/naver\.com/);
});

test('페이지 앞으로가기 테스트', async({ page }) => {
    await page.goto('https://www.naver.com/');
    await page.goto('https://www.google.com/');

    await page.goBack();
    await page.goForward();

    await expect(page).toHaveURL(/google\.com/);
});

test('페이지 새로고침 테스트', async({ page }) => {
    await page.goto('https://www.naver.com/');

    await page.reload();

    await expect(page).toHaveURL(/naver\.com/);
});

test('새 탭 열기 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    const newPagePromise = page.waitForEvent('popup'); // 새 탭이 열리는 이벤트를 기다릴 준비

    await page.getByRole('link', {name: '구글 새 탭'}).click();

    const newPage = await newPagePromise;

    await expect(newPage).toHaveURL(/google\.com/);
});

test('Browsercontext의 페이지 확인 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    const context = page.context();

    const newPagePromise = page.waitForEvent('popup');

    await page.getByRole('link', {name: '구글 새 탭'}).click();

    await newPagePromise;

    const pages = context.pages();

    console.log('현재 페이지 수:', pages.length);

    await expect(pages.length).toBe(2);
    // await expect(locator).toHaveLength(2);
});

test('iframe 안의 입력창을 찾아서 입력하고 검증하는 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    const iframe = page.frameLocator('#iframe');
    await iframe.getByPlaceholder('검색어를 입력해 주세요.').fill('QA');

    await iframe.locator('#search-btn').click();
});

test('파일 업로드 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    const fileInput = page.locator('#file');
    
    await fileInput.setInputFiles('tests/test.txt');

    // const file = await fileInput.inputFiles(); // inputFiles()는 locator에 사용할 수 없음 
    // expect(file).not.toBeNull();
    // expect(file?.[0].name).toBe('test.txt'); // 이름이 완전히 동일한지 확인 (?.(Optional Chaining): 앞의 값이 존재할 때만 뒤를 계속 확인. 없으면 오류내지말고 undefined로 처리)

    const value = await fileInput.inputValue(); // 파일 input에 현재 선택된 값

    console.log('선택된 파일:', value);

    expect(value).toContain('test.txt'); // 선택된 파일 맞는지 확인(value안에 해당 값이 포함되어있는지 확인. 배열에서도 사용 가능)
});

test('파일 다운로드 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    const downloadPromise = page.waitForEvent('download');

    await page.locator('#download').click();

    const download = await downloadPromise;

    console.log('다운로드 파일명:', download.suggestedFilename());

    expect(download.suggestedFilename()).toBe('test.txt'); // suggestedFilename(): 다운로드 될 파일의 이름
});

test('키보드 입력 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    const input = page.getByPlaceholder('이름');

    await input.fill('김소연'); // 문자열 입력

    await input.press('Enter'); // 키보드의 특정 키를 누르는 동작. 대상 요소가 동작할 수 있을 때까지 기다려줌

    console.log('Enter 입력 완료');
});

test('키보드 입력 및 삭제 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    const input = page.getByPlaceholder('이름');

    await input.fill('김소연');

    await input.press('End'); // 커서 맨 뒤로
    await input.press('Backspace'); // 마지막 글자 삭제

    await expect(input).toHaveValue('김소'); // 최종 값이 김소와 같은지 검증
});

test('page.keyboard 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    const input = page.getByPlaceholder('이름');

    await input.fill('김소연');
    await input.focus(); // 현재 포커스된 요소에

    await page.keyboard.press('End'); // 키 누름
    await page.keyboard.press('Backspace');

    await expect(input).toHaveValue('김소'); 
});

test('마우스 드래그 테스트', async({ page }) => {
    await page.goto(`http://localhost:3000/test.html`);

    const source = page.locator('#drag-source');
    const target = page.locator('#drop-target');

    const sourceBox = await source.boundingBox(); // boundingbox: 요소의 화면상 위치와 크기를 가져옴
    const targetBox = await target.boundingBox();

    if(!sourceBox || !targetBox) {
        throw new Error('요소의 위치를 찾을 수 없습니다.');
    }

    await page.mouse.move( // 특정 좌표로 이동
        sourceBox.x + sourceBox.width / 2,
        sourceBox.y + sourceBox.height / 2
    );

    await page.mouse.down(); // 마우스 누른다

    await page.mouse.move(
        targetBox.x + targetBox.width/2,
        targetBox.y + targetBox.height/2,
    )

    await page.mouse.up(); // 마우스 뗀다
});

// test('스크린샷 테스트', async({ page }) => {
//     await page.goto(`http://localhost:3000/test.html`);

//     await page.screenshot({
//         path: 'test-screenshot.png'
//         // path: 'tests/test-screenshot.png' // 폴더 지정
//     })
// });

// test('특정 요소만 스크린샷 테스트', async({ page }) => {
//     await page.goto(`http://localhost:3000/test.html`);

//     await page.locator('#country').screenshot({
//         path: 'test-locator-screenshot.png'
//     })
// });

// test('실패 시 스크린샷 테스트', async({ page }) => {
//     await page.goto(`http://localhost:3000/test.html`);

//     await expect(page).toHaveTitle('틀린 제목');
// });

// test('Trace 테스트', async({ page }) => {
//     await page.goto(`http://localhost:3000/test.html`);

//     await page.getByPlaceholder('이름').fill('김소연');

//     await expect(page).toHaveTitle('틀린 제목');
// });