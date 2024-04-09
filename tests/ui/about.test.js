const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  // await page.goto('http://localhost:8080/about');
  await page.goto('https://movies-ci-cd-piplene.onrender.com/about');

  const heading = await page.$('h1');
  const text = await heading.textContent();
  expect(text).toBe('About');
});
