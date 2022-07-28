// @ts-check
const { test, expect } = require('@playwright/test');

test('go to page Login', async ({ page }) => {
  await page.goto('https://thedojo-6c8c2.web.app/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Boaty/);
});


