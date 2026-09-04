import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => { // 첫번째 테스트
// has title: 테스트 이름
// page: 브라우저의 한 페이지(탭)
  await page.goto('https://playwright.dev/'); // 페이지 이동이 끝날 때까지 기다린 다음, 다음 코드를 실행

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  // expect(): 실제 결과가 우리가 예상한 결과와 같은지 검증할 때 사용
  // toHaveTitle(): 페이지의 제목에 Playwright가 포함되는지 확인
});

test('get started link', async ({ page }) => { // 두번째 테스트
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // Get started라는 이름을 가진 link를 찾아서 클릭해라.
  // getByRole(): 웹페이지에는 HTML 요소마다 역할(Role)이 있는데 조건에 맞는 역할인 요소를 찾는 것

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  // Installation이라는 이름의 heading이 화면에 보여야 한다.
});
