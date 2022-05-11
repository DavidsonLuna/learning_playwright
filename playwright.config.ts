//playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://www.lopes.com.br/',
    browserName: 'chromium',
    headless: false,
  },
    reporter: [['html', {open: true, file: './reports/report.html'}]],

};
export default config;