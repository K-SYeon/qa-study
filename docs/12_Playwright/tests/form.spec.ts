import { test, expect } from '@playwright/test';

test.describe('회원 가입 테스트', () => {
    test.beforeAll(async() => {
        console.log('회원 가입 테스트 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000/test.html');
    });

    test('정상 가입 테스트', async({ page }) => {
        await page.getByPlaceholder('이름').fill('김소연');
        await page.locator('#agree').check();
        await page.locator('#country').selectOption('대한민국');
        await page.getByRole('button', {name: '제출'}).click();
    
        await expect(
            page.locator('#message')
        ).toBeVisible();
    });

    test('이름 입력 테스트', async({ page }) => {
        await page.getByPlaceholder('이름').fill('김소연');

        await expect(
            page.getByPlaceholder('이름')
        ).toHaveValue('김소연');
    });

    test('체크박스 선택 테스트', async({ page }) => {
        await page.locator('#agree').check();

        await expect(
            page.locator('#agree')
        ).toBeChecked();
    });

    test('국가 입력 테스트', async({ page }) => {
        await page.locator('#country').selectOption('kr');

        await expect(
            page.locator('#country')
        ).toHaveValue('kr');
    });

    test.afterAll(async () => {
        console.log('회원 가입 테스트 종료');
    });
});