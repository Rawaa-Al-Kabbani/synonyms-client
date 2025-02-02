import { expect, test } from '@playwright/test';

test('it should redirect to home page if the URL does not exist', async ({ page }) => {
  await page.goto('/anything');

  await expect(page.getByTestId('synonym-section')).toBeVisible();
});

test('it should display the list of the search results, and navigate to the first result', async ({
  page,
}) => {
  await page.goto('/');

  await expect(page.getByTestId('search_input')).toBeEmpty();

  await page.getByTestId('search_input').pressSequentially('welcome');

  expect(await page.getByTestId('search_input').inputValue()).toEqual('welcome');

  await page.getByTestId('search_input').click();

  await page.waitForTimeout(1000);

  expect(await page.getByTestId('search_result_item').count()).toBeGreaterThan(0);

  expect(await page.getByTestId('search_result_item').first().click());

  await page.waitForTimeout(1000);

  expect(page.url()).toContain('synonyms/');
});
