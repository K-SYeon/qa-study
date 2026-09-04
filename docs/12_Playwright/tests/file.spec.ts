import { test, expect } from '@playwright/test';

test.describe('file 기능 테스트', () => {
    test.beforeAll(async() => {
        console.log('파일 기능 테스트 시작');
    });

    test.beforeEach(async({ page }) => {
        await page.goto('http://localhost:3000/test.html');
    });

    test('파일 업로드', async({ page }) => {
        const fileInput = page.locator('#file');

        await fileInput.setInputFiles('tests/test.txt');
    
        const file = await fileInput.inputValue();

        expect(file).toContain('test.txt');
    });

    test('파일 다운로드', async({ page }) => {
        const downloadPromise = page.waitForEvent('download');

        await page.locator('#download').click();

        const download = await downloadPromise;

        expect(download.suggestedFilename()).toBe('test.txt');
    });

    test.afterAll(async() => {
         console.log('파일 기능 테스트 종료');
    });
});