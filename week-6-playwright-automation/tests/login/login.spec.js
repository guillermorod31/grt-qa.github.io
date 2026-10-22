import { test, expect } from "@playwright/test";
import { link } from "fs";

test.describe("Login", () => {
  test("Verify login with valid credentials", async ({ page }) => {
    
    await page.goto("/");

    await page.getByRole("link", { name: "Login" }).click();
    // await page.locator('[href="/auth/login"]').click();

    await page.getByLabel('Email address').fill('admin@gmail.com');
    await page.getByLabel('Password').fill('DontTestMe');
    await page.getByRole("button", { name: "Login" }).click();
    // await page.locator('[type="submit"]').click();

    await expect(page.locator('h6.MuiTypography-subtitle2')).toHaveText('Admin Adminuk');
    await expect(page.locator('a p.MuiTypography-body2')).toHaveText('role: admin');

    // await expect(page.getByText('Admin Adminuk')).toBeVisible();
    // await expect(page.getByText('role: admin')).toBeVisible();
  });

  test("Verify logout from the account", async ({ page }) => {
    
    await page.goto("/");

    await page.getByRole("link", { name: "Login" }).click();
    await page.getByLabel('Email address').fill('admin@gmail.com');
    await page.getByLabel('Password').fill('DontTestMe');
    await page.getByRole("button", { name: "Login" }).click();
    await page.locator('button div.css-inlwhr').click();
    await page.getByRole("menuitem", {name: "Logout"}).click();

    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });

});
