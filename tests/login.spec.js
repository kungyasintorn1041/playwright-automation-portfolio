import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('login สำเร็จ', async ({ page }) => {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('เพิ่มสินค้าลง cart', async ({ page }) => {
  await page.click('#add-to-cart-sauce-labs-backpack');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('login ผิด — ต้องแสดง error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'wrongpassword');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});