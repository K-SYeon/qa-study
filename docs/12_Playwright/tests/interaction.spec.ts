import { test, expect } from '@playwright/test';

test.describe('interaction 기능 테스트', () => {
    test.beforeAll(async() => {
        console.log('interaction 기능 테스트 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000/test.html');
    });

    test('키보드 입력 및 삭제', async({ page }) => {
        const input = page.getByPlaceholder('이름');

        await input.fill('김소연');

        await input.press('End');
        await input.press('Backspace');

        await expect(input).toHaveValue('김소');
    });

    test('page.keyboard', async({ page }) => {
        const input = page.getByPlaceholder('이름');

        await input.fill('김소연');
        await input.focus();

        await page.keyboard.press('End');
        await page.keyboard.press('Backspace');

        await expect(input).toHaveValue('김소');
    });

    test('마우스 드래그', async({ page }) => {
        const source = page.locator('#drag-source');
        const target = page.locator('#drop-target');

        const sourceBox = await source.boundingBox();
        const targetBox = await target.boundingBox();

        if(!sourceBox || !targetBox) {
            throw new Error('요소의 위치를 찾을 수 없습니다.');
        }

        await page.mouse.move(
            sourceBox.x + sourceBox.width / 2,
            sourceBox.y + sourceBox.height / 2,
        )

        await page.mouse.down();

        await page.mouse.move(
            targetBox.x + targetBox.width / 2,
            targetBox.y + targetBox.height / 2,
        )

        await page.mouse.up();
    });

    test.afterAll(async() => {
        console.log('interaction 기능 테스트 종료');
    });
});