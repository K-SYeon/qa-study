const { test, expect } = require('@playwright/test');

test('메인 페이지가 정상적으로 열리는지 테스트', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // 페이지 제목 확인
    await expect(page).toHaveTitle(/.+/);

    // 상단 메뉴 확인
    await expect(page.getByRole('link', { name: 'yeonyforum'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'list' })).toBeVisible();
    await expect(page.getByRole('button', { name: '로그인' })).toBeVisible();
    await expect(page.getByRole('link', { name: '회원가입' })).toBeVisible();

    // 메인 안내 문구 확인
    const info = page.locator('.info');

    await expect(info).toContainText('안녕하세요. yeonyforum 입니다.');
    await expect(info).toContainText('이 곳은 자유롭게 글을 나누는 작은 소통공간입니다.');
    await expect(info).toContainText('상단의 List 메뉴를 눌러주세요.');
});

test('List 메뉴 이동 테스트', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // List 메뉴 이동
    await page.getByRole('link', { name: 'list'}).click();

    // 링크 확인
    await expect(page).toHaveURL('http://localhost:3000/list');

    // 링크 내 문구 확인
    await expect(page.getByText('사과의 효능')).toBeVisible();
});

test.describe('로그인 테스트', () => {
    test.beforeAll(async() => {
        console.log('로그인 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000');
        await page.getByRole('button', { name: '로그인'}).click();
    });

    test('로그인 페이지가 정상적으로 열리는지 테스트', async ({ page }) => {
        // 로그인 페이지 UI 확인
        await expect(page.locator('#input-id-for-credentials-provider')).toBeVisible();
        await expect(page.locator('#input-password-for-credentials-provider')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Sign in with credentials'})).toBeVisible();
    });
    
    test('로그인이 정상적으로 진행되는지 테스트', async ({ page }) => {
        // 아이디, 비밀번호 입력 후 로그인 시도
        await page.locator('#input-id-for-credentials-provider').fill('test02');
        await page.locator('#input-password-for-credentials-provider').fill('testpw');
        await page.getByRole('button', { name: 'Sign in with credentials'}).click();
    
        // 로그인 성공 후 아이디+'님' 정상적으로 뜨는지 확인
        await expect(page.locator('.navbar')).toContainText('test02 님');
    });
    
    test('로그인 실패인 경우 에러 메시지 테스트', async({ page }) => {
        // 아이디, 비밀번호 입력 후 로그인 시도
        await page.locator('#input-id-for-credentials-provider').fill('test02');
        await page.locator('#input-password-for-credentials-provider').fill('wrongpw');
        await page.getByRole('button', { name: 'Sign in with credentials'}).click();
    
        // 로그인 실패 후 에러 메시지 뜨는지 확인
        await expect(page.locator('.error')).toContainText('Sign in failed. Check the details you provided are correct.');
    });

    test.afterAll(async() => {
        console.log('로그인 테스트 종료');
    });
});

test.describe('회원가입 테스트', () => {
    test.beforeAll(async() => {
        console.log('회원가입 테스트 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000');
        await page.getByRole('link', { name: '회원가입'}).click();
    });
    
    test('회원가입 페이지가 정상적으로 열리는지 테스트', async({ page }) => {
        // 회원가입 페이지 UI 확인
        await expect(page.getByPlaceholder('아이디')).toBeVisible();
        await expect(page.getByPlaceholder('비밀번호')).toBeVisible();
        await expect(page.getByRole('button', { name: '생성'})).toBeVisible();
    });
    
    test('회원가입이 정상적으로 진행되는지 테스트', async({page}) => {
        // 아이디, 비밀번호 입력 후 회원가입 시도
        await page.getByPlaceholder('아이디').fill('qa_duplicate01');
        await page.getByPlaceholder('비밀번호').fill('qa01');
        await page.getByRole('button', { name: '생성'}).click();
    
        // 회원가입 성공 후 아이디+'님' 정상적으로 뜨는지 확인
        await expect(page.locator('.navbar')).toContainText('qa_duplicate01 님');
    });
    
    test('중복 아이디 가입 버그 재현 테스트', async({ page }) => {
        // 이미 존재하는 아이디로 회원가입 시도
        await page.getByPlaceholder('아이디').fill('qa_duplicate01');
        await page.getByPlaceholder('비밀번호').fill('qa01');
        await page.getByRole('button', { name: '생성'}).click();
    
        // 메인 페이지로 이동하지 않아야 함(중복 아이디 가입이 진행되지 않아야 함)
        // 비정상 결과 확인 용도
        await page.waitForURL('http://localhost:3000/');
    
        await expect(page.getByText('qa_duplicate01 님')).toBeVisible();
        await expect(page.getByRole('button', { name: '로그아웃' })).toBeVisible();
    
        // 회원가입 페이지에 머물러야 정상인데 sign이나 메인 홈페이지나 passed로 나옴
        // expect(page.url()).toBe('http://localhost:3000/sign');
    });
    
    test("아이디, 비밀번호 미입력 테스트", async({ page }) => {
        // 알럿이 발생할 때까지 기다리기
        const dialogPromise = page.waitForEvent('dialog');
    
        await page.getByRole('button', { name: '생성'}).click();
    
        const dialog = await dialogPromise;
    
        // 알럿 메시지 확인
        expect(dialog.message()).toBe('아이디 또는 비밀번호를 입력하세요.');
        
        // 알럿 닫기
        await dialog.accept();
    });
    
    test("아이디만 미입력 테스트", async({ page }) => {
        // 알럿이 발생할 때까지 기다리기
        const dialogPromise = page.waitForEvent('dialog');
    
        await page.getByPlaceholder('비밀번호').fill('testpw');
        await page.getByRole('button', { name: '생성'}).click();
    
        const dialog = await dialogPromise;
    
        // 알럿 메시지 확인
        expect(dialog.message()).toBe('아이디 또는 비밀번호를 입력하세요.');
        
        // 알럿 닫기
        await dialog.accept();
    });
    
    test("비밀번호만 미입력 테스트", async({ page }) => {
        // 알럿이 발생할 때까지 기다리기
        const dialogPromise = page.waitForEvent('dialog');
    
        await page.getByPlaceholder('아이디').fill('test02');
        await page.getByRole('button', { name: '생성'}).click();
    
        const dialog = await dialogPromise;
    
        // 알럿 메시지 확인
        expect(dialog.message()).toBe('아이디 또는 비밀번호를 입력하세요.');
        
        // 알럿 닫기
        await dialog.accept();
    });

    test.afterAll(async() => {
        console.log('회원가입 테스트 종료');
    });
});

// 미검증
// test("로그아웃 테스트", async({ page }) => {
//     await page.getByRole('button', { name: '로그인'}).click();

//     // 아이디, 비밀번호 입력 후 정상적인 로그인
//     await page.locator('#input-id-for-credentials-provider').fill('test02');
//     await page.locator('#input-password-for-credentials-provider').fill('testpw');
//     await page.getByRole('button', { name: 'Sign in with credentials'}).click();

//     await page.getByRole('button', { name: '로그아웃' }).click();

//     // 회원가입 버튼이 있는지 여부로 로그아웃 확인
//     await expect(page.getByRole('link', { name: '회원가입' })).toBeVisible();
// });

test.describe('게시글 테스트', () => {
    test.beforeAll(async() => {
        console.log('게시글 테스트 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000');
        await page.getByRole('button', { name: '로그인'}).click();

        // 아이디, 비밀번호 입력 후 정상적인 로그인
        await page.locator('#input-id-for-credentials-provider').fill('test02');
        await page.locator('#input-password-for-credentials-provider').fill('testpw');
        await page.getByRole('button', { name: 'Sign in with credentials'}).click();

        await page.getByRole('link', { name: 'List'}).click();

        await expect(page.locator('.list-item').first()).toBeVisible({
            timeout: 10000
        });
    });
    
    test("게시글 작성 테스트", async({ page }) => {
        await page.getByRole('link', { name: '새 글쓰기'}).click();
    
        await page.getByPlaceholder('글제목').fill('Playwright 테스트 글');
        await page.getByPlaceholder('내용').fill('Playwright을 이용한 게시글 작성 테스트입니다.');
    
        await page.getByRole('button', { name: '글 등록'}).click();
    
        await expect(page).toHaveURL('http://localhost:3000/list');
        await expect(page.getByText('Playwright 테스트 글')).toBeVisible();
    });
    
    test("게시글 조회 테스트", async({ page }) => {
        await page.getByRole('heading', {name: 'Playwright 테스트 글'}).click();

        await expect(page).toHaveURL(/\/detail\/[a-f0-9]+$/);

        await expect(page.getByRole('heading', {name: 'Playwright 테스트 글'})).toBeVisible();
        await expect(page.getByText('Playwright을 이용한 게시글 작성 테스트입니다.')).toBeVisible();
    });
    
    test("게시글 수정 테스트", async({ page }) => {
        const post = page.locator('.list-item').filter({ hasText: 'Playwright 테스트 글'});

        await post.locator('.edit_item').click();
    
        await page.locator('input[name="title"]').fill('Playwright 테스트 수정글');
        await page.locator('input[name="content"]').fill('Playwright 테스트 수정글의 내용입니다.');
    
        await page.getByRole('button', {name: '전송'}).click();
    
        await expect(page.getByRole('heading', {name: 'Playwright 테스트 수정글'})).toBeVisible();
    });

    test("게시글 삭제 테스트", async({ page }) => {
        const post = page.locator('.list-item').filter({ hasText: 'Playwright 테스트 수정글'});
        
        await post.locator('.delete_item').click();

        await page.reload();
    
        // await expect(post).toHaveCount(0);
        await expect(
            page.locator('.list-item').filter({
                hasText: 'Playwright 테스트 수정글'
            })
        ).toHaveCount(0);
    });

    test.afterAll(async() => {
        console.log('게시글 테스트 종료');
    });
});

test.describe('댓글 테스트', () => {
    test.beforeAll(async() => {
        console.log('댓글 테스트 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000');
        await page.getByRole('button', { name: '로그인'}).click();

        // 아이디, 비밀번호 입력 후 정상적인 로그인
        await page.locator('#input-id-for-credentials-provider').fill('test02');
        await page.locator('#input-password-for-credentials-provider').fill('testpw');
        await page.getByRole('button', { name: 'Sign in with credentials'}).click();

        await page.getByRole('link', { name: 'List'}).click();

        await expect(page.locator('.list-item').first()).toBeVisible({
            timeout: 10000
        });

        await page.locator('.list-item').filter({ hasText: '사과의 효능' }).getByRole('link').first().click();
        
        await expect(page).toHaveURL(/\/detail\/[a-f0-9]+$/);
        
        await expect(page.locator('.detail_box')).toBeVisible({
            timeout: 10000
        });
    });

    test("댓글 작성 및 정상 업로드 테스트", async({ page }) => {
        await page.locator('.detail_box input').fill('Playwright 댓글 테스트');
        await page.locator('.detail_box button').click();

        await expect(page.locator('.detail_box')).toContainText('Playwright 댓글 테스트')
    });

    test("빈 댓글 입력 검증", async({ page }) => {
        await expect(page.locator('.detail_box .comment').first()).toBeVisible({
            timeout: 10000
        });

        const comment = await page.locator('.detail_box .comment').count();

        await page.locator('.detail_box button').click();

        await expect(page.locator('.detail_box .comment')).toHaveCount(comment);
    });

    test("댓글 좋아요 버튼 동작 테스트", async({ page }) => {
        const commentlike = page.locator('.comment').filter({hasText: 'Playwright 댓글 테스트'}).locator('.like');
        const beforelike = Number((await commentlike.innerText()).replace(/[^0-9]/g, ''));
        
        const responsePromise = page.waitForResponse(response =>
            response.url().includes('/api/comment/like')
        );
        
        await commentlike.click();

        await responsePromise;

        await expect(async() => {
            const afterlike = Number((await commentlike.innerText()).replace(/[^0-9]/g, ''));
            expect(afterlike).toBe(beforelike + 1);
        }).toPass();
    });
    
    test.afterAll(async() => {
        console.log('댓글 테스트 종료');
    });
});