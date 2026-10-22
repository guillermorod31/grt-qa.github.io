import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/HomePage";
import LoginPage from "../../page_objects/LoginPage";
import DashBoardPage from "../../page_objects/DashBoardPage";

test.describe("Login", () => {
  test("Verify login with valid credentials", async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const dashboard = new DashBoardPage(page);

    await page.goto("/");

    await home.clickLoginLink();
    await login.login("admin@gmail.com", "DontTestMe");

    await expect(dashboard.userFullName).toHaveText("Admin Adminuk");
    await expect(dashboard.userRole).toHaveText("role: admin");
  });

  test("Verify logout from the account", async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const dashboard = new DashBoardPage(page);

    await page.goto("/");

    await home.clickLoginLink();
    await login.login("admin@gmail.com", "DontTestMe");
    await dashboard.clickLogoutLink();

    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });
});
