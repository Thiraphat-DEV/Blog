const { test, expect, cleanup } = require("@playwright/test");
const {
  default: ProjectFilter,
} = require("../../src/pages/ProjectFilter/ProjectFilter");
beforeEach(cleanup());

test.describe("should be render component ProjectFilter", () => {
  test("mount to component", async ({ page, mount }) => {
    const renderApp = await mount(ProjectFilter);
    const btnFilter = await page.innerText(".active");
    expect(btnFilter).not.toBe([
      "ALL",
      "MINE",
      "DEVELOPMENT",
      "DESIGN",
      "FINANCE",
      "DEEPLEARNING",
      "MACHINELEANRING",
      "FRONTEND",
      "BACKEND",
      "FULLSTACK",
    ]);
    expect(renderApp).toBeOK();
  });
  test('should be render')
});
