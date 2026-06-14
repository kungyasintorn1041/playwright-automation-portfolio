import { test, expect } from '@playwright/test';

test('อัปโหลดไฟล์สำเร็จ', async ({ page }) => {
  // เปิดเว็บที่มี file upload
  await page.goto('https://the-internet.herokuapp.com/upload');

  // อัปโหลดไฟล์ — ระบุ path ของไฟล์ที่จะอัปโหลด
  await page.setInputFiles('#file-upload', {
    name: 'test-file.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('Hello from Playwright!')
  });

  // กดปุ่ม Upload
  await page.click('#file-submit');

  // ตรวจสอบว่าอัปโหลดสำเร็จ
  await expect(page.locator('#uploaded-files')).toHaveText('test-file.txt');
});