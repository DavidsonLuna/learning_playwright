import { test } from "@playwright/test";
import { HomeClass } from "../pages/home.page";

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test.describe('Search', () => {
    test('Search for buy apartment', async ({ page }) => {
    let searchTest = new HomeClass(page);
    await searchTest.typeSearchText();
    await searchTest.pressBuscar();
    await searchTest.resultBuySearch();
  });
    test('Search for rent apartment', async ({ page }) => {
    let searchTest = new HomeClass(page);
    await searchTest.typeSearchText();
    await searchTest.searchRentApto();
    await searchTest.resultRentSearch();
  
    }); 
  });
