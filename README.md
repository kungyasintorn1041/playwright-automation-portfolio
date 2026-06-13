# Playwright Automation Portfolio

โปรเจกต์ทดสอบอัตโนมัติด้วย Playwright สำหรับเว็บ Sauce Demo

## เทคโนโลยีที่ใช้
- Playwright (JavaScript)
- Node.js
- Page Object Model (POM)

## Test Cases ที่ครอบคลุม
- ✅ Login สำเร็จ
- ✅ Login ผิด — ต้องแสดง error message
- ✅ เพิ่มสินค้าลง cart

## วิธีรัน

### ติดตั้ง dependencies
```bash
npm install
npx playwright install
```

### รัน test ทั้งหมด
```bash
npx playwright test
```

### รัน test พร้อมเปิด browser
```bash
npx playwright test --headed
```

### ดู Test Report
```bash
npx playwright show-report
```

## โครงสร้างโปรเจกต์
```
├── pages/
│   └── LoginPage.js      # Page Object Model
├── tests/
│   └── login.spec.js     # Test cases
└── playwright.config.js  # Configuration
```
