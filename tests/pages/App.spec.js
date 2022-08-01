// @ts-check
const { test, expect } = require("@playwright/experimental-ct-react");
const {default: App} = require('../../src/App')
test.describe("render component App", async({mount}) => {
  await mount(App)
  test.use({ viewport: { width: 820, height: 1180 } });
  test("Check text in component App", async ({ page }) => {
    await page.goto("https://thedojo-6c8c2.web.app");
    // Expect a title "to contain" a substring.
    await expect(page.locator("text=The Boaty")).not.toBeNull();
    await expect(page.locator("text=Signup")).not.toBeNull();
    await expect(page.locator("text=Login")).not.toBeNull();
  });
});
