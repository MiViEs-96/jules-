import { test, expect } from '@playwright/test';

test('verify home philosophy section transparency and text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);

  // Screenshot della Home per verificare la trasparenza dello sfondo verde
  await page.screenshot({ path: 'tests/home_philosophy.png' });
});

test('verify products grid layout', async ({ page }) => {
  // Desktop view (2 columns)
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000/products');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'tests/products_desktop.png' });

  // Mobile view (1 column)
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000/products');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'tests/products_mobile.png' });
});
