import { test, expect } from '@playwright/test';

test('เปิด tab ใหม่แล้วตรวจสอบ', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  // รอรับ tab ใหม่ที่จะเปิดขึ้นมา
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[href="/windows/new"]')
  ]);

  // รอให้ tab ใหม่โหลดเสร็จ
  await newPage.waitForLoadState();

  // ตรวจสอบว่า tab ใหม่มีข้อความถูกต้อง
  await expect(newPage.locator('h3')).toHaveText('New Window');

  // ตรวจสอบว่า tab เดิมยังอยู่
  await expect(page.locator('a[href="/windows/new"]')).toBeVisible();
});