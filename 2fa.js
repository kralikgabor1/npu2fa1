import { test, expect } from '@playwright/test';
import {generateToken} from 'authenticator';


test('test', async ({ page }) => {
  await page.getByPlaceholder('pl.:').click();
  let otp = generateToken('RGO4BV4OODWI5RRQYIFNFMJCTHUXX2XMMU5KRRVK4WE3XYTDSPYOAWWK')
  await page.getByPlaceholder('pl.:').fill(otp);
  await page.getByRole('button', { name: 'Belépés' }).click();
});