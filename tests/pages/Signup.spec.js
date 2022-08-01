// @ts-check
// @ts-ignore
const { test, expect, request } = require("@playwright/test");
test.describe.configure({ mode: "serial" });
const { default: Signup } = require("../../src/pages/Signup/Signup");
/** @type {import('@playwright/test').Page} */
let page;
test.describe("should be render SignupPage", async({mount}) => {
  await mount(Signup)
  test.beforeEach(async ({ browser }) => {
    test.use({ viewport: { width: 1476, height: 256 } }); //notebook standard
    test.use({ viewport: { width: 820, height: 1180 } }); //ipad air
    test.use({ viewport: { width: 707, height: 247 } }); //pixel5
    test.use({ viewport: { width: 412, height: 915 } }); //s20
    page = await browser.newPage();
    await page.goto("https://thedojo-6c8c2.web.app/signup");
    await page.locator("text=Login");
    await page.locator('input[name="email"]').fill("email");
    await page.locator('input[name="password"]').fill("password");
    await page.locator("text= Signup").click();
  });
  //
  // test input form
  test("check text in login page", async ({ page }) => {
    await page.goto("https://thedojo-6c8c2.web.app/signup");
    const title = await page.innerText(".title1");
    const email = await page.innerText(".mail");
    const pass = await page.innerText(".pass");
    const btn = await page.innerText(".btn");
    await expect(title).toBe("Login");
    await expect(email).toBe("Password: ");
    await expect(pass).toBe("Email: ");
    await expect(btn).toBe("Signup");
  });
  // @ts-ignore
  test("post to input form", async ({ page }) => {
    const reqData = await request.newContext();
    await reqData.post("https://thedojo-6c8c2.web.app/signup", {
      form: {
        // @ts-ignore
        user: {
          email: "hello1@gmail.com",
          pasword: "helloTest",
        },
        // @ts-ignore
        user1: {
          email: "hello1@gmail.com",
          pasword: "helloTest",
        },
        // @ts-ignore
        user2: {
          email: "hello1@gmail.com",
          pasword: "helloTest",
        },
        // @ts-ignore
        user3: {
          email: "hello1@gmail.com",
          pasword: "helloTest",
        },
        // @ts-ignore
        user4: {
          email: "hello1@gmail.com",
          pasword: "helloTest",
        },
        // @ts-ignore
        user5: {
          email: "hello1@gmail.com",
          pasword: "helloTest",
        },
      },
    });
  });

  //close after post data to form
  test.afterEach(async () => {
    await page.close();
  });
});
