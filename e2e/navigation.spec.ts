import { test, expect } from '@playwright/test'

test('homepage loads and renders the navbar logo', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByAltText('Nyati Cement Logo')).toBeVisible()
})

test('navbar links navigate to the correct pages', async ({ page }) => {
  await page.goto('/')

  await page.locator('a[href="/products"]').first().click()
  await expect(page).toHaveURL(/\/products$/)

  await page.goto('/')
  await page.locator('a[href="/contact"]').first().click()
  await expect(page).toHaveURL(/\/contact$/)
})

test('footer renders on the homepage', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('footer')).toBeVisible()
})
