// const { playAudit } = require('playwright-lighthouse');
// import { test } from '@playwright/test';
// const playwright = require('playwright');

// test.describe('audit example', () => {
//   test('open browser', async () => {
//     const browser = await playwright['chromium'].launch({
//       args: ['--remote-debugging-port=9222'],
//     });
//     const page = await browser.newPage();
//     await page.goto('/');

//     await playAudit({
//         page: page,
//         thresholds: {
//           performance: 50,
//           accessibility: 50,
//           'best-practices': 50,
//           seo: 50,
//           pwa: 50,
//         },
//         port: 9222,
//       });

//     await browser.close();
//   });
// });