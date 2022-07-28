const {test, expect} = require('@playwright/test')
test.describe("go to page signup", async ({ page }) => {
  test.use({ viewport: { width: 820, height: 1180 } });
  await page.goto("https://thedojo-6c8c2.web.app/signup");
  await page.click("Signup");
  await expect(page).not.toBeNull();
  await expect(page).toHaveTitle("Signup");
});
