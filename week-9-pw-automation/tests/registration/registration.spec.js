import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/HomePage";
import RegisterPage from "../../page_objects/RegisterPage";
import DashBoardPage from "../../page_objects/DashBoardPage";

const randomEmail = `memo${Date.now()}@gmail.com`;

test.describe("Registration", () => {
  test("Verify user can register", async ({ page }) => {
    const home = new HomePage(page);
    const register = new RegisterPage(page);
    const dashboard = new DashBoardPage(page);

    await page.goto("/");

    await home.clickRegisterLink();
    await register.register(
      "TestMemo",
      "Codemify",
      randomEmail,
      "T3st123@"
    );

    await expect(dashboard.userFullName).toHaveText("TestMemo Codemify");
    await expect(dashboard.userRole).toHaveText("role: user");
  });

  test("Verify user can't register with existing account", async ({ page }) => {
    const home = new HomePage(page);
    const register = new RegisterPage(page);

    await page.goto("/");

    await home.clickRegisterLink();
    await register.register(
      "TestMemo",
      "Codemify",
      randomEmail,
      "T3st123@"
    );

    await expect(page.getByText('Input data validation failed')).toBeVisible();
  });

  test("Verify user can't register without filling required fields", async ({ page }) => {
    const home = new HomePage(page);
    const register = new RegisterPage(page);

    await page.goto("/");

    await home.clickRegisterLink();
    await register.registerButton.click();

    await expect(page.getByText('First name required')).toBeVisible();
    await expect(page.getByText('Last name required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });
});
