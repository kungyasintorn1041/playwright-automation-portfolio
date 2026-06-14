import { test, expect } from '@playwright/test';

test('จัดการ Alert popup', async ({ page }) => {
  // เปิดเว็บตัวอย่างที่มี Alert
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // รอรับ Alert ก่อนกดปุ่ม
  page.on('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    await dialog.accept(); // กด OK
  });

  // กดปุ่มที่จะเปิด Alert
  await page.click('button[onclick="jsAlert()"]');

  // ตรวจสอบว่ามีข้อความยืนยันขึ้นมา
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

test('จัดการ Confirm popup — กด OK', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async (dialog) => {
    console.log('Confirm message:', dialog.message());
    await dialog.accept(); // กด OK
  });

  await page.click('button[onclick="jsConfirm()"]');

  await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});

test('จัดการ Confirm popup — กด Cancel', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async (dialog) => {
    await dialog.dismiss(); // กด Cancel
  });

  await page.click('button[onclick="jsConfirm()"]');

  await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});