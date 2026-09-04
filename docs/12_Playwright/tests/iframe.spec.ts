import { test, expect } from '@playwright/test';

test.describe('iframe 기능 테스트', async() => {
    test.beforeAll(async() => {
        console.log('iframe 기능 테스트 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000/test.html');
    });

    test('iframe 안의 입력창 찾아서 입력하고 검증', async({ page }) => {
        const iframe = page.frameLocator('#iframe');

        await iframe.getByPlaceholder('검색어를 입력해 주세요.').fill('test');
        await iframe.locator('#search-btn').click();

        await expect(
            iframe.locator('#message')
        ).toHaveText('test 검색 완료');
    });

    test.afterAll(async() => {
        console.log('iframe 기능 테스트 종료');
    });
});