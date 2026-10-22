import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/HomePage";
import LoginPage from "../../page_objects/LoginPage";
import DashBoardPage from "../../page_objects/DashBoardPage";
import userCredentials from "../../testData/userCredentials.json" assert { type: 'json' };
import UserApi from "../../api/user.api";
import { access } from "fs";

test.describe("Login", () => {
  test("Verify login with valid credentials", async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const dashboard = new DashBoardPage(page);

    await page.goto("/");

    await home.clickLoginLink();
    await login.login(
      userCredentials.admin.email,
      userCredentials.admin.password
    );

    await expect(dashboard.userFullName).toHaveText("Admin Adminuk");
    await expect(dashboard.userRole).toHaveText("role: admin");
  });

  test("Api Login!", async ({ page, request }) => {
    const dashboard = new DashBoardPage(page);
    const userApi = new UserApi(request);

    const accessToken = await userApi.login(
      userCredentials.admin.email,
      userCredentials.admin.password
    );

    await page.goto("/");
    await page.evaluate((token) => {
      localStorage.setItem("accessToken", token);
    }, accessToken);
    await page.goto("/dashboard/user/profile");

    await expect(dashboard.userFullName).toHaveText("Admin Adminuk");
  });

  test("Verify logout from the account", async ({ page, request }) => {
    const dashboard = new DashBoardPage(page);

    const userApi = new UserApi(request);

    const accessToken = await userApi.login(
      userCredentials.admin.email,
      userCredentials.admin.password
    );

    await page.goto("/");
    await page.evaluate((token) => {
      localStorage.setItem("accessToken", token);
    }, accessToken);
    await page.goto("/dashboard/user/profile");
    await dashboard.clickLogoutLink();

    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });
});
