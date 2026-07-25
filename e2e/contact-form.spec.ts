import { test, expect } from '@playwright/test'

test('contact page renders the contact form with expected fields', async ({ page }) => {
  await page.goto('/contact')

  await expect(page.locator('#firstName')).toBeVisible()
  await expect(page.locator('#lastName')).toBeVisible()
  await expect(page.locator('#email')).toBeVisible()
  await expect(page.locator('#contactNumber')).toBeVisible()
  await expect(page.locator('#query')).toBeVisible()

  await page.locator('#firstName').fill('Test')
  await page.locator('#lastName').fill('User')
  await expect(page.locator('#firstName')).toHaveValue('Test')
})
