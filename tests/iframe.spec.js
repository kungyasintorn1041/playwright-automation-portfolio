import { test, expect } from '@playwright/test';

test('พิมพ์ข้อความใน iframe', async ({ page }) => {
  // ใช้เว็บ W3Schools ที่มี iframe ให้ทดสอบ
  await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_intro');

  // ปิด popup ถ้ามี
  await page.keyboard.press('Escape');

  // เข้าไปใน iframe ผลลัพธ์
  const iframe = page.frameLocator('#iframeResult');

  // ตรวจสอบว่า iframe มีข้อความ My First Heading
  await expect(iframe.locator('h1')).toContainText('My First Heading');
});