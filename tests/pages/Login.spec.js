const { test, expect } = require("@playwright/test");

test.describe(async ({ page }) => {
  test.use({ viewport: { width: 1476, height: 256} }); //notebook standard 
  test.use({ viewport: { width: 820, height: 1180 } }); //ipad air
  test.use({ viewport: { width: 707 , height: 247} }); //pixel5
  test.use({ viewport: { width: 412, height: 915} }); //s20
  await page.goto("https://thedojo-6c8c2.web.app/login");
  await expect(page.locator("text=Login")).toBeTruthy();
  await expect(page.locator('input[name="email"]').fill("test@gmail.com")).not.toBeNull()
  await expect(page.locator('input[name="password"]').fill("hello123")).not.toBeNull();
  await expect(page.locator(".btn").click()).toBe('Login')

});

