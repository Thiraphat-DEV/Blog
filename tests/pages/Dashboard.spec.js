const { test, expect, request } = require("@playwright/experimental-ct-react");
const { default: Dashboard } = require("../../src/pages/Dashboard/Dashboard");

test.describe("should be render text in Create page", () => {
  test("render text in title text", async ({ page, mount }) => {
    const component = await mount(Dashboard);
    //go to page
    await page.goto("https://thedojo-6c8c2.web.app");
    // create user
    const user = await request.newContext();
    // login
    await user.post("https://thedojo-6c8c2.web.app", {
      form: {
        email: "thiraboaty@gmail.com",
        password: "test123",
      },
    });
    //go to create page
    await page.goto("https://thedojo-6c8c2.web.app");
    const title = await page.innerText(".page-title");
    expect(title).toBe("DashBoardProject");
    expect(component).toHaveText("DashBoardProject");
  });
});
