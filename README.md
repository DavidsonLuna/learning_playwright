Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test src/tests/example.spec.ts
  npx playwright test src/tests/search.spec.ts   
    Runs the tests of a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

We suggest that you begin by typing:

  cd learning_playwright
  npx playwright test

To open last HTML report run:
  npx playwright show-report

And check out the following files:
  - ./learning_playwright/tests/example.spec.ts - Example end-to-end test
  - ./learning_playwright/playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭