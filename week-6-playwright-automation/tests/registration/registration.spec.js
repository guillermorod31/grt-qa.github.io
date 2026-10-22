import { test, expect } from "@playwright/test";
import { link } from "fs";

test.describe("Registration", () => {
  test("Verify user can register", async ({ page }) => {
    
    await page.goto("/");

    await page.getByRole("link", { name: "Register" }).click();
   
    await page.getByLabel('First Name').fill('TestMemo');
    await page.getByLabel('Last Name').fill('Codemify');
    await page.getByLabel('Email address').fill('testMemo@gmail.com');
    await page.getByLabel('Password').fill('T3st123@');
    await page.getByRole("button", { name: "Register" }).click();

    await expect(page.locator('h6.MuiTypography-subtitle2')).toHaveText('TestMemo Codemify');
    await expect(page.locator('a p.MuiTypography-body2')).toHaveText('role: user'); 
  });

  test("Verify user can't register with existing account", async ({ page }) => {
    
    await page.goto("/");

    await page.getByRole("link", { name: "Register" }).click();
    await page.getByLabel('First Name').fill('TestMemo');
    await page.getByLabel('Last Name').fill('Codemify');
    await page.getByLabel('Email address').fill('testMemo@gmail.com');
    await page.getByLabel('Password').fill('T3st123@');
    await page.getByRole("button", { name: "Register" }).click();

    await expect(page.getByText('Input data validation failed')).toBeVisible();  
  });

  test("Verify user can't register without filling required fields", async ({ page }) => {
    
    await page.goto("/");

    await page.getByRole("link", { name: "Register" }).click();
    await page.getByRole("button", { name: "Register" }).click();

    await expect(page.getByText('First name required')).toBeVisible();
    await expect(page.getByText('Last name required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });
});
