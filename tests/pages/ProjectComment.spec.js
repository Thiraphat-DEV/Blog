const {
  default: ProjectComment,
} = require("../../src/pages/ProjectComment/ProjectComment");
const { test, expect } = require("@playwright/test");

test.describe("should be render ProjectComment", () => {
  test("check text in comment", async ({ page, mount }) => {
    const renderComponent = await mount(ProjectComment);
    const title = await page.locator(".h4");
    expect(renderComponent).toBeOK();
    expect(title).toBe("Comment");
  });
  test("check author display", async ({ page }) => {
    const author = await page.locator(".comment-author");
    expect(author).not.toBeNull();
  });
  test("check comment display", async ({ page }) => {
    const comment = await page.locator(".comment-date");
    expect(comment).not.toBeNull();
  });
  test("check content display", async ({ page }) => {
    const content = await page.locator(".comment-content");
    expect(content).not.toBeNull();
  });
});
