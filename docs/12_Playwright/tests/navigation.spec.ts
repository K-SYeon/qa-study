import { test, expect } from '@playwright/test';

test.describe('페이지 이동 테스트', () => {
    test.beforeAll(async() => {
        console.log('페이지 이동 테스트 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000/test.html');
    });

    test('뒤로 가기 테스트', async({ page }) => {
        await page.goto('http://localhost:3000/iframe-test.html');
        await page.goBack();

        await expect(page).toHaveURL(/test\.html/);
    });

    test('앞으로 가기 테스트', async({ page }) => {
        await page.goto('http://localhost:3000/iframe-test.html');
        await page.goBack();
        await page.goForward();

        await expect(page).toHaveURL(/iframe-test\.html/);
    });

    test('새로고침 테스트', async({ page }) => {
        await page.reload();

        await expect(page).toHaveURL(/localhost/);
    });

    test.afterAll(async () => {
        console.log('페이지 이동 테스트 종료');
    });
});