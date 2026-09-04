import { test, expect } from '@playwright/test';

test.describe('탭 기능 테스트', () => {
    test.beforeAll(async() => {
        console.log('탭 기능 테스트 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000/test.html');
    });

    test('새 탭 열기 테스트', async({ page }) => {
        const newPagePromise = page.waitForEvent('popup');
        
        await page.getByRole('link', {name: '구글 새 탭'}).click();

        const newPage = await newPagePromise;

        await expect(newPage).toHaveURL(/google/);
    });

    test('Browsercontext의 페이지 확인 테스트', async({ page }) => {
        const context = page.context();
        const newPagePromise = page.waitForEvent('popup');

        await page.getByRole('link', {name: '구글 새 탭'}).click();

        await newPagePromise;

        const pages = context.pages();

        expect(
            pages.length
        ).toBe(2);
    });

    test.afterAll(async() => {
        console.log('탭 기능 테스트 종료');
    });
});