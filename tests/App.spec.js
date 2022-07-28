// @ts-check
const { test, expect } = require("@playwright/test");
test.describe("render component App", () => {
  test.use({ viewport: { width: 820, height: 1180 } });
  test("render component App", async ({ page }) => {
    await page.goto("https://thedojo-6c8c2.web.app");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/The Boaty/);
  });
});
