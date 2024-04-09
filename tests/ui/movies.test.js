const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    // await page.goto('http://localhost:8080/movies');
    await page.goto('https://movies-ci-cd-piplene.onrender.com/movies');
  
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  